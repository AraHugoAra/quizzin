import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet, Text, View } from "react-native";
import SignupScreen from "./containers/SignupScreen";

import ChallengeRankingScreen from "./containers/ChallengeRankingScreen";

// primary: 'rgb(255, 45, 85)',
// background: 'rgb(242, 242, 242)',
// card: 'rgb(255, 255, 255)',
// text: 'rgb(28, 28, 30)',
// border: 'rgb(199, 199, 204)',
// notification: 'rgb(255, 69, 58)',

const Stack = createNativeStackNavigator();
// const MyTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     background: "red",
//     card: "red"
//   }
// };

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      {/* <View style={styles.titleBlock}>
        <Text style={styles.titleQuizz}>Quizz</Text>
        <Text style={styles.titleIn}>in</Text>
      </View> */}
      {/* </View> */}
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={SignupScreen}
          options={{ headerShown: false }}
        />

        {/* <SignupScreen /> */}
        {/* <ChallengeRankingScreen /> */}
      </Stack.Navigator>
      {/* </View> */}
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
