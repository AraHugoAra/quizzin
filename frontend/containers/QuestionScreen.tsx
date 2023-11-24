import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnswersButtons, Title, ProgessBar } from "../components";
import { QuestionType } from "../types";
import { htmlDecode } from "../utils";


  export default function QuestionScreen({url = "http://localhost:3001/api/quiz/daily"} : {url?: string}) {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const initQuiz = (data: QuestionType[]) => {
    setQuestions(data);
    setCurrentIndex(0);
  };

  //put it in custom hook useFetch:
  const fetchQuiz = () => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Accept: "application/json"
      }
    })
      .then((data) => data.json())
      .then((json) => {
        initQuiz(json["questions"]);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchQuiz(), console.log("questions", questions);
  }, []);

  //Remove after debugging:
  useEffect(() => {
    if (currentIndex === 0) {
      console.log("answers: ", answers);
      setAnswers({});
    }
  }, [currentIndex]);

  return !loading && questions ? (
    <View style={styles.container}>
      <Title />
      <View style={styles.questionContainer}>
        <Text style={styles.questionBody}>
      {htmlDecode(questions[currentIndex]["question"])}
        </Text>
   <AnswersButtons
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          currentQuestion={questions[currentIndex]}
          numberOfQuestions={questions.length}
          setAnswers={setAnswers}
       
  />
      </View>
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
    paddingHorizontal: "5%"
  },
  questionContainer: {
    height: "60%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  questionBody: {
    fontSize: 20,
    textAlign: "center"
  }
});
