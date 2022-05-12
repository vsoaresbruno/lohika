import React, { createContext, useEffect, useState, useContext } from 'react';
import usePrevious from '../hooks/usePrevious';
import FormContext from './formContext';

import { groupRepeatedUnits, createRepetition } from '../utils/repetition';

interface IGridContext {
  divNum: number;
  columnTemplate: string;
  lineTemplate: string;
}

const GridContext = createContext<IGridContext>(null as any);

const createArr = (
  num: number,
  updater: React.Dispatch<React.SetStateAction<any>>
) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push({ unit: '1fr' });
  }
  updater(arr);
};

const adjustArr = (
  oldValue: number,
  newValue: number,
  arr: React.SetStateAction<any>
) => {
  let diff;
  if (newValue > oldValue) {
    diff = newValue - oldValue;
    for (let i = 0; i < diff; i++) {
      arr.push({ unit: '1fr' });
    }
  } else {
    diff = oldValue - newValue;
    for (let i = 0; i < diff; i++) {
      arr.pop();
    }
  }
  return arr;
};

export default GridContext;

export const GridProvider = ({ children }: { children: React.ReactNode }) => {
  let { columns, lines } = useContext(FormContext);

  let [colArr, setColArr] = useState<[]>([]);
  let [lineArr, setLineArr] = useState<[]>([]);
  let [columnTemplate, setColumnTemplate] = useState<string>('');
  let [lineTemplate, setLineTemplate] = useState<string>('');
  let [divNum, setDivNum] = useState<number>(0);
  let [childArea, setChildArea] = useState<[]>([]);

  let { lines: previousLines, columns: previousColumns } = usePrevious({
    lines,
    columns,
  });

  useEffect(() => {
    createArr(columns, setColArr);
    createArr(lines, setLineArr);
    setDivNum(columns * lines);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const groupColumns = groupRepeatedUnits(colArr);
    const repeatedColumns = createRepetition(groupColumns);
    setColumnTemplate(repeatedColumns);
  }, [colArr]);

  useEffect(() => {
    const groupLines = groupRepeatedUnits(lineArr);
    const repeatedLines = createRepetition(groupLines);
    setLineTemplate(repeatedLines);
  }, [lineArr]);

  useEffect(() => {
    let arr = [...lineArr];
    setLineArr(adjustArr(previousLines, lines, arr));
    setDivNum(columns * lines);
    // eslint-disable-next-line
  }, [lines]);

  useEffect(() => {
    let arr = [...colArr];
    setColArr(adjustArr(previousColumns, columns, arr));
    setDivNum(columns * lines);
    // eslint-disable-next-line
  }, [columns]);

  let value = {
    colArr,
    lineArr,
    setColArr,
    setLineArr,
    divNum,
    columnTemplate,
    lineTemplate,
    childArea,
    setChildArea,
  };
  return (
    <>
      <GridContext.Provider value={{ ...value }}>
        {children}
      </GridContext.Provider>
    </>
  );
};
