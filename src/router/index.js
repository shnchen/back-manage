import Home from '../pages/home';
import List from '../pages/home-setting';
import Test from '../pages/test';
import Motion from '../pages/motion';
import Tests from '../pages/home/test.jsx';
import CombinTable from '../pages/combin-table/index.jsx'
const router = [
  {path:'/',name:'',element:Home},
  {path:'/home',name:'用户',element:Home},
  {path:'/home-setting',name:'首页配置',element:List},
  {path:'/test',name:'测试',element:Test},
  {path:'/motion',name:'动画',element:Motion},
  {path: '/tests',name: 'tests',element:Tests},
  {path:'/combin-table',element:CombinTable}
]

export default router;