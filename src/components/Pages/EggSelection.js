import Spline from '@splinetool/react-spline';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function EggSelection() {
    const navigate = useNavigate();

    return(
        <div className="eggs">
            <h2>Select your egg</h2>
            <Spline scene="https://prod.spline.design/SsTNodEztniOUOvz/scene.splinecode" /> 
            <nav>
                <Button
                variant="contained"
                onClick={() => navigate('/')}
                >
                    Back to main page
                </Button>
                <Button
                variant="contained"
                onClick={() => navigate('/pet')}
                >
                    CONTINUE
                </Button>

            </nav>
        </div>
    )
}

export default EggSelection;