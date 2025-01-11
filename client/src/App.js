import { Box } from '@mui/material';
import Header from './components/Header/header';
import Home from './components/home/Home';
import DetailView from './components/Details/detailView';
import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Cart from './components/cart/Cart';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header/>
      <Box style={{marginTop:54}}>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/product/:id' element={<DetailView/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
