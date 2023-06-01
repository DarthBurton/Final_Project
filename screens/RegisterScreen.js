import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../firebase/firebaseConfig";

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const RegisterUser = () => {
    createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((re) => {
        console.log(re);
        navigation.navigate("Profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.whiteSheet}>
        <TextInput
          autoCapitalize="none"
          style={styles.emailInput}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          style={styles.loginButton}
          title="Register"
          onPress={RegisterUser}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  emailInput: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    width: "75%",
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  passwordInput: {
    backgroundColor: "#F6F7FB",
    height: 58,
    marginBottom: 20,
    width: "75%",
    fontSize: 16,
    borderRadius: 10,
    padding: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  whiteSheet: {
    width: "100%",
    height: "75%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    position: "absolute",
  },
});
