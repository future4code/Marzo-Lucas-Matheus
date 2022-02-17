import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const HomepageCard = ({ restaurant }) => {
  const navigate = useNavigate();
  return (
    <Flex
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      boxShadow="0px 2px 4px #00000029;"
      borderRadius={4}
      onClick={() => navigate(`/details/${restaurant.id}`)}
    >
      <Image
        boxSize="125px"
        objectFit="cover"
        src={restaurant.image}
        alt={restaurant.name}
        borderTopLeftRadius={4}
        borderBottomLeftRadius={4}
      />
      <Flex direction="column" justify="center" px={8} color="#404040">
        <Heading size="sm">{restaurant.name}</Heading>
        <Text fontSize="sm">{restaurant.address}</Text>
      </Flex>
    </Flex>
  );
};
