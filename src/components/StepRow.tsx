// import React from 'react';

// interface StepRowProps {
//   date: string;
//   distance: number;
//   onDelete: () => void;
//   onEdit: () => void;
// }

// const StepRow: React.FC<StepRowProps> = ({ date, distance, onDelete, onEdit }) => {
//   // Преобразуем дату из формата YYYY-MM-DD в ДД.ММ.ГГГГ для отображения
//   const formattedDate = date.split('-').reverse().join('.'); // Из YYYY-MM-DD в ДД.ММ.ГГГГ

//   return (
//     <tr>
//       <td>{formattedDate}</td>
//       <td>{distance}</td>
//       <td>
//         <button className="edit-btn" onClick={onEdit}>✎</button>
//         <button className="delete-btn" onClick={onDelete}>✘</button>
//       </td>
//     </tr>
//   );
// };

// export default StepRow;

import React from 'react';

interface StepRowProps {
  date: string;
  distance: number;
  onDelete: () => void;
  onEdit: () => void; // Функция для редактирования
}

const StepRow: React.FC<StepRowProps> = ({ date, distance, onDelete, onEdit }) => {
  // Преобразуем дату из формата YYYY-MM-DD в ДД.ММ.ГГГГ для отображения
  const formattedDate = date.split('-').reverse().join('.'); // Преобразуем в ДД.ММ.ГГГГ

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
