function Pop() {
  var cssRuleFile = 'http://localhost:3000/modals/modal0.css';
  let lnk = document.createElement('link');
  lnk.setAttribute('rel', 'stylesheet');
  lnk.setAttribute('type', 'text/css');
  lnk.setAttribute('href', cssRuleFile);
  document.getElementsByTagName('head')[0].appendChild(lnk);
  var conDivObj;
  const defSVG = `<svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M45 90C69.8528 90 90 69.8528 90 45C90 20.1472 69.8528 0 45 0C20.1472 0 0 20.1472 0 45C0 69.8528 20.1472 90 45 90Z" fill="#7D4AEA" />
  <path
    d="M50 46.18L51.8 53.94L45 49.84L38.2 53.94L40 46.2L34 41.02L41.92 40.34L45 33.04L48.08 40.32L56 41L50 46.18ZM45 27.38L59 33.6V43C59 52.04 53.04 60.38 45 62.86C36.96 60.38 31 52.04 31 43V33.6L45 27.38ZM45 23L27 31V43C27 54.1 34.68 64.48 45 67C55.32 64.48 63 54.1 63 43V31L45 23Z"
    fill="white"
  />
</svg>`;
  let content = {
    size: 'medium',
    position: '1',
    color: '#7D4AEA',
    logo: defSVG,
    title: 'Security Code',
    message: 'This code expires in 24 hours.',
    placeholder: 'Code',
    button1: 'Cancel',
    button2: 'Continue',
    device: 'everywhere',
  };
  let createPopUp = function () {
    if (typeof conDivObj === 'undefined') {
      conDivObj = document.createElement('DIV');
      conDivObj.setAttribute('id', 'modal0');
    }
    conDivObj.innerHTML = `
    <div class="modal0-popup flex flex-col items-center bg-red-500 p-10 h-[480px] w-[446px] space-y-5 relative rounded-xl">
      <button class="absolute top-3 right-3">{closeBtn}</button>
      ${content.logo}
      <h3 className="text-3xl font-bold">${content.title}</h3>
      <h5 className="text-2xl">${content.message}</h5>
      <input type="text" placeholder="${content.placeholder}" className="text-xl p-4 border-2 rounded-lg w-full" />
      <div className="space-x-3 w-full flex justify-center">
        <button className="bg-[#fff] py-4 w-5/12 rounded-lg">${content.button1}</button>
        <button className="bg-[#7D4AEA] py-4 w-5/12 rounded-lg">${content.button2}</button>
      </div>
    </div>
    `;
    document.body.appendChild(conDivObj);
  };
  this.init = function (param) {
    if (typeof param === 'object') {
      if ('show' in param) content.show = param.show;
      if ('color' in param) content.color = param.color;
      if ('size' in param) content.size = param.size;
      if ('logo' in param && param.logo !== null) content.logo = param.logo;
      if ('logo' in param && param.logo === null) {
        content.logo = 'https://d2r80wdbkwti6l.cloudfront.net/Cz74LbbmsqGrFmpcWlqJaQpx6GJwZyEz.jpg';
      }
      if ('title' in param) content.title = ' ' + param.title;
      if ('message' in param) content.message = ' ' + param.message;
      if ('placeholder' in param) content.placeholder = param.placeholder;
      if ('device' in param) content.device = param.device;
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
