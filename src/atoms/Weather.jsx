import { Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const API_KEY = "3af745e55c0152da567c5ffd089f9e00";
  const lon = 126.705;
  const lat = 37.456;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((date) => {
        setTemp((prev) => date.main.feels_like);
        setWeather((prev) => date.weather[0].main);
      });
  }, []);

  return (
    <Flex
      gap="3"
      style={{
        borderRadius: "20px",
        backgroundColor: "rgb(116,135,156,0.2)",
        width: "500px",
        height: "150px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        gap: "30px",
        fontSize: "30px",
        fontWeight: "bold",
        color: "grey",
      }}
    >
      <p>날씨 : {weather}</p>
      <p>기온 : {temp} ˚</p>
    </Flex>
  );
};

export default Weather;
