import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

export default function IconButton({ onPress, icon, label }) {
  return (
    <Pressable style={styles.iconButton}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
