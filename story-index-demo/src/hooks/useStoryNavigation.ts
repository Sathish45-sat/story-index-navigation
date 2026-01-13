import { useEffect, useRef, useState } from "react";
import { Story } from "../data/mockStories";
import { Animated } from "react-native";



const STORY_DURATION = 5000; // 5 seconds
const progress = useRef(new Animated.Value(0)).current;


export default function useStoryNavigation(stories: Story[]) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const wasLongPress = useRef(false);
  const timerRef = useRef<number | null>(null);

  const currentStory = stories[currentIndex];

  // ⏱ Auto-advance
  useEffect(() => {
  if (currentStory.type === "image") {
    if (isPaused || isIndexOpen) {
      progress.stopAnimation();
      return;
    }

    progress.setValue(0);

    Animated.timing(progress, {
      toValue: 1,
      duration: STORY_DURATION,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        setCurrentIndex((prev) =>
          prev < stories.length - 1 ? prev + 1 : prev
        );
      }
    });
  }

  return () => {
    progress.stopAnimation();
  };
}, [currentIndex, isPaused, isIndexOpen]);


  // 👉 Tap (next)
  const onPress = () => {
    if (wasLongPress.current) {
      wasLongPress.current = false;
      return;
    }
    setCurrentIndex((prev) =>
      prev < stories.length - 1 ? prev + 1 : prev
    );
  };

  // ✋ Long press (pause)
  const onLongPress = () => {
    wasLongPress.current = true;
    setIsPaused(true);
  };

  // ▶ Release (resume)
  const onPressOut = () => {
    setIsPaused(false);
  };

  // 🔙 Jump to specific story
  const goToStory = (index: number) => {
    setCurrentIndex(index);
    setIsIndexOpen(false);
  };
  const updateVideoProgress = (currentTime: number, duration: number) => {
  if (duration > 0) {
    progress.setValue(currentTime / duration);
  }
};

const onVideoEnd = () => {
  setCurrentIndex((prev) =>
    prev < stories.length - 1 ? prev + 1 : prev
  );
};


  return {
  currentStory,
  currentIndex,
  isIndexOpen,
  isPaused,
  progress,
  onPress,
  onLongPress,
  onPressOut,
  goToStory,
  openIndex: () => setIsIndexOpen(true),
  closeIndex: () => setIsIndexOpen(false),
  updateVideoProgress, // 👈
  onVideoEnd,          // 👈
};

}
