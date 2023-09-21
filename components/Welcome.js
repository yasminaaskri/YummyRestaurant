import * as React from "react";
import { Text, View, StyleSheet, Image,Button } from "react-native";



const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
       
        <Text style={styles.title}>
          Yummy welcome you!
        </Text>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#8ecae6',
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: "contain",
  },
  title: {
    marginTop: 10,
    paddingVertical: 10,
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Welcome;
