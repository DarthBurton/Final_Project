import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
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

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.whiteSheet}>
        <View style={styles.text}>
          <Text>Welcome</Text>
        </View>
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
        <Button style={styles.loginButton} title="Login" onPress={LoginUser} />
        <View>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: "#f57c00",
    height: 58,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    justifyContent: "center",
  },
  emailInput: {
    backgroundColor: "#F6F7FB",
    height: 58,
    width: "75%",
    marginBottom: 20,
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
