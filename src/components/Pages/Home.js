import { Button } from "@mui/material";

function Home() {
    return (
        <div className="home">
            <h1>Welcome!</h1>
            <p>
                Grow your own digital coding pet<br/><br/>
                As coders, we often don't have time to feed ourselves<br/><br/>
                This pet was developed with YOUR lifestyle in mind!<br/>
                That's why it only eats code :3
            </p>
            <Button
            sx={{ 
                backgroundColor: "#CCAFD5",
                ":hover": {
                    bgcolor: "#BF9ACA"
                } 
            }}
            variant="contained"
            >
                START
            </Button>
        </div>
    )
}

export default Home;