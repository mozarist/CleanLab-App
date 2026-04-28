import Header2 from "@/components/ui/blocks/header2";
import Button from "@/components/ui/button";
import CreatePostCard from "@/components/ui/cards/create-post-card";
import Input from "@/components/ui/text-input";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { styles } from "@/constants/styles";
import { Hash, MapPin, SmilePlus, SquarePen } from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const moods = [
  { label: "senang", color: colors.happy },
  { label: "sedih", color: colors.sad },
  { label: "marah", color: colors.angry },
  { label: "tenang", color: colors.chill },
  { label: "terkejut", color: colors.surprised },
  { label: "takut", color: colors.scared },
];

export default function CreatePostScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header2 title="Postingan baru" />

      <ScrollView contentContainerStyle={styles.container}>
        <CreatePostCard />

        <View style={localStyles.moodSection}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: size.spacing.sm }}>
            <SmilePlus size={size.iconSize.md} color={colors.foreground} fill={colors.accent} />
            <Text style={localStyles.moodTitle}>Vibe Check</Text>
          </View>

          <View style={localStyles.moodGrid}>
            {moods.map((mood) => {
              const isActive = selectedMood === mood.label;

              return (
                <Button
                  key={mood.label}
                  label={mood.label}
                  onPress={() => setSelectedMood(mood.label)}
                  rounded={size.radius.full}
                  color={isActive ? `${mood.color}20` : colors.secondary}
                  labelColor={isActive ? mood.color : colors.foreground}
                  OutlineColor={isActive ? mood.color : colors.border}
                  style={localStyles.moodButton}
                />
              );
            })}
          </View>
        </View>

        <Input
          placeholder="Tag kategori (Opsional)"
          radius={size.radius.full}
          icon={<Hash size={size.iconSize.md} color={colors.foreground} />}
        />

        <Input
          placeholder="Lokasi (Opsional)"
          radius={size.radius.full}
          icon={<MapPin size={size.iconSize.md} color={colors.foreground} />}
        />
      </ScrollView>

      <View style={styles.bottomTab}>
        <View style={{ flex: 1 }}>
          <Button
            label="Buat Postingan"
            icon={SquarePen}
            color={colors.foreground}
            rounded={size.radius.full}
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  moodSection: {
    gap: size.spacing.md,
  },
  moodTitle: {
    fontSize: size.fontSize.md,
    fontWeight: "600",
    color: colors.foreground,
  },
  moodGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: size.spacing.sm,
  },
  moodButton: {
    flexGrow: 1,
    flexBasis: "30%",
  },
});
