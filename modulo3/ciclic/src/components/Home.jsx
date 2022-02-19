import {
  Button,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
} from "@chakra-ui/react";
import React from "react";

export const Home = () => {
  return (
    <Stack my={8} spacing={4}>
      <Heading textAlign="center">Simulador</Heading>
      <Input placeholder="Nome" size="lg" />
      <Input placeholder="Mensalidade" size="lg" />
      <NumberInput min={1} max={36} size="lg">
        <NumberInputField placeholder="Tempo" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button
        fontFamily="mono"
        textTransform="uppercase"
        size="lg"
        colorScheme="blue"
      >
        Simular
      </Button>
    </Stack>
  );
};
