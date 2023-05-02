import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.text}>Select your Ride</Text>
      <View style={styles.rideOptions}>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          styles={inputStyles}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                location: details.geometry.location,
                description: data.description,
              })
            );
            navigation.navigate("RideOptionsCard");
          }}
          returnKeyType={"search"}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const inputStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    textAlign: "center",
    paddingVertical: 5,
    fontWeight: "bold",
  },
  rideOptions: {},
});
