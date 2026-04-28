import { View, Text, ScrollView, KeyboardAvoidingView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "@/constants/styles";
import Header2 from "@/components/ui/blocks/header2";
import CreatePostCard from "@/components/ui/cards/create-post-card";
import Button from "@/components/ui/button";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { SquarePen } from "lucide-react-native";
import Input from "@/components/ui/text-input";

export default function CreatePostScreen() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header2 title="Postingan baru" />

      <ScrollView contentContainerStyle={styles.container}>
          <CreatePostCard />

        <Input placeholder="Lokasi (Opsional)" />
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
