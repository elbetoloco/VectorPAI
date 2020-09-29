import React, { } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default function Servicios({navigation: { goBack }}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de Servicios</Text>
      <Button onPress={() => goBack()}>regresar</Button>
    </View>
  );
}
