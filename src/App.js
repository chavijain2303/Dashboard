import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyTasks from './Components/MyTask';
import NewTask from './Components/NewTask';
import Dashboard from './Components/Dashboard';
import './App.css';
import './index.css';

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/my-tasks" element={<MyTasks />} />
        <Route path="/new-task" element={<NewTask />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
