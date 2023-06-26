import difficultyLevel from './EggSelection';
import FeedThePet from './FeedThePet';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Backdrop } from "@mui/material";
import Spline from '@splinetool/react-spline';
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
                    <FeedThePet />
                </Backdrop>
            </nav>
        </div>
    )
}

export default Pet;