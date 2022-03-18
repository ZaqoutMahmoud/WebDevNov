import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const result = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Result</Text>
      </View>

      <Image
        source={{
          uri:
            "https://this-quiz.com/wp-content/uploads/2019/11/Football-quiz.-10-questions.jpg",
        }}
        style={styles.banner}
        resizeMode="contain"
      />
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("quiz")}>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
});
