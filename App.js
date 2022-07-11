import React, { useState } from "react";
import Main from "./components/Main";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";

const fonts = () =>
  Font.loadAsync({
    Tapestry: require("./assets/fonts/Tapestry-Regular.ttf"),
    "Water Brush": require("./assets/fonts/WaterBrush-Regular.ttf"),
  });

export default function App() {
  const [isFontReady, setState] = useState(false);

  if (!isFontReady) {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setState(true)}
        onError={console.warn}
      />
    );
  } else {
    return <Main />;
  }
}
