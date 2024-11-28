import { Button, Flex, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

const Login = () => {
  const [name, setName] = useState("guest");

  useEffect(() => {
    const userName = prompt("이름 입력") || "Guest";
    setName(userName);
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
        gap: "30px",
      }}
    >
      <IoPersonCircleOutline
        style={{ width: "80px", height: "80px", color: "grey" }}
      />
      <Text weight={"bold"} size={"6"}>
        {name}님, 안녕하세요 😏
      </Text>
      <Button color="gray" variant="outline">
        LOGOUT
      </Button>
    </Flex>
  );
};

export default Login;
