import * as React from 'react';

import { MainContextInterface } from './@types.main';

export const MainContext = React.createContext<MainContextInterface | null>(null);

interface Props {
  children: React.ReactNode;
}

export const MainProvider: React.FC<Props> = ({ children }) => {
  const [modalID, setModalID] = React.useState(0);
  const [size, setSize] = React.useState('medium');
  const [position, setPosition] = React.useState(4);
  const [logo, setLogo] = React.useState('');
  const [colors, setColors] = React.useState({ color1: '#FFFFFF', color2: '#000000', color3: '#7D4AEA' });
  const [contents, setContents] = React.useState({ content: 'Test' });
  const [image, setImage] = React.useState('');
  const [device, setDevice] = React.useState('everywhere');
  const [afterXSec, setAfterXSec] = React.useState(0);
  const [afterScroll, setAfterScroll] = React.useState(0);
  const [languages, setLanguages] = React.useState<string[]>([]);
  const [script, setScript] = React.useState('');

  React.useEffect(() => {
    setScript(
      `<script type="text/javascript" src="${
        process.env.NEXT_PUBLIC_URL
      }/modals/modal${modalID}.js"></script><script>window.start.init({size: "${size}", position: "${position}", logo: "${logo}", colors: ${JSON.stringify(colors)}, contents: ${JSON.stringify(
        contents
      )}, image: "${image}", afterXSec: ${afterXSec}, afterScroll: ${afterScroll}, device: "${device}", languages: ${JSON.stringify(languages)}});</script>`
    );
  }, [modalID, size, position, logo, colors, contents, image, device, afterXSec, afterScroll, languages]);

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
    languages,
    setLanguages,
    script,
  };

  return <MainContext.Provider value={values}>{children}</MainContext.Provider>;
};
