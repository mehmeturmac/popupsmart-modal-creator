export interface MainContextInterface {
  // Modal
  modalID: number;
  setModalID: (value: number) => void;

  // Appearance
  size: string;
  setSize: (value: string) => void;
  position: number;
  setPosition: (value: number) => void;
  logo: string;
  setLogo: (value: string) => void;
  colors: any;
  setColors: (value: any) => void;

  // Content
  contents: any;
  setContents: (value: any) => void;
  image: string;
  setImage: (value: string) => void;

  // Targeting Rules
  device: string;
  setDevice: (value: string) => void;
  afterXSec: number;
  setAfterXSec: (value: number) => void;
  afterScroll: number;
  setAfterScroll: (value: number) => void;
  trafficSource: string;
  setTrafficSource: (value: string) => void;
  languages: string[];
  setLanguages: (value: string[]) => void;
  exitIntent: boolean;
  setExitIntent: (value: boolean) => void;

  // Settings and Code
  webHook: any;
  setWebHook: (value: any) => void;
  script: string;
}
