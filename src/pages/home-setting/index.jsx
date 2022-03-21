import React,{useEffect} from 'react';
import  {Button,Form} from 'antd'
import MyUpload from '../../component/Upload';
import {updateHomeSetting,getHomeDetail} from '../../api';
import './index.scss'
const HomeSetting = () =>{
  const [form] = Form.useForm();
  // const [banners,setBanners] = useState([])
  const getHomeDetailFun = async ()=>{
    let res = await getHomeDetail();
    if(res.status===200){
      console.log(res.data.banners);
      // setBanners(res.data.banners);
      form.setFieldsValue({banners:res.data.banners})
      
    }
  }
  const updateHomeSettingFun = async ()=>{
    
    let values = form.getFieldsValue();
    console.log(values);
     await updateHomeSetting(values);
    
  }

  useEffect(()=>{
    getHomeDetailFun();
  },[])
  return (
    <div className="home-setting">
      <Form name='base' form={form} >
          <Form.Item name='banners' label='banner：'>
             <MyUpload  callback={(v)=>{
               console.log(v);
                form.setFieldsValue({banners:v})
               }} />
          </Form.Item>
          <Form.Item >
          <Form.Item></Form.Item>
            <Button type='primary' onClick={()=>{updateHomeSettingFun()}}>保存</Button>
            </Form.Item>
      </Form>
    </div>
  );
}


export default HomeSetting;