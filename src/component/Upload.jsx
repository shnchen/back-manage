import React,{useState,useEffect} from 'react';
import {Upload,message} from 'antd';
import {uploadImg} from '../api'
let list = [];
const MyUpload = (props) =>{
  const [fileList,setFileList] = useState([]);
  const imgUpload = async (file)=>{
    const res = await uploadImg(file);
    if(res.status===200){
      list.push({
        uid:res.filename,
        status:'done',
        name:res.originalname,
        url:res.url
      })
      props.callback(list);
    }
    message[res.status===200?'success':'error'](res.message);
  }
  const fileChange = (e)=>{
    if(e.fileList.length>0){
      e.fileList.map(item => {
        if(item.status === "uploading" ){
          item.status = 'done'
        }
        return <></>
      })
    }
    setFileList(e.fileList);
  }
  useEffect(()=>{
    list = props.value;
    setFileList(props.value);
    return ()=>{
      list = [];
    }
  },[props.value])
  return (
    <Upload
      multiple
      listType="picture-card"
      fileList={fileList}
      onPreview={(e)=>{console.log(e);}}
      customRequest={(e)=>{
        const formData=new FormData();  
        formData.append('file',e.file);
        imgUpload(formData);
      }}
      onRemove={(e)=>{
        console.log(e,fileList);
        let index = fileList.findIndex(item=>item.uid === e.uid);
        setTimeout(() => {
          list.splice(index,1);
          props.callback(list);
        }, 0);
      }}
      onChange={fileChange}
    >
    + Upload
    </Upload>
  )
}

export default MyUpload;