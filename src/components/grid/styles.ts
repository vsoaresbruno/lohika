import styled from 'styled-components/macro';

type PropGridStyles = {
  colTemplate?: string;
  rowTemplate?: string;
};

type TypeGridChildren = {
  childArea?: number;
};

export const AppGridMain = styled.main`
  width: calc(70vw - 50px);
  height: calc(70vh - 50px);
  margin: 0 auto;
`;

export const AppGridContainer = styled.div`
  border: 1px solid #fff;
  width: 100%;
  height: 100%;
  z-index: 0;
  position: relative;
`;

export const Grid = styled.section<PropGridStyles>`
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  grid-auto-flow: row dense;
  grid-template-columns: ${({ colTemplate }) => colTemplate};
  grid-template-rows: ${({ rowTemplate }) => rowTemplate};

  div[class*='box'] {
    background-color: var(--lighten-blue);
    border: 1px dotted white;
    transition: 0.1s all ease;
    position: relative;
    z-index: 1000;
  }
  p {
    padding: 0 10px;
  }
`;

export const GridChildren = styled.div<TypeGridChildren>`
  grid-area: ${({ childArea }) => childArea};
`;
