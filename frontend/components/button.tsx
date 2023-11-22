import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  backgroundColor: string;
  text: string;
  onPress: (event: GestureResponderEvent) => void;
};

const Button: React.FC<ButtonProps> = ({ backgroundColor, text, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor }]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 120,
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginTop: 30
  },

  btnText: {
    color: "white",
    fontSize: 16
  }
});

export default Button;
