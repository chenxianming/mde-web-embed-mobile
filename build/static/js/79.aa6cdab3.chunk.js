(window["webpackJsonpmde-editor"]=window["webpackJsonpmde-editor"]||[]).push([[79],{139:function(e,n,t){!function(e){"use strict";e.defineMode("octave",(function(){function e(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var n=new RegExp("^[\\+\\-\\*/&|\\^~<>!@'\\\\]"),t=new RegExp("^[\\(\\[\\{\\},:=;]"),r=new RegExp("^((==)|(~=)|(<=)|(>=)|(<<)|(>>)|(\\.[\\+\\-\\*/\\^\\\\]))"),i=new RegExp("^((!=)|(\\+=)|(\\-=)|(\\*=)|(/=)|(&=)|(\\|=)|(\\^=))"),o=new RegExp("^((>>=)|(<<=))"),a=new RegExp("^[\\]\\)]"),c=new RegExp("^[_A-Za-z\xa1-\uffff][_A-Za-z0-9\xa1-\uffff]*"),m=e(["error","eval","function","abs","acos","atan","asin","cos","cosh","exp","log","prod","sum","log10","max","min","sign","sin","sinh","sqrt","tan","reshape","break","zeros","default","margin","round","ones","rand","syn","ceil","floor","size","clear","zeros","eye","mean","std","cov","det","eig","inv","norm","rank","trace","expm","logm","sqrtm","linspace","plot","title","xlabel","ylabel","legend","text","grid","meshgrid","mesh","num2str","fft","ifft","arrayfun","cellfun","input","fliplr","flipud","ismember"]),s=e(["return","case","switch","else","elseif","end","endif","endfunction","if","otherwise","do","for","while","try","catch","classdef","properties","events","methods","global","persistent","endfor","endwhile","printf","sprintf","disp","until","continue","pkg"]);function u(e,n){return e.sol()||"'"!==e.peek()?(n.tokenize=d,d(e,n)):(e.next(),n.tokenize=d,"operator")}function f(e,n){return e.match(/^.*%}/)?(n.tokenize=d,"comment"):(e.skipToEnd(),"comment")}function d(l,p){if(l.eatSpace())return null;if(l.match("%{"))return p.tokenize=f,l.skipToEnd(),"comment";if(l.match(/^[%#]/))return l.skipToEnd(),"comment";if(l.match(/^[0-9\.+-]/,!1)){if(l.match(/^[+-]?0x[0-9a-fA-F]+[ij]?/))return l.tokenize=d,"number";if(l.match(/^[+-]?\d*\.\d+([EeDd][+-]?\d+)?[ij]?/))return"number";if(l.match(/^[+-]?\d+([EeDd][+-]?\d+)?[ij]?/))return"number"}if(l.match(e(["nan","NaN","inf","Inf"])))return"number";var h=l.match(/^"(?:[^"]|"")*("|$)/)||l.match(/^'(?:[^']|'')*('|$)/);return h?h[1]?"string":"string error":l.match(s)?"keyword":l.match(m)?"builtin":l.match(c)?"variable":l.match(n)||l.match(r)?"operator":l.match(t)||l.match(i)||l.match(o)?null:l.match(a)?(p.tokenize=u,null):(l.next(),"error")}return{startState:function(){return{tokenize:d}},token:function(e,n){var t=n.tokenize(e,n);return"number"!==t&&"variable"!==t||(n.tokenize=u),t},lineComment:"%",fold:"indent"}})),e.defineMIME("text/x-octave","octave")}(t(9))}}]);
//# sourceMappingURL=79.aa6cdab3.chunk.js.map