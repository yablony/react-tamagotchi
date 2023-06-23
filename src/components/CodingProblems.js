import { useState } from 'react';
import { easyLevelProblems, easyLevelSolutions, mediumLevelProblems, mediumLevelSolutions, hardLevelProblems, hardLevelSolutions } from './data/CodingProblemsData';

function CodingProblems() {
    const difficultyLevel = 'easy';
    const result = '';

    let randomProblemIndex = Math.floor(Math.random()* easyLevelProblems.length);

    let randomProblem = easyLevelProblems[randomProblemIndex];

    const userInput = () => {
        
    }
    const compareSolution = () => {
        const userInput = document.querySelector('textarea');
        if (userInput !== null) {
            let userInputText = userInput.value;
            
        }
    }

    return (
        <>
        <section className="coding-problem">
            <p>{randomProblem}</p>
            <label>Type your answer below:</label>
            <textarea
            onChange={readUserInput()}
            cols="30"
            rows="10"
            ></textarea>
            <button onClick={compareSolution()}>Feed the code</button>
        </section>
        <section className="solution-result">
            <p>{result}</p>
        </section>
        </>
    )
}

export default CodingProblems;