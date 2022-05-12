import React, { createContext, useState } from 'react';

interface IFormContext {
  columns: number;
  lines: number;
  setColumns: any;
  setLines: any;
  currentColumns: number;
  setCurrentColumns: any;
  currentLines: number;
  setCurrentLines: any;
}

const FormContext = createContext<IFormContext>(null as any);
export default FormContext;

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  let [columns, setColumns] = useState(0);
  let [lines, setLines] = useState(0);
  let [currentColumns, setCurrentColumns] = useState(0);
  let [currentLines, setCurrentLines] = useState(0);

  let value = {
    columns,
    setColumns,
    lines,
    setLines,
    currentColumns,
    setCurrentColumns,
    currentLines,
    setCurrentLines,
  };
  return (
    <FormContext.Provider value={{ ...value }}>{children}</FormContext.Provider>
  );
};
