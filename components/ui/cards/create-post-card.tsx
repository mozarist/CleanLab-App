import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Card from "../card";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { ImagePlus } from "lucide-react-native";

export default function CreatePostCard() {
  return (
    <Card>
      <TextInput
        style={styles.input}
        placeholder="Apa yang sedang Anda pikirkan?"
        multiline={true}
        numberOfLines={25}
        textAlignVertical="top"
      />

      <Card
        color={colors.background + "80"}
        borderThickness={size.border.thick}
        borderType="dotted"
      >
        <View style={styles.addImageContainer}>
          <ImagePlus color={colors.muted} size={size.iconSize["xl"]} />
          <View>
            <Text style={styles.addImageText}>Tambah Media</Text>
            <Text style={styles.mediaHint}>(Gambar/Video)</Text>
          </View>
        </View>
      </Card>
    </Card>
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
});
