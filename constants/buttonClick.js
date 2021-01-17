import { Audio } from "expo-av";

export const playSound = async (soundType) => {
  const sound = new Audio.Sound();
  await sound.loadAsync(require(`../assets/${soundType}.mp3`));
  await sound.playAsync();
  setInterval(() => sound.unloadAsync(), 2000);
};
