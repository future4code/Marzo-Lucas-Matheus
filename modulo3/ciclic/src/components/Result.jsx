import { Button, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const Result = ({ setCurrentPage, name, payment, time, result }) => {
  return (
    <Stack my={8}>
      <Text fontSize="1.5rem">{`Olá ${name}, juntando R$${payment} todo mês, você terá R$${result} em ${time} meses.`}</Text>
      <Button
        fontFamily="mono"
        textTransform="uppercase"
        size="lg"
        colorScheme="blue"
        onClick={() => setCurrentPage("home")}
      >
        Simular Novamente
      </Button>
    </Stack>
  );
};
