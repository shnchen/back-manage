import { Layout, Menu, Breadcrumb } from 'antd';

import {Input} from 'antd'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const Text = ()=>(
  <div className="test">
    <Input onChange={(e)=>{
      console.log(e.target.value);
      
    }}/>
    </div>
)
  export default Text
