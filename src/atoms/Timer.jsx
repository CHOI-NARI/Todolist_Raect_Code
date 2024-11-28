import { Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState("");

  const today = new Date().toLocaleDateString();

  useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setTime(time);
    }, 1000);
  }, []);

  return (
    <div>
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
          color: "grey",
        }}
      >
        <Text size="6" weight={"bold"}>
          {" "}
          {today}
        </Text>
        <Text size="8" weight={"bold"}>
          {time}
        </Text>
      </Flex>
    </div>
  );
};

export default Timer;
