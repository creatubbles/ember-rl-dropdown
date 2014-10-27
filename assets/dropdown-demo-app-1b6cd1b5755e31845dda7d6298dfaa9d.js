define("dropdown-demo-app/app",["ember","ember/resolver","ember/load-initializers","dropdown-demo-app/config/environment","exports"],function(e,o,n,r,t){"use strict";var a=e["default"],d=o["default"],p=n["default"],l=r["default"];a.MODEL_FACTORY_INJECTIONS=!0;var i=a.Application.extend({modulePrefix:l.modulePrefix,podModulePrefix:l.podModulePrefix,Resolver:d});p(i,l.modulePrefix),t["default"]=i}),define("dropdown-demo-app/components/rl-dropdown-container",["ember-rl-dropdown/components/rl-dropdown-container","exports"],function(e,o){"use strict";var n=e["default"];o["default"]=n}),define("dropdown-demo-app/components/rl-dropdown-toggle",["ember-rl-dropdown/components/rl-dropdown-toggle","exports"],function(e,o){"use strict";var n=e["default"];o["default"]=n}),define("dropdown-demo-app/components/rl-dropdown",["ember-rl-dropdown/components/rl-dropdown","exports"],function(e,o){"use strict";var n=e["default"];o["default"]=n}),define("dropdown-demo-app/initializers/export-application-global",["ember","dropdown-demo-app/config/environment","exports"],function(e,o,n){"use strict";function r(e,o){var n=t.String.classify(a.modulePrefix);a.exportApplicationGlobal&&(window[n]=o)}var t=e["default"],a=o["default"];n.initialize=r,n["default"]={name:"export-application-global",initialize:r}}),define("dropdown-demo-app/router",["ember","dropdown-demo-app/config/environment","exports"],function(e,o,n){"use strict";var r=e["default"],t=o["default"],a=r.Router.extend({location:t.locationType});a.map(function(){}),n["default"]=a}),define("dropdown-demo-app/templates/application",["ember","exports"],function(e,o){"use strict";var n=e["default"];o["default"]=n.Handlebars.template(function(e,o,r,t,a){function d(e,o){var n,t,a,d="";return o.buffer.push("\n  "),t=r["rl-dropdown-toggle"]||e&&e["rl-dropdown-toggle"],a={hash:{"class":"btn btn-default"},hashTypes:{"class":"STRING"},hashContexts:{"class":e},inverse:c.noop,fn:c.program(2,p,o),contexts:[],types:[],data:o},n=t?t.call(e,a):m.call(e,"rl-dropdown-toggle",a),(n||0===n)&&o.buffer.push(n),o.buffer.push("\n\n  "),t=r["rl-dropdown"]||e&&e["rl-dropdown"],a={hash:{tagName:"ul","class":"dropdown-menu",closeOnChildClick:"a:link"},hashTypes:{tagName:"STRING","class":"STRING",closeOnChildClick:"STRING"},hashContexts:{tagName:e,"class":e,closeOnChildClick:e},inverse:c.noop,fn:c.program(4,l,o),contexts:[],types:[],data:o},n=t?t.call(e,a):m.call(e,"rl-dropdown",a),(n||0===n)&&o.buffer.push(n),o.buffer.push("\n"),d}function p(e,o){o.buffer.push('\n    Toggle <span class="caret"></span>\n  ')}function l(e,o){o.buffer.push('\n    <li><a href="#">Link 1</a></li>\n    <li><a href="#">Link 1</a></li>\n    <li><a href="#">Link 1</a></li>\n  ')}this.compilerInfo=[4,">= 1.0.0"],r=this.merge(r,n.Handlebars.helpers),a=a||{};var i,s,f,u="",c=this,m=r.helperMissing;return a.buffer.push('<h1>Ember-rl-dropdown demo</h2>\n\n<p>Documenation for this component is available <a href="https://github.com/RSSchermer/Ember-rl-dropdown">here</a>.</p>\n\n<p>The source for this demo is available\n  <a href="https://github.com/RSSchermer/Ember-rl-dropdown/tree/gh-pages/demo-app">here</a>.\n</p>\n\n<p>This demo uses Twitter Bootstrap. The <a href="https://github.com/RSSchermer/Ember-rl-dropdown#usage">usage section</a>\n  in the documentation provides an example.\n</p>\n\n'),s=r["rl-dropdown-container"]||o&&o["rl-dropdown-container"],f={hash:{"class":"dropdown"},hashTypes:{"class":"STRING"},hashContexts:{"class":o},inverse:c.noop,fn:c.program(1,d,a),contexts:[],types:[],data:a},i=s?s.call(o,f):m.call(o,"rl-dropdown-container",f),(i||0===i)&&a.buffer.push(i),a.buffer.push("\n"),u})}),define("dropdown-demo-app/config/environment",["ember"],function(e){var o="dropdown-demo-app";try{var n=o+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),t=JSON.parse(unescape(r));return{"default":t}}catch(a){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dropdown-demo-app/tests/test-helper"):require("dropdown-demo-app/app")["default"].create({});