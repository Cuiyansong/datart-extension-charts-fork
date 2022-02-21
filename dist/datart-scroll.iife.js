(function(){"use strict";var e='<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1644896851300" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1980" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M341.333333 640H42.666667V426.666667h298.666666z m341.333334 42.666667v256h245.333333a53.393333 53.393333 0 0 0 53.333333-53.333334v-202.666666z m0-42.666667h298.666666V426.666667h-298.666666z m298.666666-256V181.333333a53.393333 53.393333 0 0 0-53.333333-53.333333H96a53.393333 53.393333 0 0 0-53.333333 53.333333v202.666667z m-640 298.666667H42.666667v202.666666a53.393333 53.393333 0 0 0 53.333333 53.333334h245.333333z m42.666667 256h256v-256H384z m0-298.666667h256V426.666667H384z" p-id="1981"></path></svg>';function t({dHelper:t}){return{config:{datas:[{label:"mixed",key:"mixed",required:true,type:"mixed",limit:[1,999]},{label:"filter",key:"filter",type:"filter",disableAggregate:true}],styles:[{label:"marquee.title",key:"marquee",comType:"group",rows:[{label:"marquee.delayBeforeStart",key:"delayBeforeStart",default:1e3,comType:"inputNumber"},{label:"marquee.direction",key:"direction",default:"up",comType:"select",options:{items:[{label:"向上",value:"up"},{label:"向下",value:"down"},{label:"向左",value:"left"},{label:"向右",value:"right"}]}},{label:"marquee.duration",key:"duration",default:5e3,comType:"inputNumber"},{label:"marquee.gap",key:"gap",default:0,comType:"inputNumber"},{label:"marquee.pauseOnHover",key:"pauseOnHover",default:true,comType:"checkbox"},{label:"marquee.duplicated",key:"duplicated",default:true,comType:"checkbox"},{label:"marquee.startVisible",key:"startVisible",default:true,comType:"checkbox"}]}],settings:[{label:"viz.palette.setting.paging.title",key:"paging",comType:"group",rows:[{label:"viz.palette.setting.paging.pageSize",key:"pageSize",default:1e3,comType:"inputNumber",options:{needRefresh:true,step:1,min:0}}]}],i18ns:[{lang:"zh-CN",translation:{chartName:"[Experiment] 用户自定义滚动图表",marquee:{title:"滚动设置",delayBeforeStart:"开始延迟",direction:"运动方向",duration:"持续时间",gap:"间隙",pauseOnHover:"悬停时暂停",duplicated:"是否连续",startVisible:"是否在起点显示"},reference:{title:"参考线",open:"点击参考线配置"}}},{lang:"en-US",translation:{chartName:"[Experiment] Scroll The Chart",marquee:{title:"Scroll",delayBeforeStart:"Delay Before Start",direction:"Direction",duration:"Duration",gap:"Gap",pauseOnHover:"Pause On Hover",duplicated:"Duplicated",startVisible:"Start Visible"},reference:{title:"Reference",open:"Open"}}}]},isISOContainer:"demo-scroll-the-chart",dependency:["https://www.jeasyui.com/easyui/jquery.min.js","https://cdn.jsdelivr.net/npm/jquery.marquee@1.6.0/jquery.marquee.min.js","https://cdn.datatables.net/1.11.4/css/jquery.dataTables.css","https://cdn.datatables.net/1.11.4/js/jquery.dataTables.js"],meta:{id:"demo-scroll-the-chart",name:"chartName",icon:e,requirements:[{group:[0,999],aggregate:[0,999]}]},containerId:"",jQuery:null,tableBox:null,onMount(e,t){if("$"in t.window){const{marqueeOptions:a,dataTableOptions:r}=this.getMarqueeOptions(e.dataset,e.config);this.containerId=e.containerId;this.jQuery=t.window.$;this.chart=this.jQuery(`#${this.containerId}`);this.chart.width(t.width+"px");this.chart.html(`<table id="${this.containerId}-scroll-table" style='min-height: 100%; width: 100%;'></table>`);this.tableBox=this.jQuery(`#${this.containerId}-scroll-table`).dataTable(r);this.chart.marquee(a)}},onUpdated(e){if(!e.dataset||!e.dataset.columns||!e.config)return;if(!this.isMatchRequirement(e.config))return;this.chart.marquee("destroy");this.tableBox.fnClearTable();this.tableBox.fnDestroy();this.jQuery(`#${this.containerId}-scroll-table`).empty();const{marqueeOptions:t,dataTableOptions:a}=this.getMarqueeOptions(e.dataset,e.config);this.jQuery(`#${this.containerId}-scroll-table`).dataTable(Object.assign(a,{destroy:true}));this.jQuery(`#${this.containerId}-scroll-table thead`).remove();this.jQuery(`#${this.containerId}-scroll-table`).css({border:"none"});this.chart.marquee(t)},onUnMount(){this.tableBox.fnClearTable();this.tableBox.fnDestroy();this.jQuery(`#${this.containerId}-scroll-table`).empty();this.chart.marquee("destroy")},onResize(e,t){const{marqueeOptions:a}=this.getMarqueeOptions(e.dataset,e.config);this.chart.width(t.width+"px");this.chart.marquee("destroy");this.chart.marquee(a)},getMarqueeOptions(e,a){const r=a.styles;const i=a.datas||[];const s=i.filter((e=>"mixed"===e.key)).flatMap((e=>e.rows||[]));const l=t.transformToDataSet(e.rows,e.columns,i);const[n,o,u,d,c,h,p]=t.getStyles(r,["marquee"],["delayBeforeStart","direction","duration","gap","pauseOnHover","duplicated","startVisible"]);return{marqueeOptions:{delayBeforeStart:n||0,direction:o,duration:u||0,gap:d||0,pauseOnHover:c,duplicated:h,startVisible:p,pauseOnCycle:u||0},dataTableOptions:{data:l.map((e=>{const a={};s.forEach((r=>{a[t.getColumnRenderName(r)]=t.toFormattedValue(e.getCell(r),r.format)}));return a})),columns:s.map((e=>({data:t.getColumnRenderName(e)}))),cellBorder:true,autoWidth:true,paging:false,searching:false,ordering:false,info:false}}}}}return t})();
