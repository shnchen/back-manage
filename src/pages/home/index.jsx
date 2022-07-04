import React,{useState} from 'react';
import { Table, Radio, Divider } from 'antd';
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
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    // Column configuration not to be checked
    name: record.name,
  }),
};

const Home = () => {
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
  }
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

export default Home;


