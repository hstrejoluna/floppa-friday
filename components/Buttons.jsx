import { useState } from "react";
import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { useAssets } from "expo-asset";

export default function Buttons() {
  const [isFloppaFriday, setIsFloppaFriday] = useState(false);
  const [doomer, setDoomer] = useState(false);

  const video = React.useRef(null);
  const videoDoomer = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const playVideo = () => {
    
    video.current.playAsync();
  };

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
      <Video
        ref={videoDoomer}
        style={styles.video}
        source={require("../assets/floppadoomer.mp4")}
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "PAUSE" : "PLAY"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
        <Button
          title={status.isPlaying ? "PAUSE DOOMER" : "DOOMER"}
          onPress={() =>
            status.isPlaying
              ? videoDoomer.current.pauseAsync()
              : videoDoomer.current.playAsync()
          }
        />
      </View>
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
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
