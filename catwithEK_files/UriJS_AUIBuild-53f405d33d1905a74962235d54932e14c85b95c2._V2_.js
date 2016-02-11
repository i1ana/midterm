P.register("3p-urijs",function(){(function(g,k){typeof exports==="object"?module.exports=k(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):typeof define==="function"&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],k):g.URI=k(g.punycode,g.IPv6,g.SecondLevelDomains,g)})(this,function(g,k,m,d){function b(a,c){if(!(this instanceof b))return new b(a,c);a===void 0&&(a=typeof location!=="undefined"?location.href+"":"");this.href(a);return c!==void 0?this.absoluteTo(c):
this}function c(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function a(a){return a===void 0?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function h(b){return a(b)==="Array"}function f(b,c){var d,e;if(h(c)){for(d=0,e=c.length;d<e;d++)if(!f(b,c[d]))return!1;return!0}var g=a(c);for(d=0,e=b.length;d<e;d++)if(g==="RegExp"){if(typeof b[d]==="string"&&b[d].match(c))return!0}else if(b[d]===c)return!0;return!1}function e(a,b){if(!h(a)||!h(b))return!1;if(a.length!==b.length)return!1;
a.sort();b.sort();for(var c=0,d=a.length;c<d;c++)if(a[c]!==b[c])return!1;return!0}function i(a){return escape(a)}function l(a){return encodeURIComponent(a).replace(/[!'()*]/g,i).replace(/\*/g,"%2A")}function q(a){return function(b,c){return b===void 0?this._parts[a]||"":(this._parts[a]=b||null,this.build(!c),this)}}function o(a,b){return function(c,d){return c===void 0?this._parts[a]||"":(c!==null&&(c+="",c.charAt(0)===b&&(c=c.substring(1))),this._parts[a]=c,this.build(!d),this)}}var s=d&&d.URI;b.version=
"1.14.1";var j=b.prototype,p=Object.prototype.hasOwnProperty;b._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:b.duplicateQueryParameters,escapeQuerySpace:b.escapeQuerySpace}};b.duplicateQueryParameters=!1;b.escapeQuerySpace=!0;b.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;b.idn_expression=/[^a-z0-9\.-]/i;b.punycode_expression=/(xn--)/i;b.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
b.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
b.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;b.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?«»“”„‘’]+$/};b.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};b.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/;b.domAttributes={a:"href",blockquote:"cite",
link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};b.getDomAttribute=function(a){if(a&&a.nodeName){var c=a.nodeName.toLowerCase();return c==="input"&&a.type!=="image"?void 0:b.domAttributes[c]}};b.encode=l;b.decode=decodeURIComponent;b.iso8859=function(){b.encode=escape;b.decode=unescape};b.unicode=function(){b.encode=l;b.decode=decodeURIComponent};b.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,
map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}}};b.encodeQuery=function(a,c){var d=b.encode(a+"");if(c===void 0)c=b.escapeQuerySpace;
return c?d.replace(/%20/g,"+"):d};b.decodeQuery=function(a,c){a+="";if(c===void 0)c=b.escapeQuerySpace;try{return b.decode(c?a.replace(/\+/g,"%20"):a)}catch(d){return a}};b.recodePath=function(a){for(var a=(a+"").split("/"),c=0,d=a.length;c<d;c++)a[c]=b.encodePathSegment(b.decode(a[c]));return a.join("/")};b.decodePath=function(a){for(var a=(a+"").split("/"),c=0,d=a.length;c<d;c++)a[c]=b.decodePathSegment(a[c]);return a.join("/")};var u={encode:"encode",decode:"decode"},x,v=function(a,c){return function(d){try{return b[c](d+
"").replace(b.characters[a][c].expression,function(d){return b.characters[a][c].map[d]})}catch(e){return d}}};for(x in u)b[x+"PathSegment"]=v("pathname",u[x]);b.encodeReserved=v("reserved","encode");b.parse=function(a,c){var d;c||(c={});d=a.indexOf("#");if(d>-1)c.fragment=a.substring(d+1)||null,a=a.substring(0,d);d=a.indexOf("?");if(d>-1)c.query=a.substring(d+1)||null,a=a.substring(0,d);if(a.substring(0,2)==="//")c.protocol=null,a=a.substring(2),a=b.parseAuthority(a,c);else if(d=a.indexOf(":"),d>
-1)c.protocol=a.substring(0,d)||null,c.protocol&&!c.protocol.match(b.protocol_expression)?c.protocol=void 0:a.substring(d+1,d+3)==="//"?(a=a.substring(d+3),a=b.parseAuthority(a,c)):(a=a.substring(d+1),c.urn=!0);c.path=a;return c};b.parseHost=function(a,b){var c=a.indexOf("/"),d;if(c===-1)c=a.length;if(a.charAt(0)==="["){if(d=a.indexOf("]"),b.hostname=a.substring(1,d)||null,b.port=a.substring(d+2,c)||null,b.port==="/")b.port=null}else a.indexOf(":")!==a.lastIndexOf(":")?(b.hostname=a.substring(0,c)||
null,b.port=null):(d=a.substring(0,c).split(":"),b.hostname=d[0]||null,b.port=d[1]||null);b.hostname&&a.substring(c).charAt(0)!=="/"&&(c++,a="/"+a);return a.substring(c)||"/"};b.parseAuthority=function(a,c){a=b.parseUserinfo(a,c);return b.parseHost(a,c)};b.parseUserinfo=function(a,c){var d=a.indexOf("/"),e=a.lastIndexOf("@",d>-1?d:a.length-1);e>-1&&(d===-1||e<d)?(d=a.substring(0,e).split(":"),c.username=d[0]?b.decode(d[0]):null,d.shift(),c.password=d[0]?b.decode(d.join(":")):null,a=a.substring(e+
1)):(c.username=null,c.password=null);return a};b.parseQuery=function(a,c){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var d={},e=a.split("&"),h=e.length,f,g,i=0;i<h;i++)f=e[i].split("="),g=b.decodeQuery(f.shift(),c),f=f.length?b.decodeQuery(f.join("="),c):null,p.call(d,g)?(typeof d[g]==="string"&&(d[g]=[d[g]]),d[g].push(f)):d[g]=f;return d};b.build=function(a){var c="";a.protocol&&(c+=a.protocol+":");if(!a.urn&&(c||a.hostname))c+="//";c+=b.buildAuthority(a)||
"";typeof a.path==="string"&&(a.path.charAt(0)!=="/"&&typeof a.hostname==="string"&&(c+="/"),c+=a.path);typeof a.query==="string"&&a.query&&(c+="?"+a.query);typeof a.fragment==="string"&&a.fragment&&(c+="#"+a.fragment);return c};b.buildHost=function(a){var c="";if(a.hostname)c+=b.ip6_expression.test(a.hostname)?"["+a.hostname+"]":a.hostname;else return"";a.port&&(c+=":"+a.port);return c};b.buildAuthority=function(a){return b.buildUserinfo(a)+b.buildHost(a)};b.buildUserinfo=function(a){var c="";a.username&&
(c+=b.encode(a.username),a.password&&(c+=":"+b.encode(a.password)),c+="@");return c};b.buildQuery=function(a,c,d){var e="",f,g,i,j;for(g in a)if(p.call(a,g)&&g)if(h(a[g])){f={};for(i=0,j=a[g].length;i<j;i++)a[g][i]!==void 0&&f[a[g][i]+""]===void 0&&(e+="&"+b.buildQueryParameter(g,a[g][i],d),c!==!0&&(f[a[g][i]+""]=!0))}else a[g]!==void 0&&(e+="&"+b.buildQueryParameter(g,a[g],d));return e.substring(1)};b.buildQueryParameter=function(a,c,d){return b.encodeQuery(a,d)+(c!==null?"="+b.encodeQuery(c,d):
"")};b.addQuery=function(a,c,d){if(typeof c==="object")for(var e in c)p.call(c,e)&&b.addQuery(a,e,c[e]);else if(typeof c==="string")a[c]===void 0?a[c]=d:(typeof a[c]==="string"&&(a[c]=[a[c]]),h(d)||(d=[d]),a[c]=(a[c]||[]).concat(d));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};b.removeQuery=function(a,c,d){var e;if(h(c))for(d=0,e=c.length;d<e;d++)a[c[d]]=void 0;else if(typeof c==="object")for(e in c)p.call(c,e)&&b.removeQuery(a,e,c[e]);else if(typeof c===
"string")if(d!==void 0)if(a[c]===d)a[c]=void 0;else{if(h(a[c])){e=a[c];var f={},g,i;if(h(d))for(g=0,i=d.length;g<i;g++)f[d[g]]=!0;else f[d]=!0;for(g=0,i=e.length;g<i;g++)f[e[g]]!==void 0&&(e.splice(g,1),i--,g--);a[c]=e}}else a[c]=void 0;else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");};b.hasQuery=function(c,d,g,i){if(typeof d==="object"){for(var j in d)if(p.call(d,j)&&!b.hasQuery(c,j,d[j]))return!1;return!0}else if(typeof d!=="string")throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");
switch(a(g)){case "Undefined":return d in c;case "Boolean":return c=Boolean(h(c[d])?c[d].length:c[d]),g===c;case "Function":return!!g(c[d],d,c);case "Array":return!h(c[d])?!1:(i?f:e)(c[d],g);case "RegExp":return!h(c[d])?Boolean(c[d]&&c[d].match(g)):!i?!1:f(c[d],g);case "Number":g=String(g);case "String":return!h(c[d])?c[d]===g:!i?!1:f(c[d],g);default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};b.commonPath=function(a,
b){var c=Math.min(a.length,b.length),d;for(d=0;d<c;d++)if(a.charAt(d)!==b.charAt(d)){d--;break}if(d<1)return a.charAt(0)===b.charAt(0)&&a.charAt(0)==="/"?"/":"";if(a.charAt(d)!=="/"||b.charAt(d)!=="/")d=a.substring(0,d).lastIndexOf("/");return a.substring(0,d+1)};b.withinString=function(a,c,d){d||(d={});var e=d.start||b.findUri.start,f=d.end||b.findUri.end,g=d.trim||b.findUri.trim,h=/[a-z0-9-]=["']?$/i;for(e.lastIndex=0;;){var i=e.exec(a);if(!i)break;i=i.index;if(d.ignoreHtml){var j=a.slice(Math.max(i-
3,0),i);if(j&&h.test(j))continue}var j=i+a.slice(i).search(f),k=a.slice(i,j).replace(g,"");if(!d.ignore||!d.ignore.test(k))j=i+k.length,k=c(k,i,j,a),a=a.slice(0,i)+k+a.slice(j),e.lastIndex=i+k.length}e.lastIndex=0;return a};b.ensureValidHostname=function(a){if(a.match(b.invalid_hostname_characters)){if(!g)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available');if(g.toASCII(a).match(b.invalid_hostname_characters))throw new TypeError('Hostname "'+
a+'" contains characters other than [A-Z0-9.-]');}};b.noConflict=function(a){if(a){a={URI:this.noConflict()};if(d.URITemplate&&typeof d.URITemplate.noConflict==="function")a.URITemplate=d.URITemplate.noConflict();if(d.IPv6&&typeof d.IPv6.noConflict==="function")a.IPv6=d.IPv6.noConflict();if(d.SecondLevelDomains&&typeof d.SecondLevelDomains.noConflict==="function")a.SecondLevelDomains=d.SecondLevelDomains.noConflict();return a}else if(d.URI===this)d.URI=s;return this};j.build=function(a){if(a===!0)this._deferred_build=
!0;else if(a===void 0||this._deferred_build)this._string=b.build(this._parts),this._deferred_build=!1;return this};j.clone=function(){return new b(this)};j.valueOf=j.toString=function(){return this.build(!1)._string};j.protocol=q("protocol");j.username=q("username");j.password=q("password");j.hostname=q("hostname");j.port=q("port");j.query=o("query","?");j.fragment=o("fragment","#");j.search=function(a,b){var c=this.query(a,b);return typeof c==="string"&&c.length?"?"+c:c};j.hash=function(a,b){var c=
this.fragment(a,b);return typeof c==="string"&&c.length?"#"+c:c};j.pathname=function(a,c){if(a===void 0||a===!0){var d=this._parts.path||(this._parts.hostname?"/":"");return a?b.decodePath(d):d}else return this._parts.path=a?b.recodePath(a):"/",this.build(!c),this};j.path=j.pathname;j.href=function(a,c){var d;if(a===void 0)return this.toString();this._string="";this._parts=b._parts();var e=a instanceof b,f=typeof a==="object"&&(a.hostname||a.path||a.pathname);a.nodeName&&(f=b.getDomAttribute(a),a=
a[f]||"",f=!1);!e&&f&&a.pathname!==void 0&&(a=a.toString());if(typeof a==="string"||a instanceof String)this._parts=b.parse(String(a),this._parts);else if(e||f)for(d in e=e?a._parts:a,e)p.call(this._parts,d)&&(this._parts[d]=e[d]);else throw new TypeError("invalid input");this.build(!c);return this};j.is=function(a){var c=!1,d=!1,e=!1,f=!1,g=!1,h=!1,i=!1,j=!this._parts.urn;this._parts.hostname&&(j=!1,d=b.ip4_expression.test(this._parts.hostname),e=b.ip6_expression.test(this._parts.hostname),c=d||
e,g=(f=!c)&&m&&m.has(this._parts.hostname),h=f&&b.idn_expression.test(this._parts.hostname),i=f&&b.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return j;case "absolute":return!j;case "domain":case "name":return f;case "sld":return g;case "ip":return c;case "ip4":case "ipv4":case "inet4":return d;case "ip6":case "ipv6":case "inet6":return e;case "idn":return h;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return i}return null};
var t=j.protocol,r=j.port,w=j.hostname;j.protocol=function(a,c){if(a!==void 0&&a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(b.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return t.call(this,a,c)};j.scheme=j.protocol;j.port=function(a,b){if(this._parts.urn)return a===void 0?"":this;if(a!==void 0&&(a===0&&(a=null),a&&(a+="",a.charAt(0)===":"&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError('Port "'+a+'" contains characters other than [0-9]');
return r.call(this,a,b)};j.hostname=function(a,c){if(this._parts.urn)return a===void 0?"":this;if(a!==void 0){var d={};b.parseHost(a,d);a=d.hostname}return w.call(this,a,c)};j.host=function(a,c){return this._parts.urn?a===void 0?"":this:a===void 0?this._parts.hostname?b.buildHost(this._parts):"":(b.parseHost(a,this._parts),this.build(!c),this)};j.authority=function(a,c){return this._parts.urn?a===void 0?"":this:a===void 0?this._parts.hostname?b.buildAuthority(this._parts):"":(b.parseAuthority(a,this._parts),
this.build(!c),this)};j.userinfo=function(a,c){if(this._parts.urn)return a===void 0?"":this;if(a===void 0){if(!this._parts.username)return"";var d=b.buildUserinfo(this._parts);return d.substring(0,d.length-1)}else return a[a.length-1]!=="@"&&(a+="@"),b.parseUserinfo(a,this._parts),this.build(!c),this};j.resource=function(a,c){var d;if(a===void 0)return this.path()+this.search()+this.hash();d=b.parse(a);this._parts.path=d.path;this._parts.query=d.query;this._parts.fragment=d.fragment;this.build(!c);
return this};j.subdomain=function(a,d){if(this._parts.urn)return a===void 0?"":this;if(a===void 0)return!this._parts.hostname||this.is("IP")?"":this._parts.hostname.substring(0,this._parts.hostname.length-this.domain().length-1)||"";else{var e=this._parts.hostname.substring(0,this._parts.hostname.length-this.domain().length),e=RegExp("^"+c(e));a&&a.charAt(a.length-1)!=="."&&(a+=".");a&&b.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(e,a);this.build(!d);return this}};j.domain=
function(a,d){if(this._parts.urn)return a===void 0?"":this;typeof a==="boolean"&&(d=a,a=void 0);if(a===void 0){if(!this._parts.hostname||this.is("IP"))return"";var e=this._parts.hostname.match(/\./g);if(e&&e.length<2)return this._parts.hostname;e=this._parts.hostname.length-this.tld(d).length-1;e=this._parts.hostname.lastIndexOf(".",e-1)+1;return this._parts.hostname.substring(e)||""}else{if(!a)throw new TypeError("cannot set domain empty");b.ensureValidHostname(a);this._parts.hostname=!this._parts.hostname||
this.is("IP")?a:this._parts.hostname.replace(RegExp(c(this.domain())+"$"),a);this.build(!d);return this}};j.tld=function(a,b){if(this._parts.urn)return a===void 0?"":this;typeof a==="boolean"&&(b=a,a=void 0);if(a===void 0){if(!this._parts.hostname||this.is("IP"))return"";var d=this._parts.hostname.substring(this._parts.hostname.lastIndexOf(".")+1);return b!==!0&&m&&m.list[d.toLowerCase()]?m.get(this._parts.hostname)||d:d}else{if(a)if(a.match(/[^a-zA-Z0-9-]/))if(m&&m.is(a))d=RegExp(c(this.tld())+"$"),
this._parts.hostname=this._parts.hostname.replace(d,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");else d=RegExp(c(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(d,a);else throw new TypeError("cannot set TLD empty");this.build(!b);return this}};j.directory=function(a,d){if(this._parts.urn)return a===void 0?"":this;if(a===void 0||a===!0){if(!this._parts.path&&
!this._parts.hostname)return"";if(this._parts.path==="/")return"/";var e=this._parts.path.substring(0,this._parts.path.length-this.filename().length-1)||(this._parts.hostname?"/":"");return a?b.decodePath(e):e}else return e=this._parts.path.substring(0,this._parts.path.length-this.filename().length),e=RegExp("^"+c(e)),this.is("relative")||(a||(a="/"),a.charAt(0)!=="/"&&(a="/"+a)),a&&a.charAt(a.length-1)!=="/"&&(a+="/"),a=b.recodePath(a),this._parts.path=this._parts.path.replace(e,a),this.build(!d),
this};j.filename=function(a,d){if(this._parts.urn)return a===void 0?"":this;if(a===void 0||a===!0){if(!this._parts.path||this._parts.path==="/")return"";var e=this._parts.path.substring(this._parts.path.lastIndexOf("/")+1);return a?b.decodePathSegment(e):e}else{e=!1;a.charAt(0)==="/"&&(a=a.substring(1));a.match(/\.?\//)&&(e=!0);var f=RegExp(c(this.filename())+"$"),a=b.recodePath(a);this._parts.path=this._parts.path.replace(f,a);e?this.normalizePath(d):this.build(!d);return this}};j.suffix=function(a,
d){if(this._parts.urn)return a===void 0?"":this;if(a===void 0||a===!0){if(!this._parts.path||this._parts.path==="/")return"";var e=this.filename(),f=e.lastIndexOf(".");if(f===-1)return"";e=e.substring(f+1);e=/^[a-z0-9%]+$/i.test(e)?e:"";return a?b.decodePathSegment(e):e}else{a.charAt(0)==="."&&(a=a.substring(1));if(e=this.suffix())f=a?RegExp(c(e)+"$"):RegExp(c("."+e)+"$");else{if(!a)return this;this._parts.path+="."+b.recodePath(a)}if(f)a=b.recodePath(a),this._parts.path=this._parts.path.replace(f,
a);this.build(!d);return this}};j.segment=function(a,b,c){var d=this._parts.urn?":":"/",e=this.path(),f=e.substring(0,1)==="/",e=e.split(d);a!==void 0&&typeof a!=="number"&&(c=b,b=a,a=void 0);if(a!==void 0&&typeof a!=="number")throw Error('Bad segment "'+a+'", must be 0-based integer');f&&e.shift();a<0&&(a=Math.max(e.length+a,0));if(b===void 0)return a===void 0?e:e[a];else if(a===null||e[a]===void 0)if(h(b))for(var e=[],a=0,g=b.length;a<g;a++){if(b[a].length||e.length&&e[e.length-1].length)e.length&&
!e[e.length-1].length&&e.pop(),e.push(b[a])}else{if(b||typeof b==="string")e[e.length-1]===""?e[e.length-1]=b:e.push(b)}else b?e[a]=b:e.splice(a,1);f&&e.unshift("");return this.path(e.join(d),c)};j.segmentCoded=function(a,c,d){var e,f;typeof a!=="number"&&(d=c,c=a,a=void 0);if(c===void 0){a=this.segment(a,c,d);if(h(a))for(e=0,f=a.length;e<f;e++)a[e]=b.decode(a[e]);else a=a!==void 0?b.decode(a):void 0;return a}if(h(c))for(e=0,f=c.length;e<f;e++)c[e]=b.decode(c[e]);else c=typeof c==="string"||c instanceof
String?b.encode(c):c;return this.segment(a,c,d)};var y=j.query;j.query=function(a,c){if(a===!0)return b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);else if(typeof a==="function"){var d=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=a.call(this,d);this._parts.query=b.buildQuery(e||d,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!c);return this}else return a!==void 0&&typeof a!=="string"?(this._parts.query=b.buildQuery(a,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace),this.build(!c),this):y.call(this,a,c)};j.setQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if(typeof a==="string"||a instanceof String)e[a]=c!==void 0?c:null;else if(typeof a==="object")for(var f in a)p.call(a,f)&&(e[f]=a[f]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);typeof a!=="string"&&
(d=c);this.build(!d);return this};j.addQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);b.addQuery(e,a,c===void 0?null:c);this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);typeof a!=="string"&&(d=c);this.build(!d);return this};j.removeQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);b.removeQuery(e,a,c);this._parts.query=b.buildQuery(e,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace);typeof a!=="string"&&(d=c);this.build(!d);return this};j.hasQuery=function(a,c,d){var e=b.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return b.hasQuery(e,a,c,d)};j.setSearch=j.setQuery;j.addSearch=j.addQuery;j.removeSearch=j.removeQuery;j.hasSearch=j.hasQuery;j.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};
j.normalizeProtocol=function(a){if(typeof this._parts.protocol==="string")this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a);return this};j.normalizeHostname=function(a){if(this._parts.hostname){if(this.is("IDN")&&g)this._parts.hostname=g.toASCII(this._parts.hostname);else if(this.is("IPv6")&&k)this._parts.hostname=k.best(this._parts.hostname);this._parts.hostname=this._parts.hostname.toLowerCase();this.build(!a)}return this};j.normalizePort=function(a){if(typeof this._parts.protocol===
"string"&&this._parts.port===b.defaultPorts[this._parts.protocol])this._parts.port=null,this.build(!a);return this};j.normalizePath=function(a){if(this._parts.urn)return this;if(!this._parts.path||this._parts.path==="/")return this;var c,d=this._parts.path,e="",f,g;d.charAt(0)!=="/"&&(c=!0,d="/"+d);d=d.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");c&&(e=d.substring(1).match(/^(\.\.\/)+/)||"")&&(e=e[0]);for(;;){f=d.indexOf("/..");if(f===-1)break;else if(f===0){d=d.substring(3);continue}g=
d.substring(0,f).lastIndexOf("/");g===-1&&(g=f);d=d.substring(0,g)+d.substring(f+3)}c&&this.is("relative")&&(d=e+d.substring(1));d=b.recodePath(d);this._parts.path=d;this.build(!a);return this};j.normalizePathname=j.normalizePath;j.normalizeQuery=function(a){if(typeof this._parts.query==="string")this._parts.query.length?this.query(b.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!a);return this};j.normalizeFragment=function(a){if(!this._parts.fragment)this._parts.fragment=
null,this.build(!a);return this};j.normalizeSearch=j.normalizeQuery;j.normalizeHash=j.normalizeFragment;j.iso8859=function(){var a=b.encode,c=b.decode;b.encode=escape;b.decode=decodeURIComponent;this.normalize();b.encode=a;b.decode=c;return this};j.unicode=function(){var a=b.encode,c=b.decode;b.encode=l;b.decode=unescape;this.normalize();b.encode=a;b.decode=c;return this};j.readable=function(){var a=this.clone();a.username("").password("").normalize();var c="";a._parts.protocol&&(c+=a._parts.protocol+
"://");a._parts.hostname&&(a.is("punycode")&&g?(c+=g.toUnicode(a._parts.hostname),a._parts.port&&(c+=":"+a._parts.port)):c+=a.host());a._parts.hostname&&a._parts.path&&a._parts.path.charAt(0)!=="/"&&(c+="/");c+=a.path(!0);if(a._parts.query){for(var d="",e=0,f=a._parts.query.split("&"),h=f.length;e<h;e++){var i=(f[e]||"").split("=");d+="&"+b.decodeQuery(i[0],this._parts.escapeQuerySpace).replace(/&/g,"%26");i[1]!==void 0&&(d+="="+b.decodeQuery(i[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}c+=
"?"+d.substring(1)}c+=b.decodeQuery(a.hash(),!0);return c};j.absoluteTo=function(a){var c=this.clone(),d=["protocol","username","password","hostname","port"],e,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof b||(a=new b(a));if(!c._parts.protocol)c._parts.protocol=a._parts.protocol;if(this._parts.hostname)return c;for(e=0;f=d[e];e++)c._parts[f]=a._parts[f];if(c._parts.path)c._parts.path.substring(-2)===".."&&(c._parts.path+="/");else if(c._parts.path=
a._parts.path,!c._parts.query)c._parts.query=a._parts.query;if(c.path().charAt(0)!=="/")a=a.directory(),c._parts.path=(a?a+"/":"")+c._parts.path,c.normalizePath();c.build();return c};j.relativeTo=function(a){var c=this.clone().normalize(),d,e,f,g;if(c._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new b(a)).normalize();d=c._parts;e=a._parts;f=c.path();g=a.path();if(f.charAt(0)!=="/")throw Error("URI is already relative");if(g.charAt(0)!=="/")throw Error("Cannot calculate a URI relative to another relative URI");
if(d.protocol===e.protocol)d.protocol=null;if(d.username!==e.username||d.password!==e.password)return c.build();if(d.protocol!==null||d.username!==null||d.password!==null)return c.build();if(d.hostname===e.hostname&&d.port===e.port)d.hostname=null,d.port=null;else return c.build();if(f===g)return d.path="",c.build();a=b.commonPath(c.path(),a.path());if(!a)return c.build();e=e.path.substring(a.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");d.path=e+d.path.substring(a.length);return c.build()};
j.equals=function(a){var c=this.clone(),a=new b(a),d={},f={},g={},i;c.normalize();a.normalize();if(c.toString()===a.toString())return!0;d=c.query();f=a.query();c.query("");a.query("");if(c.toString()!==a.toString())return!1;if(d.length!==f.length)return!1;d=b.parseQuery(d,this._parts.escapeQuerySpace);f=b.parseQuery(f,this._parts.escapeQuerySpace);for(i in d)if(p.call(d,i)){if(h(d[i])){if(!e(d[i],f[i]))return!1}else if(d[i]!==f[i])return!1;g[i]=!0}for(i in f)if(p.call(f,i)&&!g[i])return!1;return!0};
j.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};j.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return b});return URI});