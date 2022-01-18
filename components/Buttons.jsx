import { useState } from "react";
import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import VideoFF from "./VideoFF";

import { useAssets } from "expo-asset";

export default function Buttons() {
  const [isFloppaFriday, setIsFloppaFriday] = useState(false);
  const [doomer, setDoomer] = useState(false);
  const [status, setStatus] = React.useState({});
  const video = React.useRef(null);

  const playVideoDoomer = () => {
    setDoomer(true);

    videoDoomer.current.playAsync();
  };

  return (
    <View style={styles.container}>
        <VideoFF source='floppadoomer.mp4' />
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
              ? video.current.pauseAsync()
              : playVideoDoomer()
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
  videoDoomer: {
    display: "none",
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
