import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import axios from "axios";
import { AccordionContainer } from "../../components/Accordion";

export const Detailspage = () => {
  const { id } = useParams();

  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [restaurantGroup, setRestaurantGroup] = useState([]);

  useEffect(() => {
    axios
      .get(`http://challange.goomer.com.br/restaurants/${id}/menu`)
      .then(({ data }) => {
        setRestaurantDetails(data);
        setRestaurantGroup(() =>
          data.map((detail) => detail.group.toUpperCase())
        );
      });
  }, []);

  return (
    <Container centerContent maxW="container.lg">
      {restaurantGroup
        .filter((group, i) => restaurantGroup.indexOf(group) === i)
        .map((group, index) => (
          <AccordionContainer
            key={index}
            restaurantDetails={restaurantDetails}
            group={group}
          />
        ))}
    </Container>
  );
};
