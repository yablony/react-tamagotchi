import { useState } from 'react';
import { problems, solutions } from '../data/CodingProblemsData';
import '../Layout/CodingProblems.scss';
import { Button } from "@mui/material";
import TestSolution from './Test';

function CodingProblems({ difficultyLevel, setDifficultyLevel }) {
    difficultyLevel = 'easy';
    const userInput = document.querySelector('textarea');

    let randomProblemIndex = Math.floor(Math.random()* problems[difficultyLevel].length);
    let randomProblem = problems[difficultyLevel][randomProblemIndex];
    
    // const testSolution = () => {
    //     if (userInput !== null) {
    //         let userInputText = userInput.value;
    //         return <p>{eval(userInputText)}</p>
    //     }
    // }

    const compareSolution = () => {
        if (userInput !== null) {
            let userInputText = userInput.value;

            if (eval(userInputText) === eval(solutions[difficultyLevel][randomProblemIndex])) {
                console.log('correct');
            } else {
                console.log('false')
            }
            console.log('solution', eval(solutions[difficultyLevel][randomProblemIndex]))
            console.log('my answer', eval(userInputText))
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
                // onChange={readUserInput()}
                    cols="30"
                    rows="10"
                ></textarea>
            </div>
            <nav>
                <Button
                    variant="contained"
                    onClick={() => TestSolution()}
                    >
                        <b>Test</b>
                </Button>
                <Button
                    variant="contained"
                    onClick={() => compareSolution()}
                    >
                        <b>Feed the code</b>
                </Button>
            </nav>
        </section>
        <section className="solution-result">
            <TestSolution />
        </section>
        </div>
    )
}

export default CodingProblems;