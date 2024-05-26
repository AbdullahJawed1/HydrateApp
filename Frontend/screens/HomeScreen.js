// screens/HomeScreen.js
import React, { useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { WaterIntakeContext } from './WaterIntakeContext';

const HomeScreen = ({ navigation }) => {
  const { waterIntakeLogs, dailyGoal, fetchIntakeLogs, fetchDailyGoal } = useContext(WaterIntakeContext);
  const totalIntake = waterIntakeLogs.reduce((sum, log) => {
    if (log && typeof log.amount === 'number') {
      return sum + log.amount;
    }
    return sum;
  }, 0);
  
  useEffect(() => {
    fetchIntakeLogs();
    fetchDailyGoal();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Today's Water Intake: {totalIntake} ml</Text>
      <Text style={styles.text}>Daily Goal: {dailyGoal} ml</Text>
      <Button
        title="Log Water"
        onPress={() => navigation.navigate('Log Water')}
        color="#1E90FF"
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
});

export default HomeScreen;
