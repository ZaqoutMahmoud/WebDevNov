import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
  Image,
} from "react-native";
import React from "react";
import Title from "../components/title";

const home = ({ navigation }) => {
  return (
    <View style={styles.Container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri:
              "https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/c1/50/61/c15061c7-bd6a-7257-312f-8042d615c0b1/source/512x512bb.jpg",
          }}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("quiz")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  Container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  button: {
    width: "100%",
    backgroundColor: "#1a759f",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
