import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase/firebaseConfig";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginUser = () => {
    signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((re) => {
        console.log(re);
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const RegisterUser = () => {
    createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((re) => {
        console.log(re);
        navigation.navigate("Home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.text}>
          <Text>Welcome</Text>
        </View>
        <TextInput
          style={styles.emailInput}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button style={styles.loginButton} title="Login" onPress={LoginUser} />
        <Button
          style={styles.loginButton}
          title="Register"
          onPress={RegisterUser}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  loginButton: {
    height: 100,
    width: 100,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    justifyContent: "flex-start",
  },
  emailInput: {
    borderWidth: 1,
    margin: 5,
    width: 120,
  },
  passwordInput: {
    borderWidth: 1,
    margin: 5,
    width: 120,
  },
});
