// import { useState } from 'react';
// import StepForm from './StepForm';
// import StepTable from './StepTable';

// interface Step {
//   date: string;
//   distance: number;
// }

// const StepTracker = () => {
//   const [steps, setSteps] = useState<Step[]>([]);

//   const addStep = (date: string, distance: number) => {
//     setSteps(prevSteps => {
//       const existingStep = prevSteps.find(step => step.date === date);
//       if (existingStep) {
//         return prevSteps.map(step =>
//           step.date === date
//             ? { ...step, distance: step.distance + distance }
//             : step
//         );
//       } else {
//         const newStep = { date, distance };
//         const newSteps = [...prevSteps, newStep];
//         return newSteps.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
//       }
//     });
//   };

//   const deleteStep = (dateToDelete: string) => {
//     setSteps(prevSteps => prevSteps.filter(step => step.date !== dateToDelete));
//   };

//   return (
//     <div className="container">
//       <StepForm onAddStep={addStep} />
//       <StepTable steps={steps} onDeleteStep={deleteStep} />
//     </div>
//   );
// };

// export default StepTracker;

import { useState } from 'react';
import StepForm from './StepForm';
import StepTable from './StepTable';

interface Step {
  date: string;
  distance: number;
}

const StepTracker = () => {
  const [steps, setSteps] = useState<Step[]>([]);
  const [editDate, setEditDate] = useState<string | null>(null); // Дата для редактирования
  const [editDistance, setEditDistance] = useState<number | null>(null); // Расстояние для редактирования
  const [originalDate, setOriginalDate] = useState<string | null>(null); // Оригинальная дата для редактирования

  const addOrUpdateStep = (date: string, distance: number) => {
    setSteps(prevSteps => {
      if (originalDate && originalDate !== date) {
        // Удаляем старую запись, если изменена дата
        const filteredSteps = prevSteps.filter(step => step.date !== originalDate);
        return [...filteredSteps, { date, distance }].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      } else {
        const existingStep = prevSteps.find(step => step.date === date);
        if (existingStep) {
          // Обновление существующей записи
          return prevSteps.map(step =>
            step.date === date
              ? { ...step, distance }
              : step
          );
        } else {
          // Добавление новой записи
          const newStep = { date, distance };
          return [...prevSteps, newStep].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        }
      }
    });

    // Очищаем поля редактирования
    resetEdit();
  };

  const resetEdit = () => {
    setEditDate(null);
    setEditDistance(null);
    setOriginalDate(null);
  };

  const deleteStep = (dateToDelete: string) => {
    setSteps(prevSteps => prevSteps.filter(step => step.date !== dateToDelete));
    resetEdit();
  };

  const editStep = (date: string, distance: number) => {
    setEditDate(date);
    setEditDistance(distance);
    setOriginalDate(date); // Сохраняем оригинальную дату для редактирования
  };

  return (
    <div className="container">
      <StepForm onAddStep={addOrUpdateStep} editDate={editDate} editDistance={editDistance} />
      <StepTable steps={steps} onDeleteStep={deleteStep} onEditStep={editStep} />
    </div>
  );
};

export default StepTracker;

