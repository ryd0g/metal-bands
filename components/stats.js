import { Text, View, StyleSheet } from "react-native";
import data from "../metal.json";

function StatsList() {
  const length = data.length;
  const fans = data.reduce((acc, cur) => acc + cur.fans, 0) * 1000;
  const countries = data.reduce((acc, cur) => acc.add(cur.origin), new Set());
  const active = data.reduce(
    (acc, cur) => acc + (cur.split === "-" ? 1 : 0),
    0
  );
  const split = length - active;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>METAL 🤘</Text>
      <Text style={styles.detail}>Total Bands: {length}</Text>
      <Text style={styles.detail}>Total Fans {fans}</Text>
      <Text style={styles.detail}>Countries: {countries.size}</Text>
      <Text style={styles.detail}>Active Bands: {active}</Text>
      <Text style={styles.detail}>Split Bands: {split}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 50,
  },
  detail: {
    fontSize: 25,
  },
});

export default StatsList;
