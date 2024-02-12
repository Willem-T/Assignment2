/*
Created by:   Willem Toews
Purpose:      CIT-2269 Assignment #2
Desciption:   A simple game of whack a mole

TODO:       
              debug timers so you can subtract life or score(prolly score)
              attempt to move logic to its own file
*/ 
import {Text, View, Button, ImageBackground, TextInput, Pressable} from 'react-native';
import Styles from './styles/indexStyle.js';
import { Link,} from 'expo-router';
import React from 'react';

export default function Page(){

    const [name, setName] = React.useState("");

    return (
        <ImageBackground
        source={require('./images/background.png')}
        style={Styles.backgroundImage}
        >
        <View style={Styles.index}>

            {/* Instructions */}
            <Text style={Styles.titleText}>Whack o Mole</Text>
            <Text style={Styles.text}>Hit as many moles as possible without missing or letting them go back into their hole</Text>

            {/* players name */}
            <TextInput 
                style={Styles.input}
                onChangeText={setName}
                value={name}
                placeholder='Name'    
            ></TextInput>
            

            {/* Linked Buttons */}
            <View style={[Styles.buttonContainer, Styles.easy]}>
            <Link href={{
                        pathname: "./game/gameMain",
                        params: {difficulty: 1, name},
                    }} asChild>
                        <Pressable 
                            onPress={() => {}}
                            style={Styles.buttonPressable}
                        >
                            <Text style={Styles.buttonText}>Easy</Text>
                        </Pressable>
                    </Link>
            </View>

            <View style={[Styles.buttonContainer, Styles.normal]}>
            <Link href={{
                        pathname: "./game/gameMain",
                        params: {difficulty: 2, name},
                    }} asChild>
                        <Pressable 
                            onPress={() => {}}
                        >
                            <Text style={Styles.buttonText}>Normal</Text>
                        </Pressable>
                    </Link>
            </View>

            <View style={[Styles.buttonContainer, Styles.hard]}>
            <Link href={{
                        pathname: "./game/gameMain",
                        params: {difficulty: 3, name},
                    }} asChild>
                        <Pressable 
                            onPress={() => {}}
                        >
                            <Text style={Styles.buttonText}>Hard</Text>
                        </Pressable>
                    </Link>
            </View>
            </View>

        </ImageBackground>
    )
}