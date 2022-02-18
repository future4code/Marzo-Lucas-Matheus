import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { DetailspageCard } from "../components";

export const AccordionContainer = ({ restaurantDetails, group }) => {
  return (
    <Accordion w="100%" allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {group}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <SimpleGrid columns={[1, 2]} gap={4}>
            {restaurantDetails
              .filter((food) => food.group.toUpperCase() === group)
              .map((food) => (
                <DetailspageCard food={food} />
              ))}
          </SimpleGrid>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
