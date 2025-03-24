import { useEffect, useState, useCallback } from "react";
import { Text, SafeAreaView, View, Pressable } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import styles from "./Appstyles";
import ListContainer from "./components/ListContainer";

export default function CharList({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);

      fetch(
        "https://crud-api-wdv463-c4cbb7972a5a.herokuapp.com/api/v1/characters"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log("API Fetch successful!", data);
          setCharacters(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("API Fetch Error:", err);
          setLoading(false);
        });
    }, [])
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading Database...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.charListSub}>Now Accessing...</Text>
      <Text
        style={styles.charListHeader}>
        Vought International Database
      </Text>
      <ListContainer data={characters} navigation={navigation} />
      <View style={styles.bottomBtns}>
      <Pressable
        title="Add New Profile"
        onPress={() => navigation.navigate("Create")} style={styles.mainBtn2}
      >
        <Text style={styles.mainBtnText}>Create Profile</Text>
        </Pressable>
      <Pressable onPress={() => navigation.navigate("Home")} style={styles.mainBtn2} >
        <Text style={styles.mainBtnText}>Return Home</Text>
        </Pressable>
        </View>
    </SafeAreaView>
  );
}
