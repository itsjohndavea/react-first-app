import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { useState } from "react";
import swal from "sweetalert";
const InGame = () => {
  const navigate = useNavigate();
  const [randomNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    const sanitizedValue = e.target.value.replace(/[^0-9]/g, "");
    setValue(sanitizedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      swal({
        text: "Please enter a value!",
        icon: "warning",
      });
      return;
    }

    const userGuess = parseInt(value);
    if (isNaN(userGuess)) {
      alert("Please enter a valid number");
      return;
    }

    if (userGuess === randomNumber) {
      navigate("/won", { state: { randomNumber } });
    } else {
      navigate("/defeat");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="guessInput" className="text-6xl mb-5">
          {`What number is this "?"`}
        </label>
        <br></br>
        <br></br>
        <br></br>
        <input
          id="guessInput"
          type="text"
          className="p-3 mr-1 rounded-lg"
          placeholder="Enter answer here.."
          value={value}
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-slate-200 text-black">
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default InGame;
