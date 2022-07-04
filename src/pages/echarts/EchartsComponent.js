import React, { Component } from 'react'
import * as echarts from 'echarts'

class ReactEcharts extends Component {
   
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //初始化图表
        this.initChart();
    }
    componentWillReceiveProps(nextProps) {
        //更新图表
        this.initChart(nextProps);
    }
    /*生成图表，做了判断，如果不去判断dom有没有生成，
      每次更新图表都要生成一个dom节点*/
    initChart(props) {
        let option = props === undefined ? this.props.option : props.option;
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.getInstanceByDom(document.getElementById('main'));
        if( myChart === undefined){
            myChart = echarts.init(document.getElementById('main'));
        }
        // 绘制图表，option设置图表格式及源数据
        myChart.setOption(option);
        myChart.on('click', (e)=> {
          const {data} = option.series[0];
          console.log(e);
          if(e.componentSubType === 'bar'){
            console.log(12);
            data[e.dataIndex] = 10000;
            this.props.getOptions(option);
            return;
            // for(let i=0;i<data.length;i++){
            //   if(i === e.dataIndex){
            //     data[i]=0;
            //     this.props.getOptions(option);
            //     return;
            //   }
            // }
          }
          // else if(e.componentSubType === 'pie'){
          //   for(let i=0;i<data.length;i++){
          //     data[i].value=90
          //   }
          // }else if(e.componentSubType === 'line'){
          //   for(let i=0;i<data.length;i++){
          //     if(i === e.dataIndex){
          //       data[i]=0;
          //       this.props.getOptions(option);
          //       return;
          //     }
          //   }
          // }
          
          
           
          
          
        })
        

        
    }

    render() {
        return (
        //width和height可由属性值传入
            <div id="main" style={{ width: 1100, height: 400 }}></div>
        );
    }
};

export default ReactEcharts 