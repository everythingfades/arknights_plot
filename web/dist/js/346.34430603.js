"use strict";(self["webpackChunkvue2router"]=self["webpackChunkvue2router"]||[]).push([[346],{6346:function(t,s,e){e.r(s),e.d(s,{default:function(){return c}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"navigate"},[s("div",{staticClass:"filelist"},[s("ul",t._l(t.files,(function(e){return s("div",{key:e.filename,staticClass:"file"},["file"===e.type?s("span",{staticClass:"iconfont icon"},[t._v("")]):s("span",{staticClass:"iconfont icon"},[t._v("")]),s("a",{staticClass:"filenames",on:{click:function(s){return t.jump(e)},mouseover:function(s){return t.focus(s)},mouseleave:function(s){return t.blur(s)}}},[t._v(t._s(e.filename))])])})),0)])])},i=[],l=(e(4114),e(417)),o={name:"FileNavigator",data(){return{files:[]}},async created(){this.load_files()},methods:{async load_files(){console.log(this.$route.path);let t=this.$route.params.path;void 0===t&&(t="");const s=await(0,l.A)({url:"http://127.0.0.1:8000/list_files",params:{filepath:"./plot/"+t}});this.files=s.data,console.log(this.files)},focus(t){t.target.classList.add("focus")},blur(t){t.target.classList.remove("focus")},jump(t){console.log(t),"folder"===t.type?(this.$router.push(`${void 0===this.$route.params.path?"/navigate":"/navigate/"+this.$route.params.path}/${t.filename}`),this.load_files()):(console.log(this.$route.params.path),this.$router.push(`/search/${this.$route.params.path}/${t.filename.replace(".txt","")}`))}}},n=o,r=e(1656),u=(0,r.A)(n,a,i,!1,null,null,null),c=u.exports}}]);
//# sourceMappingURL=346.34430603.js.map