import {Text, View, Button,} from 'react-native';
//import Styles from './styles/indexStyle.js';
import { Link, useLocalSearchParams} from 'expo-router';
import React from 'react';

export default function Page(){
    return (
        <View style={Styles.index}>

            {/* Instructions */}
            <Text style={{}}>Pick a something</Text>



            {/* Linked Buttons */}
            <View style={{}}>
            <Link href={{
                pathname: "./game/gameMain",
                params: {},
                }} asChild>
            <Button 
            title='Start'/>
            </Link>
            </View>

        </View>
    )
}