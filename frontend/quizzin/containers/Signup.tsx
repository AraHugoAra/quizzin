import { StyleSheet, Text, View, TextInput } from "react-native";
import Button from "../components/button";

export default function Signup() {
  return (
    <View style={styles.container}>
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
          console.log("pressed !");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },

  input: {
    marginTop: 300,
    marginBottom: 6,
    width: "85%",
    height: "10%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    fontSize: 20
  },

  infoText: {
    fontStyle: "italic"
  }
});
