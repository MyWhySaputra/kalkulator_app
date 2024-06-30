import React, { useState, useCallback } from "react";
import { View, Text, FlatList, Button, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import type { HistoryItem } from "../types/app";
import { styles } from "./style";

const History = () => {

  const [history, setHistory] = useState<HistoryItem[]>([]);

  const loadHistory = async () => {
    const historyData = await AsyncStorage.getItem("history");
    if (historyData) {
      setHistory(JSON.parse(historyData));
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadHistory();
    }, [])
  );

  const deleteItem = async (id: string) => {
    const updatedHistory = history.filter((item) => item.id !== id);
    setHistory(updatedHistory);
    await AsyncStorage.setItem("history", JSON.stringify(updatedHistory));
  };

  const clearHistory = async () => {
    setHistory([]);
    await AsyncStorage.removeItem("history");
  };

  const renderItem = ({ item, index } : { item: HistoryItem; index: number }) => (
    <View style={styles.historyItem}>
      <Text style={styles.historyIndex}>{index + 1}</Text>
      <Text style={styles.historyText}>
        {item.calculation} = {item.result}
      </Text>
      <Button
        title="Delete"
        onPress={() => deleteItem(item.id)}
        color="#d9534f"
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Calculation History</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Clear All History"
        onPress={clearHistory}
        color="#d9534f"
      />
    </View>
  );
};

export default History;
