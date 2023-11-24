import { StyleSheet, Text, View, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Title } from "../components";
import { StackNavigation } from "../App";

export default function ChallengeRecapScreen() {
  const { navigate } = useNavigation<StackNavigation>();
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.questionResponseContent}>
        <Text>Answer 1 out of 10</Text>
        <Text>
          What country is the Hussarya supercar, made by the car manufacturer
          "Arrinera", assembled in?
        </Text>
        <View style={styles.responseContainer}>
          <Text style={styles.respons}>China</Text>
        </View>
        <View style={styles.responseContainer}>
          <Text style={styles.respons}>China</Text>
        </View>
        <View style={styles.responseContainer}>
          <Text style={styles.respons}>China</Text>
        </View>
        <View style={styles.responseContainer}>
          <Text style={styles.respons}>Poland</Text>
        </View>
      </View>

      <Button
        backgroundColor="#EAEAEA"
        text="Home"
        fontStyles={{ color: "black" }}
        onPress={() => {
          navigate("Home");
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

  questionResponseContent: {
    marginTop: 80,
    // borderWidth: 1,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 15
  },

  responseContainer: {
    width: "65%",
    height: 50,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  respons: {
    fontSize: 20
  }
});
