import { useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { Video, AVPlaybackStatus } from 'expo-av';
import { Asset } from 'expo-asset';
const [assets, error] = useAssets([require('./assets/floppafriday.mp4')]);



export default function Buttons() {
  const [isFloppaFriday, setIsFloppaFriday] = useState(false);
  const [doomer, setDoomer] = useState(false);

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
            uri: './assets/videos/floppafriday.mp4'
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}
