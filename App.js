import { Text, KeyboardAvoidingView, Platform } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { onAuthStateChanged } from "firebase/auth";
import MapScreen from "./screens/MapScreen";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { createContext, useState } from "react";

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
//const AuthenticatedUserContext = createContext({});

/*const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return(
    <AuthenticatedUserContext.Provider value={[user, setUser]} >
      {children}
    </AuthenticatedUserContext.Provider>
  )
}

function AuthStack () {
  <Stack.Navigator>
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
}
*/

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Welcome"
              component={WelcomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Map"
              component={MapScreen}
              options={{
                headerShown: true,
              }}
            />

            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

function Home() {
  return (
    <Tab.Navigator
      activeColor="#00afcc"
      inactiveColor="white"
      barStyle={{ backgroundColor: "#132855" }}
      labeled="false"
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: "home",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: "account",
        }}
      />
    </Tab.Navigator>
  );
}
