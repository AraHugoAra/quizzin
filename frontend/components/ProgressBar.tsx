// import React from "react";
import { StyleSheet, View } from "react-native";

type ProgressBarProps = {
  currentQuestion: number;
  numberOfQuestions: number;
};

const ProgessBar = ({
  currentQuestion,
  numberOfQuestions,
}: ProgressBarProps) => {
  const progressBarContent: number = 100 - ((numberOfQuestions - (currentQuestion + 1)) * 10);
  console.log(progressBarContent)
  const styles = ProgressBarStyle({ progressBarContent });
  return (
    <>
      <View style={styles.progessBar}>
        <View style={styles.progressBarContent}></View>
      </View>
    </>
  );
};

const ProgressBarStyle = ({
  progressBarContent,
}: {
  progressBarContent: any;
}) =>
  StyleSheet.create({
    container: {},
    progessBar: {
      height: 15,
      width: "90%",
      backgroundColor: "lightgreen",
    },
    progressBarContent: {
      height: 15,
      width: `${progressBarContent}%`,
      backgroundColor: "green",
    },
  });

export default ProgessBar;
