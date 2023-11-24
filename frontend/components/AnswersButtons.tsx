import { StyleSheet, View } from "react-native";
import { QuestionType } from "../types";
import Button from "./button";
import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from "../App";
import { htmlDecode } from "../utils";

type AnswersButtonsProps = {
  currentQuestion: QuestionType;
  numberOfQuestions: number;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  answers: boolean[]
  setAnswers: React.Dispatch<React.SetStateAction<boolean[]>>
};

const AnswersButtons: React.FC<AnswersButtonsProps> = ({
  currentQuestion,
  numberOfQuestions,
  currentIndex,
  setCurrentIndex,
  answers,
  setAnswers,
}) => {
  const { navigate } = useNavigation<StackNavigation>();

  const randomizedAnswers: string[] = [
    ...currentQuestion["incorrect_answers"],
    currentQuestion["correct_answer"],
  ].sort((a, b) => 0.5 - Math.random());

  //Is the answer correct ?
  const isCorrect = (answer: string): boolean => {
    if (currentQuestion["correct_answer"].indexOf(answer) !== -1) {
      return true;
    } else {
      return false;
    }
  };
  //Updated answers state:
  const updateAnswers = (answer: string) => {
    setAnswers((prevState) => ([
      ...prevState,
      isCorrect(answer),
    ]));
  };
  //Send answers to backend:
  const postAnswers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/quizanswer?use', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: 1,
          quizId: 1,
          isCorrect: answers,
          duration: 100})
      })
      const json = await response.json()
      console.log("postAnswers's response: ", json)
    } catch (error) {
      console.error(`An error occured during postAnsers: ${error}`)
    }
  };

  const handlePress = (answer: string) => {
    //Next question or end of quiz
    const nextAction = () => {
      updateAnswers(answer);
      if (currentIndex + 1 < numberOfQuestions) {
        setCurrentIndex((i: number) => i + 1);
      } else {
        postAnswers()
        navigate("ChallengeRanking");
        setCurrentIndex(0);
      }
    };
    nextAction();
  };

  return (
    <View style={styles.container}>
      {randomizedAnswers.map((answer, index) => {
        return (
          <Button
            key={index}
            text={htmlDecode(answer)}
            fontStyles={{ color: "black" }}
            buttonStyles={styles.buttons}
            backgroundColor="#FCCC32"
            onPress={() => handlePress(answer)}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30,
  },
  buttons: {
    marginTop: 0,
    width: "80%",
  },
});

export default AnswersButtons;
