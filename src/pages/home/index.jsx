import React,{useEffect,useState} from 'react';
import {message, Table,Row,Col,Button,Modal,Form,Input,DatePicker,InputNumber,Radio,Typography,Space,Upload,Avatar} from 'antd';
import moment from 'moment';
import {getUserList,addUser,getDetail,updateUser,deleteUser,uploadImg} from '../../api/index';
import  './index.scss';
const {Link,Text} = Typography;

const Home = ()=>{
  const [form] = Form.useForm();
  const [tableData,setDataTable] = useState([]);
  const [show,setShow] = useState(false);
  const [detail,setDetail] = useState();
  const [registryTime,setRegistryTime] = useState();
  const [current,setCurrent] = useState(1);
  const [fileList,setFileList] = useState([]);
  const [imgList,setImgList] = useState([])
  const pageSize= 10;
  const [total,setTotal] = useState(0);
  const getUserInfoList = async (pageNum)=>{
    const res = await getUserList({
      pageNum:pageNum||current,
      pageSize:pageSize,
    });
    if(res.status===200){
      setDataTable(res.data.list);
      setTotal(res.data.total)
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
    form.resetFields();
    setImgList([]);
    setFileList([]);
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
      setImgList(res.data.headUrl);
      setFileList(res.data.headUrl);
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
    setImgList([]);
    setFileList([]);
  }
  const deleteData = async (id) =>{
    const res = await deleteUser({id});
    message[res.status===200?'success':'error'](res.message);
    getUserInfoList();
  }
  const imgUpload = async (file)=>{
    const res = await uploadImg(file);
    if(res.status===200){
      setImgList([{
        uid:res.filename,
        status:'done',
        name:res.originalname,
        url:res.url
      }])
    }
    message[res.status===200?'success':'error'](res.message);
  }
  const fileChange = (e)=>{
    if(e.fileList.length>0){
      e.fileList.map(item=>{
        if(item.status === "uploading" ){
          item.status = 'done'
        }
      })
    }
    setFileList(e.fileList);
  }
  const columns = [
    {
      title:"ID",
      dataIndex:'_id'
    },
    {
      title:"头像",
      dataIndex:'headUrl',
      render:(url)=> <Avatar src={url[0].url} />
    },
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
        pagination={{
          total,
          current,
          pageSize,
          onChange:(page)=>{
            setCurrent(page);
            getUserInfoList(page);
          }
        }}
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
              registryTime:+registryTime,
              headUrl:imgList
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
            setFileList([]);
            setImgList([]);
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
            <Form.Item  label="上传照片">
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={(e)=>{console.log(e);}}
                customRequest={(e)=>{
                  const formData=new FormData();  
                  formData.append('file',e.file);
                  imgUpload(formData);
                }}
                onChange={fileChange}
              >
                {fileList.length < 1 && '+ Upload'}
              </Upload>
            </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Home;