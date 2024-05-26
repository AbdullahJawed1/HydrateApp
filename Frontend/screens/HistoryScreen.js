// screens/HistoryScreen.js
import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { WaterIntakeContext } from './WaterIntakeContext';

const HistoryScreen = () => {
  const { waterIntakeLogs, fetchIntakeLogs } = useContext(WaterIntakeContext);

  useEffect(() => {
    fetchIntakeLogs();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>History of Water Intake</Text>
      <FlatList
  data={waterIntakeLogs}
  keyExtractor={(item) => item ? item.id.toString() : null}
  renderItem={({ item }) => (
    <Text style={styles.log}>
      {item ? `${new Date(item.date).toLocaleDateString()} - ${item.amount} ml` : 'Invalid Log'}
    </Text>
  )}
/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F8FF',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: '#333',
  },
  log: {
    fontSize: 16,
    marginVertical: 5,
    color: '#555',
  },
});

export default HistoryScreen;
