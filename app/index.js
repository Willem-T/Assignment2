/*
Created by:   Willem Toews
Purpose:      CIT-2269 Assignment #2
Desciption:   A simple game of whack a mole

TODO:         add params for buttons
              change stubbs to account for added params
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

                params: {},
                }} asChild>
            <Button 
            title='Easy'
            />
            </Link>
            </View>

            <View style={Styles.buttonContainer}>
            <Link href={{
                pathname: "./game/gameMain",

                params: {},
                }} asChild>
            <Button 
            title='Normal'
            />
            </Link>

            </View>
            <View style={Styles.buttonContainer}>
            <Link href={{
                pathname: "./game/gameMain",

                params: {},
                }} asChild>
            <Button 
            title='Hard'
            />
            </Link>
            </View>

        </View>
        </ImageBackground>
    )
}