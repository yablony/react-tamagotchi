import { useState } from 'react';
import { problems, solutions } from '../data/CodingProblemsData';
import '../Layout/CodingProblems.scss';

function CodingProblems({ difficulty }) {
    const difficultyLevel = difficulty;
    console.log(difficultyLevel)
    const result = '';

    let randomProblemIndex = Math.floor(Math.random()* problems.easy.length);

    let randomProblem = problems.easy[randomProblemIndex];

    const userInput = () => {
        
    }
    
    const compareSolution = () => {
        const userInput = document.querySelector('textarea');
        if (userInput !== null) {
            let userInputText = userInput.value;
            
        }
    }

    return (
        <div className="coding-challenges">
        <section className="coding-problem">
            <h2>Time to eat!</h2>
            <p><b>CODING CHALLENGE:</b><br/><br/>{randomProblem}</p>
            <label>Type your answer below:</label>
            <textarea
            // onChange={readUserInput()}
            cols="30"
            rows="10"
            ></textarea>
            <button onClick={compareSolution()}>Feed the code</button>
        </section>
        <section className="solution-result">
            <p>{result}</p>
        </section>
        </div>
    )
}

export default CodingProblems;