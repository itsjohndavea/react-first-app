import { TypeAnimation } from "react-type-animation";

const TypeWriterAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Hello, Player!🥰",
        1000,
        "Welcome to guess the number.",
        1000,
        "Wanna try? click the start button to start. Enjoy!",
        1000,
      ]}
      wrapper="span"
      speed={20}
      style={{
        fontSize: "2.2em",
        fontFamily: "Pixelify Sans",
        fontOpticalSizing: "auto",
        fontWeight: "400",
        textAlign: "justify",
        marginBottom: "20px",
      }}
      repeat={Infinity}
    />
  );
};

export default TypeWriterAnimation;
