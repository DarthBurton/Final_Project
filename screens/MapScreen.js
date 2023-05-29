import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <View style={styles.container}>
        <Map />
      </View>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{
            headerShown: false,
          }}
          />
            
        </Stack.Navigator>
      </View>
    </View>
  );
};


function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    height: "50%",
  },
});
