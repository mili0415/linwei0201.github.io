webpackJsonp([3],{245:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(5),u=n(s),c=a(255),o=(n(c),function(e){function t(a){l(this,t);var n=r(this,e.call(this,a));return n.state={links:[{name:"Weibo",url:"http://weibo.com/p/1005051727199593/home",icon:"icon-weibo"},{name:"Github",url:"https://github.com/linwei0201",icon:"icon-github"}],interests:["瑜伽","钢琴","旅行"],skills:[{name:"构建",value:["webpack","gulp","npm"]},{name:"框架/模板",value:["react","react-router","redux","ejs"]},{name:"库",value:["jQuery","bootstrap","lodash"]},{name:"css",value:["less","stylus","css3"]},{name:"其他",value:["html5","es6","git","SQL"]}]},n}return i(t,e),t.prototype.render=function(){var e=this.state,t=e.links,a=e.interests,n=e.skills;return u.default.createElement("div",{className:"profile-wrapper"},u.default.createElement("img",{className:"avatar",src:"https://avatars1.githubusercontent.com/u/12796371?v=3&s=460"}),u.default.createElement("div",null,"Wei Lin"),u.default.createElement("div",{className:"title"},"技能"),n.map(function(e,t){return u.default.createElement("div",{className:"skills",key:t},u.default.createElement("div",{className:"skill-title"},e.name),u.default.createElement("ul",{className:"skill-list"},e.value.map(function(e,t){return u.default.createElement("li",{key:t},e)})))}),u.default.createElement("div",{className:"title"},"兴趣"),u.default.createElement("ul",{className:"interests"},a.map(function(e,t){return u.default.createElement("li",{key:t},e)})),u.default.createElement("ul",{className:"links"},t.map(function(e){return u.default.createElement("li",{key:e.icon},u.default.createElement("a",{href:e.url,target:"_blank"},u.default.createElement("i",{className:e.icon})))})))},t}(s.Component));t.default=o},255:function(e,t){}});