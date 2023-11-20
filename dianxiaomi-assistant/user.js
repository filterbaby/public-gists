// ==UserScript==
// @name         dianxioami-assistant
// @namespace    https://raw.githubusercontent.com/filterbaby/adhoc-scripts
// @version      0.1.0
// @description  automate dianxiaomi tasks
// @author       Chriest Yu
// @match        https://www.dianxiaomi.com/order/*
// @require      https://raw.githubusercontent.com/filterbaby/adhoc-scripts/main/dxm_assistant/dist/dianxiaomi-assistant.umd.cjs?token=GHSAT0AAAAAACEQPZMEGOF2NGOPLE73W4VYZK25EEA
// @grant        none
// ==/UserScript==

(function() {
  const dom = document.createElement('fb-dxm-assistant');
  document.body.appendChild(dom);
})();
