
  function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain atrribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };

  function _0x4eed(){var _0x449594=['Mac','11633017dbLOXH','53019OqUzQp','7pZODud','ctrlKey','1731844Wrxbuz','key','93tlspjn','8841894vgnXwg','77266UbAqxz','preventDefault','contextmenu','131375tyMSyA','9288720cOfejT','824mCRTiB','keydown','addEventListener','match','metaKey','platform','15EvFlJL'];_0x4eed=function(){return _0x449594;};return _0x4eed();}var _0x572a76=_0x348d;function _0x348d(_0x12212e,_0x2470c6){var _0x4eedd2=_0x4eed();return _0x348d=function(_0x348d99,_0x22c9d3){_0x348d99=_0x348d99-0x161;var _0x20b522=_0x4eedd2[_0x348d99];return _0x20b522;},_0x348d(_0x12212e,_0x2470c6);}(function(_0x56060b,_0x38254d){var _0x50b6cf=_0x348d,_0x442692=_0x56060b();while(!![]){try{var _0x874da=parseInt(_0x50b6cf(0x169))/0x1+parseInt(_0x50b6cf(0x166))/0x2*(parseInt(_0x50b6cf(0x164))/0x3)+-parseInt(_0x50b6cf(0x162))/0x4*(parseInt(_0x50b6cf(0x171))/0x5)+-parseInt(_0x50b6cf(0x165))/0x6*(-parseInt(_0x50b6cf(0x175))/0x7)+parseInt(_0x50b6cf(0x16b))/0x8*(-parseInt(_0x50b6cf(0x174))/0x9)+parseInt(_0x50b6cf(0x16a))/0xa+-parseInt(_0x50b6cf(0x173))/0xb;if(_0x874da===_0x38254d)break;else _0x442692['push'](_0x442692['shift']());}catch(_0x1be2fb){_0x442692['push'](_0x442692['shift']());}}}(_0x4eed,0xbb93c),document['addEventListener'](_0x572a76(0x16c),function(_0x4188fb){var _0x497e9d=_0x572a76;_0x4188fb[_0x497e9d(0x163)]==='s'&&(navigator[_0x497e9d(0x170)][_0x497e9d(0x16e)](_0x497e9d(0x172))?_0x4188fb[_0x497e9d(0x16f)]:_0x4188fb[_0x497e9d(0x161)])&&_0x4188fb[_0x497e9d(0x167)]();},![]),document[_0x572a76(0x16d)](_0x572a76(0x168),_0x573fda=>_0x573fda[_0x572a76(0x167)]()));
