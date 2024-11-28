import { useState } from "react";
import SearchBox from "../atoms/SearchBox";

const RightBox = () => {
  return (
    <div
      style={{
        borderRadius: "20px",
        backgroundColor: "rgb(116,135,156,0.2)",
        width: "800px",
        height: "640px",
        padding: "25px",
        gap: "20px",
      }}
    >
      <SearchBox />
    </div>
  );
};

export default RightBox;
