import Grid from '../components/Grid';
import CellFormatting from '../components/CellFormatting';
import UndoRedo from '../components/UndoRedo';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <UndoRedo />
      <CellFormatting />
      <Grid />
    </div>
  );
}
