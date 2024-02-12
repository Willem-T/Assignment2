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
    color: 'white',
    marginBottom: 60,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
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
    width: '40%',
    top: 50,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10, 
    elevation: 2,
    backgroundColor: 'green', 
  },
  moleImage: {
    width: 80,
    height: 80,
  },
  backButton: {
    width: '40%',
    top: 30,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10, 
    elevation: 2,
    backgroundColor: '#307efc',
},
  endText: {
    fontSize: 30,
    margin: 45,
    marginBottom: 60,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  leaderboardContainer: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.39)',
    margin: 15,
    borderRadius: 5,
  },
  leaderboardTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  leaderboardEntry: {
    fontSize: 20,
    marginBottom: 5,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  
});

export default styles;
