import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.ovNmnVdj}><ImageBackground style={styles.eZNqgszM} source={require("./Untitled design.png")} resizeMode="cover"></ImageBackground><View style={styles.xykWEWks}><Text style={styles.rkbLqBeT}>Welcome to Hill Insurance Service!</Text><Text style={styles.iSHCLPdF}>Thank you for downloading this quick and simple app to provide you with on-demand access to Quotes, Policies, and contact information!</Text></View></ScrollView>
    <View style={styles.sRDtQwcW}><Text style={styles.xwMGeGtR}>Get a FREE Health insurance Quote</Text></View><View style={styles.qvJoWfqH}><Text style={styles.bRWWcGeT}>Get a FREE Life Insurance Quote</Text></View></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  eZNqgszM: {
    width: 351,
    height: 588,
    position: "absolute",
    left: 0,
    top: 1
  },
  jQVptIQN: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 352,
    height: 320,
    position: "absolute",
    top: 254,
    left: 2
  },
  yZLkZnkw: {
    width: 348,
    height: 85,
    lineHeight: 25,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 397,
    left: 2,
    textAlign: "center",
    fontFamily: "Roboto",
    fontWeight: "400"
  },
  CNnmphwo: {
    width: 344,
    height: 50,
    lineHeight: 20,
    fontSize: 20,
    borderRadius: 0,
    position: "absolute",
    top: 343,
    left: 4,
    textAlign: "center",
    fontWeight: "700"
  },
  ovNmnVdj: {
    borderRadius: 40,
    backgroundColor: "#0d5e09",
    opacity: 1
  },
  xykWEWks: {
    height: 183,
    width: 349,
    backgroundColor: "#f6e7cb",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 3,
    top: 374
  },
  rkbLqBeT: {
    width: 349,
    height: 42,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
    left: 0,
    top: 33
  },
  iSHCLPdF: {
    width: 350,
    height: 126,
    lineHeight: 20,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    top: 74,
    textAlign: "center"
  },
  HaCpsaUI: {
    height: 49,
    width: 254,
    backgroundColor: "#b1cef2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 48.5,
    top: 163
  },
  sRDtQwcW: {
    height: 49,
    width: 254,
    backgroundColor: "#b5d4f2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 48.5,
    top: 222,
    borderWidth: 1
  },
  ANJRADvu: {
    width: 253,
    height: 42,
    lineHeight: 20,
    fontSize: 20,
    borderRadius: 0,
    textAlign: "center",
    fontWeight: "700",
    color: "#04050c"
  },
  xwMGeGtR: {
    width: 215,
    height: 47,
    lineHeight: 20,
    fontSize: 20,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 19.5
  },
  qTbnarCv: {
    width: 253,
    height: 49,
    lineHeight: 20,
    fontSize: 20,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center"
  },
  qvJoWfqH: {
    height: 49,
    width: 254,
    backgroundColor: "#b5d4f2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 52,
    top: 161,
    borderWidth: 1
  },
  bRWWcGeT: {
    width: 226,
    height: 47,
    lineHeight: 20,
    fontSize: 20,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 14
  }
});
export default Untitled1;