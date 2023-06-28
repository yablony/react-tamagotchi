import CodingProblems from "./components/Pages/CodingProblems";
import Home from './components/Pages/Home';
import Pet from "./components/Pages/Pet";
import EggSelection from "./components/Pages/EggSelection";
import FeedThePet from "./components/Pages/FeedThePet";
import './components/Layout/DefaultLayout.scss';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [correctCode, setCorrectCode] = useState(null);
  const [petSize, setPetSize] = useState(20);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/eggs' element={
        <EggSelection 
        setDifficultyLevel={setDifficultyLevel}
        difficultyLevel={difficultyLevel}
        setCorrectCode={setCorrectCode}
        setPetSize={setPetSize}
        />}></Route>
        <Route path='/pet' element={<Pet 
        correctCode={correctCode}
        petSize={petSize}
        />}></Route>
        <Route path='/feeding' element={<FeedThePet />}></Route>
        <Route path='/coding-problem' element={<CodingProblems 
        difficultyLevel={difficultyLevel}
        setCorrectCode={setCorrectCode}
        setPetSize={setPetSize}
        petSize={petSize}
        />}></Route>
      </Routes>
    </div>
  );
}

export default App;
