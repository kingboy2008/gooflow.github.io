var lang={
	get: function (){
		var userLang;
		if($.cookie("userLang")!==null){
			userLang = $.cookie("userLang");
		}else{
			userLang = (navigator.language) ? navigator.language : navigator.userLanguage;
			userLang = userLang.split("_")[0];
			if(userLang!=='zh'){
				userLang = 'en';
			}
			$.cookie("userLang ",userLang, { expires : 7 });
		}
		return userLang;
	},
	switch: function (text){}
};
