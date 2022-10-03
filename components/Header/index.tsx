import styles from './index.module.scss';
import Image from 'next/image';

export default function Header() {
  const svgTick = (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.99993 7.80019L1.19993 5.00019L0.266602 5.93352L3.99993 9.66685L11.9999 1.66685L11.0666 0.733521L3.99993 7.80019Z" fill="black" />
    </svg>
  );

  return (
    <header>
      <div className={styles.header1}>
        <main>
          <h1>Simple modal card creator</h1>
          <h4>A utility-first CSS framework packed with classeslike flex, pt-4, text-center and rotate-90 that can becomposed to build any design, directly in your markup.</h4>
          <button>Try it out now</button>
          <div>
            <span>
              {svgTick}
              <p>Free and paid plans</p>
            </span>
            <span>
              {svgTick}
              <p>Setup in minutes</p>
            </span>
            <span>
              {svgTick}
              <p>No credit card required*</p>
            </span>
          </div>
        </main>
      </div>
      <div className={styles.header2}>
        <main>
          <div className={styles.card1}>
            <div className={styles.left}>
              <svg width="106" height="38" viewBox="0 0 106 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.98565 0H6.88287C3.04215 0 0 3.03618 0 6.87437V29.0633C0 32.9588 3.17525 36.0141 6.9209 36.0141H7.68143C11.6552 36.0141 14.7354 32.9588 14.7354 28.4523V21.2342H9.22152V28.5859C9.22152 29.3688 8.87928 30.6482 7.51031 30.6482H7.2061C6.31247 30.6482 5.53291 29.9226 5.53291 28.6623V7.50452C5.53291 6.47337 6.29345 5.51859 7.2061 5.51859H7.51031C8.44197 5.51859 9.22152 6.47337 9.22152 7.50452V14.3407H14.7354V6.87437C14.7354 3.01709 11.6552 0 7.98565 0ZM45.6133 11.3427L41.4683 0.763819H35.7453V26.6191L41.2592 25.8553V13.7296L45.6133 22.4945L49.8913 13.5769V25.2442H55.4052V0.763819H50.0244L45.6133 11.3618V11.3427ZM81.5677 17.396H87.5189V12.5457H81.5677V5.63317H88.1083V0.763819H76.0538V27.4211C80.541 28.3568 84.6859 29.2734 88.4126 30.5146V25.2251L81.5677 23.9266V17.4342V17.396ZM103.414 18.1598C104.745 17.396 105.848 15.8111 105.848 14.0925V5.4995C105.848 2.84523 103.718 0.744724 100.923 0.744724H91.0935V31.603L96.5693 33.7417V20.2221C96.5693 20.2221 100.41 19.7829 100.41 23.6211V35.3457L106 38V22.1508C106 20.0884 104.84 18.6181 103.433 18.1598H103.414ZM100.391 13.4432C100.391 14.4744 100.125 14.99 98.889 14.99H96.5503V5.4995H98.889C100.125 5.4995 100.391 5.93869 100.391 7.00804V13.4432ZM25.8203 0.0763819H24.7175C20.8768 0.0763819 17.8726 3.11256 17.8726 6.98895V30.5146L23.3865 28.8342V21.7498H27.0561V28.1849L32.494 27.0774V6.98895C32.494 3.09347 29.4518 0.0763819 25.8203 0.0763819ZM27.0561 16.6131H23.3865V7.38995C23.3865 6.49246 24.1471 5.57588 25.0597 5.57588H25.3639C26.2956 5.57588 27.0371 6.51156 27.0371 7.38995V16.6131H27.0561ZM68.6766 0.763819H58.8086V25.3779L64.3605 25.6834V18.9809H68.6766C71.4526 18.9809 73.5821 16.8231 73.5821 13.9588V5.4995C73.5821 2.84523 71.4526 0.744724 68.6766 0.744724V0.763819ZM68.1252 12.6985C68.1252 13.8251 67.821 14.3216 66.6231 14.3216H64.3225V5.57588H66.6231C67.821 5.57588 68.1252 5.84322 68.1252 6.91256V12.6985Z"
                  fill="#E60000"
                />
              </svg>
              <h3>Join the club</h3>
              <h6>
                Subscribe and Get an Extra <span>25% Off</span> on your first purchase.
              </h6>
              <input type="email" placeholder="Email address" />
              <button>Subscribe</button>
              <p>
                By signing up, you agree to <span>Privacy Policy</span> and <span>Terms of Use.</span>
              </p>
            </div>
            <div className={styles.right}>
              <Image src="/image-1.png" width="400px" height="479px" className={styles.image} priority />
              <h6>Mediterranean Sneakers®</h6>
              <button>X</button>
            </div>
          </div>
          <div className={styles.card2}>
            <span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.99953 0.0200195C4.48953 0.0200195 0.0195312 4.49002 0.0195312 10C0.0195312 15.51 4.48953 19.98 9.99953 19.98C15.5095 19.98 19.9795 15.51 19.9795 10C19.9795 4.49002 15.5095 0.0200195 9.99953 0.0200195ZM9.47953 15.88V11.74H6.81953C6.44953 11.74 6.19953 11.34 6.37953 11.01L10.0595 3.84002C10.2895 3.37002 10.9995 3.54002 10.9995 4.07002V8.26002H13.5395C13.9095 8.26002 14.1495 8.65002 13.9895 8.98002L10.4295 16.1C10.1895 16.58 9.47953 16.41 9.47953 15.88Z"
                  fill="#F2A737"
                />
              </svg>
              <p>Grow email list</p>
            </span>
            <span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11.41 16.09V16.67C11.41 17.4 10.81 18 10.08 18H10.07C9.34 18 8.74 17.4 8.74 16.67V16.07C7.41 15.79 6.23 15.06 5.73 13.83C5.5 13.28 5.93 12.67 6.53 12.67H6.77C7.14 12.67 7.44 12.92 7.58 13.27C7.87 14.02 8.63 14.54 10.09 14.54C12.05 14.54 12.49 13.56 12.49 12.95C12.49 12.12 12.05 11.34 9.82 10.81C7.34 10.21 5.64 9.19 5.64 7.14C5.64 5.42 7.03 4.3 8.75 3.93V3.33C8.75 2.6 9.35 2 10.08 2H10.09C10.82 2 11.42 2.6 11.42 3.33V3.95C12.8 4.29 13.67 5.15 14.05 6.21C14.25 6.76 13.83 7.34 13.24 7.34H12.98C12.61 7.34 12.31 7.08 12.21 6.72C11.98 5.96 11.35 5.47 10.09 5.47C8.59 5.47 7.69 6.15 7.69 7.11C7.69 7.95 8.34 8.5 10.36 9.02C12.38 9.54 14.54 10.41 14.54 12.93C14.52 14.76 13.15 15.76 11.41 16.09Z"
                  fill="#63C77F"
                />
              </svg>
              <p>Increase sales conversion</p>
            </span>
          </div>
          <div className={styles.text}>
            <span>
              <h4>3x</h4>
              <p>Increase Conversion Rate</p>
            </span>
            <span>
              <h4>120%</h4>
              <p>Email Subscribers</p>
            </span>
            <span>
              <h4>390%</h4>
              <p>More Customer Engagement</p>
            </span>
            <h5>Popupsmart meets all your business needs.</h5>
          </div>
        </main>
      </div>
    </header>
  );
}
