import styles from './Targeting.module.scss';
import * as React from 'react';
import { MainContext } from '../../context/mainContext';
import { MainContextInterface } from '../../context/@types.main';

const langObj: any = { en: 'English', fr: 'French', de: 'German', pl: 'Polish', nl: 'Ducth', fi: 'Finnish', tr: 'Turkish' };

export default function Targeting() {
  const { device, setDevice, afterXSec, setAfterXSec, afterScroll, setAfterScroll, trafficSource, setTrafficSource, languages, setLanguages, exitIntent, setExitIntent } = React.useContext(
    MainContext
  ) as MainContextInterface;

  // Checkboxes
  const [deviceCheck, setDeviceCheck] = React.useState<boolean>(false);
  const [afterXSecCheck, setAfterXSecCheck] = React.useState<boolean>(false);
  const [afterScrollCheck, setAfterScrollCheck] = React.useState<boolean>(false);
  const [trafficSourceCheck, setTrafficSourceCheck] = React.useState<boolean>(false);
  const [browserLanguageCheck, setBrowserLanguageCheck] = React.useState<boolean>(false);

  React.useEffect(() => {
    deviceCheck ? setDevice('desktop') : setDevice('everywhere');
  }, [deviceCheck]);

  React.useEffect(() => {
    setAfterXSec(0);
  }, [afterXSecCheck]);

  React.useEffect(() => {
    setAfterScroll(0);
  }, [afterScrollCheck]);

  React.useEffect(() => {
    setTrafficSource('');
  }, [trafficSourceCheck]);

  React.useEffect(() => {
    setLanguages([]);
    if (!browserLanguageCheck) setDropDown(true);
  }, [browserLanguageCheck]);

  // Languages Dropdown
  const [dropDown, setDropDown] = React.useState<boolean>(true);
  const handleCheck = (event: any) => {
    var updatedList = [...languages];
    if (event.target.checked) {
      updatedList = [...languages, event.target.id];
    } else {
      updatedList.splice(languages.indexOf(event.target.id), 1);
    }
    setLanguages(updatedList);
  };
  const handleCheckRemove = (lang: string) => {
    var updatedList = [...languages];
    updatedList.splice(languages.indexOf(lang), 1);
    setLanguages(updatedList);
  };

  return (
    <div className={styles.targeting}>
      <div className={styles.title}>
        <h6>4</h6>
        <p>Targeting Rules</p>
      </div>

      {/* Device */}

      <div>
        <div className={styles.subtitle}>
          <h5>Visitor Device</h5>
          <label htmlFor="deviceCheckbox">
            <input type="checkbox" id="deviceCheckbox" className="sr-only peer" onChange={() => setDeviceCheck(!deviceCheck)} />
            <div className="peer peer-checked:bg-[#7D4AEA] peer-checked:after:translate-x-full" />
          </label>
        </div>
        <div className={styles.selectDevice}>
          <label htmlFor="desktop">
            <input type="radio" name="deviceGroup" id="desktop" onClick={(e) => setDevice((e.target as Element).id)} disabled={!deviceCheck} checked={device === 'desktop' ? true : false} />
            <span>
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 12.5C15.825 12.5 16.5 11.825 16.5 11V1.5C16.5 0.675 15.825 0 15 0H3C2.175 0 1.5 0.675 1.5 1.5V11C1.5 11.825 2.175 12.5 3 12.5H0V14H18V12.5H15ZM3 1.5H15V11H3V1.5Z"
                  fill="#999999"
                />
              </svg>
              <p>Desktop</p>
            </span>
          </label>
          <label htmlFor="mobile">
            <input type="radio" name="deviceGroup" id="mobile" onClick={(e) => setDevice((e.target as Element).id)} disabled={!deviceCheck} checked={device === 'mobile' ? true : false} />
            <span>
              <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.75 0.7575L2.25 0.75C1.425 0.75 0.75 1.425 0.75 2.25V15.75C0.75 16.575 1.425 17.25 2.25 17.25H9.75C10.575 17.25 11.25 16.575 11.25 15.75V2.25C11.25 1.425 10.575 0.7575 9.75 0.7575ZM9.75 14.25H2.25V3.75H9.75V14.25Z"
                  fill="#999999"
                />
              </svg>
              <p>Mobile</p>
            </span>
          </label>
        </div>
      </div>

      {/* After X seconds */}

      <div>
        <div className={styles.subtitle}>
          <h5>After X seconds</h5>
          <label htmlFor="afterXSecCheckbox">
            <input type="checkbox" id="afterXSecCheckbox" className="sr-only peer" onChange={() => setAfterXSecCheck(!afterXSecCheck)} />
            <div className="peer peer-checked:bg-[#7D4AEA] peer-checked:after:translate-x-full" />
          </label>
        </div>
        <input type="number" placeholder="12" className={styles.textBox} value={afterXSec === 0 ? '' : afterXSec} onChange={(e) => setAfterXSec(Number(e.target.value))} disabled={!afterXSecCheck} />
      </div>

      {/* After % Scroll */}

      <div>
        <div className={styles.subtitle}>
          <h5>After % Scroll</h5>
          <label htmlFor="afterScrollCheckbox">
            <input type="checkbox" id="afterScrollCheckbox" className="sr-only peer" onChange={() => setAfterScrollCheck(!afterScrollCheck)} />
            <div className="peer peer-checked:bg-[#7D4AEA] peer-checked:after:translate-x-full" />
          </label>
        </div>
        <input
          type="number"
          placeholder="50"
          className={styles.textBox}
          value={afterScroll === 0 ? '' : afterScroll}
          onChange={(e) => setAfterScroll(Number(e.target.value))}
          disabled={!afterScrollCheck}
        />
      </div>

      {/* Traffic Source */}

      <div>
        <div className={styles.subtitle}>
          <h5>Traffic Source</h5>
          <label htmlFor="trafficSourceCheckbox">
            <input type="checkbox" id="trafficSourceCheckbox" className="sr-only peer" onChange={() => setTrafficSourceCheck(!trafficSourceCheck)} />
            <div className="peer peer-checked:bg-[#7D4AEA] peer-checked:after:translate-x-full" />
          </label>
        </div>
        <input
          type="text"
          placeholder="Enter your traffic source domain"
          className={styles.textBox}
          value={trafficSource}
          onChange={(e) => setTrafficSource(e.target.value)}
          disabled={!trafficSourceCheck}
        />
      </div>

      {/* Browser Language */}

      <div>
        <div className={styles.subtitle}>
          <h5>Browser Language</h5>
          <label htmlFor="browserLanguageCheckbox">
            <input type="checkbox" id="browserLanguageCheckbox" className="sr-only peer" onChange={() => setBrowserLanguageCheck(!browserLanguageCheck)} />
            <div className="peer peer-checked:bg-[#7D4AEA] peer-checked:after:translate-x-full" />
          </label>
        </div>
        <div className={styles.dropDown + ` ${!browserLanguageCheck ? styles.disabledDiv : null}`}>
          <div className={styles.dropDownBtn}>
            {languages.length === 0 && <label htmlFor="dropDownID">Select</label>}
            {languages.map((x: any, i: any) => (
              <button key={i} onClick={() => handleCheckRemove(x)}>
                {langObj[x]}
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 6.515L6.515 7.5L4 4.985L1.485 7.5L0.5 6.515L3.015 4L0.5 1.485L1.485 0.5L4 3.015L6.515 0.5L7.5 1.485L4.985 4L7.5 6.515Z" fill="black" />
                </svg>
              </button>
            ))}
          </div>
          <button className={styles.svgBtn} id="dropDownID" onClick={() => setDropDown(!dropDown)}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.4425 0.442383L5 3.87738L1.5575 0.442383L0.5 1.49988L5 5.99988L9.5 1.49988L8.4425 0.442383Z" fill="#777777" />
            </svg>
          </button>
        </div>
        <div className={styles.dropDownList} hidden={dropDown}>
          <div>
            {Object.keys(langObj).map((key, i) => (
              <label htmlFor={key} key={i}>
                <input type="checkbox" id={key} checked={languages.includes(key)} onChange={handleCheck} />
                <span>{langObj[key]}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Exit Intent Targeting */}

      <div>
        <div className={styles.subtitle}>
          <h5>Exit Intent Targeting</h5>
          <label htmlFor="exitIntentCheckbox">
            <input type="checkbox" id="exitIntentCheckbox" className="sr-only peer" onChange={() => setExitIntent(!exitIntent)} />
            <div className="peer peer-checked:bg-[#7D4AEA] peer-checked:after:translate-x-full" />
          </label>
        </div>
      </div>
    </div>
  );
}
