import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Text, Button } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate("About")} title="about" />
    </View>
  );
}

function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>About</Text>
      <Button onPress={() => navigation.goBack()} title="Go back" />
    </View>
  );
}

function ValScreen() {
  return (
    <View style={styles.container}>
      <Text>Value</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
