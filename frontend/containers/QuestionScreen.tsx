import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button, Title, ProgessBar } from "../components";
import { useEffect, useState } from "react";

export default function QuestionScreen() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  // const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  //put it in custom hook useFetch:
  const fetchQuiz = () => {
    fetch("http://localhost:3001/api/quiz/daily", { method: "POST" })
      .then((data) => data.json())
      .then((json) => {
        //make this a separate function:
        setQuestions(json["questions"]);
        // setNumberOfQuestions(json["questions"].length);
        setCurrentQuestion(0);
      })
      .finally(() => setLoading(false))
      .catch((err) => console.error(err));
  };

  useEffect(() => fetchQuiz(), []);

  return !loading ? (
    <View style={styles.container}>
      <Title />
      <Text>{questions[currentQuestion]["question"]}</Text>
      {/* <Buttons */}
      <Button
        backgroundColor="#ed6931"
        text="Q1"
        onPress={() => {
          console.log("Q1");
        }}
      />
      <ProgessBar currentQuestion={currentQuestion} numberOfQuestions={questions.length} />
    </View>
  ) : (
    <Text>Loading...</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    backgroundColor: "#ffede1",
  },
});
