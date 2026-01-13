import { View, Animated } from "react-native";

type Props = {
  total: number;
  currentIndex: number;
  progress: Animated.Value;
};

export default function StoryProgressBar({
  total,
  currentIndex,
  progress,
}: Props) {
  return (
    <View style={{ flexDirection: "row", paddingHorizontal: 8 }}>
      {Array.from({ length: total }).map((_, index) => {
        const width =
          index < currentIndex
            ? "100%"
            : index === currentIndex
            ? progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["0%", "100%"],
              })
            : "0%";

        return (
          <View
            key={index}
            style={{
              flex: 1,
              height: 4,
              marginHorizontal: 2,
              backgroundColor: "rgba(255,255,255,0.3)",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Animated.View
              style={{
                height: "100%",
                width,
                backgroundColor: "white",
              }}
            />
          </View>
        );
      })}
    </View>
  );
}
