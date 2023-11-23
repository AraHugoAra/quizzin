// import React from "react";
import { StyleSheet, View } from "react-native";

type ProgressBarProps = {
  currentIndex: number;
  numberOfQuestions: number;
};

const ProgessBar = ({
  currentIndex,
  numberOfQuestions,
}: ProgressBarProps) => {
  const progressBarContent: number = (100 - ((numberOfQuestions - (currentIndex)) * 10)) || 5;
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
      height: 12,
      width: "90%",
      backgroundColor: "lightgreen",
      borderRadius: 12,
      overflow: 'hidden'
    },
    progressBarContent: {
      height: '100%',
      width: `${progressBarContent}%`,
      backgroundColor: "green",
    },
  });

export default ProgessBar;
