import { View, TextInput, Pressable, Text } from "react-native";

export default function StoryBottomBar() {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 12,
        paddingBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.25)",
      }}
    >
      {/* Reply input (mock) */}
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.4)",
          borderRadius: 20,
          paddingHorizontal: 14,
          paddingVertical: 8,
          marginRight: 12,
        }}
      >
        <Text style={{ color: "rgba(255,255,255,0.7)" }}>
          Send message
        </Text>
      </View>

      {/* Like */}
      <Pressable style={{ marginHorizontal: 6 }}>
        <Text style={{ fontSize: 22 }}>❤️</Text>
      </Pressable>

      {/* Share */}
      <Pressable style={{ marginHorizontal: 6 }}>
        <Text style={{ fontSize: 22 }}>✈️</Text>
      </Pressable>
    </View>
  );
}
