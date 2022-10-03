import { useState } from 'react';
import styles from './index.module.scss';

export default function Nav() {
  const [btn, setBtn] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.0004 36C4.70288 36 0 31.5808 0 18.0004C0 4.41999 4.70288 0 18.0004 0C31.2979 0 36 4.41999 36 18.0004C36 31.5808 31.2979 36 18.0004 36Z" fill="#7D4AEA" />
            <path
              opacity="0.4"
              d="M12.0001 13.25V16C12.0001 18.8003 12.0001 20.2004 12.5451 21.27C13.0245 22.2108 13.7894 22.9757 14.7302 23.455C15.7997 24 17.1999 24 20.0001 24H22.75C22.75 24.6967 22.75 25.0451 22.7067 25.3369C22.4482 27.0797 21.0797 28.4482 19.3369 28.7067C19.0451 28.75 18.6967 28.75 18 28.75H13.65C11.4098 28.75 10.2897 28.75 9.43404 28.314C8.68139 27.9305 8.06947 27.3186 7.68597 26.566C7.25 25.7103 7.25 24.5902 7.25 22.35V18.0001C7.25 17.3033 7.25 16.9549 7.29331 16.663C7.55186 14.9202 8.92023 13.5519 10.663 13.2933C10.9549 13.25 11.3033 13.25 12.0001 13.25Z"
              fill="white"
            />
            <path
              d="M22.35 7.25C24.5902 7.25 25.7103 7.25 26.566 7.68597C27.3186 8.06947 27.9305 8.68139 28.314 9.43404C28.75 10.2897 28.75 11.4098 28.75 13.65V16.35C28.75 18.5902 28.75 19.7103 28.314 20.566C27.9305 21.3186 27.3186 21.9305 26.566 22.314C25.7103 22.75 24.5902 22.75 22.35 22.75H19.65C17.4098 22.75 16.2897 22.75 15.434 22.314C14.6814 21.9305 14.0695 21.3186 13.686 20.566C13.25 19.7103 13.25 18.5902 13.25 16.35V13.65C13.25 11.4098 13.25 10.2897 13.686 9.43404C14.0695 8.68139 14.6814 8.06947 15.434 7.68597C16.2897 7.25 17.4098 7.25 19.65 7.25H22.35Z"
              fill="white"
            />
          </svg>
          <h1>modal.cards</h1>
        </div>
        <ul>
          <a>Solutions</a>
          <a>Product Tour</a>
          <a>Showcase</a>
          <a>Pricing</a>
        </ul>
        <div className={styles.right}>
          <a>Sing in</a>
          <a href="#container" className={styles.button}>
            Try for free
          </a>
        </div>
        <button data-testid="mobileBtn" onClick={() => setBtn((prev) => !prev)} className={styles.mobileBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </nav>
      {btn && (
        <div className={styles.mobileMenu}>
          <a>Solutions</a>
          <a>Product Tour</a>
          <a>Showcase</a>
          <a>Pricing</a>
          <a>Sing in</a>
          <a href="#container" className={styles.button}>
            Try for free
          </a>
        </div>
      )}
    </>
  );
}
