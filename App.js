import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, SafeAreaView, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Network from "expo-network";
import { FontAwesome } from '@expo/vector-icons';


import Details from "./Details";
import CharList from "./CharList";
import Edit from "./Edit";

import Heading from "./components/Heading";
import Create from "./Create";
import styles from "./Appstyles";

function HomeScreen({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  Network.getNetworkStateAsync().then((data) => {
    console.log({ data });
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.homeDesc}>Vought International Database </Text>
      <Text style={styles.homeWarning}>For approved Vought International queries only. Any breech of confidential information will result in immediate termination and is subject to fines and/or criminal prosecution. </Text>
      <FontAwesome name="expeditedssl" style={styles.warning}/>
      <Text style={styles.homeSecurity}>Security clearance check complete.</Text>
      <Pressable
        title="Open Database"
        onPress={() => navigation.navigate("CharList")}
        style={styles.mainBtn}
      >
         <Text style={styles.mainBtnText}>
          Proceed <FontAwesome name="arrow-circle-right" /> </Text>
         </Pressable>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "VoughtHQ" }}
        />
        <Stack.Screen
          name="Details"
          options={{ title: "VoughtHQ" }}
          component={Details}
        />
        <Stack.Screen
          name="CharList"
          options={{ title: "VoughtHQ" }}
          component={CharList}
        />
        <Stack.Screen
          name="Create"
          component={Create}
          options={{ title: "VoughtHQ" }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{ title: "VoughtHQ" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
