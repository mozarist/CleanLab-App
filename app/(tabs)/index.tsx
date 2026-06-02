import { HelloWave } from "@/components/hello-wave";
import Header from "@/components/ui/blocks/header";
import Card from "@/components/ui/card";
import LaundryCard from "@/components/ui/cards/LaundryCard";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { styles } from "@/constants/styles";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from "react-native";
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
    return "Selamat pagi";
  }

  if (hour < 15) {
    return "Selamat siang";
  }

  if (hour < 18) {
    return "Selamat sore";
  }

  if (hour < 21) {
    return "Selamat malam";
  }

  return "Selamat malam";
}

export default function HomeScreen() {
  const [posts, setPosts] = useState<ApiPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://172.16.0.53:8000/api/transaksi");
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
      <ScrollView>
        <View style={styles.container}>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: size.spacing.md,
              }}
            >
              <HelloWave />
              <View>
                <Text
                  style={{
                    color: colors.foreground,
                    fontSize: size.fontSize.sm,
                  }}
                >
                  {getGreetingByTime()},
                </Text>
                <Text style={styles.title}>Bagas Firmansyah</Text>
              </View>
            </View>
          </View>

          <View style={{ gap: size.spacing.sm }}>
            <View style={{ flexDirection: "row", gap: size.spacing.sm }}>
              <Card>
                <Text
                  style={{ fontSize: size.fontSize["2xl"], fontWeight: 500 }}
                >
                  1
                </Text>
                <Text style={styles.subtitle}>Menunggu dibayar</Text>
              </Card>
              <Card>
                <Text
                  style={{ fontSize: size.fontSize["2xl"], fontWeight: 500 }}
                >
                  1
                </Text>
                <Text style={styles.subtitle}>Sedang diproses</Text>
              </Card>
            </View>
            <View style={{ flexDirection: "row", gap: size.spacing.sm }}>
              <Card>
                <Text
                  style={{ fontSize: size.fontSize["2xl"], fontWeight: 500 }}
                >
                  1
                </Text>
                <Text style={styles.subtitle}>Siap diambil</Text>
              </Card>
              <Card>
                <Text
                  style={{ fontSize: size.fontSize["2xl"], fontWeight: 500 }}
                >
                  1
                </Text>
                <Text style={styles.subtitle}>Selesai laundry</Text>
              </Card>
            </View>
          </View>

          <Text style={styles.title}>Cucian saat ini</Text>
          <View style={{ gap: size.spacing.sm }}>
            <LaundryCard service="Cuci kering" qty={3} unit="kg" payment_status="Menunggu dibayar" laundry_status="Dicuci" />
            <LaundryCard service="Cuci kering" qty={3} unit="kg" payment_status="Menunggu dibayar" laundry_status="Dicuci" />
            <LaundryCard service="Cuci kering" qty={3} unit="kg" payment_status="Menunggu dibayar" laundry_status="Dicuci" />
            <LaundryCard service="Cuci kering" qty={3} unit="kg" payment_status="Menunggu dibayar" laundry_status="Dicuci" />
            <LaundryCard service="Cuci kering" qty={3} unit="kg" payment_status="Menunggu dibayar" laundry_status="Dicuci" />
            <LaundryCard service="Cuci kering" qty={3} unit="kg" payment_status="Menunggu dibayar" laundry_status="Dicuci" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
