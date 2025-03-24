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

export default function Edit({ route, navigation }) {
    const { character } = route.params;

  const [name, setName] = useState(character.name);
  const [aliases, setAliases] = useState(character.aliases.join(", "));
  const [age, setAge] = useState(character.age);
  const [gender, setGender] = useState(character.gender);
  const [species, setSpecies] = useState(character.species);
  const [abilities, setAbilities] = useState(character.abilities.join(", "));
  const [occupation, setOccupation] = useState(character.occupation);
  const [knownAllies, setKnownAllies] = useState(character.knownAllies.join(", "));
  const [knownEnemies, setKnownEnemies] = useState(character.knownEnemies.join(", "));
  const [status, setStatus] = useState(character.status);
  const [threatLevel, setThreatLevel] = useState(character.threatLevel);

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

    fetch(`https://crud-api-wdv463-c4cbb7972a5a.herokuapp.com/api/v1/characters/${character._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        alert("Profile updated");
        console.log("Profile updated");
        navigation.navigate("Details", { character: data });
      })
      .catch(err => {
        console.error("Update error:", err);
        alert("Error updating character");
      });

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.profileContainer}>
        <Text
          style={[
            styles.largeHeading,
            styles.italicHeading,
            styles.headingColor,
          ]}>
          Edit Profile
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
          <Pressable style={styles.mainBtn2} onPress={handleSubmit} >
           <Text style={styles.mainBtnText}>Save Changes</Text>
            </Pressable>
          <Pressable  style={styles.mainBtn2} onPress={() => navigation.goBack()} >
            <Text style={styles.mainBtnText}>Cancel</Text>
            </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
