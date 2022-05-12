import React, { useContext } from 'react';
import { AppGridMain, Grid, AppGridContainer } from './styles';

import GridContext from '../../context/gridContext';

interface IGridProps {}

const AppGrid: React.FC<IGridProps> = () => {
  let { divNum, columnTemplate, lineTemplate } = useContext(GridContext);

  let divs: any[] = [];
  divs.length = divNum;
  divs = divs.fill(undefined);

  return (
    <AppGridMain>
      <AppGridContainer>
        <Grid colTemplate={columnTemplate} rowTemplate={lineTemplate}>
          {divs.map((i, idx) => (
            <div className={`box${idx}`} key={idx}></div>
          ))}
        </Grid>
      </AppGridContainer>
    </AppGridMain>
  );
};

export default AppGrid;
