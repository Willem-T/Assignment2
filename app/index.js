/*
Created by:   Willem Toews
Purpose:      CIT-2269 Assignment #2
Desciption:   A simple game of whack a mole

TODO:         add params for buttons
              debug timers so you can subtract life or score(prolly score)
              add end screen
              add scoreboard
              change color of buttons to reflect their titles
              attempt to move logic to its own file
*/ 
import {Text, View, Button, ImageBackground} from 'react-native';
import Styles from './styles/indexStyle.js';
import { Link,} from 'expo-router';
import React from 'react';

export default function Page(){
    //consts for difficulty
    let difficulty = 0;

    return (
        <ImageBackground
        source={require('./images/background.png')}
        style={Styles.backgroundImage}
        >
        <View style={Styles.index}>

            {/* Instructions */}
            <Text style={Styles.titleText}>Whack o Mole</Text>
            <Text style={Styles.text}>Hit as many moles as possible without missing or letting them go back into their hole</Text>



            {/* Linked Buttons */}
            <View style={Styles.buttonContainer}>
            <Link href={{
                pathname: "./game/gameMain",

                params: {difficulty: 1},
                }} asChild>
            <Button 
            title='Easy'
            style={Styles.easy}
            />
            </Link>
            </View>

            <View style={Styles.buttonContainer}>
            <Link href={{
                pathname: "./game/gameMain",

                params: {difficulty: 2},
                }} asChild>
            <Button 
            title='Normal'
            style={Styles.normal}
            />
            </Link>

            </View>
            <View style={Styles.buttonContainer}>
            <Link href={{
                pathname: "./game/gameMain",

                params: {difficulty: 3},
                }} asChild>
            <Button 
            title='Hard'
            style={Styles.hard}
            />
            </Link>
            </View>

        </View>
        </ImageBackground>
    )
}