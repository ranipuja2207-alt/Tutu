import { InterpolationConfig } from "remotion";

export const theme = {
  colors: {
    bg: "#0A0A0F",
    bgSecondary: "#12121A",
    primary: "#7C3AED", // violet hero
    primarySoft: "#A78BFA",
    accent: "#22D3EE", // cyan accent
    text: "#F4F4F5",
    textDim: "#A1A1AA",
    textMuted: "#71717A",
    white: "#FFFFFF",
    black: "#000000",
    glow: "#7C3AED",
  },

  fonts: {
    display: "Clash Display",
    sans: "Inter",
    mono: "JetBrains Mono",
  },

  spring: {
    smooth: { damping: 22, stiffness: 180, mass: 1 },
    snappy: { damping: 20, stiffness: 280, mass: 1 },
    gentle: { damping: 30, stiffness: 120, mass: 1 },
    bouncy: { damping: 15, stiffness: 200, mass: 1 },
  },

  ease: {
    out: { easing: "cubic-bezier(0.16, 1, 0.3, 1)" } as InterpolationConfig,
    in: { easing: "cubic-bezier(0.7, 0, 0.84, 0)" } as InterpolationConfig,
    inOut: { easing: "cubic-bezier(0.4, 0, 0.2, 1)" } as InterpolationConfig,
    sharp: { easing: "cubic-bezier(0.4, 0, 0.6, 1)" } as InterpolationConfig,
    expo: { easing: "cubic-bezier(0.19, 1, 0.22, 1)" } as InterpolationConfig,
  },

  timing: {
    entranceFrames: 24,
    exitFrames: 12,
    staggerWord: 3,
    staggerLine: 5,
    staggerCard: 6,
    holdFrames: 18,
  },

  layout: {
    safeZoneTop: 0.12,
    safeZoneBottom: 0.88,
    maxWidth: 0.85,
  },

  // Video config - matching reference video: 720x1280, 25fps
  video: {
    width: 720,
    height: 1280,
    fps: 25,
    durationInFrames: 762, // 30.469042s * 25fps = 761.726 ~ 762 frames
  },
} as const;

export type Theme = typeof theme;