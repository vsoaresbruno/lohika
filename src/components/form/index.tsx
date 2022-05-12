import React, { useContext } from 'react';
import styled from 'styled-components/macro';

import FormContext from '../../context/formContext';

const StyledForm = styled.aside`
  margin: 30px auto;
  font-size: 17px;
  width: 500px;

  button {
    &:last-child {
      margin-left: 20px;
    }
  }
`;

const StyledFieldsetGroup = styled.div`
  display: flex;

  fieldset {
    &:first-child {
      margin-right: 20px;
    }
    &:last-child {
      margin-left: 20px;
    }
    input {
      width: 100%;
    }
  }
`;

const Form: React.FC = () => {
  let {
    setColumns,
    setLines,
    currentColumns,
    setCurrentColumns,
    currentLines,
    setCurrentLines,
  } = useContext(FormContext);

  const setColumnsAndLines = (lines: number, columns: number): void => {
    setColumns(columns);
    setLines(lines);
  };

  const clearColumnsAndLines = (): void => {
    setColumns(0);
    setLines(0);
    setCurrentLines(0);
    setCurrentColumns(0);
  };

  return (
    <StyledForm>
      <StyledFieldsetGroup>
        <fieldset>
          <label htmlFor="columns">Columns</label>
          <input
            id="columns"
            type="number"
            min={0}
            value={currentColumns}
            onChange={(event) => setCurrentColumns(event.target.value)}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="line">Lines</label>
          <input
            id="lines"
            type="number"
            min={0}
            value={currentLines}
            onChange={(event) => setCurrentLines(event.target.value)}
          />
        </fieldset>
      </StyledFieldsetGroup>

      <button onClick={() => setColumnsAndLines(currentLines, currentColumns)}>
        Create
      </button>
      <button onClick={() => clearColumnsAndLines()}>Reset</button>
    </StyledForm>
  );
};

export default Form;
