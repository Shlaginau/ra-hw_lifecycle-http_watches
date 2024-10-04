// import React from 'react';
// import StepRow from './StepRow';

// interface Step {
//   date: string;
//   distance: number;
// }

// interface StepTableProps {
//   steps: Step[];
//   onDeleteStep: (date: string) => void;
// }

// const StepTable: React.FC<StepTableProps> = ({ steps, onDeleteStep }) => {
//   return (
//     <table className="step-table">
//       <thead>
//         <tr>
//           <th>Дата (ДД.ММ.ГГГГ)</th>
//           <th>Пройдено км</th>
//           <th>Действия</th>
//         </tr>
//       </thead>
//       <tbody>
//         {steps.map(step => (
//           <StepRow
//             key={step.date}
//             date={step.date}
//             distance={step.distance}
//             onDelete={() => onDeleteStep(step.date)}
//           />
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default StepTable;

import React from 'react';
import StepRow from './StepRow';

interface Step {
  date: string;
  distance: number;
}

interface StepTableProps {
  steps: Step[];
  onDeleteStep: (date: string) => void;
  onEditStep: (date: string, distance: number) => void; // Функция для редактирования
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
            onEdit={() => onEditStep(step.date, step.distance)} // Передаем данные в функцию редактирования
          />
        ))}
      </tbody>
    </table>
  );
};

export default StepTable;
