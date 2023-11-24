import { SimpleLineIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { StackNavigation } from "../App";

//import component
import { Title, Button } from "../components"

export default function ChallengeRankingScreen() {
  const {navigate} = useNavigation<StackNavigation>()

  return (
    <View style={styles.container}>
      <Title />
      <Text style={styles.title}>Great job !</Text>

      <View style={styles.contentCard}>
        <Text style={styles.contentCardTitle}>You've placed:</Text>
        <View style={styles.badge}>
          <SimpleLineIcons name="badge" size={200} color="black" />
          <Text style={styles.rankingNumber}>19th</Text>
        </View>

        <View style={styles.resultInfo}>
          <Text style={styles.resultInfoFont}>Right answers</Text>
          <Text style={styles.resultInfoFont}>0/1</Text>
        </View>
        <View style={styles.resultInfo}>
          <Text style={styles.resultInfoFont}>Total duration</Text>
          <Text style={styles.resultInfoFont}>21s</Text>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <Button
          backgroundColor="#ed6931"
          text="Home"
          onPress={() => {
            navigate('Home')
          }}
        />
        <Button
          backgroundColor="#fa003f"
          text="Recap"
          onPress={() => {
            console.log("navigate to recap");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    marginTop: 60,
    marginBottom: 20,
    fontSize: 40
  },

  contentCardTitle: {
    color: "white",
    fontSize: 20
  },

  badge: {
    position: "relative"
  },

  rankingNumber: {
    position: "absolute",
    fontSize: 35,
    color: "white",
    top: 50,
    right: 70
  },
  contentCard: {
    padding: 20,
    width: 350,
    height: 400,
    marginTop: 20,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ed6931",
    borderRadius: 15
  },
  resultInfo: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  resultInfoFont: {
    color: "white",
    fontSize: 20
  },

  btnContainer: {
    width: 350,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 3
  }
});
