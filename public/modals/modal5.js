function Pop() {
  var cssRuleFile = 'http://localhost:3000/modals/modal5.css';
  let lnk = document.createElement('link');
  lnk.setAttribute('rel', 'stylesheet');
  lnk.setAttribute('type', 'text/css');
  lnk.setAttribute('href', cssRuleFile);
  document.getElementsByTagName('head')[0].appendChild(lnk);
  var conDivObj;

  const closeBtn = `<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        d="M15 6.54615e-06C12.0333 6.54615e-06 9.13319 0.879741 6.66645 2.52796C4.19972 4.17618 2.27713 6.51886 1.14181 9.25976C0.00649929 12.0006 -0.290551 15.0166 0.288228 17.9264C0.867006 20.8361 2.29562 23.5088 4.3934 25.6066C6.49119 27.7044 9.16394 29.133 12.0737 29.7118C14.9834 30.2906 17.9994 29.9935 20.7403 28.8582C23.4811 27.7229 25.8238 25.8003 27.472 23.3336C29.1203 20.8668 30 17.9667 30 15C30.0018 13.0297 29.6151 11.0783 28.8619 9.25758C28.1088 7.43686 27.004 5.78254 25.6107 4.3893C24.2175 2.99605 22.5632 1.89123 20.7424 1.13806C18.9217 0.384895 16.9704 -0.00183502 15 6.54615e-06ZM15 27C12.6266 27 10.3066 26.2962 8.33316 24.9776C6.35977 23.6591 4.8217 21.7849 3.91345 19.5922C3.0052 17.3995 2.76756 14.9867 3.23058 12.6589C3.69361 10.3312 4.8365 8.19296 6.51473 6.51473C8.19296 4.8365 10.3312 3.69361 12.6589 3.23058C14.9867 2.76756 17.3995 3.0052 19.5922 3.91345C21.7849 4.8217 23.6591 6.35977 24.9776 8.33316C26.2962 10.3066 27 12.6266 27 15C26.9958 18.1813 25.7301 21.2311 23.4806 23.4806C21.2311 25.7301 18.1813 26.9958 15 27ZM20.385 7.50001L15 12.885L9.61501 7.50001L7.50001 9.61501L12.885 15L7.50001 20.385L9.61501 22.5L15 17.115L20.385 22.5L22.5 20.385L17.115 15L22.5 9.61501L20.385 7.50001Z"
        fill="black"
      />
    </svg>`;

  const logoSvg = `<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M57.0519 61.0569C59.356 61.0569 61.2239 59.0906 61.2239 56.6649C61.2239 54.2393 59.356 52.2729 57.0519 52.2729C54.7478 52.2729 52.8799 54.2393 52.8799 56.6649C52.8799 59.0906 54.7478 61.0569 57.0519 61.0569Z"
    fill="#7D4AEA"
  />
  <path
    d="M37.1965 33.375C37.2301 32.8025 37.1457 32.2293 36.9486 31.6908C36.7515 31.1523 36.4459 30.66 36.0507 30.2444C35.6555 29.8289 35.1792 29.499 34.6512 29.2751C34.1233 29.0512 33.555 28.9382 32.9815 28.943C32.4087 28.9398 31.8413 29.0539 31.3143 29.2784C30.7873 29.5028 30.3119 29.8329 29.9173 30.2481C29.5228 30.6634 29.2175 31.1551 29.0202 31.6929C28.823 32.2306 28.738 32.8031 28.7705 33.375C28.7355 33.9496 28.8184 34.5252 29.0141 35.0666C29.2099 35.6079 29.5144 36.1034 29.9089 36.5226C30.3034 36.9418 30.7795 37.2759 31.3079 37.5041C31.8363 37.7324 32.4059 37.8501 32.9815 37.85C33.5578 37.8517 34.1283 37.7351 34.6577 37.5074C35.187 37.2797 35.664 36.9458 36.0592 36.5263C36.4543 36.1068 36.7591 35.6107 36.9547 35.0686C37.1504 34.5266 37.2327 33.9502 37.1965 33.375Z"
    fill="#7D4AEA"
  />
  <path
    d="M80.984 32.76C79.627 28.388 83.937 20.948 81.402 17.308C78.847 13.632 70.74 15.638 67.227 12.962C63.75 10.313 63.082 1.60701 58.904 0.18801C54.874 -1.18199 49.463 5.40401 44.996 5.40401C40.529 5.40401 35.122 -1.18199 31.091 0.18801C26.914 1.60801 26.246 10.313 22.769 12.962C19.256 15.637 11.149 13.63 8.594 17.308C6.062 20.948 10.372 28.388 9.016 32.76C7.707 36.98 0 40.324 0 45C0 49.676 7.707 53.021 9.016 57.241C10.372 61.615 6.062 69.053 8.593 72.693C11.149 76.369 19.256 74.363 22.768 77.039C26.246 79.688 26.913 88.394 31.091 89.813C35.122 91.183 40.532 84.596 45 84.596C49.468 84.596 54.878 91.183 58.908 89.813C63.086 88.393 63.753 79.688 67.231 77.039C70.744 74.363 78.849 76.369 81.406 72.693C83.937 69.052 79.627 61.614 80.984 57.241C82.293 53.021 90 49.677 90 45C90 40.323 82.293 36.98 80.984 32.76ZM23.852 33.375C23.852 27.851 27.635 23.928 32.982 23.928C38.347 23.928 42.082 27.851 42.082 33.375C42.082 38.942 38.294 42.865 32.982 42.865C27.635 42.864 23.852 38.941 23.852 33.375ZM35.829 65.502H29.929L53.529 24.502H59.429L35.829 65.502ZM57.052 66.072C51.752 66.072 47.96 62.192 47.96 56.666C47.96 51.14 51.748 47.266 57.052 47.266C62.356 47.266 66.152 51.146 66.152 56.666C66.152 62.186 62.36 66.071 57.052 66.071V66.072Z"
    fill="#7D4AEA"
  />
</svg>`;

  let contents = { content1: 'Join our mail list', content2: 'Save up to 30% of your next order', content3: 'Enter your email', content4: 'Later', content5: 'Join now' };

  let colors = { color1: '#FFFFFF', color2: '#000000', color3: '#7D4AEA' };

  let appearance = { size: 'medium', position: '4', logo: logoSvg, afterXSec: 0, afterScroll: 0, trafficSource: '', exitIntent: false };

  let languages = [];

  let webHook = { url: '', sendForm: true, sendClick: false };

  let createPopUp = function () {
    if (typeof conDivObj === 'undefined') {
      conDivObj = document.createElement('DIV');
      conDivObj.setAttribute('id', 'modal5');
    }

    // Positions
    if (appearance.position === '0') {
      conDivObj.style.left = 0;
      conDivObj.style.top = 0;
    } else if (appearance.position === '1') {
      conDivObj.style.left = '50%';
      conDivObj.style.top = 0;
      conDivObj.style.transform = 'translate(-50%)';
      conDivObj.style.marginLeft = 0;
    } else if (appearance.position === '2') {
      conDivObj.style.right = 0;
      conDivObj.style.top = 0;
    } else if (appearance.position === '3') {
      conDivObj.style.left = 0;
      conDivObj.style.top = '50%';
      conDivObj.style.transform = 'translate(0, -50%)';
      conDivObj.style.marginTop = 0;
    } else if (appearance.position === '4') {
      conDivObj.style.left = '50%';
      conDivObj.style.top = '50%';
      conDivObj.style.transform = 'translate(-50%, -50%)';
      conDivObj.style.margin = 0;
    } else if (appearance.position === '5') {
      conDivObj.style.right = 0;
      conDivObj.style.top = '50%';
      conDivObj.style.transform = 'translate(0, -50%)';
      conDivObj.style.marginTop = 0;
    } else if (appearance.position === '6') {
      conDivObj.style.left = 0;
      conDivObj.style.bottom = 0;
    } else if (appearance.position === '7') {
      conDivObj.style.left = '50%';
      conDivObj.style.bottom = 0;
      conDivObj.style.transform = 'translate(-50%)';
      conDivObj.style.marginLeft = 0;
    } else if (appearance.position === '8') {
      conDivObj.style.right = 0;
      conDivObj.style.bottom = 0;
    }

    conDivObj.innerHTML = `
    <div style="color: ${colors.color2}; background-color: ${colors.color1};" id="modal5-popup" class="modal5-popup hide ${
      appearance.size === 'small' ? 'small' : appearance.size === 'medium' ? 'medium' : 'large'
    }">
      <button class="closeBtn" id="closeBtn" >${closeBtn}</button>
      ${appearance.logo.length < 1 || appearance.logo === 'default' ? logoSvg : `<img src=${appearance.logo} alt="logo" />`}
      <h3>${contents.content1}</h3>
      <h5>${contents.content2}</h5>
      <input type="text" id="popup-input" placeholder="${contents.content3}" />
      <div class="btnGroup">
        <button id="closeBtn2" style="color: ${colors.color2}; background-color: rgba(0, 0, 0, 0.1);">
          ${contents.content4}
        </button>
        <button id="submitBtn" style="color: rgba(255, 255, 255, 0.9); background-color: ${colors.color3}">${contents.content5}</button>
      </div>
    </div>
    `;
    document.body.appendChild(conDivObj);

    function actions() {
      // System Data
      const userAgent = navigator.userAgent;

      let browserName;
      if (userAgent.match(/chrome|chromium|crios/i)) browserName = 'Chrome';
      else if (userAgent.match(/firefox|fxios/i)) browserName = 'Firefox';
      else if (userAgent.match(/safari/i)) browserName = 'Safari';
      else if (userAgent.match(/opr\//i)) browserName = 'Opera';
      else if (userAgent.match(/edg/i)) browserName = 'Edge';
      else browserName = 'No browser detection';

      let OSName;
      if (userAgent.indexOf('Windows NT 10.0') != -1) OSName = 'Windows 10';
      if (userAgent.indexOf('Windows NT 6.3') != -1) OSName = 'Windows 8.1';
      if (userAgent.indexOf('Windows NT 6.2') != -1) OSName = 'Windows 8';
      if (userAgent.indexOf('Windows NT 6.1') != -1) OSName = 'Windows 7';
      if (userAgent.indexOf('Windows NT 6.0') != -1) OSName = 'Windows Vista';
      if (userAgent.indexOf('Windows NT 5.1') != -1) OSName = 'Windows XP';
      if (userAgent.indexOf('Windows NT 5.0') != -1) OSName = 'Windows 2000';
      if (userAgent.indexOf('Mac') != -1) OSName = 'Mac/iOS';
      if (userAgent.indexOf('X11') != -1) OSName = 'UNIX';
      if (userAgent.indexOf('Linux') != -1) OSName = 'Linux';

      const device = navigator.userAgentData.mobile ? 'Mobile' : 'Desktop';
      const browserLang = navigator.language || navigator.userLanguage;
      let date = new Date().toLocaleString();

      const systemData = { date, browserLang, browserName, OSName, device };

      // getElements
      const closeBtn = document.getElementById('closeBtn');
      const closeBtn2 = document.getElementById('closeBtn2');
      const submitBtn = document.getElementById('submitBtn');
      const popup = document.getElementById('modal5-popup').classList;
      const input = document.getElementById('popup-input');

      // Event Listeners
      closeBtn.addEventListener('click', () => popup.add('hide'));
      closeBtn2.addEventListener('click', () => popup.add('hide'));

      // Webhook
      const webHookPost = async (data) => {
        await fetch(webHook.url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify([data]),
        });
        popup.add('hide');
      };

      if (webHook.url) {
        let sentData = { ...systemData };

        let formData;
        input.addEventListener('input', (e) => {
          formData = e.target.value;
        });

        let sendData = contents.content1;

        submitBtn.addEventListener('click', () => {
          if (webHook.sendForm) sentData = { ...sentData, formData };
          if (webHook.sendClick) sentData = { ...sentData, sendData };
          webHookPost(sentData);
        });
      }

      if (document.referrer.includes(appearance.trafficSource) && (languages.length === 0 || languages.find((lang) => lang === browserLang.split('-')[0]))) {
        if (appearance.afterScroll > 0) {
          var myScrollFunc = function () {
            if (window.scrollY < (window.innerHeight * appearance.afterScroll) / 100) {
              popup.add('hide');
            } else {
              popup.remove('hide');
            }
          };
          window.addEventListener('scroll', myScrollFunc);
        } else if (appearance.exitIntent) {
          document.addEventListener('mouseleave', () => {
            popup.remove('hide');
          });
          document.addEventListener('mouseenter', () => {
            popup.add('hide');
          });
        } else {
          setTimeout(() => popup.remove('hide'), appearance.afterXSec * 1000);
        }
      }
    }
    actions();
  };
  this.init = function (param) {
    if (typeof param === 'object') {
      if ('size' in param) appearance.size = param.size;
      if ('position' in param) appearance.position = param.position;
      if ('logo' in param && param.logo !== null) appearance.logo = param.logo;
      if ('colors' in param) colors = param.colors;
      if ('contents' in param) contents = param.contents;
      if ('afterXSec' in param) appearance.afterXSec = param.afterXSec;
      if ('afterScroll' in param) appearance.afterScroll = param.afterScroll;
      if ('trafficSource' in param) appearance.trafficSource = param.trafficSource;
      if ('languages' in param) languages = param.languages;
      if ('exitIntent' in param) appearance.exitIntent = param.exitIntent;
      if ('webHook' in param) webHook = param.webHook;

      if (typeof window != 'undefined') {
        if (param.device === 'mobile' && window.innerWidth <= 720) {
          createPopUp();
        } else if (param.device === 'desktop' && window.innerWidth >= 720) {
          createPopUp();
        } else if (param.device === 'everywhere') {
          createPopUp();
        }
      }
    }
  };
}
window.start = new Pop();
