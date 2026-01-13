import { View, Text, Image, Pressable } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { useMemo, forwardRef } from "react";
import { Story } from "../data/mockStories";
import { formatTime } from "../utils/formatTime";

type Props = {
  stories: Story[];
  onSelect: (index: number) => void;
};

const StoryIndexBottomSheet = forwardRef<BottomSheet, Props>(
  ({ stories, onSelect }, ref) => {
    const snapPoints = useMemo(() => ["40%", "70%"], []);

    return (
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        index={-1} // closed by default
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: "#111" }}
        handleIndicatorStyle={{ backgroundColor: "#666" }}
      >
        <BottomSheetView style={{ padding: 16 }}>
          {stories.map((story, index) => {
            const label = story.text ?? formatTime(story.timestamp);

            return (
              <Pressable
                key={story.id}
                onPress={() => onSelect(index)}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 14,
                }}
              >
                <Image
                  source={{ uri: story.mediaUrl }}
                  style={{
                    width: 50,
                    height: 80,
                    borderRadius: 6,
                    marginRight: 12,
                  }}
                />

                <View>
                  <Text
                    style={{ color: "white", fontSize: 15 }}
                    numberOfLines={1}
                  >
                    {label}
                  </Text>
                  <Text style={{ color: "gray", fontSize: 12 }}>
                    {formatTime(story.timestamp)}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </BottomSheetView>
      </BottomSheet>
    );
  }
);

export default StoryIndexBottomSheet;
