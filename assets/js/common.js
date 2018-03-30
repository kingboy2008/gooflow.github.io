var lang={
	text:'zh',
	htmlCaret: ' <span class="caret"></span>',
	ctrlF:{
		zh:'<div class="kbds hidden-xs">请通过 <kbd><kbd>ctrl</kbd> + <kbd>F</kbd></kbd> 进行页内检索</div>',
		en:'<div class="kbds hidden-xs">press <kbd><kbd>ctrl</kbd> + <kbd>F</kbd></kbd> to find in pages</div>'
	},
	title: {
		zh:'在线流程设计器&middot;简单易用优秀体验',
		en:'A Process Designer For Easy To Use And Good Experience'
	},
	docHome:{
		zh:'文档目录',
		en:'Directory'
	},
	loading:{
		zh:'载入中，请稍候……',
		en:'Loading, please wait……'
	},
	loadError:{
		zh:'载入失败，请稍候再试！',
		en:'Failed to load. Please try again later!'
	},
	get: function (){
		var userLang='zh';
		if($.cookie("userLang")){
			userLang = $.cookie("userLang");
			if(userLang!=='zh'){
				userLang = 'en';
			}
		}else{
			userLang = (navigator.language) ? navigator.language : navigator.userLanguage;
			userLang = userLang.split("-")[0];
			if(userLang!=='zh'){
				userLang = 'en';
			}
			$.cookie("userLang",userLang, { expires : 7 });
		}
		return userLang;
	},
	set: function(lang){
		$.cookie("userLang",lang, { expires : 7 });
	},
	switch: function (lang,text,reload){
		$("#langSwitch").html(text + this.htmlCaret);
		this.set(lang);
		if(reload)	window.location.reload();
	},
	init:function(){

		this.text = lang.get();
		$("#langSwitch").html((this.text==='zh'?'中文':'En') + this.htmlCaret);
	}
};
