webpackJsonp([65],{155:function(t,e,s){var a=s(3)(s(293),s(421),null,null,null);t.exports=a.exports},293:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{platform:this.$q.platform.is}},computed:{touch:function(){return this.$q.platform.has.touch?"has":"does not have"}}}},421:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout-padding row justify-center"},[s("div",{staticStyle:{width:"500px","max-width":"90vw"}},[s("p",{staticClass:"caption"},[t._v("\n      Based on the device you are using to view this, Quasar detects the following:\n    ")]),t._v(" "),s("table",{staticClass:"q-table striped"},[t._m(0),t._v(" "),s("tbody",t._l(t.platform,function(e,a){return s("tr",[s("td",[t._v(t._s(a))]),t._v(" "),s("td",[t._v(t._s(e))])])}))]),t._v(" "),s("p",{staticClass:"caption"},[t._v("\n      Your device "),s("strong",[t._v(t._s(t.touch))]),t._v(" touch capability.\n    ")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("Property")]),t._v(" "),s("th",{staticClass:"text-left"},[t._v("Value")])])])}]}}});