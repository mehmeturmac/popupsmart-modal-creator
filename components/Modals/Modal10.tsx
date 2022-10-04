import styles from './Modal10.module.scss';
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

const logoSvg = (
  <svg width="160" height="173" viewBox="0 0 160 173" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M80 160C124.183 160 160 124.183 160 80C160 35.8172 124.183 0 80 0C35.8172 0 0 35.8172 0 80C0 124.183 35.8172 160 80 160Z" fill="#D8F9FF" />
    <path d="M113.755 54.6269C101.871 54.6269 92.1484 61.6879 92.1484 70.3169V116.776H135.362V70.0119C135.361 61.5499 125.638 54.6269 113.755 54.6269Z" fill="#0392AA" />
    <path
      d="M109.239 51.3849H51.2216C36.8536 51.3849 25.0977 58.8139 25.0977 67.8929V116.775H92.1487V70.3159C92.1487 61.6869 101.872 54.6259 113.756 54.6259C125.64 54.6259 135.362 61.5489 135.362 70.0109V67.5719C135.363 58.6689 123.607 51.3849 109.239 51.3849Z"
      fill="#7D4AEA"
    />
    <path d="M83.1157 116.775H73.0156V172.549H87.4396V116.775H83.1157Z" fill="#FFC300" />
    <path d="M85.8509 27.2029H71.2549V36.6409H85.8509V27.2029Z" fill="#7D4AEA" />
    <path
      d="M87.5002 73.9509C87.5002 74.7222 87.2715 75.4763 86.8429 76.1176C86.4144 76.759 85.8053 77.2588 85.0927 77.554C84.3801 77.8492 83.5959 77.9264 82.8393 77.7759C82.0828 77.6255 81.3879 77.254 80.8425 76.7086C80.2971 76.1632 79.9256 75.4683 79.7751 74.7117C79.6247 73.9552 79.7019 73.1711 79.9971 72.4584C80.2922 71.7458 80.7921 71.1367 81.4335 70.7082C82.0748 70.2797 82.8289 70.0509 83.6002 70.0509C84.6346 70.0509 85.6265 70.4618 86.3579 71.1932C87.0893 71.9246 87.5002 72.9165 87.5002 73.9509Z"
      fill="#E0E1E3"
    />
    <path d="M81.3408 70.7649C82 70.2978 82.7879 70.0469 83.5958 70.0469C84.4037 70.0469 85.1917 70.2978 85.8508 70.7649V36.6389H81.3408V70.7649Z" fill="#FFC300" />
    <path d="M92.1484 71.1299V111.313H150.588V71.1299H92.1484Z" fill="#FFB358" />
    <path d="M92.1484 71.1299V74.6449L119.015 94.7068L150.588 71.1299H92.1484Z" fill="#FFD494" />
    <path d="M119.015 94.7069L113.365 90.4879L92.1484 107.532V111.313H150.588L124.664 90.4879L119.015 94.7069Z" fill="#ED8F33" />
  </svg>
);

export default function Modal10() {
  const { size, colors, logo, setLogo, setImage, contents, setContents } = React.useContext(MainContext) as MainContextInterface;

  React.useEffect(() => {
    setContents({
      content1: 'Check your email',
      content2: 'Once you deletet your account, you’ll lose all data associatted with it.',
      content3: 'Enter your email',
      content4: 'Sign up',
      content5: 'Already have an account?',
    });
    setLogo('default');
    setImage('');
  }, []);

  return (
    <div style={{ color: colors.color2, backgroundColor: colors.color1 }} className={`${styles.modal10} ${size === 'small' ? styles.small : size === 'medium' ? styles.medium : styles.large}`}>
      <button className={styles.closeBtn}>{closeBtn}</button>
      {logo.length < 1 || logo === 'default' ? logoSvg : <img src={logo} alt="logo" />}
      <h3>{contents.content1}</h3>
      <h5>{contents.content2}</h5>
      <input type="text" placeholder={contents.content3} />
      <div className={styles.btnGroup}>
        <button style={{ color: 'rgba(255, 255, 255, 0.9)', backgroundColor: colors.color3 }}>{contents.content4}</button>
      </div>
      <a>{contents.content5}</a>
    </div>
  );
}
