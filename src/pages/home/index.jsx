import React,{useState,useEffect} from 'react';
import { Table, Radio, Divider } from 'antd';
import {connect} from 'react-redux'
import { jugeType,unique,flat } from '../../utils';
import {add} from '../../store/actions'
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
]; 
for(let i=0;i<100;i++){
  data.push({
    key: i,
    name: 'Disabled User'+i,
    age: 99,
    address: 'Sidney No. 1 Lake Park'+i,
  })
}
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    name: record.name,
  }),
};

const Home = (props) => {
  const copy = (v)=>{
    // 创建元素用于复制
    const aux = document.createElement('input')
    // 获取复制内容
    // 设置元素内容
    aux.setAttribute('value', v)
    // 将元素插入页面进行调用
    document.body.appendChild(aux)
    // 复制内容
    aux.select()
    // 将内容复制到剪贴板
    document.execCommand('copy')
    // 删除创建元素
    document.body.removeChild(aux)
    props.addCount(10);
  }
  useEffect(()=>{
    window.addEventListener('scroll', function() {
      const clientHeight = document.documentElement.clientHeight;
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      if (clientHeight + scrollTop >= scrollHeight) {
        // 检测到滚动至页面底部，进行后续操作
      }
    }, false);
    console.log(props);
    
  },[props.count])
  return (
    <div>
      <span onClick={()=>{copy('dh1')}}>点击</span>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
const mapStateToProps = (state,props)=>{
   return {
     count:state.count.count
   }
}
const mapDispatchToProps = (dispatch,props)=>{
  return {
    addCount:(n)=>dispatch(add(n))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);


// 那时的天空很蓝
// 没有乌云的遮掩
// 喜怒哀乐显得那么简单
// 不必刻意的敷衍
// 任凭着口无遮拦
// 不带有一句谎言
// 怀念的几个玩伴
// 天各一边
// 那时候爱过的人
// 曾经舍不得的脸
// 半年的积蓄换一条项链
// 在拥挤的城市走散
// 形影不离的朋友
// 又看似忽近忽远
// 小心翼翼的埋藏起来
// 各自的疲惫不堪
// 多希望还能再像个孩子
// 回到最初的样子
// 把那些藏在心中的心事
// 抛给蓝天哭着放肆一次
// 多希望还能再像个孩子
// 快乐的做个傻子
// 那些不愿意弃的放梦想
// 我默默坚持

// 那时候爱过的人
// 曾经舍不得的脸
// 半年的积蓄换一条项链
// 在拥挤的城市走散
// 形影不离的朋友
// 又看似忽近忽远
// 小心翼翼的埋藏起来
// 各自的疲惫不堪
// 多希望还能再像个孩子
// 回到最初的样子
// 把那些藏在心中的心事
// 抛给蓝天哭着放肆一次
// 多希望还能再像个孩子
// 快乐的做个傻子
// 那些不愿放弃的梦想
// 我默默坚持
// 多希望还能再像个孩子
// 回到最初的样子
// 把那些藏在心中的心事
// 抛给蓝天哭着放肆一次
// 多希望还能再像个孩子
// 快乐的做个傻子
// 那些不愿放弃的梦想
// 我默默坚持
// 那些不愿放弃的梦想
// 我默默坚持

