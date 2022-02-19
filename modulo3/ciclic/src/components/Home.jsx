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

export const Home = ({
  setCurrentPage,
  name,
  setName,
  payment,
  setPayment,
  time,
  setTime,
}) => {
  return (
    <Stack my={8} spacing={4}>
      <Heading textAlign="center">Simulador</Heading>
      <Input
        placeholder="Nome"
        size="lg"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Mensalidade"
        size="lg"
        value={payment}
        onChange={(e) => setPayment(Number(e.target.value))}
      />
      <NumberInput min={1} max={36} size="lg">
        <NumberInputField
          placeholder="Tempo"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
        />
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
        onClick={() => setCurrentPage("result")}
      >
        Simular
      </Button>
    </Stack>
  );
};
