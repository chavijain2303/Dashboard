import React from 'react';
import { FaTasks, FaUserPlus, FaUser, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-blue-100 min-h-screen p-4">

      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Assigned Tasks</h2>
        <ul>
          <li className="mb-2"><FaTasks className="inline-block mr-2" />Dashboard</li>
          <li className="mb-2"><FaUser className="inline-block mr-2" />Employees</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Unassigned Tasks</h2>
        <ul>
          <li className="mb-2"><FaUserPlus className="inline-block mr-2" />Assign Department</li>
          <li className="mb-2"><FaUser className="inline-block mr-2" />Assign Employee</li>
        </ul>
      </div>
      <div className="mb-8">
        <button className="bg-red-500 text-white p-2 rounded-md"><FaSignOutAlt className="inline-block mr-2" />Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
