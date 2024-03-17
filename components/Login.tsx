import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from "react-native";

export default function Login() {
  const [username, onChangeText] = React.useState("username");
  const [password, onChangePassword] = React.useState("password");

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);

  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="user name"
          onChangeText={onChangeText}
          value="username"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          onChangeText={onChangePassword}
          secureTextEntry
          value="password"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 10,
  },

  button: {
    backgroundColor: "#F3F3F4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
