import { Text, View } from "./Themed";
import { useToggle } from "ahooks";
import {
  LayoutAnimation,
  Pressable,
  StyleSheet,
  ToastAndroid,
} from "react-native";
import WeekView from "./WeekView";
export type HabitItemProps = {
  name: string;
  frequency: string;
};
export default function HabitItem({ name, frequency }: HabitItemProps) {
  const [mode, { toggle }] = useToggle<"week", "month">("week", "month");
  const data = [
    { day: 1, isCheck: false },
    { day: 2, isCheck: false },
    { day: 3, isCheck: true },
    { day: 4, isCheck: false },
    { day: 5, isCheck: true },
    { day: 6, isCheck: false },
    { day: 7, isCheck: true },
  ];
  return (
    <Pressable
      onLongPress={() => {
        ToastAndroid.show("12", 500);
      }}
      onPress={() => {
        toggle();
        LayoutAnimation.linear();
      }}
    >
      <View style={{ ...styles.container }}>
        <View style={styles.header}>
          <Text>{name}</Text>
          <Text>{frequency}</Text>
        </View>
        <WeekView data={data} />
        {mode !== "week" ? (
          <>
            <WeekView data={data} />
            <WeekView data={data} />
            <WeekView data={data} />
          </>
        ) : null}
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
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
