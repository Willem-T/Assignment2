import React, { useState, useEffect } from 'react';
import Styles from '../styles/gameStyle.js';
import { Text, View, Pressable, Image, ImageBackground } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';


export default function Page() {
    //difficulty passed logic
    const params = useLocalSearchParams();
    const { difficulty } = params;

    const [score, setScore] = useState(0);
    const [life, setLife] = useState(3);
    const [mole, setMole] = useState(Array(9).fill(false));
    // Run the random timer when the component mounts
    useEffect(() => {
        runRandomTimer(difficulty);//should spawn based off the diff param
    }, []);


    // Check lives
    if (life > 0) {//moved up here since we dont need all these calls for the end page

        //handle the onPress event
        const handlePress = (index) => {
            //mole is there
            if (mole[index]) {
                setScore(f => f + 1);
                //find the mole
                const specificMole = [...mole];
                //deal with the mole
                specificMole[index] = false;
                setMole(specificMole);
            }
            //bros gone
            else {
                setLife(f => f - 1);
                if (life < 1) {
                }
            }
        }

        //mole timers
        function runRandomTimer(param) {
            for (i = 0; i < param; i++) {

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

                    }, 3000 - (difficulty *  (score * 10))); //scuffed way of doing difficulty but it works
                }, Math.floor(Math.random() * 2000 - (difficulty * (score * 10))) + 1000 - (difficulty * (score * 10))); // Random delay for each mole
            }
        }

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
                            params: {},
                        }} asChild>
                            <Pressable
                                onPress={() => { }}
                            >
                                <Text style={Styles.buttonText}>Main Menu</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </ImageBackground>
        )
    }
    else {
        const params = useLocalSearchParams();
        const { name } = params;

        //check for if they set name
        const leaderboardData = [
            { name: name == '' ? "guest" : name, score: score },
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
                            <Pressable
                                onPress={() => { }}
                            >
                                <Text style={Styles.buttonText}>Main Menu</Text>
                            </Pressable>
                        </Link>
                    </View>

                </View>
            </ImageBackground>
        )
    }
}

