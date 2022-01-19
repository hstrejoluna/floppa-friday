import { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Buttons from "./components/Buttons";

export default function App() {
  const [isFriday, setIsFriday] = useState(false);

  useEffect(() => {
    const today = new Date().getDay();
    if (today === 5) {
      setIsFriday(true);
    } else {
      setIsFriday(false);
    }
  }, []);

  function isnotFriday() {
    return (
      <>
        <Image
          source={require("./assets/notfriday.png")}
          style={styles.image}
        />
        <Text style={styles.text}>
          It's not Friday yet! come back on friday
        </Text>
      </>
    );
  }

  return (
    <View style={styles.container}>
      {isFriday ? <Buttons /> : isnotFriday()}
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
  image: {
    width: 300,
    height: 300,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
