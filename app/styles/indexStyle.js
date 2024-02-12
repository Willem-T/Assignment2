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
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10, 
        elevation: 2,
    },
    input: {
        fontSize: 30,
        width: '80%',
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 10,
        paddingLeft: 15, 
        marginTop: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
      buttonText: {
        fontSize: 20,
        minWidth: '160%',//seems to be the only way to get the pressable erea to expand
        minHeight: '2%',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
        //backgroundColor: 'white',//for debugging
      },
    easy: {
        backgroundColor: 'green', 
    },
    normal: {
        backgroundColor: 'orange', 
    },
    hard: {
        backgroundColor: 'red', 
    },
});

export default styles;