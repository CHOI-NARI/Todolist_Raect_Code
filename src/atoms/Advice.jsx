import { Avatar, Flex, Text } from "@radix-ui/themes";
import { rand } from "../utils/math";

const Advice = () => {
  const advices = [
    "후회없는 오늘을 만드세요",
    "생각을 믿지 마세요",
    "예쁜애 옆에 예쁜애",
    "행복은 습관이다",
    "네 믿음은 네 생각이 된다",
    "일하는 시간과 노는 시간을 뚜렷이 구분하라",
    "당신이 인생의 주인공이기 때문이다",
    "문제점을 찾지 말고 해결책을 찾으라",
  ];

  return (
    <Flex
      gap="3"
      style={{
        borderRadius: "20px",
        backgroundColor: "rgb(116,135,156,0.2)",
        width: "500px",
        height: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px",
        color: "grey",
        fontWeight: "bold",
      }}
    >
      <Text size={"6"}>◽ 오늘의 명언 ◽ </Text>
      <Text size={"6"}>{advices[rand(0, 7)]}</Text>
    </Flex>
  );
};

export default Advice;
