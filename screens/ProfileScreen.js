import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_AUTH, FIRESTORE_DB } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";

export default ProfileScreen = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState([]);

  const userCollectionRef = collection(FIRESTORE_DB, "users");

  useEffect(() => {
    const getUserInfo = async () => {
      // read data from db
      try {
        const data = await getDocs(userCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setUser(filteredData);
        console.log(filteredData);
      } catch (err) {
        console.error(err);
      }
      // write data to db
    };
    getUserInfo();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://bootdey.com/img/Content/avatar/avatar6.png",
            }}
          />

          <Text style={styles.name}>USERNAME </Text>
          <Text style={styles.userInfo}>{FIREBASE_AUTH.currentUser.email}</Text>
          <Text style={styles.userInfo}>ID NUMBER </Text>
          <Button
            style={{ height: 20, width: 20, backgroundColor: "red" }}
            title="Logout"
          ></Button>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/color/70/000000/administrator-male.png",
              }}
            />
          </View>
          <View style={styles.infoContent}>
            <TextInput
              autoCapitalize="none"
              style={styles.emailInput}
              placeholder="Name"
            />
          </View>
        </View>

        <View style={styles.item}>
          <View style={styles.iconContent}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://img.icons8.com/color/70/000000/filled-like.png",
              }}
            />
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.info}>News</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  infoContent: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
    paddingTop: 10,
  },
  iconContent: {
    flex: 1,
    alignItems: "center",
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
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
});
