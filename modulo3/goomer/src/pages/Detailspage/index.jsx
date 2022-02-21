import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import { AccordionContainer } from "../../components/Accordion";
import { BsSearch } from "react-icons/bs";

export const Detailspage = () => {
  const { id } = useParams();

  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [restaurantGroup, setRestaurantGroup] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  function filterFoods(food) {
    if (searchTerm === "") return true;
    if (
      food.name.includes(searchTerm) ||
      food.name.toLowerCase().includes(searchTerm)
    )
      return true;
    return false;
  }

  useEffect(() => {
    axios
      .get(`https://challange.goomer.com.br/restaurants/${id}/menu`)
      .then(({ data }) => {
        setRestaurantDetails(data);
        setRestaurantGroup(() =>
          data.map((detail) => detail.group.toUpperCase())
        );
        setLoading(false);
      });
  }, []);

  return (
    <Container centerContent maxW="container.lg">
      <InputGroup my="8" size="md" w="80%" boxShadow="0px 2px 4px #00000029">
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          p="4"
          placeholder="Buscar prato"
        />
        <InputRightElement children={<BsSearch />} />
      </InputGroup>

      {loading ? (
        <Spinner
          thickness="10px"
          speed="0.65s"
          emptyColor="gray.200"
          color="#009CA3"
          size="xl"
        />
      ) : (
        restaurantGroup
          .filter((group, i) => restaurantGroup.indexOf(group) === i)
          .map((group, index) => (
            <AccordionContainer
              key={index}
              restaurantDetails={restaurantDetails}
              group={group}
              filterFoods={filterFoods}
            />
          ))
      )}
    </Container>
  );
};
