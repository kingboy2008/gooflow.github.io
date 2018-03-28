var g_info={};
(function($) {
	lang.init();
	$.ajax({
		url: 'https://sdlddr.github.io/Gooflow/assets/info.json', dataType: 'json',
		success: function (data) {
			g_info=data
			$(".version").each(function () {
				if (this.tagName === 'A')
					$(this).click(function () {
						window.location.href = 'https://sdlddr.github.io/Gooflow/dist/GooFlow-' + g_info.version + '.zip';
					});
				else
					$(this).text(g_info.version);
			});
			$(".publicDate").each(function () {
				$(this).text(g_info.publicDate);
			})
		}
	});
})($);