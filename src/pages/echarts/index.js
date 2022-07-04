// import logo from './logo.svg';
// import './App.css';
import HomeChart from './HomeEcharts';
import Line from './lineChart'
const option = {
  color: 'blue',
  title: {
      left: 'center',
      text: '订单利润报表',
      subtext: 'data from tnet'
  },
  toolbox: {
      right: '40px',
      // top: '15px',
      feature: {
          dataView: {show: true, readOnly: false},
          // magicType: {
          //     show: true,
          //     type: ['line', 'bar']
          // },
          restore: {show: true},
          saveAsImage: {
              show: true,
              type: 'csv'
          },
      }
  },
  tooltip : {
      trigger: 'axis',
      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis : [
      {
          type : 'category',
          data : [10, 22, 20, 334, 390, 330, 220, 220, 200, 334,
              39, 33, 220, 220, 200, 334, 390, 330, 220, 220,
              20, 34, 390, 330, 220, 220, 200, 334, 390, 330, 220],
          axisTick: {
              alignWithLabel: true
          },
          axisLabel: {
              interval:0,
              rotate:60
          }
      }
  ],
  yAxis : [
      {
          type : 'value'
      }
  ],
  series : [
      {
          name: '收入',
          type: 'pie',
          stack: '总量',
          barWidth: '60%',
          label: {
              normal: {
                  show: true,
                  position: 'top'
              }
          },
          data:[10, 22, 20, 334, 390, 330, 220, 220, 200, 334,
              39, 33, 220, 220, 200, 334, 390, 330, 220, 220,
              20, 34, 390, 330, 220, 220, 200, 334, 390, 330, 220]
      }
  ]
}

function App() {
  return (
    <div>
        {/* <HomeChart option={option}></HomeChart> */}
        <Line />
    </div>
  );
}

export default App;
