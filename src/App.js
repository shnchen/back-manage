import React,{useState} from 'react';
import {Routes,Route, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import './App.css';
import routers from './router';

const  App = () => {
  let navigate = useNavigate();
    const [current,setCurrent] = useState('/home'),
    handleClick = e => {
      navigate(e.key);
      setCurrent(e.key)
    };
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
