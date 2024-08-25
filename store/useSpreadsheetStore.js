import create from 'zustand';

const useSpreadsheetStore = create((set) => ({
  cells: Array.from({ length: 1000 }, () => ({ content: '', format: {} })),
  setCell: (index, content, format) => set((state) => {
    const cells = [...state.cells];
    cells[index] = { content, format };
    return { cells };
  }),
  undoStack: [],
  redoStack: [],
  pushUndo: (state) => set((prev) => ({ undoStack: [...prev.undoStack, state] })),
  undo: () => set((prev) => {
    const lastState = prev.undoStack.pop();
    return lastState ? { cells: lastState.cells, undoStack: prev.undoStack } : prev;
  }),
}));

export default useSpreadsheetStore;
