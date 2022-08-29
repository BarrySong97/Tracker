import { useState } from "react";
import { View, Text, StyleSheet, Modal, Pressable, Alert } from "react-native";

type WeekProps = {
  data: { day: number; isCheck: boolean }[];
};

const WeekView = ({ data }: WeekProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {data.map((v) => (
        <Pressable key={v.day}>
          <View
            style={{
              ...styles.item,
              backgroundColor: v.isCheck ? "red" : "#fafafa",
            }}
          >
            <Text style={{ color: v.isCheck ? "white" : "" }}>{v.day}</Text>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 50,
    marginBottom: 16,
    width: 35,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default WeekView;
