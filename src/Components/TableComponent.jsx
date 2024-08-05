import React, { useState } from 'react';

const TableComponent = ({ title, data, columns }) => {
  const [expandedRows, setExpandedRows] = useState({});
  const [visibleColumns, setVisibleColumns] = useState(columns);

  const toggleRow = (rowIndex) => {
    setExpandedRows(prev => ({ ...prev, [rowIndex]: !prev[rowIndex] }));
  };

  const toggleColumn = (columnIndex) => {
    setVisibleColumns(prev =>
      prev.map((col, index) => 
        index === columnIndex ? { ...col, visible: !col.visible } : col
      )
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:table-row block md:table-header-group">
            {visibleColumns.map((col, index) => (
              <th
                key={index}
                onClick={() => toggleColumn(index)}
                className={`p-2 border border-gray-300 cursor-pointer md:table-cell block ${col.visible ? '' : 'hidden'}`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {data.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr
                onClick={() => toggleRow(rowIndex)}
                className="border border-gray-300 md:table-row block md:table-row group"
              >
                {visibleColumns.map((col, index) => (
                  <td key={index} className={`p-2 border border-gray-300 md:table-cell block ${col.visible ? '' : 'hidden'}`}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
              {expandedRows[rowIndex] && (
                <tr className="bg-gray-100 md:table-row block md:table-row">
                  <td colSpan={visibleColumns.length} className="p-2 border border-gray-300 md:table-cell block">
                    <div className="p-2">
                      {Object.keys(row.additionalDetails).map((key, idx) => (
                        <p key={idx}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {row.additionalDetails[key]}</p>
                      ))}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
