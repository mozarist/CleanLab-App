import { ScrollView, StyleSheet } from "react-native";
import { styles } from "@/constants/styles";

import { SafeAreaView } from "react-native-safe-area-context";
import PostCard from "@/components/ui/cards/post-card";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={ styles.container}>
        <PostCard />
        <PostCard />
        <PostCard />
      </ScrollView>
    </SafeAreaView>
  );
}
