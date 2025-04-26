import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Get all expenses
export const getExpenses = async () => {
  try {
    const response = await axios.get(`${API_URL}/expenses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw error;
  }
};

// Get a single expense
export const getExpense = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/expenses/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching expense with id ${id}:`, error);
    throw error;
  }
};

// Add a new expense
export const addExpense = async (expenseData) => {
  try {
    const response = await axios.post(`${API_URL}/expenses`, expenseData);
    return response.data;
  } catch (error) {
    console.error('Error adding expense:', error);
    throw error;
  }
};

// Update an expense
export const updateExpense = async (id, expenseData) => {
  try {
    const response = await axios.put(`${API_URL}/expenses/${id}`, expenseData);
    return response.data;
  } catch (error) {
    console.error(`Error updating expense with id ${id}:`, error);
    throw error;
  }
};

// Delete an expense
export const deleteExpense = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/expenses/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting expense with id ${id}:`, error);
    throw error;
  }
}; 