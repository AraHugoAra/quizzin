import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Home } from "./Home"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBlock}>
        <Text style={styles.titleQuizz}>Quizz</Text>
        <Text style={styles.titleIn}>in</Text>
      </View>
      <StatusBar style="auto" />
      <Home />
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
    marginTop: 65,
    justifyContent: "center"
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
