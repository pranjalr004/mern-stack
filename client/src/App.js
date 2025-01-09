import { Box } from '@mui/material';
import Header from './components/Header/header';
import Home from './components/home/Home';

import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Header/>
      <Box style={{marginTop:54}}>
      <Home/>
      </Box>
    </DataProvider>
  );
}

export default App;
