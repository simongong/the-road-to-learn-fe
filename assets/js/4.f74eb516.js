(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{169:function(t,n,e){},172:function(t,n,e){"use strict";var s=e(169);e.n(s).a},190:function(t,n,e){"use strict";e.r(n);e(172);var s=e(0),i=Object(s.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("先看一个由 "),e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/v2#vue-cli--",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cli(2.0)"),e("OutboundLink")],1),t._v(" 生成的官方项目模版(\b具有普适性和代表性)，主要目录结构如下图，当然在初始化项目时有很多可选项，所以，目录文件不一定 100% 匹配，但这不是重点。"),e("br"),t._v(" "),e("pre",{staticClass:"code"},[t._v(".\n|-- build                      // 项目构建(webpack)相关代码\n|   |-- build.js               // 生产环境构建代码\n|   |-- check-version.js       // 检查node、npm等版本\n|   |-- dev-client.js          // 热重载相关\n|   |-- dev-server.js          // 构建本地服务器\n|   |-- utils.js               // 构建工具相关\n|   |-- webpack.base.conf.js   // webpack基础配置\n|   |-- webpack.dev.conf.js    // webpack开发环境配置\n|   |-- webpack.prod.conf.js   // webpack生产环境配置\n|-- config                     // 项目开发环境配置\n|   |-- dev.env.js             // 开发环境变量\n|   |-- index.js               // 项目一些配置变量\n|   |-- prod.env.js            // 生产环境变量\n|   |-- test.env.js            // 测试环境变量\n|-- dist\n|   |-- index.html\n|   |-- static\n|-- src                        // 源码目录\n|   |-- components             // vue公共组件\n|   |-- store                  // vuex的状态管理\n|   |-- App.vue                // 页面入口文件\n|   |-- main.js                // 程序入口文件，加载各种公共组件\n|-- static                     // 静态文件，比如一些图片，json数据等\n|   |-- data                   // 群聊分析得到的数据用于数据可视化\n|-- .babelrc                   // ES6语法编译配置\n|-- .editorconfig              // 定义代码格式\n|-- .eslintignore\n|-- .eslintrc.js\n|-- .gitignore\n|-- .postcssrc.js\n|-- README.md                  // 项目说明\n|-- favicon.ico\n|-- index.html                 // 入口页面\n|-- package.json               // 项目基本信息\n.\n")]),t._v("\n通过分析以上目录结构，可以看出前端项目主要由几大部分构成：\n"),e("img",{staticClass:"base-img",attrs:{src:"https://i.loli.net/2019/06/09/5cfcff9ee540d73919.png",alt:"前端目录结构.png",title:"前端目录结构.png"}}),t._v("\n\b由这几块项目的构成可以很非常清晰的看出项目的整个生产流程，简单来说就是：")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("下面我将会解释以下几个问题：")]),t._v(" "),e("ul",[e("li",[e("router-link",{attrs:{to:"./1-1-package.html"}},[t._v("前端的模块机制")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./1-2-library.html"}},[t._v("Vue,React 等在前端扮演什么角色？")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./1-3-build.html"}},[t._v("项目构建到底做了什么？")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./1-4-broswerRender.html"}},[t._v("浏览器是如何\b加载出一个完整的页面?")])],1),t._v(" "),e("li",[e("router-link",{attrs:{to:"./1-5-trace.html"}},[t._v("前端异常监控以及埋点")])],1)]),t._v(" "),t._m(3)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("h1",{attrs:{id:"从一个前端项目结构开始"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从一个前端项目结构开始","aria-hidden":"true"}},[this._v("#")]),this._v(" 从一个前端项目结构开始")])},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ol",[e("li",[t._v("根据项目说明安装开发依赖以及执行依赖")]),t._v(" "),e("li",[t._v("源码开发调试测试")]),t._v(" "),e("li",[t._v("\b利用构建\b工具生成可部署版本")]),t._v(" "),e("li",[t._v("运行部署脚本部署代码")]),t._v(" "),e("li",[t._v("浏览器\b解析运行并展现出页面")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[this._v("看完上面的介绍，你或许会轻视一笑：这就是个非常 normal 的流程，软件开发不都这样吗？又或许你会感到疑惑：前端安装依赖什么鬼，不就是用\b "),n("code",[this._v("script")]),this._v(" 标签在\b html 中引用\b需要的脚本么？构建工具又是什么，前端又不用像其他高级语言一样，需要编译成机器语言，它的执行环境浏览器本身就可以解析执行 js...")])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),n("p",[this._v("如果你有其他的问题，请私信我 😊")])])}],!1,null,null,null);n.default=i.exports}}]);