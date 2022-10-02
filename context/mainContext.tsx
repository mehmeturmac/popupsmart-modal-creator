import * as React from 'react';

import { MainContextInterface } from './@types.main';

export const MainContext = React.createContext<MainContextInterface | null>(null);

interface Props {
  children: React.ReactNode;
}

export const MainProvider: React.FC<Props> = ({ children }) => {
  // Modal
  const [modalID, setModalID] = React.useState<number>(0);

  // Appearance
  const [size, setSize] = React.useState<string>('medium');
  const [position, setPosition] = React.useState<number>(4);
  const [logo, setLogo] = React.useState<string>('');
  const [colors, setColors] = React.useState<object>({ color1: '#FFFFFF', color2: '#000000', color3: '#7D4AEA' });

  // Content
  const [contents, setContents] = React.useState<object>({ content: 'Test' });
  const [image, setImage] = React.useState<string>('');

  // Targeting Rules
  const [device, setDevice] = React.useState<string>('everywhere');
  const [afterXSec, setAfterXSec] = React.useState<number>(0);
  const [afterScroll, setAfterScroll] = React.useState<number>(0);
  const [trafficSource, setTrafficSource] = React.useState<string>('');
  const [languages, setLanguages] = React.useState<string[]>([]);
  const [exitIntent, setExitIntent] = React.useState<boolean>(false);

  // Settings and Code
  const [webHook, setWebHook] = React.useState<object>({ url: '', sendForm: true, sendClick: false });
  const [script, setScript] = React.useState<string>('');
  React.useEffect(() => {
    setScript(
      `<script type="text/javascript" src="${
        process.env.NEXT_PUBLIC_URL
      }/modals/modal${modalID}.js"></script><script>window.start.init({size: "${size}", position: "${position}", logo: "${logo}", colors: ${JSON.stringify(colors)}, contents: ${JSON.stringify(
        contents
      )}, image: "${image}", afterXSec: ${afterXSec}, afterScroll: ${afterScroll}, device: "${device}", trafficSource: "${trafficSource}", languages: ${JSON.stringify(
        languages
      )}, exitIntent: ${exitIntent}, webHook: ${JSON.stringify(webHook)}, });</script>`
    );
  }, [modalID, size, position, logo, colors, contents, image, device, afterXSec, afterScroll, trafficSource, languages, exitIntent, webHook]);

  // Reset Context
  const resetContext = () => {
    // Appearance
    setSize('medium');
    setPosition(4);
    setLogo('');
    setColors({ color1: '#FFFFFF', color2: '#000000', color3: '#7D4AEA' });

    // Content
    setContents({ content: 'Test' });
    setImage('');

    // Targeting Rules
    setDevice('everywhere');
    setAfterXSec(0);
    setAfterScroll(0);
    setTrafficSource('');
    setLanguages([]);
    setExitIntent(false);

    // Settings and Code
    setWebHook({ url: '', sendForm: true, sendClick: false });
  };

  React.useEffect(() => {
    resetContext();
  }, [modalID]);

  const values = {
    modalID,
    setModalID,
    size,
    setSize,
    position,
    setPosition,
    logo,
    setLogo,
    colors,
    setColors,
    contents,
    setContents,
    image,
    setImage,
    device,
    setDevice,
    afterXSec,
    setAfterXSec,
    afterScroll,
    setAfterScroll,
    trafficSource,
    setTrafficSource,
    languages,
    setLanguages,
    exitIntent,
    setExitIntent,
    webHook,
    setWebHook,
    script,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
