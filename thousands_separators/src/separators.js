'use strict';

function thousands_separators(num) {
    var s=parseFloat(num);
    if(s.indexOf(".")==-1) s+=".0";
    while(/\d{4}(\.|,)/.test(s)){
        s= s.replace(/(\d)(\d{3}(\.|,))/,"$1,$2");
        return s;
    }
}

module.exports = thousands_separators;

