import { compose, DefaultComposer } from "remotion";
import { MainComposition } from "remotion";
import { Audio } from "remotion";
import { useCurrentFrame } from "remotion";
import { interpolate } from "remotion";
import { theme } from "../theme";

// Duration: voiceover is 30.469042 seconds
// Reference video: 720x1280, 25fps
const DURATION = 30.469042;
const FPS = 25;
const WIDTH = 720;
const HEIGHT = 1280;

// durationInFrames matching the voiceover length: 30.469042 * 25 = 761.726 ~ 762 frames
const durationInFrames = Math.round(DURATION * FPS);

export const MainComposition: MainComposition = () => {
  const audio = Audio.useSound("./voiceover.mp3");
  const frame = useCurrentFrame();
  const audioTime = (frame / FPS).toFixed(3);
  const progress = (frame / durationInFrames).toFixed(3);

  return compose(
    DefaultComposer,
    () => {
      // Background - vertical gradient mesh matching reference style
      return {
        background:
          "linear-gradient(180deg, #0A0A0F 0%, #12121A 100%)",
        width: WIDTH,
        height: HEIGHT,
        overflow: "hidden",
      };
    },
    () => {
      // Animated background circles / particles
      const pulse = interpolate(progress, [0, 0.3, 0.7, 1], [0.1, 0.5, 0.8, 1]);
      return {
        // Vertical center glowing circle
        "::after": {
          content: '""',
          position: "absolute",
          width: interpolate(progress, [0, 0.5, 1], [0, 400, 400]),
          height: interpolate(progress, [0, 0.5, 1], [0, 400, 400]),
          borderRadius: "50%",
          background: `radial-gradient(circle at center, ${theme.colors.glow}33 0%, transparent 50%)`,
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) scale(${pulse})`,
          pointerEvents: "none",
        },
        // Subtle moving line element
        "::before": {
          content: '""',
          position: "absolute",
          width: 2,
          height: interpolate(progress, [0, 1], [HEIGHT, 0]),
          background: theme.colors.primary,
          left: interpolate(progress, [0, 0.7, 1], [WIDTH + 100, WIDTH - 50, WIDTH - 50]),
          top: 0,
          pointerEvents: "none",
        },
      };
    }
  );
};