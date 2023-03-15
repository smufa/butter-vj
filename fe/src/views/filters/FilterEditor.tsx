import {
  Paper,
  Flex,
  Container,
  Stack,
  Text,
  Slider,
  ActionIcon,
  SliderProps,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
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

interface SettingsHolderInterface extends SliderProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  onChange: (value: number) => void;
}
export const SettingsHolder = ({
  icon,
  label,
  onChange,
  value,
  ...other
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
        {icon}
        <Text weight="bold" ml="xl">
          {label}
        </Text>
      </Flex>
      <Flex w="100%" align="center" mt="md">
        <Slider
          step={1}
          {...other}
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

export interface FilterSettings {
  hue: number;
  saturation: number;
  brightness: number;
  contrast: number;
  blur: number;
}

interface FilterEditorProps {
  setSettings: (settings: FilterSettings) => void;
  baseSettings: FilterSettings;
}

export const FilterEditor = ({
  setSettings,
  baseSettings,
}: FilterEditorProps) => {
  const form = useForm<FilterSettings>({
    initialValues: baseSettings,
  });

  useEffect(() => {
    setSettings(form.values);
  }, [form.values]);

  useEffect(() => {
    form.setValues(baseSettings);
  }, [baseSettings]);

  return (
    <Container size="30rem">
      <Stack>
        <SettingsHolder
          icon={<Filter></Filter>}
          label="Hue"
          min={0}
          max={360}
          {...form.getInputProps("hue")}
        />
        <SettingsHolder
          icon={<ColorFilter />}
          label="saturation"
          {...form.getInputProps("saturation")}
        />
        <SettingsHolder
          icon={<Blur />}
          label="Blur"
          {...form.getInputProps("blur")}
        />
        <SettingsHolder
          icon={<Contrast />}
          label="Contrast"
          {...form.getInputProps("contrast")}
        />
        <SettingsHolder
          icon={<Brightness2 />}
          label="Brightness"
          {...form.getInputProps("brightness")}
        />
      </Stack>
    </Container>
  );
};
