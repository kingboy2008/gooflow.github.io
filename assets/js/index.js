var g_info={};

(function($) {
	function getInfo(){
		$.ajax({
			url: 'https://sdlddr.github.io/Gooflow/assets/info.json', dataType: 'json',
			success: function (data) {
				g_info=data;
				$(".tips-small").html('V'+g_info.version+'&nbsp;&nbsp;|&nbsp;&nbsp;'+g_info.publicDate+(lang.text==='zh'?' 发布':' released'))
			}
		});
	}
	lang.init();
	$("body").load("i18n/"+lang.text+".html",function(){
		getInfo();
		lang.switch(lang.text, lang.text==='zh'?'中文':'En');
		$("body").scrollspy({target: '#navbar-wrapper'});
		Prism.highlightAllUnder($("#guide").parent()[0], false);
	});
})($);