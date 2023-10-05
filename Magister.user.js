// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Magister andere css!
// @author       Vic Peeters
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
var bg1 = 'https://raw.githubusercontent.com/NietVic/magister69/main/bg1.jpg';
var bg2 = 'https://raw.githubusercontent.com/NietVic/magister69/main/bg2.jpg';
var bg3 = 'https://raw.githubusercontent.com/NietVic/magister69/main/bg3.webp';
var bg4 = 'https://raw.githubusercontent.com/NietVic/magister69/main/bg4.jpg';
var bg5 = 'https://raw.githubusercontent.com/NietVic/magister69/main/bg5.jpg';
var bg6 = 'https://raw.githubusercontent.com/NietVic/magister69/main/bg6.jpg';
var bg7 = 'https://raw.githubusercontent.com/NietVic/magister69/main/bg7.jpg';


    var AKleur = '#382c1e';
    var SKleur = '#1f97f9';
    var TKleur = '#ddd';
    var GRKleur = '#bbb';
    AKleur = '#000';


    addGlobalStyle('.bg1{background-image: url('+bg1+')} .bg1_webp{ background-image: url('+bg1+')} .bg2{background-image: url('+bg2+')} .bg2_webp{ background-image: url('+bg2+')} .bg3{background-image: url('+bg3+')} .bg3_webp{ background-image: url('+bg3+')} .bg4{background-image: url('+bg4+')} .bg4_webp{ background-image: url('+bg4+')} .bg5{background-image: url('+bg5+')} .bg5_webp{ background-image: url('+bg5+')} .bg6{background-image: url('+bg6+')} .bg6_webp{ background-image: url('+bg6+')} .bg7{background-image: url('+bg7+')} .bg7_webp{ background-image: url('+bg7+')}')
    addGlobalStyle('body{background-color: '+AKleur+';} :root { --chrome-background: '+AKleur+'; --primary-background: '+AKleur+'; --secondary-background: '+AKleur+'; --background-1: '+AKleur+'; --background-2: '+AKleur+'; --background-3: '+AKleur+'; --background-4: '+AKleur+';--background-5: '+AKleur+'; --background-6: '+AKleur+'; --background-7: '+AKleur+'; --background-8: '+AKleur+'; --background-9: transparent; --background-10: '+AKleur+'; --background-11: '+AKleur+'; --primary-text-color: '+AKleur+'; --secondary-text-color: '+AKleur+';} .menu-footer{background: '+AKleur+';} .ngGrid{background-color: '+AKleur+'} .widget li{background-color: '+AKleur+'} .sm-grid.k-grid .k-grid-content tr{background: '+AKleur+'} .k-grid-content{background: '+AKleur+'} .cijfers-k-grid.k-grid .k-grid-content{background: '+AKleur+'} table.table-grid-layout tr{background: '+AKleur+'} .block .content{background-color: '+AKleur+'} table.table-grid-layout td{color: '+TKleur+' !important;} .widget .list li a{color: '+TKleur+'} #vandaag-container .grade-widget ul{background-color: '+AKleur+'} .block{background-color: '+AKleur+'} .endlink{background-color: '+AKleur+'f} .cijfers-k-grid.k-grid .k-grid-header th.k-header{background: '+AKleur+'} .ngTopPanel{background-color: '+AKleur+'}');
    addGlobalStyle('.sm-grid.k-grid .k-grid-content td{color: '+TKleur+'} table.table-grid-layout > tbody > tr.selected{background-color: '+SKleur+';} .sm-grid.k-grid .k-grid-content tr.k-state-selected, .sm-grid.k-grid .k-grid-content tr.k-state-selected.k-state-focused, .sm-grid.k-grid .k-grid-content tr.k-state-selected .k-state-focused{background-color:'+SKleur+'} .alert a:hover{background-color:'+SKleur+' !important} .alert{background-color: #213740 !important;}')
    addGlobalStyle('.k-grouping-row td, td.k-group-cell, .k-resize-handle-inner{background-color:'+GRKleur+'}')

})();
