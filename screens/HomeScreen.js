import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://admin.antalya.edu.tr/files/139/abu-logo-en.jpg",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where From"
          style={styles.autoComplete}
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
      </View>
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
  },
  autoComplete: {
    flex: 1,
  },
});
