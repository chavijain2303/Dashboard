import React from 'react';
import TableComponent from './TableComponent';
import { tablesData } from '../Data/DummyData';
import Sidebar from './Sidebar';
import TopBar from './Topbar';


const Dashboard = () => {
    return (
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <TopBar />
          <div className="p-4">
            {tablesData.map((table, index) => (
              <TableComponent
                key={index}
                title={table.title}
                data={table.data}
                columns={table.columns}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Dashboard;


