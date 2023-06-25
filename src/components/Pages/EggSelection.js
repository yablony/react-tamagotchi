import Spline from '@splinetool/react-spline';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import '../Layout/EggSelection.scss';
import { useState } from 'react';

function EggSelection() {
    const navigate = useNavigate();
    const [difficultyLevel, setDifficultyLevel] = useState('');

    const updateDifficultyLevel = difficulty => {
        setDifficultyLevel(difficulty);
    }

    return(
        <div className="eggs">
            <h2>Select your egg</h2>
            <p>The egg determines the <b>difficulty level</b> of the game</p>

            <section className="eggs-display">
                <div className="egg">
                    <Spline 
                    onClick={() => updateDifficultyLevel('easy')}
                    className="easy"
                    scene="https://prod.spline.design/niTRfOHUaCaNPIaq/scene.splinecode" /> 
                    <h4>NO SAUCE</h4>
                </div>

                <div className="egg">
                    <Spline 
                    onClick={() => updateDifficultyLevel('medium')}
                    className="medium"
                    scene="https://prod.spline.design/niTRfOHUaCaNPIaq/scene.splinecode" /> 
                    <h4>MILD</h4>
                </div>

                <div className="egg">
                    <Spline 
                    onClick={() => updateDifficultyLevel('hard')}
                    className="hard"
                    scene="https://prod.spline.design/niTRfOHUaCaNPIaq/scene.splinecode" /> 
                    <h4>SPICY</h4>
                </div>
            </section>

            <nav>
                <Button
                variant="contained"
                onClick={() => navigate('/')}
                >
                    ← to main page
                </Button>
                <Button
                variant="contained"
                onClick={() => navigate('/pet')}
                >
                    <b>CONTINUE →</b>
                </Button>
            </nav>
        </div>
    )
}

export default EggSelection;