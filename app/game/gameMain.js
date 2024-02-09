import React, { useState, useEffect } from 'react';
import Styles from '../styles/gameStyle.js';
import {Text, View, Button, Pressable, Image} from 'react-native';
import { Link, } from 'expo-router';


export default function Page(){
    const [score, setScore] = useState(0);
    const [life, setLife ] = useState(3);
    const [ mole, setMole ] = useState(Array(9).fill(false));
    //const [timerActive, setTimerActive] = useState(0);
        // Run the random timer when the component mounts
        useEffect(() => {
            runRandomTimer(2);//stub could use this as part of the difficulty
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

    function runRandomTimer(param) {
      for(i = 0; i < param; i++){

        //needs a check for already set timers
      const randomIndex = Math.floor(Math.random() * mole.length);
          // Generate a random timer for each mole
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
                      runRandomTimer(1);//THIS NEEDS TO BE 1
                      return newMole;
                  });
              }, 3000); // This can be adjusted as per your requirement
          }, Math.floor(Math.random() * 2000) + 1000); // Random delay for each mole
  }
}

// Check lives
if(life > 0){
    return (
        
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
                params: {},
                }} asChild>
            <Button
            title='Go Back'/>
            </Link>
            </View>

        </View>
        //pass score to gameEnd.js
        // Stop?
    )
  }
  else {
    return (
        
      <View style={Styles.container}>
          {/* Score */}
          <Text style={Styles.score}>Score: {score}</Text>

          <Text>Game Over</Text>
          {/* Linked Buttons */}
          <View style={Styles.backButton} >
          <Link href={{
              pathname: "/",
              params: {},
              }} asChild>
          <Button
          title='Go Back'/>
          </Link>
          </View>

      </View>
      //pass score to gameEnd.js
      // Stop?
  )
  }
}

