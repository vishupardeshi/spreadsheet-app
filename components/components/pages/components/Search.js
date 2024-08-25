import React, { useState } from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const Search = () => {
  const [query, setQuery] = useState('');
  const { cells } = useSpreadsheetStore();

  const filteredCells = cells.filter(cell => cell.content.includes(query));

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 p-2 text-sm"
        placeholder="Search..."
      />
      <div className="grid grid-cols-10 gap-0 mt-2">
        {filteredCells.map((cell, index) => (
          <input
            key={index}
            type="text"
            value={cell.content}
            readOnly
            className="border border-gray-300 p-2 text-sm w-20 h-10 bg-gray-100"
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
