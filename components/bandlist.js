import metal from "../metal.json";
import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const BandList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={metal}
        renderItem={({ item, index }) => {
          return (
            <Text style={styles.propertyRow}>
              {item.band_name} {item.origin} {item.formed} {item.fans}
            </Text>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default BandList;
