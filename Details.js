import { Text, View, SafeAreaView, ScrollView, Pressable } from "react-native";
import styles from "./Appstyles";
import { FontAwesome } from "@expo/vector-icons";

export default function Details({ route, navigation }) {
  const { character } = route.params;
  const renderList = (label, list) => (
    <Text style={styles.profileList}>
      <Text style={styles.profileLabel}>{label}:</Text>{" "}
      {list?.join(", ") || "None listed"}
    </Text>
  );

  const handleDelete = (id) => {
    fetch(
      `https://crud-api-wdv463-c4cbb7972a5a.herokuapp.com/api/v1/characters/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Delete failed");
        return res.json();
      })
      .then(() => {
        alert("Profile deleted.");
        navigation.navigate("CharList");
      })
      .catch((err) => {
        console.error("Delete error:", err);
        alert("Error deleting profile.");
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileWrap}>
        <ScrollView contentContainerStyle={styles.profileContainer}>
          <Text style={styles.profileHeader}>
            Now viewing: Profile #{character._id.slice(-5).toUpperCase()}
          </Text>

          <Text style={styles.profileList}>
            <Text style={styles.profileLabel}>Name:</Text> {character.name}
          </Text>

          {renderList("Aliases", character.aliases)}

          <Text style={styles.profileList}>
            <Text style={styles.profileLabel}>Age:</Text> {character.age}
          </Text>

          <Text style={styles.profileList}>
            <Text style={styles.profileLabel}>Gender:</Text> {character.gender}
          </Text>

          <Text style={styles.profileList}>
            <Text style={styles.profileLabel}>Species:</Text>{" "}
            {character.species}
          </Text>

          {renderList("Abilities", character.abilities)}

          <Text style={styles.profileList}>
            <Text style={styles.profileLabel}>Occupation:</Text>{" "}
            {character.occupation}
          </Text>

          {renderList("Known Allies", character.knownAllies)}
          {renderList("Known Enemies", character.knownEnemies)}

          <Text style={styles.profileList}>
            <Text style={styles.profileLabel}>Status:</Text> {character.status}
          </Text>

          <Text style={styles.profileList}>
            <Text style={styles.profileLabel}>Threat Level:</Text>{" "}
            {character.threatLevel}
          </Text>
          <View style={styles.bottomBtns}>
            <Pressable
              onPress={() => navigation.navigate("Edit", { character })}
              style={styles.mainBtn3}>
              <Text style={styles.mainBtnText}>Edit</Text>
            </Pressable>

            <Pressable
              onPress={() => handleDelete(character._id)}
              style={styles.mainBtn3}>
              <Text style={styles.mainBtnText}>Delete</Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate("CharList")}
              style={styles.mainBtn3}>
              <Text style={styles.mainBtnText}>Go Back</Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
