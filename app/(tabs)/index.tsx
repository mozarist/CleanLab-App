import { HelloWave } from "@/components/hello-wave";
import Card from "@/components/ui/card";
import LaundryCard from "@/components/ui/cards/LaundryCard";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";
import { styles } from "@/constants/styles";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { api } from "@/services/api";
import { getToken } from "@/services/token";

function getGreetingByTime(): string {
  const hour = new Date().getHours();

  if (hour < 12) return "Selamat pagi";
  if (hour < 15) return "Selamat siang";
  if (hour < 18) return "Selamat sore";

  return "Selamat malam";
}

export default function HomeScreen() {
  const [user, setUser] = useState<any>(null);

  const [transactions, setTransactions] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    async function loadData() {

      try {

        const token =
          await getToken();

        const headers = {
          Authorization:
            `Bearer ${token}`
        };

        const me =
          await api.get(
            "/me",
            { headers }
          );

        const trx =
          await api.get(
            "/transactions",
            { headers }
          );

        setUser(
          me.data.data
        );

        console.log(
          "USER STATE:",
          JSON.stringify(user, null, 2)
        );

        setTransactions(
          trx.data.data
        );

      } catch (err) {

        console.log(err);

      } finally {

        setLoading(false);

      }
    }

    loadData();

  }, []);

  const unpaid =
    transactions.filter(
      t =>
        t.payment_status ===
        "pending"
    ).length;

  const processing =
    transactions.filter(
      t =>
        [
          "antrian",
          "dicuci",
          "disetrika",
        ].includes(
          t.status
        )
    ).length;

  const ready =
    transactions.filter(
      t =>
        t.status ===
        "siap_diambil"
    ).length;

  const completed =
    transactions.filter(
      t =>
        t.status ===
        "diambil"
    ).length;

  const currentLaundry =
    transactions.filter(
      t =>
        t.status !==
        "diambil"
    );

  if (loading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={styles.safeAreaView}
    >
      <FlatList
        data={currentLaundry}

        keyExtractor={(item) =>
          item.id.toString()
        }

        ListHeaderComponent={
          <View
            style={styles.container}
          >
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
                    color:
                      colors.foreground,
                    fontSize:
                      size.fontSize.sm,
                  }}
                >
                  {getGreetingByTime()},
                </Text>

                <Text
                  style={styles.title}
                >
                  {user?.name ??
                    "User"}
                  !
                </Text>
              </View>
            </View>

            <View
              style={{
                gap:
                  size.spacing.sm,
                marginTop: 20,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap:
                    size.spacing.sm,
                }}
              >
                <Card>
                  <Text
                    style={
                      styles.summaryTitle
                    }
                  >
                    {unpaid}
                  </Text>

                  <Text
                    style={
                      styles.subtitle
                    }
                  >
                    Menunggu dibayar
                  </Text>
                </Card>

                <Card>
                  <Text
                    style={
                      styles.summaryTitle
                    }
                  >
                    {processing}
                  </Text>

                  <Text
                    style={
                      styles.subtitle
                    }
                  >
                    Sedang diproses
                  </Text>
                </Card>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  gap:
                    size.spacing.sm,
                }}
              >
                <Card>
                  <Text
                    style={
                      styles.summaryTitle
                    }
                  >
                    {ready}
                  </Text>

                  <Text
                    style={
                      styles.subtitle
                    }
                  >
                    Siap diambil
                  </Text>
                </Card>

                <Card>
                  <Text
                    style={
                      styles.summaryTitle
                    }
                  >
                    {completed}
                  </Text>

                  <Text
                    style={
                      styles.subtitle
                    }
                  >
                    Selesai laundry
                  </Text>
                </Card>
              </View>
            </View>

            <Text
              style={[
                styles.title,
                {
                  marginTop: 24,
                  marginBottom: 12,
                },
              ]}
            >
              Cucian saat ini
            </Text>
          </View>
        }

        renderItem={({ item }) => (
          <LaundryCard
            service={
              item.service
                ?.service_name ??
              "-"
            }

            qty={
              item.quantity
            }

            unit={
              item.service
                ?.unit ?? "-"
            }

            payment_status={
              item.payment_status
            }

            laundry_status={
              item.status
            }
          />
        )}

        contentContainerStyle={{
          paddingBottom: 40,
        }}
      />
    </SafeAreaView>
  );
}