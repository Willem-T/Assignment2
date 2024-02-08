import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    score: {
        fontSize: 35,
        textAlign: 'center',
    },
    backButton: {
        width: '30%',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonBox: {
        height: 70,
        width: 70,
        borderRadius: 5,
        margin: 3,
        padding: 10,
        backgroundColor: 'black',
      },
      mole: {
        height: 70,
        width: 70,
        borderRadius: 5,
        margin: 3,
        padding: 10,
        backgroundColor: 'brown',
      }
});

export default styles;