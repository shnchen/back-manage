import React,{useEffect, useState} from 'react';
import {Routes,Route, useNavigate, useLocation } from 'react-router-dom';
import { Menu,Row,Col } from 'antd';
import './App.scss';
import routers from './router';

const  App = () => {
  const navigate = useNavigate(),
  location = useLocation(),
  [current,setCurrent] = useState(location.pathname),
  handleClick = e => {
    navigate(e.key);
    setCurrent(e.key);
  };
  useEffect(()=>{
    if(location.pathname === '/'){
      setCurrent('/home');
    }
  },[location.pathname])
  return (
    <div className='app'>
      <Row>
        <Col span={4}>
            <Menu className='menu'
              style={{height:'100vh'}}
              selectedKeys={[current]}
              onClick={(e)=>{handleClick(e)}} 
              theme='dark' mode='vertical'>
              {routers.map(item => {
                if(item.name){
                  return <Menu.Item key={item.path}>{item.name}</Menu.Item>
                } 
                return <></>
              })}
            </Menu>
          </Col>
        <Col span={20}  style={{height:'100vh',overflowY:'auto'}}>
          <Routes>
          {routers.map(item=>{return<Route key={item.path} path={item.path} exact element={<item.element />} />})}
          </Routes>
        </Col>
      </Row>
      {/* <Menu className='menu'
       selectedKeys={[current]}
        onClick={(e)=>{handleClick(e)}} 
        theme='dark' mode='horizontal'>
      {routers.map(item => {
        if(item.name){
          return <Menu.Item key={item.path}>{item.name}</Menu.Item>
        } 
        return <></>
      })}
      </Menu>
     <Routes>
         {routers.map(item=>{return<Route key={item.path} path={item.path} exact element={<item.element />} />})}
    </Routes> */}
    </div>
  );
}

export default App;
