import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import TypeWriterAnimation from "./TypeWriterAnimation";
const StartPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TypeWriterAnimation />
      <br />
      <br />
      <br />
      <button
        className="bg-slate-200 text-black"
        onClick={() => navigate("/ingame")}
      >
        START
      </button>
      <Footer />
    </div>
  );
};
export default StartPage;
