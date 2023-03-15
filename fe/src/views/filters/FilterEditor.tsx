import {
  Paper,
  Flex,
  Container,
  Stack,
  Text,
  Slider,
  ActionIcon,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  Blur,
  Brightness2,
  CircleDot,
  ColorFilter,
  Contrast,
  Filter,
  Palette,
  Plus,
} from "tabler-icons-react";

interface SettingsHolderInterface {
  Icon: React.ReactNode;
  label: string;
  value: number;
  onChange: (value: number) => void;
}
export const SettingsHolder = ({
  Icon,
  label,
  onChange,
  value,
}: SettingsHolderInterface) => {
  return (
    <Paper
      withBorder
      shadow="xl"
      p="xl"
      style={{
        cursor: "pointer",
      }}
    >
      <Flex align="center">
        <Icon />
        <Text weight="bold" ml="xl">
          {label}
        </Text>
      </Flex>
      <Flex w="100%" align="center" mt="md">
        <Slider
          w="100%"
          color="teal"
          value={value}
          onChange={onChange}
        ></Slider>
        <ActionIcon variant="light" radius="xl" ml="xl" color="teal">
          <CircleDot size="1rem" />
        </ActionIcon>
      </Flex>
    </Paper>
  );
};

interface FilterSettings {
  hue: number;
  saturation: number;
  brightness: number;
  contrast: number;
  blur: number;
}

export const FilterEditor = () => {
  const form = useForm<FilterSettings>({
    initialValues: {
      hue: 0,
      saturation: 0,
      brightness: 0,
      contrast: 0,
      blur: 0,
    },
  });
  return (
    <Container size="30rem">
      <Stack>
        <SettingsHolder
          icon={<Filter size="1rem" />}
          label="hue"
          onChange={console.log}
          value={0}
        ></SettingsHolder>
        <Paper
          withBorder
          shadow="xl"
          p="xl"
          style={{
            cursor: "pointer",
          }}
        >
          <Flex align="center">
            <ColorFilter />
            <Text weight="bold" ml="xl">
              Saturation
            </Text>
          </Flex>
          <Flex w="100%" align="center" mt="md">
            <Slider w="100%" color="teal"></Slider>
            <ActionIcon variant="light" radius="xl" ml="xl" color="teal">
              <CircleDot size="1rem" />
            </ActionIcon>
          </Flex>
        </Paper>
        <Paper
          withBorder
          shadow="xl"
          p="xl"
          style={{
            cursor: "pointer",
          }}
        >
          <Flex align="center">
            <Blur />
            <Text weight="bold" ml="xl">
              Blur
            </Text>
          </Flex>
          <Flex w="100%" align="center" mt="md">
            <Slider w="100%" color="teal"></Slider>
            <ActionIcon variant="light" radius="xl" ml="xl" color="teal">
              <CircleDot size="1rem" />
            </ActionIcon>
          </Flex>
        </Paper>
        <Paper
          withBorder
          shadow="xl"
          p="xl"
          style={{
            cursor: "pointer",
          }}
        >
          <Flex align="center">
            <Contrast />
            <Text weight="bold" ml="xl">
              Contrast
            </Text>
          </Flex>
          <Flex w="100%" align="center" mt="md">
            <Slider w="100%" color="teal"></Slider>
            <ActionIcon variant="light" radius="xl" ml="xl" color="teal">
              <CircleDot size="1rem" />
            </ActionIcon>
          </Flex>
        </Paper>

        <Paper
          withBorder
          shadow="xl"
          style={{
            cursor: "pointer",
          }}
          p="xl"
        >
          <Flex align="center">
            <Brightness2 />
            <Text weight="bold" ml="xl">
              Brightness
            </Text>
          </Flex>
          <Flex w="100%" align="center" mt="md">
            <Slider w="100%" color="teal"></Slider>
            <ActionIcon variant="light" radius="xl" ml="xl" color="teal">
              <CircleDot size="1rem" />
            </ActionIcon>
          </Flex>
        </Paper>
      </Stack>
    </Container>
  );
};
