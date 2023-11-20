// ==UserScript==
// @name         dianxioami-assistant
// @namespace    https://www.filterbaby.com
// @version      0.1.3
// @description  automate dianxiaomi tasks
// @author       Chriest Yu
// @match        https://www.dianxiaomi.com/order/*
// @require      https://raw.githubusercontent.com/filterbaby/public-gists/main/dianxiaomi-assistant/dianxiaomi-assistant.umd.cjs
// @grant        none
// ==/UserScript==

(function() {
  const dom = document.createElement('fb-dxm-assistant');
  document.body.appendChild(dom);
})();
