import { FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

import Button from "../components/button";

const rangkingTab = [
  { id: 1, userName: "Yiyi", score: 1000 },
  { id: 2, userName: "John", score: 1200 },
  { id: 3, userName: "Alice", score: 800 },
  { id: 4, userName: "Bob", score: 1300 },
  { id: 5, userName: "Eva", score: 1100 },
  { id: 6, userName: "Alex", score: 900 },
  { id: 7, userName: "Sophie", score: 1400 },
  { id: 8, userName: "Daniel", score: 950 },
  { id: 9, userName: "Lily", score: 1150 },
  { id: 10, userName: "Michael", score: 1050 }
];

const orderedRangkingTab = rangkingTab.sort((a, b) => b.score - a.score);

export default function WeeklyRankingScreen() {
  return (
    <View style={styles.container}>
      <Title />
      <Text style={styles.title}>Weekly Leaderboard</Text>

      <FlatList
        style={styles.listContainer}
        data={orderedRangkingTab}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.userRanking,
              index % 2 === 0 ? styles.lineBackground : null
            ]}
          >
            <Text style={styles.rankingDetail}>{index + 1}</Text>
            <Text style={styles.rankingDetail}>{item.userName}</Text>
            <Text style={styles.rankingDetail}>{item.score}</Text>
          </View>
        )}
      />
      <View style={styles.btnContainer}>
        <Button
          backgroundColor="#ed6931"
          text="Home"
          onPress={() => {
            console.log("navigate to home page");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFEDE1"
  },

  title: {
    marginTop: 35,
    fontSize: 30,
    marginBottom: 20
  },

  listContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "grey",
    width: "100%",
    marginBottom: 30
  },

  lineBackground: {
    backgroundColor: "#FFE5DB"
  },

  userRanking: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  rankingDetail: {
    fontSize: 20,
    color: "red",
    padding: 18
  },

  btnContainer: {
    marginBottom: "12%"
  }
});
