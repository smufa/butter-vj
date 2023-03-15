import {
  Box,
  Button,
  Center,
  Flex,
  Group,
  Paper,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Tabs,
} from "@mantine/core";
import { useDebouncedState, useElementSize } from "@mantine/hooks";
import { useEffect, useMemo, useState } from "react";
import {
  Code,
  ExternalLink,
  Eye,
  MessageCircle,
  Photo,
  TopologyStarRing,
} from "tabler-icons-react";
import { Renderer } from "./lib/Renderer";
import { FilterEditor, FilterSettings } from "./views/filters/FilterEditor";
import { Inputs } from "./views/inputs/Inputs";
import { Settings, VisSettings } from "./views/visualizer/VisualizerSettings";

import { AudioIn } from "./lib/lib";
import { getPresets } from "./views/visualizer/preview/PresetLoader";
import { SlideSubmit } from "./components/SlideSubmit";
import { manager } from "./main";

// arrange into a grid with 2 columns and 2 rows
// 1st row: 1st column: tabs
function App() {
  const { ref, width, height } = useElementSize();

  const [audioIn, setAudioIn] = useState(new AudioIn());
  const [audi, setAudi] = useState(false);
  const [preset, setPreset] = useState<any>(null);

  // filter settings
  const [filterSettings, setFilterSettings] = useState<FilterSettings>({
    hue: 0,
    saturation: 0,
    brightness: 0,
    contrast: 0,
    blur: 0,
  });

  manager.onMessage((data) => {
    const preset = JSON.parse(data);
    const nekaj = JSON.parse(preset);
    setPreset(nekaj);
  });

  return (
    <>
      <button
        style={{
          display: audi ? "none" : "block",
          margin: "auto",
        }}
        onClick={() => {
          audioIn.micSelect().then(() => {
            setAudi(true);
          });
        }}
      >
        Connect to mic
      </button>
      <Box
        w="100vw"
        h="100vh"
        display="absolute"
        ref={ref}
        bg="black"
        // style={{
        //   // filter: `hue-rotate(${filterSettings.hue}deg) saturate(${filterSettings.saturation}%) brightness(${filterSettings.brightness}%) contrast(${filterSettings.contrast}%) blur(${filterSettings.blur}px)`,
        // }}
        style={{
          overflow: "hidden",
        }}
      >
        {width && height && audi && (
          <>
            <Renderer
              aud={audioIn}
              preset={preset}
              sizex={width}
              sizey={height}
            />
          </>
        )}
      </Box>
    </>
  );
}

export default App;
