export type Story = {
  id: string;
  mediaUrl: string;
  type: "image" | "video";
  timestamp: number;
  text?: string;
  seen: boolean;
};

export const mockStories: Story[] = [
  {
    id: "1",
    mediaUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1080&h=1920&q=90",
    type: "image",
    timestamp: Date.now() - 1000 * 60 * 60 * 5,
    text: "Morning vibes",
    seen: true,
  },
  {
    id: "2",
    mediaUrl: "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1080&h=1920",
    type: "image",
    timestamp: Date.now() - 1000 * 60 * 60 * 4,
    seen: true,
  },
  {
    id: "3",
    mediaUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1080&h=1920&q=90",
    type: "image",
    timestamp: Date.now() - 1000 * 60 * 60 * 3,
    text: "Long drive",
    seen: false,
  },
  {
    id: "4",
    mediaUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1080&h=1920&q=90",
    type: "image",
    timestamp: Date.now() - 1000 * 60 * 60 * 2,
    seen: false,
  },
  {
    id: "5",
    mediaUrl: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1080&h=1920&q=90",
    type: "image",
    timestamp: Date.now() - 1000 * 60 * 60 * 1,
    text: "Work Time",
    seen: false,
  },
  {
  id: "6",
 mediaUrl: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  type: "video",
  timestamp: Date.now() - 1000 * 60 * 30,
  seen: false,
}


];
