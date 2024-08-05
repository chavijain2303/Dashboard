import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return (
    <div className="bg-blue-200 p-4 flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">WORK MANAGEMENT SYSTEM</h1>
      </div>
      <div>
        <Link to="/my-tasks">
          <button className="bg-blue-800 text-white p-2 rounded-md mr-4">
            My Tasks
          </button>
        </Link>
        <Link to="/new-task">
          <button className="bg-blue-800 text-white p-2 rounded-md">
            New Task
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;