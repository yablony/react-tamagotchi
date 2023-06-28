import { useState } from 'react';
import { problems, solutions } from '../data/CodingProblemsData';
import '../Layout/CodingProblems.scss';
import { Button } from "@mui/material";
import TestSolution from './Test';
import { useNavigate } from 'react-router-dom';

function CodingProblems({ difficultyLevel, setCorrectCode, setPetSize, petSize }) {
    const navigate = useNavigate();
    const [testResult, setTestResult] = useState(null);

    let randomProblemIndex = Math.floor(Math.random() * problems[difficultyLevel].length);
    let randomProblem = problems[difficultyLevel][randomProblemIndex];
    
    const testUserInput = () => {
        const userInput = document.querySelector('textarea');
        let userInputText = userInput.value;

        if (userInputText !== '') {
            setTestResult(eval(userInputText))
        } else {
            setTestResult(`We can't test your answer if it's empty :(`)
        }
    }

    const compareSolution = () => {
        const userInput = document.querySelector('textarea');
        let userInputText = userInput.value;
        console.log('userInputText ', userInputText)
  
        if (eval(userInputText) === eval(solutions[difficultyLevel][randomProblemIndex])) {
            setPetSize(petSize + 20)
            return true;
        } else {
            if (petSize >= 40) {
                setPetSize(petSize - 20) 
            }
            return false;
        }
    }

    return (
        <div className="coding-challenges">
        <section className="coding-problem">
            <h2>Time to code!</h2>
            <p><b>CODING CHALLENGE:</b><br/><br/>{randomProblem}</p>
            <div className="solution">
                <label><b>YOUR ANSWER:</b></label>
                <textarea
                    cols="30"
                    rows="10"
                ></textarea>
            </div>
            <nav>
                <Button
                    variant="contained"
                    onClick={() => testUserInput()}
                    >
                        Test
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        setCorrectCode(compareSolution());
                        navigate('/pet');
                    }}
                    >
                        <b>Feed the code</b>
                </Button>
            </nav>
        </section>
        <TestSolution 
        testResult={testResult}
        />
        </div>
    )
}

export default CodingProblems;