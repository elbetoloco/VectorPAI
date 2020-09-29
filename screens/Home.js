import React, { } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import ButtonPrueba from "../components/Button";


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

export default function Home({ signOut, userName, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido: {userName}</Text>
      <Text style={styles.text}>Estas autentificado</Text>
      <ButtonPrueba onPress={() => signOut()}>Sign Out</ButtonPrueba>
      <ButtonPrueba onPress={() => navigation.navigate('Perfiliamiento')}>Perfiliamiento</ButtonPrueba>
      <ButtonPrueba onPress={() => navigation.navigate('Servicios')}>Servicios</ButtonPrueba>
      
    </View>
  );
}
