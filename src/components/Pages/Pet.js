import difficultyLevel from './EggSelection';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import '../Layout/Pet.scss';

// 2. Add a text bubble

function Pet () {
    const navigate = useNavigate();
    console.log(difficultyLevel)
    return(
        <div className="pet">
                <h1>Shrimpy boi</h1>

                <section className="shrimp">
                <Spline scene="https://prod.spline.design/lQ1KYGirfkeHohde/scene.splinecode" />
                <h1>🦐</h1>
                </section>

                <nav>
                <Button
                variant="contained"
                onClick={() => navigate('/eggs')}
                >
                    ← to eggs
                </Button>
                <Button
                variant="contained"
                onClick={() => navigate('/feed')}
                >
                    <b>FEED</b>
                </Button>
            </nav>
        </div>
    )
}

export default Pet;