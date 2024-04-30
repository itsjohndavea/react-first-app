import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const Defeat = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className=" text-6xl">You got lost😥! please try again.</h2>
      <br></br>
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

export default Defeat;
