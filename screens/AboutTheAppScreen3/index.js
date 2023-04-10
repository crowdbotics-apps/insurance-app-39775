import { StyleSheet } from "react-native";
import React from 'react';
import WebView from 'react-native-webview';

const App = () => {
  return <WebView source={{
    uri: 'https://blog.crowdbotics.com/'
  }} style={_styles.kjcDDKAD} />;
};

export default App;

const _styles = StyleSheet.create({
  kjcDDKAD: {
    marginTop: 40
  }
});