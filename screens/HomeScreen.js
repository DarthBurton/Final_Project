import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container}>
        <Image
          style={{
            width: 200,
            height: 200,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://admin.antalya.edu.tr/files/139/abu-logo-en.jpg",
          }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where From"
          styles={{
            container: {
              flex: 1,
              width: "90%",
              marginBottom: 2,
            },
            textInputContainer: {
              flexDirection: "row",
              backgroundColor: "#00afcc",
              borderRadius: 50,
              padding: 10,
            },
            textInput: {
              backgroundColor: "#FFFFFF",
              height: 44,
              borderRadius: 50,
              paddingVertical: 5,
              paddingHorizontal: 35,
              fontSize: 15,
              flex: 1,
            },
            poweredContainer: {
              justifyContent: "flex-end",
              alignItems: "center",
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
              borderColor: "#c8c7cc",
              borderTopWidth: 0.5,
            },
            powered: {},
            listView: {},
            row: {
              backgroundColor: "#FFFFFF",
              padding: 13,
              height: 44,
              flexDirection: "row",
            },
            separator: {
              height: 0.5,
              backgroundColor: "#c8c7cc",
            },
            description: {},
            loader: {
              flexDirection: "row",
              justifyContent: "flex-end",
              height: 20,
            },
          }}
          onPress={(data, details = false) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        <NavOptions />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
  safeArea: {
    height: "100%",
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
  autoComplete: {
    flex: 1,
    backgroundColor: "white",
    width: "auto",
  },
  logocontainer: {
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
});
