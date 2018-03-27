$.ajax({
	url:'https://sdlddr.github.io/Gooflow/assets/info.json', dataType:'json',
	success:function(data){
		$(".version").each(function(){
			if(this.tagName==='A')
				$(this).click(function(){
					window.location.href='https://sdlddr.github.io/Gooflow/dist/GooFlow-'+data.version+'.zip';
				});
			else
				$(this).text(data.version);
		});
		$(".publicDate").each(function(){
			$(this).text(data.publicDate);
		})
	}
});