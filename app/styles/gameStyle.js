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
      hole: {
        width: 60,
        height: 60,
        marginBottom: 10,
        //backgroundColor: 'black',//for testimg
      },
      backButton: {
        marginTop: 20,
      },
      moleImage: {
        width: 60,
        height: 60,
      }
});

export default styles;
