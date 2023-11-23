import { StyleSheet, View } from "react-native";
import { QuestionType } from "../types";
import Button from "./button";

type AnswersButtonsProps = {
  currentQuestion: QuestionType;
  numberOfQuestions: number;
  currentIndex: number;
  setCurrentIndex: any;
  setAnswers: any;
};

const AnswersButtons: React.FC<AnswersButtonsProps> = ({
  currentQuestion,
  numberOfQuestions,
  currentIndex,
  setCurrentIndex,
  setAnswers,
}) => {
  const randomizedAnswers: string[] = [
    ...currentQuestion["incorrect_answers"],
    currentQuestion["correct_answer"],
  ].sort((a, b) => 0.5 - Math.random());

  const handlePress = (answer: string) => {
    //Is the answer correct ?
    function isCorrect() {
      if (currentQuestion["correct_answer"].indexOf(answer) !== -1) {
        return true;
      } else {
        return false;
      }
    }

    //Updated answers state:
    function updateAnswers() {
      setAnswers((prevState: { [key: string]: boolean }) => ({
        ...prevState,
        [currentIndex]: isCorrect(),
      }));
    }

    //Next question or end of quiz
    function nextAction() {
      updateAnswers();
      if (currentIndex + 1 < numberOfQuestions) {
        setCurrentIndex((i: number) => i + 1);
      } else {
        //send package of answers
        console.log("Navigate to quiz recap"); //navigate to quiz recap
        setCurrentIndex(0);
      }
    }

    nextAction();
  };

  return (
    <View style={styles.container}>
      {randomizedAnswers.map((answer, index) => {
        return (
          <Button
            key={index}
            text={answer}
            fontStyles={{color: "black"}}
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
    height: 'auto',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 30
  },
  buttons: {
    marginTop: 0,
    width: '80%',
  }
});

export default AnswersButtons;
