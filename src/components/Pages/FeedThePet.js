import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function FeedThePet() {
    const navigate = useNavigate();

    return (
        <div className="pop-up">
        <h1>Feed your shrimp</h1>
        <p>
            Your creature feeds on good code.<br/>
            Complete a challenge and watch it grow!<br/>
        </p>
        <Button
            variant="contained"
            onClick={() => navigate('/coding-problem')}
            >
                START CHALLENGE
        </Button>
    </div>
    )
}

export default FeedThePet;