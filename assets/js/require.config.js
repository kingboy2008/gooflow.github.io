requirejs.config({
    // 默认从js/lib加载所有的module ID
    baseUrl: '/',
	map: {
		'*': {
			'css': 'https://cdn.bootcss.com/require-css/0.1.10/css.min.js' // https://github.com/guybedford/require-css, RequireJs's plugin
		}
	},
    paths: {
		jquery: 'https://cdn.bootcss.com/jquery/1.12.4/jquery.min',
        GooFlow: 'dist/GooFlow.min',
        'GooFlow.export': 'dist/GooFlow.export.min',  //可选，将流程图导出为图片文件的扩展包
        'GooFlow.print': 'dist/GooFlow.print.min',    //可选，将流程图输出打印或另存为PDF的扩展包
    },
    //// ……
    shim:{
        'GooFlow':{
            deps:['css!../dist/GooFlow.min.css','jquery']
        }
    },
});