import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { WaterIntakeContext } from './WaterIntakeContext';

const SettingsScreen = () => {
  const [goal, setGoalInput] = useState('');
  const { dailyGoal, setGoal, fetchDailyGoal } = useContext(WaterIntakeContext);

  useEffect(() => {
    if (dailyGoal) {
      setGoalInput(dailyGoal.toString());
    }
  }, [dailyGoal]);

  const handleSetGoal = () => {
    if (goal) {
      setGoal(goal);
      setGoalInput('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Current Daily Goal: {dailyGoal} ml</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter daily goal in ml"
        keyboardType="numeric"
        value={goal}
        onChangeText={setGoalInput}
      />
      <Button title="Set Goal" onPress={handleSetGoal} color="#1E90FF" />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: '#333',
  },
});

export default SettingsScreen;
