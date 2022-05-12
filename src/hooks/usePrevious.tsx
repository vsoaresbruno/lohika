import { useRef, useEffect } from 'react';

const usePrevious = (value: { lines: number; columns: number }) => {
  const ref = useRef({ columns: 0, lines: 0 });
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export default usePrevious;
