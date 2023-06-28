import FeedThePet from './FeedThePet';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Backdrop } from "@mui/material";
import Spline from '@splinetool/react-spline';
import '../Layout/Pet.scss';

function Pet ({ correctCode, petSize }) {
    console.log('Pet.correctCode ', correctCode)
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    let laptopObject = "https://prod.spline.design/NuysJ9Zm5WP4Oife/scene.splinecode";
    
    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    if (correctCode === true) {
        laptopObject = "https://prod.spline.design/6ymHLdoNUJja-ZWU/scene.splinecode";
    } else if (correctCode === false) {
        laptopObject = "https://prod.spline.design/9pzmEGpOzzvh3NBZ/scene.splinecode";
    }

    return(
        <div className="pet">
                <h1>Shrimpy boi</h1>

                <section className="shrimp">
                <Spline scene={laptopObject} />
                <h1 style={{ fontSize: petSize }}>🦐</h1>
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