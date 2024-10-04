import StepRow from './StepRow';

interface Step {
  date: string;
  distance: number;
}

interface StepTableProps {
  steps: Step[];
  onDeleteStep: (date: string) => void;
  onEditStep: (date: string, distance: number) => void;
}

const StepTable: React.FC<StepTableProps> = ({ steps, onDeleteStep, onEditStep }) => {
  return (
    <table className="step-table">
      <thead>
        <tr>
          <th>Дата (ДД.ММ.ГГГГ)</th>
          <th>Пройдено км</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {steps.map(step => (
          <StepRow
            key={step.date}
            date={step.date}
            distance={step.distance}
            onDelete={() => onDeleteStep(step.date)}
            onEdit={() => onEditStep(step.date, step.distance)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default StepTable;
