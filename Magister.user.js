// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://merlet.magister.net/*
// @match        https://accounts.magister.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=magister.net
// @grant        none
// ==/UserScript==

(function() {
   function addGlobalStyle(css) {
   var head, style;
   head = document.getElementsByTagName('head')[0];
   if (!head) { return; }
   style = document.createElement('style');
   style.type = 'text/css';
   style.innerHTML = css;
   head.appendChild(style);
}
//bg1 https://raw.githubusercontent.com/NietVic/magister69/main/bg1.jpg
//bg2 https://raw.githubusercontent.com/NietVic/magister69/main/bg2.jpg
//bg3 https://raw.githubusercontent.com/NietVic/magister69/main/bg3.webp
//bg4 https://raw.githubusercontent.com/NietVic/magister69/main/bg4.jpg
//bg5 https://raw.githubusercontent.com/NietVic/magister69/main/bg5.jpg
//bg6 https://raw.githubusercontent.com/NietVic/magister69/main/bg6.jpg
//bg7


    var AKleur = '#382c1e';


    addGlobalStyle('.bg1{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg1.jpg)}.bg1_webp{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg1.jpg)}.bg2{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg2.jpg)}.bg2_webp{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg2.jpg)}.bg3{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg3.webp)}.bg3_webp{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg3.webp)}.bg4{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg4.jpg)}.bg4_webp{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg4.jpg)}.bg5{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg5.jpg)}.bg5_webp{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg5.jpg)}.bg6{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg6.jpg)}.bg6_webp{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg6.jpg)}.bg7{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg7.jpg)}.bg7_webp{background-image:url(https://raw.githubusercontent.com/NietVic/magister69/main/bg7.jpg)}')
    addGlobalStyle('body{background-color: '+AKleur+';} :root { --chrome-background: '+AKleur+'; --primary-background: '+AKleur+'; --secondary-background: '+AKleur+'; --background-1: '+AKleur+'; --background-2: '+AKleur+'; --background-3: '+AKleur+'; --background-4: '+AKleur+';--background-5: '+AKleur+'; --background-6: '+AKleur+'; --background-7: '+AKleur+'; --background-8: '+AKleur+'; --background-9: transparent; --background-10: '+AKleur+'; --background-11: '+AKleur+'; --primary-text-color: '+AKleur+'; --secondary-text-color: '+AKleur+';} .menu-footer{background: '+AKleur+';} .widget li{background-color: '+AKleur+'} .sm-grid.k-grid .k-grid-content tr{background: '+AKleur+'} .k-grid-content{background: '+AKleur+'} .cijfers-k-grid.k-grid .k-grid-content{background: '+AKleur+'} table.table-grid-layout tr{background: '+AKleur+'} .block .content{background-color: '+AKleur+'} table.table-grid-layout td{color: white !important;} .widget .list li a{color: white} #vandaag-container .grade-widget ul{background-color: '+AKleur+'} .block{background-color: '+AKleur+'} .endlink{background-color: '+AKleur+'f} .cijfers-k-grid.k-grid .k-grid-header th.k-header{background: '+AKleur+'}');

})();