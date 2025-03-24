import ListItem from "./ListItem";
import {  FlatList, Pressable } from "react-native";
import styles from "../Appstyles";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from '@expo/vector-icons';

export default function ListContainer({ data, navigation }) {
  const renderItem = ({ item }) => (
    <ListItem id={item._id} onPress={() => navigation.navigate("Details", { character: item })}>
      {item.name}
    </ListItem>
  );

  return (
    <SafeAreaView>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
      style={styles.listContainer}
    />
    </SafeAreaView>
  );
}
