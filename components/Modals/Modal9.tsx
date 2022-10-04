import styles from './Modal9.module.scss';
import * as React from 'react';
import { MainContext } from '../../context/mainContext';
import { MainContextInterface } from '../../context/@types.main';

const closeBtn = (
  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.4"
      d="M15 6.54615e-06C12.0333 6.54615e-06 9.13319 0.879741 6.66645 2.52796C4.19972 4.17618 2.27713 6.51886 1.14181 9.25976C0.00649929 12.0006 -0.290551 15.0166 0.288228 17.9264C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16394 29.133 12.0737 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4811 27.7229 25.8238 25.8003 27.472 23.3336C29.1203 20.8668 30 17.9667 30 15C30.0018 13.0297 29.6151 11.0783 28.8619 9.25758C28.1088 7.43686 27.004 5.78254 25.6107 4.3893C24.2175 2.99605 22.5632 1.89123 20.7424 1.13806C18.9217 0.384895 16.9704 -0.00183502 15 6.54615e-06ZM15 27C12.6266 27 10.3066 26.2962 8.33316 24.9776C6.35977 23.6591 4.8217 21.7849 3.91345 19.5922C3.0052 17.3995 2.76756 14.9867 3.23058 12.6589C3.69361 10.3312 4.8365 8.19296 6.51473 6.51473C8.19296 4.8365 10.3312 3.69361 12.6589 3.23058C14.9867 2.76756 17.3995 3.0052 19.5922 3.91345C21.7849 4.8217 23.6591 6.35977 24.9776 8.33316C26.2962 10.3066 27 12.6266 27 15C26.9958 18.1813 25.7301 21.2311 23.4806 23.4806C21.2311 25.7301 18.1813 26.9958 15 27ZM20.385 7.50001L15 12.885L9.61501 7.50001L7.50001 9.61501L12.885 15L7.50001 20.385L9.61501 22.5L15 17.115L20.385 22.5L22.5 20.385L17.115 15L22.5 9.61501L20.385 7.50001Z"
      fill="black"
    />
  </svg>
);

export default function Modal9() {
  const { size, colors, image, setImage, setLogo, contents, setContents } = React.useContext(MainContext) as MainContextInterface;

  React.useEffect(() => {
    setContents({
      content1: 'Sign up',
      content2: 'Join new adventure',
      content3: 'Enter Full name',
      content4: 'Enter your email',
      content5: 'Sign up',
      content6: 'Forgot password',
      content7: 'Log In',
    });
    setImage('https://thumbsnap.com/i/D3HqtCH3.png');
    setLogo('');
  }, []);

  return (
    <div style={{ color: colors.color2, backgroundColor: colors.color1 }} className={`${styles.modal9} ${size === 'small' ? styles.small : size === 'medium' ? styles.medium : styles.large}`}>
      <button className={styles.closeBtn}>{closeBtn}</button>
      <div className={styles.left}>
        <h3>{contents.content1}</h3>
        <h5>{contents.content2}</h5>
        <input type="text" placeholder={contents.content3} />
        <input type="text" placeholder={contents.content4} />
        <div className={styles.btnGroup}>
          <button style={{ color: 'rgba(255, 255, 255, 0.9)', backgroundColor: colors.color3 }}>{contents.content5}</button>
        </div>
        <span>
          <a>{contents.content6}</a>
          <a>{contents.content7}</a>
        </span>
      </div>
      <img src={image} alt="image" />
    </div>
  );
}
