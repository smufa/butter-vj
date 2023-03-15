import {
  Box,
  Button,
  ColorPicker,
  Container,
  Flex,
  Paper,
  Select,
  Slider,
  Stack,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { FancySliderIn } from "./FancySliderIn";
import { getPresetOptions } from "./preview/PresetLoader";

export interface Settings {
  wave_color_r: number;
  wave_color_g: number;
  wave_color_b: number;
  wave_mode: number;
  wave_speed: number;
  warp_scale: number;
  brighten: number;
  wave_smoothing: number;
  rot: number;
  decay: number;
  preset: string;
}

export interface VisSettingsProps {
  setSettings: (settings: Settings) => void;
}

export const VisSettings = ({ setSettings }: VisSettingsProps) => {
  const form = useForm<Settings>({
    initialValues: {
      wave_color_r: 255,
      wave_color_g: 255,
      wave_color_b: 255,
      wave_mode: 0,
      wave_speed: 0,
      warp_scale: 0,
      brighten: 0,
      wave_smoothing: 0,
      rot: 0,
      decay: 0,
      preset: getPresetOptions()[0],
    },
  });

  useEffect(() => {
    setSettings(form.values);
  }, [form.values]);

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        setSettings(values);
        console.log(values);
      })}
    >
      <Container>
        <Paper withBorder p="4rem" w="100%">
          <Stack w="full">
            <Select
              label="Vissulizer preset"
              placeholder="Pick one"
              data={getPresetOptions()}
              {...form.getInputProps("preset")}
            />
            <Flex direction="column">
              <Text py="sm">wave_color_r_g_b</Text>
              <ColorPicker
                format="rgb"
                size="xl"
                onChange={(color) => {
                  const cols = color
                    .replace("rgb(", "")
                    .replace(")", "")
                    .split(", ");

                  form.setFieldValue("wave_color_r", parseFloat(cols[0]));
                  form.setFieldValue("wave_color_g", parseFloat(cols[1]));
                  form.setFieldValue("wave_color_b", parseFloat(cols[2]));
                }}
                value={
                  "rgb(" +
                  [
                    form.values.wave_color_r,
                    form.values.wave_color_g,
                    form.values.wave_color_b,
                  ].join(", ") +
                  ")"
                }
              />
            </Flex>
            <FancySliderIn
              label="wave_mode"
              min={1}
              max={7}
              step={1}
              onSettingsClick={console.log}
              {...form.getInputProps("wave_mode")}
            />
            <FancySliderIn
              label="wave_speed"
              onSettingsClick={console.log}
              {...form.getInputProps("wave_speed")}
            />
            <FancySliderIn
              label="warp_scale"
              onSettingsClick={console.log}
              {...form.getInputProps("warp_scale")}
            />
            <FancySliderIn
              label="brighten"
              onSettingsClick={console.log}
              {...form.getInputProps("brighten")}
            />
            <FancySliderIn
              label="wave_smoothing"
              onSettingsClick={console.log}
              {...form.getInputProps("wave_smoothing")}
            />
            <FancySliderIn
              label="wave_mystery"
              onSettingsClick={console.log}
              {...form.getInputProps("wave_mystery")}
            />
            <FancySliderIn
              label="rot"
              onSettingsClick={console.log}
              {...form.getInputProps("rot")}
            />
            <FancySliderIn
              label="decay"
              onSettingsClick={console.log}
              {...form.getInputProps("decay")}
            />
            <Button type="submit">Update</Button>
          </Stack>
        </Paper>
      </Container>
    </form>
  );
};
//  new Gene(0, 7, Math.random() * 7, "int"), //wave_mode
//         new Gene(0, 1, Math.random() * 1, "float"), //wave_speed
//         new Gene(0, 1, Math.random() * 1, "float"), //wave_r
//         new Gene(0, 1, Math.random() * 1, "float"), //wave_g
//         new Gene(0, 1, Math.random() * 1, "float"), //wave_b
//         new Gene(0, 1, Math.random() * 1, "int"), //brighten
//         new Gene(0, 1, Math.random() * 1, "float"), //warpscale
//         new Gene(0, 1, Math.random() * 1, "float"), //modwavealphastart
//         new Gene(0, 1, Math.random() * 1, "float"), //modwavealphaend
//         new Gene(0, 1, Math.random() * 1, "float"), //wave_smoothing
//         new Gene(-1, 1, Math.random() * 1, "float"), //wave_mystery
//         // mv attributes
//         new Gene(0, 64, Math.random() * 1, "float"), //mv_x
//         new Gene(0, 48, Math.random() * 1, "float"), //mv_y
//         //rot
//         new Gene(-1, 1, Math.random() * 1, "float"), //rot
//         // decay
//         new Gene(0.7, 1, Math.random() * 1, "float"), //decay
//         // echo_zoom
//         new Gene(0, 1, Math.random() * 1, "float"), //echo_zoom
//         // gama_adj
//         new Gene(0, 1, Math.random() * 1, "float"), //gama_adj
//         // warp
//         new Gene(0, 1, Math.random() * 1, "float"), //warp
//         // dx
//         new Gene(0, 1, Math.random() * 1, "float"), //dx
//         // dy
//         new Gene(0, 1, Math.random() * 1, "float"), //dy
//         // darken
//         new Gene(0, 1, Math.random() * 1, "float"), //darken
//         // echo_alpha
//         new Gene(0, 1, Math.random() * 1, "float"), //echo_alpha
//         // echo_orient
//         new Gene(0, 1, Math.random() * 1, "float"), //echo_orient
//         // wave_scale
//         new Gene(0, 1, Math.random() * 1, "float"), //wave_scale
//         // warpanimspeed
//         new Gene(0, 1, Math.random() * 1, "float"), //warpanimspeed
//         // bled
//         new Gene(0, 1, Math.random() * 1, "float"), //bled
