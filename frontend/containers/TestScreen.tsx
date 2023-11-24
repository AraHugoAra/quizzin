import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks";
import * as SecureStore from "expo-secure-store";

import {
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";

  // arrive sur Signup.tsx avec un loader
  // recupere cookie
  // si il ya un cookie => login et redirect vers HomeScreen.tsx
  // sinon => affiche formulaire du signup
  // creer psuedo dans la BDD et creer token dans un cookie
  // revient a etape 2
export default function TestScreen() {
  let heightStatusBar = StatusBar.currentHeight as number;
  const style = TestStyle({ heightStatusBar });
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState<{ [key: string]: string | number } | null>(
    null
  );
  const [error, setError] = useState<Error | unknown | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);
  // permet de creer le cookie contenant token
  const setCookie = async (key: string, data: string) => {
    const cookie = await SecureStore.setItemAsync(key, data);
    return cookie;
  };
  // recupere data (token) du back apres avoir rempli formulaire et creer le cookie avec token dedans
  const signup = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://192.168.54.156:3001/api/user/register",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            userName: inputValue,
          }),
        }
      );

      const responseData = await response.json();
      setCookie("token", responseData?.token);
      setLoading(false);
      // redirect to home page a faire
    } catch (error) {
      console.error("frontend signup error:", error);
    } finally {
      login(); 
    }
  };

  // permet de se loger si cookie existe sinon renvoi sur page signup
  const login = async () => {
    try {
      setLoading(true);
      let cookie = await SecureStore.getItemAsync("token");
      if (cookie) {
        const response = await fetch(
          "http://192.168.54.156:3001/api/user/login",
          {
            method: "POST",
            headers: {
              "Accept": "application/json",
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              token : cookie,
            }),
          }
        );
        setLoading(false);
      } else {

        // redirect sur page signup

        throw new Error(`error: ${error}`);
      }
    } catch (error) {
      setError("token pas la");
      setLoading(false);
    }
  };

  useEffect(() => {
    login();
  }, []);
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Enter username"
        onChange={(value) => setInputValue(value.nativeEvent.text)}
      />
      <TouchableOpacity
        style={style.buttonContainer}
        onPress={() => {
          signup();
        }}
      >
        <Text> Button</Text>
      </TouchableOpacity>
    </View>
  );
}
const TestStyle = ({ heightStatusBar }: { heightStatusBar: number }) =>
  StyleSheet.create({
    container: {
      flexDirection: "column",
      height: "100%",
      backgroundColor: "blue",
      marginTop: heightStatusBar,
      width: "100%",
    },

    buttonContainer: {
      height: 200,
      backgroundColor: "red",
    },
    input: {
      height: 200,
      backgroundColor: "yellow",
    },
  });
