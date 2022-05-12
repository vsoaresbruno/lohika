import styled from 'styled-components/macro';

import { AppGrid, Form } from './components';

import { GridProvider } from './context/gridContext';
import { FormProvider } from './context/formContext';

const StylesApp = styled.div`
  margin: 5vmin 5vmin 0;
`;

const App: React.FC = () => (
  <StylesApp>
    <FormProvider>
      <GridProvider>
        <AppGrid />
        <Form />
      </GridProvider>
    </FormProvider>
  </StylesApp>
);

export default App;
