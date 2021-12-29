import React,{useEffect, useState} from 'react';
import {Routes,Route, useNavigate, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import './App.css';
import routers from './router';

const  App = () => {
  const navigate = useNavigate(),
  location = useLocation(),
  [current,setCurrent] = useState(location.pathname),
  handleClick = e => {
    navigate(e.key);
    setCurrent(e.key)
  };
  useEffect(()=>{
  },[])
  return (
    <>
      <Menu selectedKeys={[current]} onClick={(e)=>{handleClick(e)}} theme='dark' mode='horizontal'>
      {routers.map(item => {
          return <Menu.Item key={item.path}>{item.name}</Menu.Item>
      })}
      </Menu>
     <Routes>
         {routers.map(item=>{return<Route key={item.path} path={item.path} exact element={<item.element />} />})}
    </Routes>
    </>
  );
}

export default App;
