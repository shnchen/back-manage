import axios from "axios";
// import qs from 'qs';


const http = axios.create({
  baseURL:'http://api-mysite.com:9999/',
  timeout:10000
})


http.interceptors.response.use((response)=>{
  return response.data
},(error)=>{
  return Promise.reject(error);
})


//获取用户列表
export const getUserList = ()=>{
  return http({
    url:'user-list',
    method:'GET',
  })
}

//新建用户
export const addUser = (data)=>{
  return http({
    url:'add-user',
    method:"POST",
    data
  })
}
//获取单个数据
export const getDetail = (params) =>{
  return http({
    url:'user-detail',
    method:'GET',
    params
  })
}

//跟新数据
export const updateUser = (data)=>{
  return http({
    url:'update-user',
    method:'PUT',
    data
  })
}

//删除用户

export const deleteUser = (data) =>{
  return http({
    url:'del-user',
    method:'DELETE',
    data
  })
}