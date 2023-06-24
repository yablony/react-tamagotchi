import { Button } from "@mui/material";
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <h1>Welcome!</h1>
            <p>
                Say 👋 to your own <b>digital coding pet</b>.<br/><br/>
                As coders, we often don't have ⏳ to feed ourselves.<br/><br/>
                This pet was developed with <b>YOUR lifestyle</b> in mind!<br/><br />
                That's why it only eats code 👾
            </p>
            <Button
            // sx={{ 
            //     backgroundColor: "#d3e2cf",
            //     color: "#654d97",
            //     ":hover": {
            //         bgcolor: "#BF9ACA"
            //     } 
            // }}
            variant="contained"
            
            >
                <b>START</b>
            </Button>
        </div>
    )
}

export default Home;