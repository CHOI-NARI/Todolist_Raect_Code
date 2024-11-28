import Advice from "../atoms/Advice";
import Login from "../atoms/Login";
import Weather from "../atoms/Weather";
import Timer from "../atoms/Timer";

const LeftBox = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Login />
      <Timer />
      <Weather />
      <Advice />
    </div>
  );
};

export default LeftBox;
