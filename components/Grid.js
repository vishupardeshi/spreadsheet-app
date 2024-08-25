import React from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const Grid = () => {
  const { cells, setCell } = useSpreadsheetStore();

  const handleChange = (index, e) => {
    setCell(index, e.target.value);
  };

  return (
    <div className="grid grid-cols-10 gap-0">
      {cells.map((cell, index) => (
        <input
          key={index}
          type="text"
          value={cell.content}
          onChange={(e) => handleChange(index, e)}
          className="border border-gray-300 p-2 text-sm w-20 h-10"
        />
      ))}
    </div>
  );
};

export default Grid;
