import { useState } from "react";
import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { useAssets } from "expo-asset";

export default function VideoFF(props) {
  const [isFloppaFriday, setIsFloppaFriday] = useState(false);
  const [doomer, setDoomer] = useState(false);

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../assets/floppafriday.mp4")}
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  VideoFF: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
