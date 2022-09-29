import Image from 'next/image';
import styles from './Appearance.module.scss';

export default function Appearance() {
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
          {['Small', 'Medium', 'Large'].map((x, i) => (
            <div key={i}>
              <input type="radio" id={`size${i}`} name="sizeGroup" value={x} defaultChecked={i === 1 ? true : false} />
              <label htmlFor={`size${i}`}>{x}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.position}>
        <h5>Position</h5>
        <div className={styles.positionGroup} role="group2">
          {[...Array(9)].map((x, i) => (
            <label key={i}>
              <input type="radio" id={`position${i}`} name="positionGroup" value={i} defaultChecked={i === 4 ? true : false} />
              <span></span>
            </label>
          ))}
        </div>
      </div>
      <div className={styles.color}>
        <h5>Colors</h5>
        <input type="color" value={'#ffffff'} />
        <input type="color" />
        <input type="color" />
      </div>
      <div className={styles.logo}>
        <h5>Upload Logo</h5>
        <div className={styles.dropzone}>
          <input id="imgSelect" type="file" className={styles.files} />
          <label htmlFor="imgSelect">
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.1" d="M68 0H12C5.37258 0 0 5.37258 0 12V68C0 74.6274 5.37258 80 12 80H68C74.6274 80 80 74.6274 80 68V12C80 5.37258 74.6274 0 68 0Z" fill="#7D4AEA" />
              <g clip-path="url(#clip0_0_1)">
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
            <span>Drop your image here or upload</span>
          </label>
        </div>
      </div>
    </div>
  );
}
