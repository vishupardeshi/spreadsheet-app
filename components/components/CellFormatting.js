import React from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const CellFormatting = () => {
  const { cells, setCell } = useSpreadsheetStore();

  const handleFormatChange = (index, format) => {
    setCell(index, cells[index].content, format);
  };

  return (
    <div className="mb-4">
      <button onClick={() => handleFormatChange(0, { textAlign: 'left' })}>Align Left</button>
      <button onClick={() => handleFormatChange(0, { textAlign: 'center' })}>Align Center</button>
      <button onClick={() => handleFormatChange(0, { textAlign: 'right' })}>Align Right</button>
    </div>
  );
};

export default CellFormatting;
