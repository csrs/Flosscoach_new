/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(global,factory){if("function"==typeof define&&define.amd)define("/Plugin/asprogress",["exports","jquery","Plugin"],factory);else if("undefined"!=typeof exports)factory(exports,require("jquery"),require("Plugin"));else{var mod={exports:{}};factory(mod.exports,global.jQuery,global.Plugin),global.PluginAsprogress=mod.exports}}(this,function(exports,_jquery,_Plugin2){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _jquery2=babelHelpers.interopRequireDefault(_jquery),_Plugin3=babelHelpers.interopRequireDefault(_Plugin2),NAME="progress",Progress=function(_Plugin){function Progress(){return babelHelpers.classCallCheck(this,Progress),babelHelpers.possibleConstructorReturn(this,(Progress.__proto__||Object.getPrototypeOf(Progress)).apply(this,arguments))}return babelHelpers.inherits(Progress,_Plugin),babelHelpers.createClass(Progress,[{key:"getName",value:function(){return NAME}},{key:"render",value:function(){if(_jquery2.default.fn.asProgress){var $el=this.$el;$el.asProgress(this.options)}}}],[{key:"getDefaults",value:function(){return{bootstrap:!0,onUpdate:function(n){var per=(n-this.min)/(this.max-this.min);per<.5?this.$target.addClass("progress-bar-success").removeClass("progress-bar-warning progress-bar-danger"):per>=.5&&per<.8?this.$target.addClass("progress-bar-warning").removeClass("progress-bar-success progress-bar-danger"):this.$target.addClass("progress-bar-danger").removeClass("progress-bar-success progress-bar-warning")},labelCallback:function(n){var label=void 0,labelType=this.$element.data("labeltype");if("percentage"===labelType){var percentage=this.getPercentage(n);label=percentage+"%"}else if("steps"===labelType){var total=this.$element.data("totalsteps");total||(total=10);var step=Math.round(total*(n-this.min)/(this.max-this.min));label=step+" / "+total}else label=n;return this.$element.parent().hasClass("contextual-progress")&&this.$element.parent().find(".progress-label").html(label),label}}}}]),Progress}(_Plugin3.default);_Plugin3.default.register(NAME,Progress),exports.default=Progress});