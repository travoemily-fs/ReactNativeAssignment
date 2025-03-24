import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";
import styles from "./Appstyles";
import { FontAwesome } from '@expo/vector-icons';

export default function Create({ navigation }) {
  const [name, setName] = useState("");
  const [aliases, setAliases] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [species, setSpecies] = useState("");
  const [abilities, setAbilities] = useState("");
  const [occupation, setOccupation] = useState("");
  const [knownAllies, setKnownAllies] = useState("");
  const [knownEnemies, setKnownEnemies] = useState("");
  const [status, setStatus] = useState("");
  const [threatLevel, setThreatLevel] = useState("");

  const handleSubmit = () => {
    const payload = {
      name,
      aliases: aliases.split(",").map((a) => a.trim()),
      age: Number(age),
      gender,
      species,
      abilities: abilities.split(",").map((a) => a.trim()),
      occupation,
      knownAllies: knownAllies.split(",").map((a) => a.trim()),
      knownEnemies: knownEnemies.split(",").map((a) => a.trim()),
      status,
      threatLevel,
    };

    fetch(
      "https://crud-api-wdv463-c4cbb7972a5a.herokuapp.com/api/v1/characters",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("Profile Created");
        console.log("Profile created:", data);
        navigation.navigate("CharList");
      })
      .catch((err) => console.error("Error creating profile:", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.profileContainer}>
        <Text
          style={styles.profileHeader}>
          Profile Creation
        </Text>

        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Aliases (comma-separated)"
          value={aliases}
          onChangeText={setAliases}
          style={styles.input}
        />
        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Gender"
          value={gender}
          onChangeText={setGender}
          style={styles.input}
        />
        <TextInput
          placeholder="Species"
          value={species}
          onChangeText={setSpecies}
          style={styles.input}
        />
        <TextInput
          placeholder="Abilities (comma-separated)"
          value={abilities}
          onChangeText={setAbilities}
          style={styles.input}
        />
        <TextInput
          placeholder="Occupation"
          value={occupation}
          onChangeText={setOccupation}
          style={styles.input}
        />
        <TextInput
          placeholder="Known Allies (comma-separated)"
          value={knownAllies}
          onChangeText={setKnownAllies}
          style={styles.input}
        />
        <TextInput
          placeholder="Known Enemies (comma-separated)"
          value={knownEnemies}
          onChangeText={setKnownEnemies}
          style={styles.input}
        />
        <TextInput
          placeholder="Status"
          value={status}
          onChangeText={setStatus}
          style={styles.input}
        />
        <TextInput
          placeholder="Threat Level"
          value={threatLevel}
          onChangeText={setThreatLevel}
          style={styles.input}
        />

        <View style={styles.bottomBtns}>
          <Pressable onPress={handleSubmit} style={styles.mainBtn2}>
            <Text style={styles.mainBtnText}>Create Profile</Text>
            </Pressable>
          <Pressable style={styles.mainBtn2} onPress={() => navigation.goBack()} >
            <Text style={styles.mainBtnText}>Cancel</Text>
            </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
