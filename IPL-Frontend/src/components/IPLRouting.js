import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Matches from './Matches';
import Home from './Home';
import HigestPlayer from './HighestPlayerList';
import GetDate from './GetDate.js';
import FilterMatched from './FiterPlayers.js';
import AddPlayerComponent from './AddPlayer.js';


const IplRouting = () => {
  return <>
    {/* <BrowserRouter> */}
    {/* <ProductNavigation /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/CreatePlayer' element={< AddPlayerComponent/>} />
        <Route path='/Matches' element={<Matches />} />
        <Route path='/HigestPlayer' element={<HigestPlayer />} />
        <Route path='/GetFromDate' element={<GetDate/>} />
        <Route path='/FiterByDate' element={< FilterMatched/>} />
        {/* <Route path='/products/:id' element={<ProductDetails />} />
        <Route path='/products/add' element={<AddProductComponent />} />
        <Route path='/products/search' element={<ProductSearchByCat/>}/> */}
      </Routes>
    {/* </BrowserRouter> */}

  </>
}

export default IplRouting
