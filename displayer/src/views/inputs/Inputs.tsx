import { Container, Flex, Paper, Stack, Text } from "@mantine/core";
import { Plus } from "tabler-icons-react";
import { InputElement } from "./InputElement";

export const Inputs = () => {
  return (
    <Container size="30rem">
      <Stack>
        <Paper
          withBorder
          shadow="xl"
          style={{
            cursor: "pointer",
          }}
        >
          <Flex m="xl" align="center">
            <Plus />
            <Text weight="bold" ml="xl">
              Add new input
            </Text>
          </Flex>
        </Paper>
        <InputElement></InputElement>
      </Stack>
    </Container>
  );
};
