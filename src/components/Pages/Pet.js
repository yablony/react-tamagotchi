import difficultyLevel from './EggSelection';
import FeedThePet from './FeedThePet';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Backdrop } from "@mui/material";
import Spline from '@splinetool/react-spline';
import '../Layout/Pet.scss';

function Pet ({ correctCode }) {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [size, setSize] = useState(0);
    
    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    console.log('correctCode', correctCode)
    if (correctCode === false) {
        console.log('incorrct')
    } else if (correctCode === true) {
        console.log('correct')
    } 

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
                onClick={() => handleOpen()}
                >
                    <b>FEED</b>
                </Button>
                <Backdrop
                    sx={{ color: '#fff', zIndex: 1 }}
                    open={open}
                    onClick={() => handleClose()}
                >
                    <FeedThePet />
                </Backdrop>
            </nav>
        </div>
    )
}

export default Pet;