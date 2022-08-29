import { StyleSheet, ScrollView } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import HabitItem from "../components/HabitItem";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"Habbits">) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <HabitItem frequency="4 times a week" name="吃饭" />
        <HabitItem frequency="4 times a week" name="吃饭" />
        <HabitItem frequency="4 times a week" name="吃饭" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
