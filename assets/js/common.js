var lang={
	text:'zh',
	htmlCaret: ' <span class="caret"></span>',
	docHome:{
		zh:'文档目录',
		en:'Document Directory'
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
		console.log($.cookie("userLang"));
		if($.cookie("userLang")){
			userLang = $.cookie("userLang");
		}else{
			userLang = (navigator.language) ? navigator.language : navigator.userLanguage;
			userLang = userLang.split("-")[0];
			console.log('userLang',userLang);
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
		lang.switch(this.text, this.text==='zh'?'中文':'En');
	}
};
