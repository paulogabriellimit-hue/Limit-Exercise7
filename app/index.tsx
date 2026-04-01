import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, } from "react-native";
import { register, login, signInWithGoogle, } from "../src/authService";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Firebase Auth</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        onChangeText={setPassword}
      />

      <Button
        title="Register (Email)"
        onPress={() => register(email, password)}
      />

      <Button
        title="Login (Email)"
        onPress={() => login(email, password)}
      />

      <View style={{ marginTop: 20 }}>
        <Button
          title="Continue with Google"
          onPress={signInWithGoogle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
