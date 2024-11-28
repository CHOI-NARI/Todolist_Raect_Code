import LeftBox from "../milecules/LeftBox";
import RightBox from "../milecules/RightBox";

const Total = () => {
  return (
    <div
      style={{
        backgroundImage: "url('desk.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPositionY: "-350px",
        backgroundPositionX: "-50px",
        width: "100vw",
        height: "100vh",
        display: "flex",
        gap: "30px",
        justifyContent: "center",
        paddingTop: "80px",
      }}
    >
      <LeftBox />
      <RightBox />
    </div>
  );
};

export default Total;
