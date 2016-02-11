(function(f,c){function l(g){if(g){return g.replace(/^\s+|\s+$/g,"");
}}function b(u,s){if(!u){return{};
}u.m&&u.m.message&&(u=u.m);
var t=s.m||s.message||"",t=u.m&&u.m.message?t+u.m.message:u.m&&u.m.target&&u.m.target.tagName?t+("Error handler invoked by "+u.m.target.tagName+" tag"):u.m?t+u.m:u.message?t+u.message:t+"Unknown error",t={m:t,f:u.f||u.sourceURL||u.fileName||u.filename||u.m&&u.m.target&&u.m.target.src,l:u.l||u.line||u.lineno||u.lineNumber,c:u.c?""+u.c:u.c,s:[],t:f.ue.d(),name:u.name,type:u.type,csm:k+" "+(u.fromOnError?"onerror":"ueLogError")},q,p,r=0,g=0,m;
q=u.stack||(u.err?u.err.stack:"");
t.pageURL=s.pageURL||""+(window.location?window.location.href:"")||"missing";
t.logLevel=s.logLevel||a;
if(p=s.attribution){t.attribution=""+p;
}if(q&&q.split){for(t.csm+=" stack",p=q.split("\n");
r<p.length&&t.s.length<B;
){(q=p[r++])&&t.s.push(l(q));
}}else{for(t.csm+=" callee",p=A(u.args||arguments,"callee"),g=r=0;
p&&r<B;
){m=e,p.skipTrace||(q=p.toString())&&q.substr&&(m=0===g?4*e:m,m=1==g?2*e:m,t.s.push(q.substr(0,m)),g++),p=A(p,"caller"),r++;
}}if(!t.f&&0<t.s.length&&(r=t)&&r.s){var n;
q=0<r.s.length?r.s[0]:"";
p=1<r.s.length?r.s[1]:"";
q&&(n=q.match(j));
n&&3==n.length||!p||(n=p.match(i));
n&&3==n.length&&(r.f=n[1],r.l=n[2]);
}return t;
}function A(m,n){try{return m[n];
}catch(g){}}function d(n,t){if(n){var g=b(n,t);
f.ue.log(g,t.channel||h,{n:1});
try{var r=c.console,q=c.JSON,s="Error logged: ";
if(r){if(q&&q.stringify){try{s+=q.stringify(g);
}catch(m){s+="no info provided; converting to string failed";
}}else{s+=g.m;
}"function"===typeof r.error?r.error(s,g):"function"===typeof r.log&&r.log(s,g);
}}catch(p){}}}function o(m,n){if(m&&!(f.ue_err.ec>f.ue_err.mxe)){f.ue_err.ec++;
f.ue_err.ter.push(m);
n=n||{};
var g=m.logLevel||n.logLevel;
n.logLevel=g;
n.attribution=m.attribution||n.attribution;
g&&g!=a||ue_err.ecf++;
d(m,n);
}}if(!f.ueLogError||f.ueLogError.isStub){var h=f.ue_err_chan||"jserr",a="FATAL",k="v5",B=20,e=256,i=/\(?([^\s]*):(\d+):\d+\)?/,j=/.*@(.*):(\d*)/;
d.skipTrace=1;
b.skipTrace=1;
o.skipTrace=1;
(function(){if(f.ue_err.erl){var m=f.ue_err.erl.length,n,g;
for(n=0;
n<m;
n++){g=f.ue_err.erl[n],d(g.ex,g.info);
}ue_err.erl=[];
}})();
f.ueLogError=o;
}})(ue_csm,window);