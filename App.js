import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Buttons from "./components/Buttons";

export default function App() {
  const [isFriday, setIsFriday] = useState(false);

  useEffect(() => {
    const today = new Date().getDay();
    if (today === 5) {
      setIsFriday(true);
    }
  }, []);

  

  return (
    <View style={styles.container}>
      {isFriday ? <Buttons /> : <Text style={styles.text}>It's not Friday yet!</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color: "#fff",
    fontSize: 30,
  }
});
