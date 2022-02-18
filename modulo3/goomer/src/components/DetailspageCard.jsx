import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export const DetailspageCard = ({ food }) => {
  return (
    <Flex boxShadow="0px 2px 4px #00000029;" borderRadius={4}>
      <Image
        boxSize="125px"
        objectFit="cover"
        borderTopLeftRadius={4}
        borderBottomLeftRadius={4}
        src={food.image}
      />
      <Flex direction="column" justify="center" px={8} color="#404040">
        <Heading size="sm">{food.name}</Heading>
        <Text py={2} lineHeight="15px" fontSize="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </Text>
      </Flex>
    </Flex>
  );
};
