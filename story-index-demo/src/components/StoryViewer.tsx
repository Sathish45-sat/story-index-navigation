import { View, Image, Pressable, Text, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Video, ResizeMode } from "expo-av";
import { useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

import { mockStories } from "../data/mockStories";
import useStoryNavigation from "../hooks/useStoryNavigation";

import StoryProgressBar from "./StoryProgressBar";
import StoryBottomBar from "./StoryBottomBar";
import StoryIndexBottomSheet from "./StoryIndexBottomSheet";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function StoryViewer() {
  const insets = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheet>(null);

  const {
    currentStory,
    currentIndex,
    isPaused,
    progress,
    onPress,        // next
    onLongPress,    // pause
    onPressOut,     // resume
    goToStory,
    updateVideoProgress,
    onVideoEnd,
  } = useStoryNavigation(mockStories);

  /* ---------- Bottom sheet handlers ---------- */
  const openIndexSheet = () => {
    sheetRef.current?.snapToIndex(0);
  };

  const handleSelectStory = (index: number) => {
    goToStory(index);
    sheetRef.current?.close();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {/* PROGRESS BAR */}
      <Pressable
        onPress={openIndexSheet}
        style={{
          paddingTop: insets.top + 12,
          paddingBottom: 8,
        }}
      >
        <StoryProgressBar
          total={mockStories.length}
          currentIndex={currentIndex}
          progress={progress}
        />
      </Pressable>

      {/* STORY AREA (single gesture surface) */}
      <Pressable
        style={{ flex: 1 }}
        delayLongPress={200}
        onLongPress={onLongPress}
        onPressOut={onPressOut}
        onPress={(e) => {
          const x = e.nativeEvent.locationX;

          if (x < SCREEN_WIDTH / 3) {
            // LEFT → previous
            if (currentIndex > 0) {
              goToStory(currentIndex - 1);
            }
          } else if (x > (SCREEN_WIDTH * 2) / 3) {
            // RIGHT → next
            onPress();
          }
          // CENTER → nothing
        }}
      >
        {/* MEDIA */}
        {currentStory.type === "image" ? (
          <Image
            source={{ uri: currentStory.mediaUrl }}
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
          />
        ) : (
          <Video
            source={{ uri: currentStory.mediaUrl }}
            style={{ width: "100%", height: "100%" }}
            resizeMode={ResizeMode.COVER}
            shouldPlay={!isPaused}
            onPlaybackStatusUpdate={(status) => {
              if (!status.isLoaded) return;

              updateVideoProgress(
                status.positionMillis,
                status.durationMillis ?? 1
              );

              if (status.didJustFinish) {
                onVideoEnd();
              }
            }}
          />
        )}

        {/* STORY TEXT */}
        {currentStory.text && (
          <Text
            style={{
              position: "absolute",
              bottom: 120,
              left: 20,
              color: "white",
              fontSize: 18,
            }}
          >
            {currentStory.text}
          </Text>
        )}
      </Pressable>

      {/* BOTTOM UI */}
      <StoryBottomBar />

      {/* BOTTOM SHEET INDEX */}
      <StoryIndexBottomSheet
        ref={sheetRef}
        stories={mockStories}
        onSelect={handleSelectStory}
      />
    </View>
  );
}
