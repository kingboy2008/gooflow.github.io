var fun={
	renderPageNav:function(obj,kbd){
		var html = '<aside class="right-panel hidden-xs hidden-sm"><ul class="nav sidenav">';
		if(kbd)obj.find(".page-header").append(lang.ctrlF[lang.text]);
		obj.children("article").append('<hr><div class="end"></div>')
			.children(".container-fluid").each(function(){
			var This=$(this);
			html += '<li><a href="#'+this.id+'">'+This.data('title')+'</a>';
			var bool=false;
			if(This.children(".container-fluid").length>0){
			    html += '<ul class="nav">';
			    bool=true;
            }
			This.children(".container-fluid").each(function(){//如果还有三级分类的话
                html += '<li><a href="#'+this.id+'">'+$(this).data('title')+'</a>';
            });
			if(bool){
			    html += '</ul>';
            }
			html += '</li>';
		});
		html += '</ul></aside>';
        obj.append(html);
	},
	showInfo:function(frame,text){
        var height = frame.height();
        frame.html('<div class="f20 text-gray text-center" style="height:100%;line-height:'+(height-40)+'px">'+text+'</div>');
	},
    getHash:function(){
        var hash = window.location.hash;
        if(hash.length>1){
        	hash = hash.substr(1,hash.length);
		}else{
        	hash = '';
		}
        return g.hashDef['#'+hash]? hash:'start';
    },
    breadcrumb:function(names){
        var bread = $(".breadcrumb").html('<li><a href="index.html#directory">'+lang.docHome[lang.text]+'</a></li> ');
        for(var i=0;i<names.length;++i){
            if (g.hash !== 'directory') {
                bread.append('<li class="active">' + names[i].title + '</li> ');
            }
        }
    },
	loadPage:function(){
		$(".loading").show();
		var frame = $("#frame");
		var height = frame.height();
        fun.showInfo(frame,lang.loading[lang.text]);
        $(".main-menu").children(".active").removeClass("active");
        $(".main-menu").find("a[href='#"+g.hash+"']").parent().addClass("active");
		$.ajax(lang.text+"/"+g.hash+'.html', {
            success:function (data) {
            	frame.html(data);
                var mf = $('.main-frame');
                fun.renderPageNav(mf,g.hash!=='directory');
                var rp = $(".right-panel");
                var h = rp.height(), fh = height - 40;
                if (h > fh) rp.css("height", fh + 'px');

                //处理导航路径的显示
                fun.breadcrumb([{title:mf.data("title")}]);
                //滚动监听
                mf.scrollspy({target: '.right-panel'});
                rp.children().on('click', 'a', function (e) {
                    window.event ? window.event.returnValue = false : e.preventDefault();
                    this.blur();
                    mf.scrollTop($(this.hash)[0].offsetTop);
                });
                //高亮所有示例代码
                if (mf.length>0) {
                    Prism.highlightAllUnder(mf[0], false);
                }

                $(".loading").hide();
            },
            timeout:30000,
			error:function(){
                fun.showInfo(frame,lang.loadError[lang.text]);
            }
        });
	},
};
var g={
	hash:'aaaa',
	hashDef:{'#directory':true}
};
(function($) {
	lang.init();
    if ("onhashchange" in window) {
        window.onhashchange = function(ev) {
            g.hash=fun.getHash();
            fun.loadPage();
        };
    }
    $.ajax('https://sdlddr.github.io/Gooflow/assets/info.json',{
		dataType:'json',cache:true,
		success:function(data){
			$("#version").text("V"+data.version);
		}
	});
    $.ajax(lang.text+'/docChapter.json',{
    	dataType:'json',cache:true,
		success:function(data){
    		var html='';
    		for(var i=0;i<data.length;++i){
				html += '<li><a class="menu-title" href="#'+data[i].hash
				+'"><i class="glyphicon glyphicon-triangle-right"></i><span class="nav-label">'
				+data[i].title+'</span></a></li>';
			}
			$(".main-menu").html(html);
			//init page
			$(".menu-title").each(function(){
				g.hashDef[this.hash]=true;
			})
			g.hash=fun.getHash();
			fun.loadPage();
		}
	});

})($);