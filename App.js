import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "react-native-vector-icons";

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Bands") {
              iconName = focused ? "headset" : "headset-outline";
            } else if (route.name === "Stats") {
              iconName = focused ? "stats-chart" : "stats-chart-outline";
            } else if (route.name === "Styles") {
              iconName = focused ? "musical-notes" : "musical-notes-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
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
