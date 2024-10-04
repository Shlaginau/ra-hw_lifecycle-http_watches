import { useState } from 'react';
import StepForm from './StepForm';
import StepTable from './StepTable';

interface Step {
  date: string;
  distance: number;
}

const StepTracker = () => {
  const [steps, setSteps] = useState<Step[]>([]);
  const [editDate, setEditDate] = useState<string | null>(null); 
  const [editDistance, setEditDistance] = useState<number | null>(null);
  const [originalDate, setOriginalDate] = useState<string | null>(null);

  const addOrUpdateStep = (date: string, distance: number) => {
    setSteps(prevSteps => {
      if (originalDate && originalDate !== date) {
        const filteredSteps = prevSteps.filter(step => step.date !== originalDate);
        return [...filteredSteps, { date, distance }].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      } else {
        const existingStep = prevSteps.find(step => step.date === date);
        if (existingStep) {
          return prevSteps.map(step =>
            step.date === date
              ? { ...step, distance }
              : step
          );
        } else {
          const newStep = { date, distance };
          return [...prevSteps, newStep].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        }
      }
    });

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
    setOriginalDate(date);
  };

  return (
    <div className="container">
      <StepForm onAddStep={addOrUpdateStep} editDate={editDate} editDistance={editDistance} />
      <StepTable steps={steps} onDeleteStep={deleteStep} onEditStep={editStep} />
    </div>
  );
};

export default StepTracker;

