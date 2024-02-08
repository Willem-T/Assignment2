import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      score: {
        fontSize: 20,
        marginBottom: 10,
      },
      buttonRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 200,
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      buttonBox: {
        width: 60,
        height: 60,
        backgroundColor: 'lightgray',
        marginBottom: 10,
      },
      mole: {
        width: 60,
        height: 60,
        backgroundColor: 'brown',
        marginBottom: 10,
      },
      backButton: {
        marginTop: 20,
      }
});

export default styles;
