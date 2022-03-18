import { createStackNavigator } from "@react-navigation/stack";
import reactpod from "react";
import home from "../screens/home";
import quiz from "../screens/quiz";
import result from "../screens/result";
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="quiz"
        component={quiz}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="result"
        component={result}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
