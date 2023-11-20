import { StyleSheet, Text, View, TextInput } from "react-native";

export default function Title() {
  return (
    <View style={styles.titleBlock}>
      <Text style={styles.titleQuizz}>Quizz</Text>
      <Text style={styles.titleIn}>in</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBlock: {
    // backgroundOpacity: 0,
    backgroundColor: "rgba(0,0,0,0)",
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
