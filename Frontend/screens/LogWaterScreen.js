// screens/LogWaterScreen.js
import React, { useState, useContext } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { WaterIntakeContext } from './WaterIntakeContext';

const LogWaterScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const { addWaterIntake } = useContext(WaterIntakeContext);

  const handleLogWater = () => {
    if (amount) {
      addWaterIntake(parseInt(amount));
      setAmount('');
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter amount in ml"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Log Water" onPress={handleLogWater} color="#1E90FF" />
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
});

export default LogWaterScreen;
