import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    index: {
        flex: 1,
        //backgroundColor: '#ffffff',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    titleText: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        letterSpacing: 2,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 5,
        top: 30,
        color: 'white',
    },
    buttonContainer: {
        width: '40%',
        top: 50,
        marginTop: 50,
    },
    easy: [
    ]
});

export default styles;