// @ts-ignore
import butterchurnPresets from "butterchurn-presets";
import { Settings } from "../VisualizerSettings";

const deepClone = (obj: any) => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    (key) =>
      (clone[key] =
        typeof obj[key] === "object" ? deepClone(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};

const fav = [4, 9, 11, 14, 18, 80, 45, 50];
// 4 9 11 14 18 80
// 45 ana hoce na zuru, 50
const presets = butterchurnPresets.getPresets();
const options = Object.keys(presets);

// let selected = options[9];
// const preset = presets[selected];
// console.log(preset);

//
export const getPresets = (settings: Settings) => {
  const preset = deepClone(presets[settings.preset]);
  console.log("maaaaa", settings);

  preset.baseVals.wave_mode = settings.wave_mode;
  preset.baseVals.brighten = settings.brighten / 100.0;
  preset.baseVals.decay = settings.decay / 100.0;
  preset.baseVals.rot_x = settings.rot / 100.0;
  preset.baseVals.warp_scale = settings.warp_scale / 100.0;
  preset.baseVals.wave_smoothing = settings.wave_smoothing / 100.0;
  preset.baseVals.wave_speed = settings.wave_speed / 100.0;
  preset.baseVals.wave_color_r = settings.wave_color_r / 255.0;
  preset.baseVals.wave_color_g = settings.wave_color_g / 255.0;
  preset.baseVals.wave_color_b = settings.wave_color_b / 255.0;

  // loop over all the waves
  for (let i = 0; i < 4; i++) {
    preset.waves[i].baseVals.r = settings.wave_color_r / 255.0;
    preset.waves[i].baseVals.g = settings.wave_color_g / 255.0;
    preset.waves[i].baseVals.b = settings.wave_color_b / 255.0;
  }

  // loop over all the shapes
  for (let i = 0; i < 4; i++) {
    preset.shapes[i].baseVals.r = settings.wave_color_r / 255.0;
    preset.shapes[i].baseVals.g = settings.wave_color_g / 255.0;
    preset.shapes[i].baseVals.b = settings.wave_color_b / 255.0;
  }

  preset.baseVals.echo_zoom = 0.0;
  // preset.baseVals.echo_alpha = 3.0;

  return preset;
};

export const getPresetOptions = () => {
  return options;
};
