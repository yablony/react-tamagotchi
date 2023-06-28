import Spline from '@splinetool/react-spline';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import '../Layout/EggSelection.scss';

function EggSelection({ difficultyLevel, setDifficultyLevel }) {
    const navigate = useNavigate();

    return(
        <div className="eggs">
            <h2>Select your egg</h2>
            <p>The egg determines the <b>difficulty level</b> of the game.</p>

            <section className="eggs-display">
                <div className="egg" onClick={() => setDifficultyLevel('easy')}>
                    <Spline
                    className="easy"
                    scene="https://prod.spline.design/PfxewiQDiJm3c6pd/scene.splinecode" /> 
                    <h4>NO SAUCE</h4>
                </div>

                <div className="egg" onClick={() => setDifficultyLevel('medium')}>
                    <Spline 
                    className="medium"
                    scene="https://prod.spline.design/Ykthdbo5buUwmEki/scene.splinecode" /> 
                    <h4>MILD</h4>
                </div>

                <div className="egg" onClick={() => setDifficultyLevel('hard')}>
                    <Spline 
                    className="hard"
                    scene="https://prod.spline.design/8JyY1-Th8prtv4I8/scene.splinecode" /> 
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
                onClick={() => navigate('/pet/')}
                disabled={difficultyLevel === ''}
                >
                    <b>CONTINUE →</b>
                </Button>
            </nav>
        </div>
    )
}

export default EggSelection;