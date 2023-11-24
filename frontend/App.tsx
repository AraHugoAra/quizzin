import { NavigationContainer } from "@react-navigation/native";
import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet } from "react-native";

//import screens
import { ChallengeRankingScreen, SignupScreen, WeeklyRankingScreen, QuestionScreen, Home as HomeScreen } from "./containers";

//types
export type ScreenNames = ["Home", "Signup", "ChallengeRanking", "WeeklyRanking", "QuestionScreen"] // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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
        <Stack.Screen
          name="QuestionScreen"
          component={() => QuestionScreen()} //refactor as children of screen
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
