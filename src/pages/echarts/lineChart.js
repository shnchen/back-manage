import HomeChart from './HomeEcharts';

// const option = {
//   color: [
//     'red',
//     'green',
//     'blue',
//     'yellow'
//   ],
//   legend: {},
//   tooltip: {
//     trigger: 'axis',
//     showContent: false
//   },
//   dataset: {
//     source: [
//       ['product', '2012', '2013', '2014', '2015', '2016', '2017','2018'],
//       ['Milk Tea safsdafsadfsadfsdfsdafsdafsaf', 56.5, 82.1, 88.7, 70.1, 53.4, 80,0],
//       ['Matcha Lattesdafsafsafsfasdafsafsdfsafsafsaf sdaf', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7,0],
//       ['Cheese Cocoa sdaffsdafsdfsdfsafsafsafsafafsafsfs', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5,0],
//       ['Walnut Brownie sdafsdaasdfsafsafasfsafsafsafsafsafsdfds', 25.2, 37.1, 41.2, 18, 33.9, 49.1,0],
//       ['Walnut Brownie 1dsafdssdafsafsafdsadsafsasffdfdasfdsfsdfsdfsds', 25.2, 37.1, 41.2, 18, 33.9, 49.1,0]
//     ]
//   },
//   xAxis: { type: 'category' },
//   yAxis: { gridIndex: 0 },
//   grid: { top: '55%' },
//   series: [
//     {
//       type: 'line',
//       smooth: true,
//       seriesLayoutBy: 'row',
//       emphasis: { focus: 'series' },
//       color:['']
//     },
//     {
//       type: 'line',
//       smooth: true,
//       seriesLayoutBy: 'row',
//       emphasis: { focus: 'series' }
//     },
//     {
//       type: 'line',
//       smooth: true,
//       seriesLayoutBy: 'row',
//       emphasis: { focus: 'series' }
//     },
//     {
//       type: 'line',
//       smooth: true,
//       seriesLayoutBy: 'row',
//       emphasis: { focus: 'series' }
//     },
//     {
//       type: 'line',
//       smooth: true,
//       seriesLayoutBy: 'row',
//       emphasis: { focus: 'series' }
//     },
//     // {
//     //   type: 'pie',
//     //   id: 'pie',
//     //   radius: '30%',
//     //   center: ['50%', '25%'],
//     //   emphasis: {
//     //     focus: 'self'
//     //   },
//     //   label: {
//     //     formatter: '{b}: {@2012} ({d}%)'
//     //   },
//     //   encode: {
//     //     itemName: 'product',
//     //     value: '2012',
//     //     tooltip: '2012'
//     //   }
//     // }
//   ]
// };
const option = {
  title: {
    // text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine','Search Engine1','Search Engine11','Search Engine111','Search Engine1111','Search Engine11111']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    },
    {
      name: 'Search Engine1',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    },
    {
      name: 'Search Engine11',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    },
    {
      name: 'Search Engine111',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    },
    {
      name: 'Search Engine1111',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    },
    {
      name: 'Search Engine11111',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};
function Line() {
  return (
    <div>
        <HomeChart option={option}></HomeChart>
    </div>
  );
}

export default Line;
