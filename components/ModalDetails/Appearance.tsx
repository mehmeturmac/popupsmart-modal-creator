import styles from './Appearance.module.scss';
import axios from 'axios';
import * as React from 'react';
import { MainContext } from '../../context/mainContext';
import { MainContextInterface } from '../../context/@types.main';

const imgSvg = (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.1" d="M68 0H12C5.37258 0 0 5.37258 0 12V68C0 74.6274 5.37258 80 12 80H68C74.6274 80 80 74.6274 80 68V12C80 5.37258 74.6274 0 68 0Z" fill="#7D4AEA" />
    <g clipPath="url(#clip0_0_1)">
      <path
        d="M50.5 29.5V50.5H29.5V29.5H50.5ZM50.5 26.5H29.5C27.85 26.5 26.5 27.85 26.5 29.5V50.5C26.5 52.15 27.85 53.5 29.5 53.5H50.5C52.15 53.5 53.5 52.15 53.5 50.5V29.5C53.5 27.85 52.15 26.5 50.5 26.5ZM43.21 39.79L38.71 45.595L35.5 41.71L31 47.5H49L43.21 39.79Z"
        fill="#7D4AEA"
      />
    </g>
    <defs>
      <clipPath id="clip0_0_1">
        <rect width="36" height="36" fill="white" transform="translate(22 22)" />
      </clipPath>
    </defs>
  </svg>
);

export default function Appearance() {
  const { size, setSize, position, setPosition, colors, setColors, logo, setLogo } = React.useContext(MainContext) as MainContextInterface;

  const handleDrop = async (e: any) => {
    e.preventDefault();
    if (!e.dataTransfer.files[0]) return;
    if (e.dataTransfer.files[0].type === 'image/jpeg' || e.dataTransfer.files[0].type === 'image/png') {
      uploadLogo(e.dataTransfer.files[0]);
    } else alert('Logo must be a picture (jpeg/png)');
  };

  const handleUpload = async (e: any) => {
    e.preventDefault();
    if (!e.target.files[0]) return;
    if (e.target.files[0].type === 'image/jpeg' || e.target.files[0].type === 'image/png') {
      uploadLogo(e.target.files[0]);
    } else alert('Logo must be a picture (jpeg/png)');
  };

  const uploadLogo = (img: any) => {
    const fd = new FormData();
    fd.append('key', `${process.env.NEXT_PUBLIC_API_KEY}`);
    fd.append('media', img, img.name);
    axios.post(`${process.env.NEXT_PUBLIC_API}`, fd).then(({ data }) => setLogo(data.data.media));
  };

  return (
    <div className={styles.appearance}>
      <div className={styles.title}>
        <h6>2</h6>
        <p>
          Appearance <span>(Size, colors, logo)</span>
        </p>
      </div>
      <div className={styles.size}>
        <h5>Size</h5>
        <div className={styles.sizeGroup} role="group">
          {['small', 'medium', 'large'].map((x, i) => (
            <div key={i}>
              <input type="radio" id={`size${i}`} name="sizeGroup" defaultChecked={x === size ? true : false} onClick={() => setSize(x)} />
              <label htmlFor={`size${i}`}>{x[0].toUpperCase() + x.slice(1)}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.position}>
        <h5>Position</h5>
        <div className={styles.positionGroup} role="group2">
          {[...Array(9)].map((x, i) => (
            <label key={i}>
              <input type="radio" id={`position${i}`} name="positionGroup" defaultChecked={i === position ? true : false} onClick={() => setPosition(i)} />
              <span></span>
            </label>
          ))}
        </div>
      </div>
      <div className={styles.color}>
        <h5>Colors</h5>
        <input type="color" value={colors.color1} onChange={(e) => setColors({ ...colors, color1: e.target.value })} />
        <input type="color" value={colors.color2} onChange={(e) => setColors({ ...colors, color2: e.target.value })} />
        <input type="color" value={colors.color3} onChange={(e) => setColors({ ...colors, color3: e.target.value })} />
      </div>
      <div className={`${styles.logo} ${!logo ? ' hidden' : ''}`}>
        <h5>Upload Logo</h5>
        <div className={styles.dropzone} onDrop={(e) => handleDrop(e)} onDragOver={(e) => e.preventDefault()}>
          <input id="imgSelect" type="file" className={styles.files} onChange={(e) => handleUpload(e)} />
          <label htmlFor="imgSelect">
            {logo === 'default' ? imgSvg : <img src={logo} alt="logo" />}
            <span>
              <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.5125 4.53C14.0025 1.9425 11.73 0 9 0C6.8325 0 4.95 1.23 4.0125 3.03C1.755 3.27 0 5.1825 0 7.5C0 9.9825 2.0175 12 4.5 12H14.25C16.32 12 18 10.32 18 8.25C18 6.27 16.4625 4.665 14.5125 4.53ZM14.25 10.5H4.5C2.8425 10.5 1.5 9.1575 1.5 7.5C1.5 5.9625 2.6475 4.68 4.17 4.5225L4.9725 4.44L5.3475 3.7275C6.06 2.355 7.455 1.5 9 1.5C10.965 1.5 12.66 2.895 13.0425 4.8225L13.2675 5.9475L14.415 6.03C15.585 6.105 16.5 7.0875 16.5 8.25C16.5 9.4875 15.4875 10.5 14.25 10.5ZM6 6.75H7.9125V9H10.0875V6.75H12L9 3.75L6 6.75Z"
                  fill="black"
                />
              </svg>
              <p>
                Drop your image here or <span>upload</span>
              </p>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
