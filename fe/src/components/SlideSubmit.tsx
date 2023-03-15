import { useState } from "react";
import { useMantineTheme, Group, Text, rem } from "@mantine/core";
import { useMove } from "@mantine/hooks";

export function SlideSubmit() {
  const theme = useMantineTheme();
  const [value, setValue] = useState(0.2);
  const [submitted, setSubmitted] = useState(false);
  const { ref } = useMove(
    ({ x }) => {
      setValue(x);
      if (x > 0.95) {
        setSubmitted(true);
      } else {
        setSubmitted(false);
      }
    },
    {
      onScrubEnd() {
        console.log("Scrub end");
        if (value > 0.95) {
          console.log("submit");
        } else {
          setValue(0.0);
        }
      },
    }
  );

  return (
    <>
      <Group position="center">
        <div
          ref={ref}
          style={{
            width: "70%",
            height: rem(48),
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1],
            position: "relative",
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: `${value * 100}%`,
              height: rem(16),
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.blue[9]
                  : theme.colors.blue[2],
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: "absolute",
              left: `calc(${value * 100}% - ${rem(8)})`,
              top: 0,
              width: rem(96),
              height: rem(48),
              backgroundColor: theme.colors.blue[7],
            }}
          />
        </div>
      </Group>

      <Text align="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}
