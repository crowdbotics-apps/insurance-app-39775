import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.ovNmnVdj}><ImageBackground style={styles.eZNqgszM} source={require("./Untitled design.png")} resizeMode="cover"><Text style={styles.ZxDrHpAH}>Select a Product Line below to get a FREE Quote</Text></ImageBackground><View style={styles.xykWEWks}><Text style={styles.iSHCLPdF}>Thank you for downloading this quick and simple app to provide you with on-demand access to Quotes, Policies, and Contact Information!</Text></View></ScrollView>
    <View style={styles.qvJoWfqH}><Text style={styles.bRWWcGeT}>Life Insurance</Text></View><View style={styles.iULdRJLZ}><Text style={styles.LnherMdU}>Health Insurance</Text></View><View style={styles.LrttcIVu}><Text style={styles.ofDSkiyp}>Life Insurance</Text></View><View style={styles.SWEnwwCX}><Text style={styles.gAufSqfG}>Vision Insurance</Text></View><View style={styles.UwcjQEOg}><Text style={styles.ZISNtsVG}>Contact Our Team</Text></View><Pressable onPress={() => {
      navigation.navigate("AboutTheAppScreen3");
    }}><View style={styles.rkWbJIBT}></View></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    backgroundColor: "#eee2b2"
  },
  eZNqgszM: {
    width: 351,
    height: 588,
    position: "absolute",
    left: 0,
    top: 1,
    transform: [{
      rotate: "0deg"
    }]
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
    height: 111,
    width: 325,
    backgroundColor: "#eee2b2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 17,
    top: 438
  },
  rkbLqBeT: {
    width: 304,
    height: 42,
    lineHeight: 14,
    fontSize: 20,
    borderRadius: 0,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
    left: 10,
    top: 22
  },
  iSHCLPdF: {
    width: 303,
    height: 88,
    lineHeight: 20,
    fontSize: 18,
    borderRadius: 0,
    position: "absolute",
    top: 14,
    textAlign: "center",
    left: 11
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
    left: 52,
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
    height: 30,
    lineHeight: 20,
    fontSize: 20,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 20,
    top: 0
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
    height: 35,
    width: 168,
    backgroundColor: "#b5d4f2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 7,
    top: 307,
    borderWidth: 1
  },
  bRWWcGeT: {
    width: 144,
    height: 26,
    lineHeight: 20,
    fontSize: 18,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 12,
    top: 4.5
  },
  YzJUJVrY: {
    height: 49,
    width: 254,
    backgroundColor: "#b5d4f2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 52,
    top: 283,
    borderWidth: 1
  },
  HMmTFBSe: {
    width: 226,
    height: 47,
    lineHeight: 20,
    fontSize: 20,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 14
  },
  QEHMYhDH: {
    height: 49,
    width: 254,
    backgroundColor: "#b5d4f2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 52,
    top: 344,
    borderWidth: 1
  },
  muPeURLh: {
    width: 226,
    height: 47,
    lineHeight: 20,
    fontSize: 20,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 14
  },
  iULdRJLZ: {
    height: 35,
    width: 168,
    backgroundColor: "#b5d4f2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 179,
    top: 307,
    borderWidth: 1
  },
  LnherMdU: {
    width: 144,
    height: 27,
    lineHeight: 20,
    fontSize: 18,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 12,
    top: 4
  },
  sePndkok: {
    height: 35,
    width: 168,
    backgroundColor: "#b5d4f2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 7,
    top: 352,
    borderWidth: 1
  },
  ShmRtbVU: {
    width: 144,
    height: 26,
    lineHeight: 20,
    fontSize: 18,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 12,
    top: 4.5
  },
  LrttcIVu: {
    height: 35,
    width: 168,
    backgroundColor: "#b5d4f2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 7,
    top: 352,
    borderWidth: 1
  },
  ofDSkiyp: {
    width: 144,
    height: 26,
    lineHeight: 20,
    fontSize: 18,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 12,
    top: 4.5
  },
  eFGkXaVK: {
    height: 35,
    width: 168,
    backgroundColor: "#b5d4f2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 7,
    top: 352,
    borderWidth: 1
  },
  wflHDHjl: {
    width: 144,
    height: 26,
    lineHeight: 20,
    fontSize: 18,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 12,
    top: 4.5
  },
  SWEnwwCX: {
    height: 35,
    width: 168,
    backgroundColor: "#b5d4f2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 178,
    top: 352,
    borderWidth: 1
  },
  gAufSqfG: {
    width: 144,
    height: 26,
    lineHeight: 20,
    fontSize: 18,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 12,
    top: 4.5
  },
  UwcjQEOg: {
    height: 35,
    width: 335,
    backgroundColor: "#b6f2bb",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 7,
    top: 397,
    borderWidth: 1
  },
  ZISNtsVG: {
    width: 305,
    height: 26,
    lineHeight: 20,
    fontSize: 18,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 12,
    top: 5
  },
  ZxDrHpAH: {
    width: 324,
    height: 50,
    lineHeight: 25,
    fontSize: 20,
    borderRadius: 0,
    position: "absolute",
    left: 14,
    top: 229,
    fontWeight: "700",
    textAlign: "center"
  },
  rkWbJIBT: {
    height: 35,
    width: 168,
    backgroundColor: "#b5d4f2",
    borderRadius: 40,
    color: "#777777",
    position: "absolute",
    left: 7,
    top: 307,
    borderWidth: 1
  },
  YLvrmbzA: {
    width: 144,
    height: 26,
    lineHeight: 20,
    fontSize: 18,
    borderRadius: 0,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
    left: 12,
    top: 4.5
  }
});
export default Untitled1;