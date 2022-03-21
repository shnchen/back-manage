

import { Table } from 'antd';
import {getRowSpanCount} from './m'
// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'John Brown',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'John Brown',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
];
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (value, row, index) => {
      return getRowSpanCount(
        data,
        "typeName",
        index,
        value,
        "name"
      );
    },
    
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel'
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];



export default ()=><Table columns={columns} dataSource={data} bordered />