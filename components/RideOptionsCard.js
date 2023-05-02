import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

const RideOptionsCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={{ top: 3, left: 5, padding: 3, position: "absolute" }}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            paddingVertical: 5,
            fontWeight: "bold",
          }}
        >
          Select Your Ride
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
