import CodingProblems from "./components/Pages/CodingProblems";
import Home from './components/Pages/Home';
import Pet from "./components/Pages/Pet";
import EggSelection from "./components/Pages/EggSelection";
import FeedThePet from "./components/Pages/FeedThePet";
import './components/Layout/DefaultLayout.scss';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/eggs' element={<EggSelection />}></Route>
        <Route path='/pet/' element={<Pet />}></Route>
        <Route path='/feeding' element={<FeedThePet />}></Route>
        <Route path='/coding-problem' element={<CodingProblems />}></Route>
      </Routes>
    </div>
  );
}

export default App;
