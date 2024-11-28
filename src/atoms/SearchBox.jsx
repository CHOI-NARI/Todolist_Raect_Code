import { Box, Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import Todo from "./Todo";

const SearchBox = () => {
  const [todolist, setTodolist] = useState([]);
  const [msg, setMsg] = useState("");
  const getMsg = (e) => setMsg((prev) => e.target.value);
  const add = () => setTodolist((prev) => [...prev, msg]);
  const remove = (i) =>
    setTodolist((prev) => [...prev].filter((v, idx) => idx != i));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: "30px",
      }}
    >
      <Text weight={"bold"} size={"7"}>
        오늘의 할일
      </Text>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <Box>
          <TextField.Root
            style={{ width: "600px" }}
            size="3"
            placeholder="TO-DO List를 입력해주세요."
            onChange={getMsg}
          />
        </Box>
        <Button
          style={{ width: "80px", height: "40px", fontSize: "20px" }}
          color="gray"
          variant="outline"
          onClick={add}
        >
          전송
        </Button>
      </div>
      <Flex direction={"column"} fontSize={"25px"}>
        {todolist.map((v, i) => (
          <Todo contents={v} remove={() => remove(i)} />
        ))}
      </Flex>
    </div>
  );
};

export default SearchBox;
