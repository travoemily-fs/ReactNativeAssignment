import { Pressable, Text, View } from "react-native";
import styles from "../Appstyles";
import { FontAwesome } from '@expo/vector-icons';

export default function ListItem({ children, onPress, id }) {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Text style={styles.listItem} ><Text style={styles.listBefore}><FontAwesome name="folder" style={styles.profileIcon}/>  Profile #{id.slice(-5).toUpperCase()} </Text> {children}</Text>
      </View>
    </Pressable>
  );
}
