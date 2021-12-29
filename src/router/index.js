import Home from '../pages/home';
import List from '../pages/list';
import Test from '../pages/test';
const router = [
  {path:'/home',name:'用户',element:Home},
  {path:'/list',name:'list',element:List},
  {path:'/test',name:'测试',element:Test}
]

export default router;