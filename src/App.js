import { Route, Routes } from 'react-router-dom';
import './App.css';
import BottomNav from './components/BottomNav/BottomNav';
import Header from './components/Header/Header';
import Cart from './pages/Cart';
import FoodDetail from './pages/FoodDetail';
import Home from './pages/Home';
import sampleData from './sampleData';

function App() {
  return (
    <div className="App">
      <div className="mobile-container">
        <Header />
        <div style={{height: '70px'}}></div>
        <Routes>
          <Route path='/' exact element={<Home data={sampleData}/>}/>
          <Route path='/detail/:id' exact element={<FoodDetail data={sampleData}/>}/>
          <Route path='/cart' exact element={<Cart data={sampleData}/>}/>
          <Route path='*' element={<Home/>}/>
        </Routes>
        <BottomNav/>
      </div>

    </div>
  );
}

export default App;
