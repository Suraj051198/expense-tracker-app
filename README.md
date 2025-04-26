# Expense Tracker Application

A full-stack expense tracker application built with React, Node.js, Express, and MongoDB.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Installation and Setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [How to Use the Application](#how-to-use-the-application)
- [Screenshots](#screenshots)
- [Author](#author)

## Overview

This expense tracker allows users to record, manage, and visualize their expenses. Users can categorize expenses, view spending patterns, and track financial history.

## Features

- **Expense Management**: Add, edit, and delete expense records
- **Expense Categorization**: Organize expenses by predefined categories
- **Data Visualization**:
  - Pie chart showing expense distribution by category
  - Bar chart showing monthly expense trends
- **Responsive Design**: Works on desktop and mobile devices

## Project Structure

```
expense-tracker/
├── client/                 # React frontend
│   ├── public/             # Static files
│   └── src/
│       ├── components/     # Reusable components
│       ├── pages/          # Page components
│       └── services/       # API service
└── server/                 # Node.js backend
    ├── models/             # MongoDB models
    └── routes/             # API routes
```

## Technology Stack

- **Frontend**:
  - React.js
  - React Router for navigation
  - Chart.js for data visualization
  - Axios for API requests
  - Bootstrap for UI components

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB for database

## Installation and Setup

### Prerequisites

- Node.js (v14 or later)
- MongoDB (running on localhost:27017)
- Git

### Backend Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd expense-tracker
   ```

2. Install backend dependencies:
   ```
   cd server
   npm install
   ```

3. Start the backend server:
   ```
   npm run dev
   ```
   The server will run on http://localhost:5000

### Frontend Setup

1. Open a new terminal window/tab

2. Install frontend dependencies:
   ```
   cd expense-tracker/client
   npm install
   ```

3. Start the React development server:
   ```
   npm start
   ```
   The application will open in your browser at http://localhost:3000

## API Endpoints

| Method | Endpoint            | Description                 | Request Body                                  |
|--------|---------------------|-----------------------------|----------------------------------------------|
| GET    | /expenses           | Get all expenses            | -                                            |
| GET    | /expenses/:id       | Get expense by ID           | -                                            |
| POST   | /expenses           | Create a new expense        | {amount, category, description, date}         |
| PUT    | /expenses/:id       | Update an existing expense  | {amount, category, description, date} (any)   |
| DELETE | /expenses/:id       | Delete an expense           | -                                            |

## How to Use the Application

1. **Dashboard**:
   - View summary statistics and charts
   - See total expenses, categories, and records
   - Explore visualizations: pie chart (by category) and bar chart (by month)

2. **Managing Expenses**:
   - Click "Expenses" in the navigation to see all expenses
   - Use "Add New Expense" button to create new entries
   - Each expense has "Edit" and "Delete" options

3. **Adding an Expense**:
   - Fill in amount, select category, add description, and choose date
   - Click "Add Expense" to save the record

4. **Editing an Expense**:
   - Click "Edit" on any expense
   - Update fields as needed
   - Click "Update Expense" to save changes

## Screenshots
![image](https://github.com/user-attachments/assets/9d3ebadc-7fd4-49e2-a6fa-b262a2068a81)
![image](https://github.com/user-attachments/assets/de64ae50-7c93-4eec-bef2-e1e47436b479)
![image](https://github.com/user-attachments/assets/6aef7b43-3047-4caf-85d0-e53299855600)

## Author

Created by Suraj Sonawane

- LinkedIn: [Suraj Sonawane](https://www.linkedin.com/in/sonawane-suraj/)
- GitHub: [Suraj051198](https://github.com/Suraj051198)
- Portfolio: [https://suraj05-portfolio.netlify.app/](https://suraj05-portfolio.netlify.app/)
- Contact: +91 9860055304 
