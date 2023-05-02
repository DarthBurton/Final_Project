import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
  {
    id: "123",
    title: "Get A Ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "List Your Ride",
    image: "https://links.papareact.com/3pn",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={styles.touchable}
          disabled={!origin}
        >
          <View>
            <Image style={styles.navOptions} source={{ uri: item.image }} />
            <Text style={styles.text}>{item.title}</Text>
            <Icon
              style={styles.icon}
              name="right"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  navOptions: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  touchable: {
    padding: 2,
    paddingLeft: 6,
    paddingBottom: 8,
    paddingTop: 4,
    margin: 20,
    width: 150,
    height: 230,
    backgroundColor: "gainsboro",
  },
  text: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  icon: {
    padding: 2,
    paddingLeft: 4,
    backgroundColor: "black",
    borderRadius: 9999,
    width: 28,
    marginTop: 10,
  },
});
