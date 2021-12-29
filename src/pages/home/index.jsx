import React,{useEffect,useState} from 'react';
import {message, Table,Row,Col,Button,Modal,Form,Input,DatePicker,InputNumber,Radio,Typography,Space} from 'antd';
import moment from 'moment';
import {getUserList,addUser,getDetail,updateUser,deleteUser} from '../../api/index';
import  './index.less';
const {Link,Text} = Typography;

const Home = ()=>{
  const [form] = Form.useForm();
  const [tableData,setDataTable] = useState([]);
  const [show,setShow] = useState(false);
  const [detail,setDetail] = useState();
  const [registryTime,setRegistryTime] = useState();
  const getUserInfoList = async ()=>{
    const res = await getUserList();
    if(res.status===200){
      setDataTable(res.list);
    }else{
      message.error(res.message)
    }
  }
  const addUserFun = async (data)=>{
    const res = await addUser(data);
    message[res.status===200?'success':'error'](res.message);
    getUserInfoList();
    setShow(false);
    setRegistryTime(undefined);
  }
  const getDetailFun = async (id)=>{
    let res = await getDetail({_id:id});
    if(res.status === 200){
      setDetail(res.data);
      form.setFieldsValue({
        name:res.data.name,
        gender:res.data.gender,
        age:res.data.age,
      })
     
      res.data.registryTime && setRegistryTime(moment(res.data.registryTime))
      setShow(true);
    }else{
      message.error(res.message)
    }
  }
  const updateFun = async(params)=>{
    const res = await updateUser(params);
    message[res.status===200?'success':'error'](res.message);
    getUserInfoList();
    setShow(false);
    setRegistryTime(undefined);
  }
  const deleteData = async (id) =>{
    const res = await deleteUser({id});
    message[res.status===200?'success':'error'](res.message);
    getUserInfoList();
  }
  const columns = [
    {
      title:'姓名',
      dataIndex:'name'
    },
    {
      title:'性别',
      dataIndex:'gender',
      render:(gender)=>{
       return ['未知','男','女'][+gender]
      }
    },
    {
      title:'年龄',
      dataIndex:'age'
    },
    {
      title:'注册时间',
      dataIndex:'registryTime',
      render:(time)=>{
        if(!time){
          return '';
        }
        return moment(time).format("YYYY-MM-DD")}
    },
    {
      title:'操作',
      dataIndex:"_id",
      render:(id)=>(<Space>
        <Link onClick={()=>{getDetailFun(id);}}>编辑</Link>
        <Text type='danger' style={{cursor:'pointer'}}  onClick={()=>{deleteData(id);}}>删除</Text>
      </Space>)
    }
  ]
  useEffect(()=>{
    getUserInfoList();
  },[])
  return (
    <div className='home'>
      <Row>
          <Col span={20}></Col>
          <Col span={4}>
            <Button
              type='primary'  
              onClick={()=>{
                  setShow(true)
              }}>
              新建用户
            </Button>
          </Col>
      </Row>
      <Table
        rowKey={(row)=>row._id}
        dataSource={tableData}
        columns={columns} 
       />
        <Modal
          destroyOnClose
          title={detail?'编辑':'新建'} 
          visible={show}
          onOk={()=>{
            const {name,gender,age} = form.getFieldsValue();
            const params={
              name,
              gender,
              age,
              registryTime:+registryTime
            }
            detail?updateFun({
              _id:detail._id,
              ...params
            }):addUserFun(params)
          }}
          onCancel={()=>{
            form.resetFields();
            setShow(false);
            setDetail(undefined);
            setRegistryTime(undefined);
          }}
          >
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            form={form}
          >
            <Form.Item name='name' label="姓名">
              <Input />
            </Form.Item>
            <Form.Item name='gender' label='性别'>
              <Radio.Group>
                <Radio value={1}>男</Radio>
                <Radio value={2}>女</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item name='age' label="年龄">
              <InputNumber />
            </Form.Item>
            <Form.Item  label="注册时间">
              <DatePicker value={registryTime} onChange={(e)=>{
                setRegistryTime(e)
              }} />
            </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Home;