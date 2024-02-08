import React, { useState, useEffect } from 'react';
import Styles from '../styles/gameStyle.js';
import {Text, View, Button, Pressable} from 'react-native';
import { Link, useNavigation,} from 'expo-router';


export default function Page(){
    const [score, setScore] = useState(0);
    const [life, setLife ] = useState(3);
    const [ mole, setMole ] = useState(Array(9).fill(false));
    const [timerActive, setTimerActive] = useState(false);

        // Run the random timer when the component mounts
        useEffect(() => {
            runRandomTimer();
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

    const runRandomTimer = () => {
        const newMole = [...mole];
    
        // Generate random positions for moles
        const indexes = [];
        while (indexes.length < 2) {
          const randomIndex = Math.floor(Math.random() * 9);
          if (!indexes.includes(randomIndex)) {
            indexes.push(randomIndex);
            newMole[randomIndex] = true;
            setTimeout(() => {
              newMole[randomIndex] = false;
              setMole([...newMole]);
              runRandomTimer();
            }, 5000); // 5 seconds timer for each mole
          }
        }
    
        setMole(newMole);
      };

    // function runRandomTimer() {
    //     //MAKES SURE TO NOT RUN MULTIPLE TIMERS
    //     if (timerActive) return;

    //     //mole delay for time before he appears
    //     const moleDelay = Math.floor(Math.random() * 5000) + 1000;

    //     //speed
    //     const speed = 4000; //needs a multiplier

    //     setTimerActive(true);

    //     setTimeout(() => {
    //         setMole(true);
    //         //timeout to make the mole disapear
    //         setTimeout(() => {
    //             setTimerActive(false); //enable timers

    //             //JS sucks and this is fucking broken
    //             //has something todo with callbacks not being updated
    //             // if (!mole) { //might change this later if its too hard
    //             //     setLife(f => f -1);
    //             // }
    //             setMole(false); 
    //             runRandomTimer(); 
    //         }, speed); //set this to a speed var
    //     }, moleDelay);
    // }

    return (
        
        <View style={Styles.container}>
            {/* Score */}
            <Text style={Styles.score}>Score: {score}</Text>
            <Text style={Styles.score}>Life: {life}</Text>
 
            <View style={Styles.buttonRow}>
            {mole.map((mole, index) => (
          <Pressable
            key={index}
            style={mole ? Styles.mole : Styles.buttonBox}
            onPress={() => handlePress(index)}
          />))}
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

