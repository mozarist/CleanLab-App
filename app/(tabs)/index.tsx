import Header from "@/components/ui/blocks/header";
import PostCard from "@/components/ui/cards/post-card";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { styles } from "@/constants/styles";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ApiPost = {
  id: number;
  authentication: string;
  content: string;
  caption: string | null;
  tagline:
    | "senang"
    | "sedih"
    | "marah"
    | "tenang"
    | "terkejut"
    | "takut"
    | null;
  hashtags: string[] | null;
  likes: number | null;
  reposts: number | null;
  location: string | null;
};

type ApiResponse = {
  data: ApiPost[];
};

function getGreetingByTime(): string {
  const hour = new Date().getHours();

  if (hour < 12) {
    return "Good morning";
  }

  if (hour < 17) {
    return "Good afternoon";
  }

  if (hour < 21) {
    return "Good evening";
  }

  return "Good night";
}

function getGreetingText(): string {
  return `${getGreetingByTime()}!`;
}

export default function HomeScreen() {
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://172.16.0.70:8000/api/posts");
      const json: ApiResponse = await response.json();
      console.log("API Response:", json);
      console.log("Data:", json.data);
      console.log("Is Array:", Array.isArray(json.data));
      setPosts(Array.isArray(json.data) ? json.data : []);
    } catch (error) {
      console.error("Fetch Error:", error);
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header />

      <View style={styles.container}>
        <Text style={styles.headerText}>{getGreetingText()}</Text>
      </View>
    </SafeAreaView>
  );
}
