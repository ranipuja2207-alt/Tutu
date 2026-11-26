import { MainComposition } from "./scenes/MainScene";

// Register the composition
export function registerRoot() {
  // MainComposition is the name of the composition component
  MainComposition.MainComposition = "MainComposition";
  MainComposition.description = "Motion video synced with voiceover";
}