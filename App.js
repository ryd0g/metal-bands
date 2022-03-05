import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function Bands() {
  return (
    <View style={styles.container}>
      <Text>Bands</Text>
    </View>
  );
}

function Stats() {
  return (
    <View style={styles.container}>
      <Text>Stats</Text>
    </View>
  );
}
function Styles() {
  return (
    <View style={styles.container}>
      <Text>Styles</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Bands" component={Bands} />
        <Tab.Screen name="Stats" component={Stats} />
        <Tab.Screen name="Styles" component={Styles} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
