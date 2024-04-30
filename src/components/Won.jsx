import { useNavigate, useLocation } from "react-router-dom";
import Footer from "./Footer";
const Won = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const randomNumber = location.state?.randomNumber || null;
  return (
    <div>
      <h2 className="text-6xl">
        You got it right😍! The number was {randomNumber}.
      </h2>
      <br></br>
      <h4>Please click the button below.</h4>
      <br />
      <button
        className="bg-slate-200 text-black"
        onClick={() => navigate("/ingame")}
      >
        Try again
      </button>
      <Footer />
    </div>
  );
};

export default Won;
