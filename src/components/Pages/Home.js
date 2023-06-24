import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

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
        variant="contained"
        onClick={() => navigate('/eggs')}
        >
          <b>START</b>
        </Button>
    </div>
  )
}

export default Home;