import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from "../components/button";
import Title from "../components/Title";

export default function SignupScreen() {
  console.log("helllooooo");
  return (
    <View style={styles.container}>
      <Title />
      <TextInput
        style={styles.input}
        placeholder="Enter your username..."
      ></TextInput>
      <Text style={styles.infoText}>
        No blank spaces nor special characters
      </Text>

      <Button
        backgroundColor="#06C699"
        text="OK"
        onPress={() => {
          console.log("ChallengeRankingScreen");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "#ffede1"
  },

  input: {
    marginTop: 300,
    marginBottom: 8,
    width: 300,
    maxWidth: 350,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    fontSize: 20
  },

  infoText: {
    fontStyle: "italic"
  }
});
