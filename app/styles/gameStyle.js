import { StyleSheet } from "react-native";

//TODO:   make the hit boxes larger
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#fff',// no longer need after the bg image
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  score: {
    fontSize: 45,
    marginBottom: 60,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
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
    width: 80,
    height: 80,
    marginBottom: 10,
    //backgroundColor: 'black',//for testimg
  },
  backButton: {
    marginTop: 20,
  },
  moleImage: {
    width: 80,
    height: 80,
  },
  backButton: {
    width: '40%',
    position: 'relative',
    top: 50,
},
  endText: {
    fontSize: 30,
    margin: 45,
  },
  leaderboardContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0)',
    margin: 15,
  },
  leaderboardTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  leaderboardEntry: {
    fontSize: 20,
    marginBottom: 5,
  },
  
});

export default styles;
