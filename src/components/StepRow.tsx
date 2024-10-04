interface StepRowProps {
  date: string;
  distance: number;
  onDelete: () => void;
  onEdit: () => void;
}

const StepRow: React.FC<StepRowProps> = ({ date, distance, onDelete, onEdit }) => {
  const formattedDate = date.split('-').reverse().join('.'); 

  return (
    <tr>
      <td>{formattedDate}</td>
      <td>{distance}</td>
      <td>
        <button className="edit-btn" onClick={onEdit}>✎</button>
        <button className="delete-btn" onClick={onDelete}>✘</button>
      </td>
    </tr>
  );
};

export default StepRow;
