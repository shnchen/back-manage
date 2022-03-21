import axios from "axios";
// import qs from 'qs';


const http = axios.create({
  // baseURL:'http://localhost:9999/',
  baseURL:'http://127.0.0.1:9998/',
  timeout:10000
})


http.interceptors.response.use((response)=>{
  return response.data
},(error)=>{
  return Promise.reject(error);
})


//获取用户列表
export const getUserList = (params)=>{
  return http({
    url:'users/user-list',
    method:'GET',
    params
  })
}

//新建用户
export const addUser = (data)=>{
  return http({
    url:'users/add-user',
    method:"POST",
    data
  })
}
//获取单个数据
export const getDetail = (params) =>{
  return http({
    url:'users/user-detail',
    method:'GET',
    params
  })
}

//跟新数据
export const updateUser = (data)=>{
  console.log(data,123);
  return http({
    url:'users/update-user',
    method:'PUT',
    data:data
  })
}

//删除用户

export const deleteUser = (data) =>{
  return http({
    url:'users/del-user',
    method:'DELETE',
    data
  })
}

//图片上传
export const uploadImg = (data)=>{
  return http({
    url:'upload',
    method:'POST',
    data:data,
    headers:{
      'Content-Type': 'multipart/form-data'
    }
  })
}

//新建首页配置

export const updateHomeSetting = (data)=>{
  return http({
    url:'home/update',
    method:'PUT',
    data
  })
}
//获取首页配置


export const getHomeDetail = ()=>{
  return http({
    url:'home/detail',
    method:'GET'
  })
}