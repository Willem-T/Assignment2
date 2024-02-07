import React from 'react';
import Styles from '../styles/gameStyle.js';
import {Text, View, Button,} from 'react-native';
import { Link,} from 'expo-router';

export default function Page(){
    let score = 1300; //stub

    return (
        
        <View style={Styles.game}>
            {/* Score */}
            <Text style={Styles.score}>Score: {score}</Text>
            {/* Level?  */}

            {/* init starting params for speed, update with score */}

            
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
    )
}

// double for loop to create grid

    // for height
    //create pressable
    // pass init speed param and update it according to speed

        //for width
        //create pressable


//pass score to gameEnd.js
// Stop?

