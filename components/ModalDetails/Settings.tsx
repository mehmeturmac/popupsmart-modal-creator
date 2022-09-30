import styles from './Settings.module.scss';
import * as React from 'react';
import { MainContext } from '../../context/mainContext';
import { MainContextInterface } from '../../context/@types.main';

export default function Settings() {
  const { script } = React.useContext(MainContext) as MainContextInterface;

  return (
    <div className={styles.settings}>
      <div className={styles.title}>
        <h6>5</h6>
        <p>Settings and Code</p>
      </div>
      <h5>Webhook to Send data</h5>
      <h6>
        Enter youe Webhook URL
        <p>
          You can create a simple one with <span>make.com</span>
        </p>
      </h6>
      <input type="text" placeholder="Your Webhook URL" />
      <label htmlFor="check1">
        <input type="checkbox" id="check1" />
        <span>Send form submissions</span>
      </label>
      <label htmlFor="check2">
        <input type="checkbox" id="check2" />
        <span>Send click data</span>
      </label>
      <button>Get your Code</button>
      <div className={styles.code}>
        <span>{script}</span>
        <button>Copy the code</button>
      </div>
      <p>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.33301 3.66659H7.66634V4.99992H6.33301V3.66659ZM6.33301 6.33325H7.66634V10.3333H6.33301V6.33325ZM6.99967 0.333252C3.31967 0.333252 0.333008 3.31992 0.333008 6.99992C0.333008 10.6799 3.31967 13.6666 6.99967 13.6666C10.6797 13.6666 13.6663 10.6799 13.6663 6.99992C13.6663 3.31992 10.6797 0.333252 6.99967 0.333252ZM6.99967 12.3333C4.05967 12.3333 1.66634 9.93992 1.66634 6.99992C1.66634 4.05992 4.05967 1.66659 6.99967 1.66659C9.93967 1.66659 12.333 4.05992 12.333 6.99992C12.333 9.93992 9.93967 12.3333 6.99967 12.3333Z"
            fill="black"
          />
        </svg>
        <span>Copy and paste the embed code above just before the closing {`</body>`} tag of your website template file.</span>
      </p>
    </div>
  );
}
