/*!
 * remark (http://getbootstrapadmin.com/remark)
 * Copyright 2017 amazingsurge
 * Licensed under the Themeforest Standard Licenses
 */

!function(document,window,$){"use strict";var Site=window.Site;$(document).ready(function($){Site.run()}),function(){$("#exampleButtonRandom").on("click",function(e){e.preventDefault(),$('[data-plugin="progress"]').each(function(){var number=Math.round(100*Math.random(1))+"%";$(this).asProgress("go",number)})})}(),window.customRefreshCallback=function(done){var $panel=$(this);setTimeout(function(){done(),$panel.find(".panel-body").html("Lorem ipsum In nostrud Excepteur velit reprehenderit quis consequat veniam officia nisi labore in est.")},1e3)}}(document,window,jQuery);
