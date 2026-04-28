import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { VideoView, useVideoPlayer } from "expo-video";
import { ImagePlus, Trash2 } from "lucide-react-native";
import React, { useState } from "react";
import {
    Alert,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import Card from "../card";

export default function CreatePostCard() {
  const [media, setMedia] = useState<ImagePicker.ImagePickerAsset | null>(null);

  function removeMedia() {
    setMedia(null);
  }

  async function pickMedia() {
    try {
      const permission =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        Alert.alert(
          "Izin diperlukan",
          "Aplikasi butuh akses galeri untuk memilih gambar atau video.",
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setMedia(result.assets[0]);
      }
    } catch (err) {
      console.warn("pickMedia error", err);
    }
  }

  return (
    <Card>
      <TextInput
        style={styles.input}
        placeholder="Apa yang sedang Anda pikirkan?"
        multiline={true}
        numberOfLines={25}
        textAlignVertical="top"
      />
      {media ? (
        <Card
          onPress={pickMedia}
          borderThickness={size.border.medium}
          borderType="dashed"
        >
          {media.mimeType?.startsWith("video/") ? (
            <VideoPreview uri={media.uri} />
          ) : (
            <Image source={{ uri: media.uri }} style={styles.preview} />
          )}

          <View style={styles.mediaActions}>
            <Text style={styles.addImageText}>Ganti Media</Text>

            <Pressable onPress={removeMedia} style={styles.removeButton}>
              <Trash2 color={colors.danger} size={size.iconSize.sm} />
              <Text style={styles.removeButtonText}>Hapus Media</Text>
            </Pressable>
          </View>
        </Card>
      ) : (
        <Card
          onPress={pickMedia}
          borderThickness={size.border.medium}
          borderType="dashed"
        >
          <View style={styles.addImageContainer}>
            <ImagePlus color={colors.muted} size={size.iconSize["xl"]} />
            <View>
              <Text style={styles.addImageText}>Tambah Media</Text>
              <Text style={styles.mediaHint}>(Gambar/Video)</Text>
            </View>
          </View>
        </Card>
      )}
    </Card>
  );
}

function VideoPreview({ uri }: { uri: string }) {
  const player = useVideoPlayer(uri, (playerInstance) => {
    playerInstance.loop = false;
  });

  return (
    <VideoView
      player={player}
      nativeControls
      contentFit="contain"
      style={styles.preview}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    fontWeight: 500,
    minHeight: 115,
  },
  addImageContainer: {
    width: "100%",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    gap: size.spacing.sm,
  },
  addImageText: {
    fontSize: size.fontSize.md,
    fontWeight: 500,
    color: colors.muted,
    textAlign: "center",
  },
  mediaHint: {
    fontSize: size.fontSize.xs,
    color: colors.muted,
    textAlign: "center",
  },
  preview: {
    width: "100%",
    height: 250,
    borderRadius: size.radius.md,
    overflow: "hidden",
  },
  mediaActions: {
    gap: size.spacing.sm,
    alignItems: "center",
  },
  removeButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: size.spacing.xs,
    paddingVertical: size.spacing.xs,
    paddingHorizontal: size.spacing.sm,
  },
  removeButtonText: {
    fontSize: size.fontSize.sm,
    color: colors.danger,
    fontWeight: "600",
  },
});
