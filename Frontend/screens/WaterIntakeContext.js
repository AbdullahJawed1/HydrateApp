import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "http://192.168.0.126:3000";

export const WaterIntakeContext = createContext();

export const WaterIntakeProvider = ({ children }) => {
  const [waterIntakeLogs, setWaterIntakeLogs] = useState([]);
  const [dailyGoal, setDailyGoal] = useState('');

  useEffect(() => {
    fetchDailyGoal();
  }, []);

  const addWaterIntake = async (amount) => {
    try {
      const response = await axios.post(`${API_URL}/intake`, { amount });
      setWaterIntakeLogs([...waterIntakeLogs, response.data]);
      // After adding intake, fetch the updated daily goal
      fetchDailyGoal();
    } catch (error) {
      console.error("Error logging water intake:", error);
    }
  };

  const fetchIntakeLogs = async () => {
    try {
      const response = await axios.get(`${API_URL}/history`);
      setWaterIntakeLogs(response.data);
    } catch (error) {
      console.error("Error fetching water intake logs:", error);
    }
  };

  const fetchDailyGoal = async () => {
    try {
      const response = await axios.get(`${API_URL}/goal`);
      setDailyGoal(response.data.goal);
    } catch (error) {
      console.error("Error fetching daily goal:", error);
    }
  };

  const setGoal = async (goal) => {
    try {
      const response = await axios.post(`${API_URL}/goal`, { goal });
      setDailyGoal(response.data.goal);
    } catch (error) {
      console.error("Error setting daily goal:", error);
    }
  };

  return (
    <WaterIntakeContext.Provider value={{ waterIntakeLogs, addWaterIntake, dailyGoal, setGoal, fetchIntakeLogs, fetchDailyGoal }}>
      {children}
    </WaterIntakeContext.Provider>
  );
};
