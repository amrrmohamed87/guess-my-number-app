import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: Platform.OS === "android" ? "white" : Colors.accent500,
    textAlign: "center",
    //borderWidth: Platform.OS === "ios" ? 0 : 2,
    borderWidth: Platform.select({
      ios: 0,
      android: 2,
    }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
