import { StyleSheet, Text, View } from "react-native";
import { AnswersButtons, Title, ProgessBar } from "../components";
import { useEffect, useState } from "react";

export default function QuestionScreen({url = 'http://localhost:3001/api/quiz/daily'}: {url: string}) {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  //put it in custom hook useFetch:
  const fetchQuiz = () => {
    fetch(url, { method: "POST" })
      .then((data) => data.json())
      .then((json) => {
        //make this a separate function:
        setQuestions(json["questions"]);
        setCurrentIndex(0);
      })
      .finally(() => setLoading(false))
      .catch((err) => console.error(err));
  };

  useEffect(() => fetchQuiz(), []);

  //Remove after debugging:
  useEffect(() => {
    if (currentIndex === 0) {
      console.log('answers: ', answers)
      setAnswers({})
    }
  }, [currentIndex])

  return !loading ? (
    <View style={styles.container}>
      <Title />
      <Text>{questions[currentIndex]["question"]}</Text>
      <AnswersButtons
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        currentQuestion={questions[currentIndex]}
        numberOfQuestions={questions.length}
        setAnswers={setAnswers}
      />
      <ProgessBar
        currentIndex={currentIndex}
        numberOfQuestions={questions.length}
      />
    </View>
  ) : (
    <Text>Loading...</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#ffede1",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 40,
  },
});
