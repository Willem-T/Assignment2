import React, { useState, useEffect } from 'react';
import Styles from '../styles/gameStyle.js';
import {Text, View, Button, Pressable, Image, ImageBackground} from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';


export default function Page(){
    //difficulty passed logic
    const params = useLocalSearchParams();
    const {difficulty} = params;
    //console.log(difficulty)

    const [score, setScore] = useState(0);
    const [life, setLife ] = useState(3);
    const [ mole, setMole ] = useState(Array(9).fill(false));
        // Run the random timer when the component mounts
        useEffect(() => {
            runRandomTimer(difficulty);//should spawn based off the diff param
        }, []);

    //handle the onPress event
    const handlePress = (index) => {
        //mole is there
        if(mole[index]){
            setScore(f => f +1);
            //find the mole
            const specificMole = [...mole];
            //deal with the mole
            specificMole[index] = false;
            setMole(specificMole);
        }
        //bros gone
        else{
            //needs some logic for 0
            setLife(f => f -1);
            if(life < 1){
                //go to gameEnd.js
                
            }
        }
    }

    //mole timers
    function runRandomTimer(param) {
      for(i = 0; i < param; i++){

        //needs a check for already set timers
      const randomIndex = Math.floor(Math.random() * mole.length);
          setTimeout(() => {
              setMole(mole => {
                  const newMole = [...mole];
                  newMole[randomIndex] = true;
                  return newMole;
              });

              // Set a timeout to make the mole disappear after a certain time
              setTimeout(() => {
                  setMole(mole => {
                      const newMole = [...mole];
                      newMole[randomIndex] = false;
                      runRandomTimer(1);//THIS NEEDS TO BE 1 DONT FUCK WITH IT OR ITLL BREAK THE APP
                      return newMole;
                  });
              }, 3000 - (difficulty * 0.1) - (score * 0.1)); //scuffed way of doing difficulty but it works
          }, Math.floor(Math.random() * 2000) + 1000 - (difficulty * 0.1) - (score * 0.1)); // Random delay for each mole
  }
}

// should prolly move this to a saparate file
// Check lives
if(life > 0){
    return (
        <ImageBackground
        source={require('../images/background.png')}
        style={Styles.backgroundImage}
        >
        <View style={Styles.container}>
            {/* Score */}
            <Text style={Styles.score}>Score: {score}</Text>
            <Text style={Styles.score}>Life: {life}</Text>
 
            <View style={Styles.buttonRow}>
            {mole.map((mole, index) => (
          <Pressable
            key={index}
            style={Styles.hole}
            onPress={() => handlePress(index)}
          >
            <Image
            source={mole ? require('../images/mole.png') : require('../images/noMole.png')}
            style={Styles.moleImage}
            />
          </Pressable>))}
            </View>
            {/* Linked Buttons */}
            <View style={Styles.backButton} >
            <Link href={{
                pathname: "/",
                params: {},//maybe do a scoreboard?
                }} asChild>
            <Button
            title='Main Menu'/>
            </Link>
            </View>

            

        </View>
        </ImageBackground>
    )
  }
  else {
    const params = useLocalSearchParams();
    const {name} = params;

    const leaderboardData = [
        { name: name, score: score },
        { name: 'Player 2', score: 800 },
        { name: 'Player 3', score: 600 },
        { name: 'Player 4', score: 400 },
        { name: 'Player 5', score: 200 },
      ];

    return (
      <ImageBackground
      source={require('../images/background.png')}
      style={Styles.backgroundImage}
      >
      <View style={Styles.container}>
          {/* Score */}
          <Text style={Styles.score}>Score: {score}</Text>

          <Text style={Styles.endText}>Game Over</Text>

                {/* Leaderboard */}
                <View style={Styles.leaderboardContainer}>
                    <Text style={Styles.leaderboardTitle}>Leaderboard</Text>
                    {leaderboardData.map((entry, index) => (
                        <Text key={index} style={Styles.leaderboardEntry}>
                            {entry.name}: {entry.score}
                        </Text>
                    ))}
                </View>

          {/* Linked Buttons */}
          <View style={Styles.backButton} >
          <Link href={{
              pathname: "/",
              params: {},
              }} asChild>
          <Button
          title='Main Menu'/>
          </Link>
          </View>

      </View>
      </ImageBackground>
  )
  }
}

