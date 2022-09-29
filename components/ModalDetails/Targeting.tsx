import styles from './Targeting.module.scss';

const styledToggle = (id: any) => {
  return (
    <label htmlFor={id}>
      <input type="checkbox" id={id} className="sr-only peer" />
      <div className="w-9 h-5 rounded-full bg-gray-200 dark:bg-gray-700 peer peer-checked:bg-[#7D4AEA] peer-checked:after:translate-x-full after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all" />
    </label>
  );
};

export default function Targeting() {
  return (
    <div className={styles.targeting}>
      <div className={styles.title}>
        <h6>4</h6>
        <p>Targeting Rules</p>
      </div>
      <div>
        <div className={styles.subtitle}>
          <h5>Visitor Device</h5>
          {styledToggle('checkbox1')}
        </div>
        <div className={styles.selectDevice}>
          <label htmlFor="device1">
            <input type="checkbox" id="device1" />
            <span>Desktop</span>
          </label>
          <label htmlFor="device2">
            <input type="checkbox" id="device2" />
            <span>Mobile</span>
          </label>
        </div>
      </div>
      <div>
        <div className={styles.subtitle}>
          <h5>After X seconds</h5>
          {styledToggle('checkbox2')}
        </div>
        <input type="text" placeholder="12" className={styles.textBox} />
      </div>
      <div>
        <div className={styles.subtitle}>
          <h5>After % Scroll</h5>
          {styledToggle('checkbox3')}
        </div>
        <input type="text" placeholder="50" className={styles.textBox} />
      </div>
      <div>
        <div className={styles.subtitle}>
          <h5>Traffic Source</h5>
          {styledToggle('checkbox4')}
        </div>
        <input type="text" placeholder="Enter your traffic source domain" className={styles.textBox} />
      </div>
      <div>
        <div className={styles.subtitle}>
          <h5>Browser Language</h5>
          {styledToggle('checkbox5')}
        </div>
        <input type="text" placeholder="Turkish" className={styles.textBox} />
      </div>
      <div>
        <div className={styles.subtitle}>
          <h5>Exit Intent Targeting</h5>
          {styledToggle('checkbox6')}
        </div>
      </div>
    </div>
  );
}
