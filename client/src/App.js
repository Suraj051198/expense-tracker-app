import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AddExpense from './pages/AddExpense';
import Dashboard from './pages/Dashboard';
import EditExpense from './pages/EditExpense';
import ExpenseList from './pages/ExpenseList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/expenses" element={<ExpenseList />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/edit-expense/:id" element={<EditExpense />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
