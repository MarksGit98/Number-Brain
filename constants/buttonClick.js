import { Audio } from "expo-av";

export const playSound = async (soundType) => {
  const sound = new Audio.Sound();
  //   if (soundType === "click") {
  await sound.loadAsync(require(`../assets/${soundType}.mp3`));
  //   } else if (soundType === "error") {
  // await sound.loadAsync(require(`../assets/errorClick.mp3`));
  //   }
  await sound.playAsync();
  setInterval(() => sound.unloadAsync(), 2000);
};
