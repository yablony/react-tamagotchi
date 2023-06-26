import difficultyLevel from './EggSelection';
import { Button, Backdrop, CircularProgress } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import '../Layout/Pet.scss';

function Pet () {
    const navigate = useNavigate();
    console.log(difficultyLevel);

    const [open, setOpen] = useState(false);
    
    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

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
                onClick={handleOpen}
                >
                    <b>FEED</b>
                </Button>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => 1 }}
                    open={open}
                    onClick={handleClose}
                >
                    <div className="pop-up">
                        <h1>Feed your shrimp</h1>
                        <p>
                            You rcreature feeds on good code.<br/>
                            Complete a challenge and watch it grow!<br/>
                        </p>
                        <Button
                            variant="contained"
                            onClick={() => navigate('/coding-problem')}
                            >
                                START CHALLENGE
                        </Button>
                    </div>
                </Backdrop>
            </nav>
        </div>
    )
}

export default Pet;