import { StyleSheet, Text, View } from "react-native";
import Signup from "./containers/Signup";
import ChallengeRanking from "./containers/ChallengeRanking";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Text style={styles.titleQuizz}>Quizz</Text>
        <Text style={styles.titleIn}>in</Text>
      </View>
      {/* <Signup /> */}
      <ChallengeRanking />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEDE1",
    alignItems: "center"
  },

  titleBlock: {
    flexDirection: "row",
    marginTop: 65
  },

  titleQuizz: {
    fontSize: 60,
    color: "#ED6931",
    fontWeight: "bold"
  },

  titleIn: {
    fontSize: 60,
    color: "#fa003f",
    fontWeight: "bold"
  }
});
