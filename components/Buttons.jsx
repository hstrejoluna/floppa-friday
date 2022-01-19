import { useState, useRef } from "react";
import { ImageBackground, StyleSheet, Button, View } from "react-native";
import { Video } from "expo-av";

export default function Buttons() {
  const [nvideo, setNvideo] = useState(false);
  const [doomer, setDoomer] = useState(false);
  const video = useRef(null);
  const videoDoomer = useRef(null);
  const [status, setStatus] = useState({});

  const playVideoDoomer = (view) => {
    setDoomer(view);
    videoDoomer.current.playAsync();
  };

  const pauseVideoDoomer = (view) => {
    setDoomer(view);
    videoDoomer.current.pauseAsync();
  };

  const playVideo = (view) => {
    setNvideo(view);
    video.current.playAsync();
  };

  const pauseVideo = (view) => {
    setNvideo(view);
    video.current.pauseAsync();
  };

  const fireworks = require("../assets/fireworks.gif");
  const doomerbackground = require("../assets/doomer.gif");
  const favicon = require("../assets/favicon.png");

  return (
    <View style={[nvideo ? styles.celebration :  styles.container]}>
      <ImageBackground
        source={ nvideo ? fireworks : doomer ? doomerbackground : favicon }
        style={styles.background}
      >
        <Video
          ref={video}
          style={[nvideo ? styles.video : styles.videoDoomer]}
          source={require("../assets/floppafriday.mp4")}
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <Video
          ref={videoDoomer}
          style={[doomer ? styles.video : styles.videoDoomer]}
          source={require("../assets/floppadoomer.mp4")}
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />

        <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? "PAUSE" : "PLAY"}
            onPress={() =>
              status.isPlaying ? pauseVideo(false) : playVideo(true)
            }
          />
          <Button
            title={status.isPlaying ? "PAUSE DOOMER" : "DOOMER"}
            onPress={() =>
              status.isPlaying ? pauseVideoDoomer(false) : playVideoDoomer(true)
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  celebration: {
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
