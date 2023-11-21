import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Text, View } from "react-native";

//import screens
import SignupScreen from "./containers/SignupScreen";
import ChallengeRankingScreen from "./containers/ChallengeRankingScreen";
import WeeklyRankingScreen from "./containers/WeeklyRankingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WeeklyRanking">
        <Stack.Screen
          name="Home"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChallengeRanking"
          component={ChallengeRankingScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="WeeklyRanking"
          component={WeeklyRankingScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEDE1",
    alignItems: "center"
  },

  titleBlock: {
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
