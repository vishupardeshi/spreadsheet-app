import React from 'react';
import useSpreadsheetStore from '../store/useSpreadsheetStore';

const UndoRedo = () => {
  const { undo, redo } = useSpreadsheetStore();

  return (
    <div className="mb-4">
      <button onClick={undo} className="mr-2 p-2 border">Undo</button>
      <button onClick={redo} className="p-2 border">Redo</button>
    </div>
  );
};

export default UndoRedo;
