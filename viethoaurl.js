$(function(){$("a[href^='/c'], a[href^='/f'], a[href^='/t']").attr({href:function(){var a=$.trim($(this).text());if(""!=a)return this.href.replace(location.origin,"").replace(/(\-category|\-forum|\-topic)/,"-"+lang_vi(a.replace(/Re:\s/i,"")))}});$(window).load(function(){$('.loading').fadeOut(1000)});$('a[href*="/"]').click(function(){$('.loading').fadeIn(200).delay(2000).fadeOut(1000)});$('form').submit(function(){$('.loading').fadeIn(200).delay(2000).fadeOut(1000)});$(".show-nav").click(function(){$(".nav-top").toggle()});$("meta[http-equiv='refresh'][content]:first").each(function(){window.location.href=$(this).attr("content").replace(/^.*;url=/,"")});$(".statistics").after('<div class="main"><div class="main-head">ThĂ´ng bĂ¡o</div><div class="main-content"><p>Ráº¥t tiáº¿c, chá»©c nÄƒng nĂ y Ä‘Ă£ bá»‹ vĂ´ hiá»‡u hĂ³a bá»Ÿi <strong style="color:red">Quáº£n trá»‹ viĂªn</strong>. Xin vui lĂ²ng thá»­ láº¡i sau.</p></div></div><p class="center"><a href="/">Quay vá» trang chá»§</a></p>')});$(function(){if(!$.sceditor||!toolbar)return;toolbar='bold,italic,underline|headers,size,color,font,removeformat|left,center,right|bulletlist,orderedlist,horizontalrule|servimg,image,youtube,link,unlink|more|strike,quote,code,faspoiler,fahide,table,subscript,superscript,fascroll,faupdown,fawow,farand,date,time,email|maximize,source';$(function(){var sce=$('#text_editor_textarea').sceditor('instance'),fa=document.getElementById('fa_toolbar');$('.sceditor-button-maximize')[0].onclick=function(){if(!fa)return;sce.maximize()&&(fa.style.display='none');!sce.maximize()&&(fa.style.display='')}})});$(function(){$(function(){$(".sceditor-container iframe").contents().find("head").append("<style>body,html,code:before,p,table{color:#8d8d8d!important;font-size:14px;line-height:1.4}code{background:#2d2d2d;border:1px solid #464646;padding:10px;margin:20px 0 5px 0}blockquote{background:#323232;border:0;border-left:3px solid #3498db;padding:10px;margin:5px 0}blockquote cite{display:block;font-weight:700;padding:0 0 5px;font-style:normal;border:0}</style>")})});$(function(){$(function(){if($.sceditor){var $win=$(window),$editor=$("#text_editor_textarea").sceditor("instance"),firstVal=$editor.val();$win.on("beforeunload",function(){if($editor.val()!==firstVal)return"BĂ i viáº¿t cá»§a báº¡n chÆ°a Ä‘Æ°á»£c lÆ°u."});$("form[name='post']").on("submit",function(){$win.off("beforeunload")})}})});$(function(){var min=10,a;$("input[name='post']").click(function(){a=$("#text_editor_textarea").sceditor("instance").val().replace(/\s|\[\/?(b|i|u|strike|list(=(1|a))?|\*|quote(=".+")?|hr|code|spoiler(=[^\[\]]*)?|hide|table|tr|td|img.+\/img|flash.+\/flash|youtube.+\/youtube|dailymotion.+\/dailymotion|size(=\d+)?|color(=#.{6})?|font(=[^\[\]]*)?|url(=[^\s\[\]]*)?|rand|flipv|fliph|blur|fade|wow|sub|sup|updown|scroll|justify|right|center|left)\]/gi,'').length;if(min>a)return alert("BĂ i viáº¿t quĂ¡ ngáº¯n!\nSá»‘ kĂ½ tá»± tá»‘i thiá»ƒu lĂ  "+min+" kĂ½ tá»±.\nBáº¡n cáº§n viáº¿t thĂªm "+(min-a)+" kĂ½ tá»± ná»¯a má»›i cĂ³ thá»ƒ gá»­i bĂ i."),!1})});$(function(){var x=$('.footer-link');for(i=0;i<x.length;i++){x[i].innerHTML=x[i].innerHTML.replace('Free forum','Forumotion').replace('Create a forum on Forumotion','Forumotion').replace('Free forum support','Support').replace('Forumotion support','Support').replace('<a name="bottom" href="/statistics" rel="nofollow">Statistics</a>','<a>Statistics</a>')};var x=$('p.center');for(i=0;i<x.length;i++){x[i].innerHTML=x[i].innerHTML.replace('Flood control is active on this forum, please wait 30 second(s) before replying or posting','Báº¡n pháº£i Ä‘á»£i 30 giĂ¢y má»›i cĂ³ thá»ƒ tiáº¿p tá»¥c Ä‘Äƒng bĂ i').replace('Máº­t kháº©u khĂ´ng Ä‘Æ°á»£c dĂ i hÆ¡n 32 kĂ½ tá»±','Máº­t kháº©u khĂ´ng Ä‘Æ°á»£c Ă­t hÆ¡n 4 kĂ½ tá»± vĂ  khĂ´ng vÆ°á»£t quĂ¡ 32 kĂ½ tá»±').replace('The length of the title for this topic must be ranging between 10 and 100 characters','TiĂªu Ä‘á» bĂ i Ä‘Äƒng khĂ´ng Ä‘Æ°á»£c Ă­t hÆ¡n 10 kĂ½ tá»± vĂ  khĂ´ng vÆ°á»£t quĂ¡ 100 kĂ½ tá»±')};var x=$('p.message');for(i=0;i<x.length;i++){x[i].innerHTML=x[i].innerHTML.replace('TĂ i khoáº£n cá»§a báº¡n Ä‘Ă£ cĂ³ hiá»‡u lá»±c. CĂ¡m Æ¡n báº¡n tham gia Diá»…n ÄĂ n','ÄÄƒng kĂ½ tĂ i khoáº£n thĂ nh cĂ´ng! TĂ i khoáº£n cá»§a báº¡n Ä‘Ă£ cĂ³ hiá»‡u lá»±c').replace('You can now connect to the forum with your username and password.','BĂ¢y giá» báº¡n cĂ³ thá»ƒ <strong><a href="/login">ÄÄƒng nháº­p</a></strong> vĂ  báº¯t Ä‘áº§u Ä‘Äƒng bĂ i').replace('Click here to return to your profile','Nháº¥n vĂ o Ä‘Ă¢y Ä‘á»ƒ trá»Ÿ vá» trang thĂ´ng tin cĂ¡ nhĂ¢n').replace('View profile','Xem trang cĂ¡ nhĂ¢n cá»§a báº¡n')};$('input[type="submit"]').val(function(index,value){return value.replace('Send','ÄÄƒng BĂ i')})});$(function(){var x=$('.timez');for(i=0;i<x.length;i++){x[i].innerHTML=x[i].innerHTML.replace('on','')};(function(g){function e(a){var c=(new Date).getHours();a=parseInt(((new Date).getTime()-(new Date(a)).getTime())/6E4);var b=parseInt(a/60);if(0===b)return a+" ph\u00fat tr\u01b0\u1edbc";if(b<=c)return b+" gi\u1edd tr\u01b0\u1edbc";if(b>c&&b<c+24)return b+" gi\u1edd tr\u01b0\u1edbc";if(b>c+24)return parseInt((b-c)/24)+1+" ng\u00e0y tr\u01b0\u1edbc"}g(".timez").text(function(){var a=this.textContent.trim();if(/^(Yester|To)day\sat\s\d{1,2}:\d{2,2}$/.test(a)){var c=a.match(/\s(\d{1,2})\:(\d{2,2})$/),b=new Date,d=new Date(b),f=function(a){var b=a.getDate(),d=a.getMonth();a=a.getFullYear();return e(new Date(a,d,b,c[1],c[2]))};d.setDate(b.getDate()-1);return-1!==a.indexOf("Today")?f(b):f(d)}if(/^\d{2,2}\.\d{2,2}\.\d{2,2}\s\d{1,2}:\d{2,2}$/.test(a))return a=a.split(/\W/),a=new Date("20"+a[2],parseInt(a[1],10)-1,a[0],a[3],a[4]),e(a)})})(jQuery)});
