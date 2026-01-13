# Story Index Navigation

A UX-focused React Native prototype that improves navigation in story-based mobile apps by allowing users to jump directly to any story.

---

## 📌 Problem

In story-heavy apps, users often have to tap repeatedly to reach a specific story they want to view.  
This becomes frustrating when many stories are posted in sequence.

---

## 💡 Solution

This project introduces a **story index** presented as a **bottom sheet**, enabling users to jump directly to **any story** without breaking familiar story interactions.

The goal is not to clone an existing app, but to **explore and prototype a better navigation pattern** for story-based interfaces.

---

## ✨ Key Features

- Story index displayed using a bottom sheet
- Jump directly to any story
- Familiar story gestures:
  - Tap left / right to navigate
  - Long-press anywhere to pause
- Animated progress bar for stories
- Support for both image and video stories
- Bottom UI isolated from gesture conflicts
- Safe-area aware layout

---

## 🧠 Key UX Decisions

- **Bottom sheet instead of modal**  
  Keeps the story visible and feels less disruptive.

- **Single gesture surface**  
  Avoids conflicts between tap and long-press interactions.

- **Coordinate-based tap detection**  
  Ensures reliable left/right navigation without nested gesture issues.

---

## 🛠 Tech Stack

- React Native
- Expo
- TypeScript
- Expo AV (video support)
- @gorhom/bottom-sheet
- react-native-gesture-handler
- react-native-reanimated

---

## 🎥 Demo

A short demo video showing the full interaction flow is available here:

👉 **Demo Video:**  
Link to watch: https://youtube.com/shorts/03O9Wuq60qg?feature=share

Link for download: https://github.com/Sathish45-sat/story-index-navigation/releases/download/v1.0/story-index-demo-vid.mp4


---

## 🚀 Running the Project Locally

```bash
npm install
npx expo start
````
📚 Learning Focus

This project was built as a learning-focused prototype to explore:

Gesture handling in React Native

Bottom sheet vs modal UX trade-offs

Handling image and video-based stories

Designing focused solutions without unnecessary features

📄 Project Status

Prototype / reference implementation

Open to feedback and discussion

Not intended as a production-ready library

🤝 Feedback

Suggestions, discussions, and UX feedback are welcome.
The goal of this project is learning and exploration.
