import React, { useEffect, useRef, useState } from "react";
import { Vis } from "./lib";

interface RendererProps {
  aud: any;
  preset: any;
  sizex: number;
  sizey: number;
}

export const Renderer = ({ aud, preset, sizex, sizey }: RendererProps) => {
  const ref = useRef(null);
  const [vis, setVis] = useState(null);

  useEffect(() => {
    if (aud.audioContext && aud.getOutputNode()) {
      const vis = new Vis();
      vis.initPlayer(
        ref.current,
        aud.audioContext,
        aud.getOutputNode(),
        sizex,
        sizey,
        preset
      );

      console.log("GENERATING VISUALIZER !EXPENSIVE!");
      // @ts-ignore
      setVis(vis);
    } else {
      console.log("no audio context or output node");
    }
  }, []);

  // use effect for preset changes
  useEffect(() => {
    if (vis) {
      console.log("PRESET CHANGED");
      // @ts-ignore
      vis.loadPreset(preset);
    }
  }, [preset]);

  return (
    <div>
      <canvas ref={ref} width={sizex} height={sizey} />
    </div>
  );
};
