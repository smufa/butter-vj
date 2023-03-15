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

// arrange into a grid with 2 columns and 2 rows
// 1st row: 1st column: tabs
function App() {
  const [tab, setTab] = useState(0);
  const { ref, width, height } = useElementSize();

  // audio
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

  const [debouncedFilterSettings, setValue] = useDebouncedState(
    filterSettings,
    300
  );

  function setSettingsW(settings: Settings) {
    setPreset(getPresets(settings));
    console.log("settings set");
  }

  return (
    <Box
      h="100vh"
      style={{
        overflowX: "hidden",
        overflowY: "hidden",
        display: "grid",
        gridTemplateColumns: "2fr 4fr",
        gridTemplateRows: "1fr 10fr",
      }}
    >
      <Box
        style={{
          gridRow: "1 / 2",
          gridColumn: "1 / 2",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <Group p="lg" position="center">
          <Button
            variant={tab === 0 ? "light" : "subtle"}
            onClick={() => {
              setTab(0);
            }}
          >
            Inputs
          </Button>
          <Button
            variant={tab === 1 ? "light" : "subtle"}
            onClick={() => {
              setTab(1);
            }}
          >
            Visualizer
          </Button>
          <Button
            variant={tab === 2 ? "light" : "subtle"}
            onClick={() => {
              setTab(2);
            }}
          >
            Output
          </Button>
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
        </Group>
      </Box>
      <Box
        style={{
          gridRow: "2 / 3",
          gridColumn: "1 / 2",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {tab === 0 && <Inputs />}
        {tab === 1 && <VisSettings setSettings={setSettingsW} />}
        {tab === 2 && (
          <FilterEditor
            setSettings={setFilterSettings}
            baseSettings={debouncedFilterSettings}
          />
        )}
      </Box>
      <Box
        style={{
          gridRow: "1 / 3",
          gridColumn: "2 / 3",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        <Box
          w="100%"
          h="60vh"
          display="flex"
          ref={ref}
          style={{
            filter: `hue-rotate(${filterSettings.hue}deg) saturate(${filterSettings.saturation}%) brightness(${filterSettings.brightness}%) contrast(${filterSettings.contrast}%) blur(${filterSettings.blur}px)`,
          }}
        >
          {width && height && audi && preset && (
            <>
              <Renderer
                aud={audioIn}
                preset={preset}
                sizex={Math.min(width, height)}
                sizey={Math.min(width, height)}
              />
            </>
          )}
        </Box>
        <Box p="xl">
          <SlideSubmit></SlideSubmit>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
