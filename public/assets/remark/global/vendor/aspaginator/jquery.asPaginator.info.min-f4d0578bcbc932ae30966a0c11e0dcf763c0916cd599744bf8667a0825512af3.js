/*! jQuery asPaginator - v0.2.1 - 2015-03-17
* https://github.com/amazingSurge/jquery-asPaginator
* Copyright (c) 2015 amazingSurge; Licensed GPL */

!function(a){"use strict";a.asPaginator.registerComponent("info",{defaults:{tpl:function(){return'<li class="'+this.namespace+'-info"><a href="javascript:void(0);"><span class="'+this.namespace+'-current"></span> / <span class="'+this.namespace+'-total"></span></a></li>'}},init:function(b){var c=a.extend({},this.defaults,b.options.components.info);this.opts=c},bindEvents:function(a){var b=a.$element.find("."+a.namespace+"-info"),c=b.find("."+a.namespace+"-current");b.find("."+a.namespace+"-total").text(a.totalPages),c.text(a.currentPage),a.$element.on("asPaginator::change",function(){c.text(a.currentPage)})}})}(jQuery);
