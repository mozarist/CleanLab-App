import Header from "@/components/ui/blocks/header";
import Button from "@/components/ui/button";
import PostCard from "@/components/ui/cards/post-card";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { styles } from "@/constants/styles";
import { User } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { api } from "@/services/api";

export default function ProfileScreen() {

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogout() {

    try {

      setIsLoading(true);

      const token =
        await SecureStore.getItemAsync(
          "token"
        );

      await api.post(
        "/logout",
        {},
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

    } catch (error) {

      console.log(
        "Logout error:",
        error
      );

    } finally {

      await SecureStore.deleteItemAsync(
        "token"
      );

      router.replace(
        "/login"
      );

      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={localStyles.avatarRow}>
          <View style={localStyles.avatarCircle}>
            <User size={size.iconSize['4xl']} color={colors.primary + 50} />
          </View>

        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={localStyles.username}>Bagas Firmansyah</Text>
          <Text style={localStyles.email}>bagas.firmansyah@gmail.com</Text>
        </View>

        <Text style={localStyles.bio}>
          Jl. Soekarno Hatta No. 74, Palembang, Sumatera Selatan
        </Text>

        <Button
          label={
            isLoading
              ? "Logging out..."
              : "Log out"
          }
          color={colors.destructive}
          onPress={handleLogout}
        />
      </View>

      {/* {isLoading && posts.length === 0 ? (
        <View style={localStyles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <PostCard
              name={item.authentication}
              coverUri={item.content}
              caption={item.caption ?? "Post caption"}
              status={item.tagline}
              tags={item.hashtags ?? []}
              likes={item.likes ?? 0}
              reposts={item.reposts ?? 0}
              comments={0}
              location={item.location ?? "Location"}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          onRefresh={getPosts}
          refreshing={isLoading}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={localStyles.empty}>Belum ada postingan</Text>
          }
        />
      )} */}

    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  headerContainer: {
    padding: size.spacing.lg,
    gap: size.spacing.md,
  },
  avatarRow: {
    gap: size.spacing.md,
    alignItems: "center",
  },
  avatarCircle: {
    width: 128,
    height: 128,
    borderRadius: 72,
    backgroundColor: colors.mutedForeground + "20",
    alignItems: "center",
    justifyContent: "center",
  },
  username: {
    fontSize: size.fontSize.lg,
    color: colors.foreground,
    fontWeight: "500",
  },
  email: {
    fontSize: size.fontSize.sm,
    color: colors.mutedForeground,
  },
  bio: {
    color: colors.mutedForeground,
    textAlign: "center",
    fontSize: size.fontSize.md,
  },
  statsRow: {
    flexDirection: "row",
    gap: size.spacing.xl,
    marginTop: size.spacing.sm,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: size.fontSize.lg,
    fontWeight: "700",
    color: colors.foreground,
  },
  statLabel: {
    fontSize: size.fontSize.xs,
    color: colors.mutedForeground,
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  empty: {
    color: colors.muted,
    textAlign: "center",
    marginTop: size.spacing.xl,
  },
});
