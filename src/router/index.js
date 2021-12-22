import Home from '../pages/home/index.jsx';
import List from '../pages/list';
import BMap from '../pages/bmap';
const router = [
  {path:'/home',name:'home',element:Home},
  {path:'/list',name:'list',element:List},
  {path:'/bpam',name:'bmap',element:BMap}
]

export default router;