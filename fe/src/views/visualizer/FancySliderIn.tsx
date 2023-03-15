import {
  ActionIcon,
  Flex,
  Group,
  Slider,
  SliderProps,
  Stack,
  Text,
} from "@mantine/core";
import { CircleDot, Settings } from "tabler-icons-react";

interface FancySliderInProps extends SliderProps {
  label: string;
  onSettingsClick: () => void;
}

export const FancySliderIn = ({
  label,
  value,
  onChange,
  onSettingsClick,
  max,
  min,
  step,
}: FancySliderInProps) => {
  return (
    <Flex w="100%" direction="column">
      <Text>{label}</Text>
      <Flex w="100%" align="center">
        <Slider
          w="100%"
          color="teal"
          value={value}
          onChange={onChange}
          max={max}
          min={min}
          step={step}
        ></Slider>
        <ActionIcon
          variant="light"
          radius="xl"
          ml="xl"
          color="teal"
          onClick={onSettingsClick}
        >
          <CircleDot size="1rem" />
        </ActionIcon>
      </Flex>
    </Flex>
  );
};
