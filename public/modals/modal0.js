function Pop() {
  var cssRuleFile = 'http://localhost:3000/modals/modal0.css';
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
      <path d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z" fill="#7D4AEA" />
      <path
        d="M50 46.18L51.8 53.94L45 49.84L38.2 53.94L40 46.2L34 41.02L41.92 40.34L45 33.04L48.08 40.32L56 41L50 46.18ZM45 27.38L59 33.6V43C59 52.04 53.04 60.38 45 62.86C36.96 60.38 31 52.04 31 43V33.6L45 27.38ZM45 23L27 31V43C27 54.1 34.68 64.48 45 67C55.32 64.48 63 54.1 63 43V31L45 23Z"
        fill="white"
      />
    </svg>`;

  let contents = { content1: 'Security Code', content2: 'This code expires in 24 hours', content3: 'Code', content4: 'Cancel', content5: 'Continue' };

  let colors = { color1: '#FFFFFF', color2: '#000000', color3: '#7D4AEA' };

  let appearance = { size: 'medium', position: '4', logo: logoSvg, afterXSec: 0, afterScroll: 0 };

  let createPopUp = function () {
    if (typeof conDivObj === 'undefined') {
      conDivObj = document.createElement('DIV');
      conDivObj.setAttribute('id', 'modal0');
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
    <div style="color: ${colors.color2}; background-color: ${colors.color1};" id="modal0-popup" class="modal0-popup hide ${
      appearance.size === 'small' ? 'small' : appearance.size === 'medium' ? 'medium' : 'large'
    }">
      <button class="closeBtn" id="closeBtn" >${closeBtn}</button>
      ${appearance.logo.length < 1 || appearance.logo === 'default' ? logoSvg : `<img src=${appearance.logo} alt="logo" />`}
      <h3>${contents.content1}</h3>
      <h5>${contents.content2}</h5>
      <input type="text" placeholder="${contents.content3}" />
      <div class="btnGroup">
        <button id="closeBtn2" style="color: ${colors.color2}; background-color: rgba(0, 0, 0, 0.1); border-style: solid; border-width: 1px">
          ${contents.content4}
        </button>
        <button style="color: rgba(255, 255, 255, 0.9); background-color: ${colors.color3}">${contents.content5}</button>
      </div>
    </div>
    `;
    document.body.appendChild(conDivObj);

    function actions() {
      const closeBtn = document.getElementById('closeBtn');
      const closeBtn2 = document.getElementById('closeBtn2');
      const popup = document.getElementById('modal0-popup').classList;
      closeBtn.addEventListener('click', () => popup.add('hide'));
      closeBtn2.addEventListener('click', () => popup.add('hide'));

      // ÖNEMLİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİ
      var userLang = navigator.language || navigator.userLanguage;
      console.log(userLang);
      console.log(document.referrer);
      // ÖNEMLİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİİ

      if (appearance.afterScroll > 0) {
        var myScrollFunc = function () {
          if (window.scrollY < (window.innerHeight * appearance.afterScroll) / 100) {
            popup.add('hide');
          } else {
            popup.remove('hide');
          }
        };
        window.addEventListener('scroll', myScrollFunc);
      } else {
        setTimeout(() => popup.remove('hide'), appearance.afterXSec * 1000);
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
