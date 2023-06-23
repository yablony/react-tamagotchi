import { useState } from 'react';
import { easyLevelProblems, easyLevelSolutions, mediumLevelProblems, mediumLevelSolutions, hardLevelProblems, hardLevelSolutions } from './data/CodingProblemsData';

function CodingProblems() {
    const difficultyLevel = 'easy';

    let randomProblemIndex = Math.floor(Math.random()* easyLevelProblems.length);

    let randomProblem = easyLevelProblems[randomProblemIndex];

    return (
        <section className="coding-problem">
            <p>{randomProblem}</p>
            <label>Type your answer below:</label>
            <input type="text" />
            <button>Feed the code</button>
        </section>
    )
}

export default CodingProblems;