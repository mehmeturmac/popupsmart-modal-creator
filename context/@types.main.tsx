export interface MainContextInterface {
  modalID: number;
  setModalID: (value: number) => void;
  size: string;
  setSize: (value: string) => void;
  position: number;
  setPosition: (value: number) => void;
  logo: string;
  setLogo: (value: string) => void;
  colors: any;
  setColors: (value: any) => void;
  contents: any;
  setContents: (value: any) => void;
  image: string;
  setImage: (value: string) => void;
  device: string;
  setDevice: (value: string) => void;
  afterXSec: number;
  setAfterXSec: (value: number) => void;
  afterScroll: number;
  setAfterScroll: (value: number) => void;
  languages: string[];
  setLanguages: (value: string[]) => void;
  script: string;
}
