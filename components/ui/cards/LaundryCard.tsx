import { View, Text } from "react-native";
import React from "react";
import Card from "../card";
import { colors } from "@/constants/color";
import * as size from "@/constants/size";

type LaundryCardProps = {
  invoiceNumber?: string;
  service?: string;
  qty?: number;
  unit?: string;
  payment_status?: string;
  laundry_status?: string;
  onPress?: () => void;
};

export default function LaundryCard({
  invoiceNumber,
  service,
  qty,
  unit,
  payment_status,
  laundry_status,
  onPress = () => {},
}: LaundryCardProps) {
  return (
    <Card>
      <View style={{ flexDirection: "row", alignItems: "end", gap: size.spacing.xs }}>
        <Text style={{ fontSize: size.fontSize.lg, fontWeight: 500 }}>
          {service}
        </Text>
        <Text style={{ fontSize: size.fontSize.lg, fontWeight: 500 }}>
          ({qty}
          {unit})
        </Text>
      </View>
      <View style={{ flexDirection: "row", gap: size.spacing.md }}>
        <View>
          <Text style={{ color: colors.mutedForeground }}>
            Status pembayaran:
          </Text>
          <Text style={{ color: colors.primary }}>{payment_status}</Text>
        </View>
        <View>
          <Text style={{ color: colors.mutedForeground }}>Status cucian:</Text>
          <Text style={{ color: colors.primary }}>{laundry_status}</Text>
        </View>
      </View>
    </Card>
  );
}
