import Home from '../pages/home/index.jsx';
import List from '../pages/list';
import BMap from '../pages/bmap';
import EchartsComponent from '../pages/echarts';
const router = [
  {path:'/',name:'home',element:Home},
  {path:'/home',name:'home',element:Home},
  {path:'/list',name:'list',element:List},
  {path:'/bpam',name:'bmap',element:BMap},
  {path:'/echarts',name:'echarts',element:EchartsComponent},
]

export default router;