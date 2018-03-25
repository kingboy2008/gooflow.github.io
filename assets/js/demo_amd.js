require(['jquery','GooFlow','examples/demo/data2_amd'], function ($, GooFlow, jsondata) {
    require(['GooFlow.export','GooFlow.print'], function (){
        //初始化前的公用方法：修改默认的颜色
        GooFlow.setColors({
            lineFont:"#ff6600",
        });
        var property={
            width:1200,
            height:540,
            toolBtns:["start round mix","end round","task","node","chat","state","plug","join","fork","complex mix"],
            haveHead:true,
            headLabel:true,
            headBtns:["new","open","save","undo","redo","reload","print"],//如果haveHead=true，则定义HEAD区的按钮
            headBtnEvents:{},//如果headBtns有值，则定义每个自定义类型按钮的事件
            haveTool:true,//使用工具栏,即打开编辑功能
            haveDashed:true,
            haveGroup:true,
            useOperStack:true
        };
        var remark={
            cursor:"选择指针",
            direct:"节点连线",
            dashed:"虚线",
            start:"入口结点",
            "end":"结束结点",
            "task":"任务结点",
            node:"自动结点",
            chat:"决策结点",
            state:"状态结点",
            plug:"附加插件",
            fork:"分支结点",
            "join":"联合结点",
            "complex":"复合结点",
            group:"组织划分框编辑开关"
        };
        //顶部标题栏按钮的title提示设置，每个key名与初始化配置中相应按钮的类型名相同
        var headBtns={
            'new':"新建流程",
            open:"打开流程",
            save:"保存结果",
            undo:"撤销",
            redo:"重做",
            reload:"刷新流程",
            print:"打印流程图"
        };
        //工作区域面积扩展按钮的title提示设置
        var extRemarks={
            extendRight:"工作区向右扩展",
            extendBottom:"工作区向下扩展"
        };
        var demo = GooFlow.init("#demo",property);
        demo.setNodeRemarks(remark);         //remarks为左侧工具栏按钮的title提示定义
        demo.setHeadToolsRemarks(headBtns);  //headBtns为顶部标题栏按钮的title提示设置
        demo.setExtWorkRemarks(extRemarks);
        demo.loadData(jsondata);             //jsondata为表达流程图详细的JSON数据
        demo.onBtnSaveClick=function(){
            demo.exportDiagram('myFile');//流程图导出图片功能
        }
        demo.onPrintClick=function(){
            demo.print();//打印流程图或另存为PDF功能
        }
    });
});