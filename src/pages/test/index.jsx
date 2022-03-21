// import React, { useState } from 'react';
// import { Upload,InputNumber,Button } from 'antd';
// // import ImgCrop from 'antd-img-crop';

// const Demo = () => {
//   const [fileList, setFileList] = useState([
//     {
//       uid: '-1',
//       name: 'image.png',
//       status: 'done',
//       url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     },
//   ]);
// const [year,setYear] = useState(undefined);
// const [text] = useState('')
//   const onChange = ({ fileList: newFileList }) => {
//     setFileList(newFileList);
//   };


//   const onPreview = async file => {
//     let src = file.url;
//     if (!src) {
//       src = await new Promise(resolve => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file.originFileObj);
//         reader.onload = () => resolve(reader.result);
//       });
//     }
//     const image = new Image();
//     image.src = src;
//     const imgWindow = window.open(src);
//     imgWindow.document.write(image.outerHTML);
//   };

//   return (
//     <>
//       <Upload
//         action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
//         listType="picture-card"
//         fileList={fileList}
//         onChange={onChange}
//         onPreview={onPreview}
//       >
//         {fileList.length < 5 && '+ Upload'}
//       </Upload>
//       <InputNumber max={9999} value={year} onChange={(e)=>{
//         typeof e ==='number'&&setYear(e)
//       }} />
//       {/* 庚午 乙酉 庚寅 壬酉*/}
//       <Button onClick={()=>{
//         // const tiangan=['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
//         // const dizhi=['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
//         // const t = (year-4)%10
//         // const d = (year-4)%12
//         // setText(`${tiangan[t]}${dizhi[d]}`)
//         //月：月支正月是由寅开始，月支固定不变，然后依次与天干组合；由第一年的正月丙寅月、二月是丁卯月、三月是戊辰。从甲子月到癸亥月，共六十甲子，刚好五年。
//         //甲己之年丙作首，乙庚之年戊为头，丙辛之岁寻庚土，丁壬壬寅顺水流，若问戊癸何处起，甲寅之上好追求
//         // const jieqi = ['立春','雨水','惊蛰','春分','清明','谷雨','立夏','小满','芒种','夏至','小暑', '大暑', '立秋','处暑','白露','秋分','寒露','霜降','立冬','小雪','大雪','冬至','小寒','大寒']
//         // const yuezhi =['寅','卯','辰','巳','午','未','申','酉','戌','亥','子','丑']
//         // const yuegan = ['戊','己','庚','辛','壬','癸','甲','乙','丙','丁'];
//         // const ri =(year)=>{
//         //   let a =(year-1900)*5+(year-1900+3)/4+9+(31+28+31+30+31+30+31+31+22);
//         //   return Math.floor(a)%60 
//         // }
//         // let c = ri(1990)
//         // console.log(c%10,c%12);
//         // 时支公式：时支=小时÷2-1（小时为偶数），时支=（小时+1）÷2-1（小时为奇数）

//         // 时干公式：时干=日干×2+时支（晨子=-1，夜子=11），（如果和大于10，则取个位数；如果和为20，则取10）
       
//       }}>换算</Button>
//       <span>{text}</span>
//       </>
//   );
// };
//  export default Demo
// import React, { useState } from 'react';
// import { Tree } from 'antd';
// const initTreeData = [
//   {
//     title: 'Expand to load',
//     key: '0',
//   },
//   {
//     title: 'Expand to load',
//     key: '1',
//   },
//   {
//     title: 'Tree Node',
//     key: '2',
//     isLeaf: true,
//   },
// ]; // It's just a simple demo. You can use tree map to optimize update perf.

// function updateTreeData(list, key, children) {
//   return list.map((node) => {
//     if (node.key === key && children.length) {
//       return { ...node, children,isLeaf:true };
//     }
//     if (node.key === key && !children.length) {
//       return { ...node};
//     }

//     if (node.children) {
//       return { ...node, children: updateTreeData(node.children, key, children) };
//     }
//     return node;
//   });
// }

// const Demo = () => {
//   const [treeData, setTreeData] = useState(initTreeData);

//   const onLoadData = ({ key, children }) =>
//     new Promise((resolve,reject) => {
//       if (children) {
//         resolve();
//         return;
//       }

//       setTimeout(() => {
//         setTreeData((origin) =>
//           updateTreeData(origin, key, [
//             // {
//             //   title: 'Child Node',
//             //   key: `${key}-0`
//             // },
//             // {
//             //   title: 'Child Node',
//             //   key: `${key}-1`
//             // },
//           ]),
//         );
//         reject();
//       }, 1000);
//     });

//   return <Tree loadData={onLoadData} treeData={treeData} />;
// };

// export default Demo;

// a plugin!

// import React from 'react'
// import FullCalendar from '@fullcalendar/react' // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
// import interactionPlugin from "@fullcalendar/interaction"
// import listPlugin from '@fullcalendar/list';
// import timeGridPlugin from '@fullcalendar/timegrid';

// export default function () {
//  return  <FullCalendar
//   plugins={[ dayGridPlugin, interactionPlugin,listPlugin,timeGridPlugin ]}
//   headerToolbar= {{
//     left: 'prev,next today',
//     center: 'title',
//     right: 'dayGridMonth,timeGridWeek,timeGridDay'
//   }
//   }
//   timeFormat='H(:mm)'
//   editable={true}
//   initialView="timeGridWeek"
//   dateClick={()=>{console.log(123);}}
//   droppable={true}
//   formatDate={{ monthNames : ['一月','二月'],dayNames: ['周日','周一']}}
//   events={[
//     {title: '随便',start: '2022-02-28T14:30:00',extendedProps: {status: 'done'}},
//     {title: '一下', start: '2022-02-125T07:00:00',backgroundColor: 'green', borderColor: 'green'},
//     { title:'是谁', start: '2022-02-28', end:"2021-12-17", backgroundColor:"green", id:"1", textColor:'white'},
//     { title:'你不是对健康的饭撒', start: '2022-02-07', end:"2021-12-09", backgroundColor:"Orange", id:"1", textColor:'white'},
//     { title:'fudged', start: '2022-02-16', end:"2021-12-20", backgroundColor:"red", id:"4", textColor:'white'},
//   ]}
// />
// }
     

// import React, { useContext, useState, useEffect, useRef } from 'react';
// import { Table, Input, Button, Popconfirm, Form,Select } from 'antd';
// const EditableContext = React.createContext(null);

// const EditableRow = ({ index, ...props }) => {
//   const [form] = Form.useForm();
//   return (
//     <Form form={form} component={false}>
//       <EditableContext.Provider value={form}>
//         <tr {...props} />
//       </EditableContext.Provider>
//     </Form>
//   );
// };

// const EditableCell = ({
//   title,
//   editable,
//   children,
//   dataIndex,
//   record,
//   handleSave,
//   ...restProps
// }) => {
//   const [editing, setEditing] = useState(false);
//   const inputRef = useRef(null);
//   const SelectRef = useRef(null);
//   const form = useContext(EditableContext);
//   useEffect(() => {
//     if (editing) {
//       // inputRef.current.focus();
//     }
//   }, [editing]);

//   const toggleEdit = () => {
//     setEditing(!editing);
//     form.setFieldsValue({
//       [dataIndex]: record[dataIndex],
//     });
//   };

//   const save = async () => {
//     try {
//       const values = await form.validateFields();
//       toggleEdit();
//       handleSave({ ...record, ...values });
//     } catch (errInfo) {
//       console.log('Save failed:', errInfo);
//     }
//   };

//   let childNode = children;
// console.log(dataIndex);
//   if (editable) {
//     childNode = editing ? (
//       <>
//      { dataIndex ==='name'&&<Form.Item
//         style={{
//           margin: 0,
//         }}
//         name={dataIndex}
//         rules={[
//           {
//             required: true,
//             message: `${title} is required.`,
//           },
//         ]}
//       >
//         <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        
//       </Form.Item>}
//       {dataIndex ==='age' && <Form.Item
//         style={{
//           margin: 0,
//         }}
//         name={dataIndex}
//         rules={[
//           {
//             required: true,
//             message: `${title} is required.`,
//           },
//         ]}
//       >
//         <Select ref={SelectRef}>
//           <Select.Option>123</Select.Option>
//           </Select>
//       </Form.Item>}
//       </>
//     ) : (
//       <div
//         className="editable-cell-value-wrap"
//         style={{
//           paddingRight: 24,
//         }}
//         onClick={toggleEdit}
//       >
//         {children}
//       </div>
//     );
//   }

//   return <td {...restProps}>{childNode}</td>;
// };

// class EditableTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.columns = [
//       {
//         title: 'name',
//         dataIndex: 'name',
//         width: '30%',
//         editable: true,
//       },
//       {
//         title: 'age',
//         dataIndex: 'age',
//         editable: true,
//       },
//       {
//         title: 'address',
//         dataIndex: 'address',
//       },
//       {
//         title: 'operation',
//         dataIndex: 'operation',
//         render: (_, record) =>
//           this.state.dataSource.length >= 1 ? (
//             <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
//               <a>Delete</a>
//             </Popconfirm>
//           ) : null,
//       },
//     ];
//     this.state = {
//       dataSource: [
//         {
//           key: '0',
//           name: 'Edward King 0',
//           age: '32',
//           address: 'London, Park Lane no. 0',
//         },
//         {
//           key: '1',
//           name: 'Edward King 1',
//           age: '32',
//           address: 'London, Park Lane no. 1',
//         },
//       ],
//       count: 2,
//     };
//   }

//   handleDelete = (key) => {
//     const dataSource = [...this.state.dataSource];
//     this.setState({
//       dataSource: dataSource.filter((item) => item.key !== key),
//     });
//   };
//   handleAdd = () => {
//     const { count, dataSource } = this.state;
//     const newData = {
//       key: count,
//       name: `Edward King ${count}`,
//       age: '32',
//       address: `London, Park Lane no. ${count}`,
//     };
//     this.setState({
//       dataSource: [...dataSource, newData],
//       count: count + 1,
//     });
//   };
//   handleSave = (row) => {
//     const newData = [...this.state.dataSource];
//     const index = newData.findIndex((item) => row.key === item.key);
//     const item = newData[index];
//     newData.splice(index, 1, { ...item, ...row });
//     this.setState({
//       dataSource: newData,
//     });
//   };

//   render() {
//     const { dataSource } = this.state;
//     const components = {
//       body: {
//         row: EditableRow,
//         cell: EditableCell,
//       },
//     };
//     const columns = this.columns.map((col) => {
//       if (!col.editable) {
//         return col;
//       }

//       return {
//         ...col,
//         onCell: (record) => ({
//           record,
//           editable: col.editable,
//           dataIndex: col.dataIndex,
//           title: col.title,
//           handleSave: this.handleSave,
//         }),
//       };
//     });
//     return (
//       <div>
//         <Button
//           onClick={this.handleAdd}
//           type="primary"
//           style={{
//             marginBottom: 16,
//           }}
//         >
//           Add a row
//         </Button>
//         <Table
//           components={components}
//           rowClassName={() => 'editable-row'}
//           bordered
//           dataSource={dataSource}
//           columns={columns}
//         />
//       </div>
//     );
//   }
// }

// export default EditableTable
// import React,{useState} from 'react'
// import { Tree, Input } from 'antd';

// const { Search } = Input;

// const x = 3;
// const y = 2;
// const z = 1;
// const gData = [];

// const generateData = (_level, _preKey, _tns) => {
//   const preKey = _preKey || '0';
//   const tns = _tns || gData;

//   const children = [];
//   for (let i = 0; i < x; i++) {
//     const key = `${preKey}-${i}`;
//     tns.push({ title: key, key });
//     if (i < y) {
//       children.push(key);
//     }
//   }
//   if (_level < 0) {
//     return tns;
//   }
//   const level = _level - 1;
//   children.forEach((key, index) => {
//     tns[index].children = [];
//     return generateData(level, key, tns[index].children);
//   });
// };
// generateData(z);

// const dataList = [];
// const generateList = data => {
//   for (let i = 0; i < data.length; i++) {
//     const node = data[i];
//     const { key } = node;
//     dataList.push({ key, title: key });
//     if (node.children) {
//       generateList(node.children);
//     }
//   }
// };
// generateList(gData);

// const getParentKey = (key, tree) => {
//   let parentKey;
//   for (let i = 0; i < tree.length; i++) {
//     const node = tree[i];
//     if (node.children) {
//       if (node.children.some(item => item.key === key)) {
//         parentKey = node.key;
//       } else if (getParentKey(key, node.children)) {
//         parentKey = getParentKey(key, node.children);
//       }
//     }
//   }
//   return parentKey;
// };

// const  SearchTree =  ()=> {
//   const [expandedKeys,setExpandedKeys] = useState([]);
//   const [searchValue,setSearchValue] = useState('');
//   const [autoExpandParent,setAutoExpandParent] = useState(true);

  

//   const onExpand = expandedKeys => {
//     setExpandedKeys(expandedKeys);
//     setAutoExpandParent(false);
//   };

//   const onChange = e => {
//     const { value } = e.target;
//     const expandedKeys = dataList
//       .map(item => {
//         if (item.title.indexOf(value) > -1) {
//           return getParentKey(item.key, gData);
//         }
//         return null;
//       })
//       .filter((item, i, self) => item && self.indexOf(item) === i);
//       setExpandedKeys(expandedKeys);
//       setSearchValue(value);
//       setAutoExpandParent(true);
//   };
//   const loop = data =>
//   data.map(item => {
//     const index = item.title.indexOf(searchValue);
//     const beforeStr = item.title.substr(0, index);
//     const afterStr = item.title.substr(index + searchValue.length);
//     const title =
//       index > -1 ? (
//         <span>
//           {beforeStr}
//           <span className="site-tree-search-value">{searchValue}</span>
//           {afterStr}
//         </span>
//       ) : (
//         <span>{item.title}</span>
//       );
//     if (item.children) {
//       return { title, key: item.key, children: loop(item.children) };
//     }

//     return {
//       title,
//       key: item.key,
//     };
//   });
//     return (
//       <div>
//         <Search style={{ marginBottom: 8 }} placeholder="Search" onChange={onChange} />
//         <Tree
//           onExpand={onExpand}
//           expandedKeys={expandedKeys}
//           autoExpandParent={autoExpandParent}
//           treeData={loop(gData)}
//         />
//       </div>
//     );
//   }

// export default SearchTree

import {useState,useEffect} from 'react'
import { EditableProTable } from '@ant-design/pro-table';
import ProCard from '@ant-design/pro-card';
import { Button,Cascader } from 'antd';
import { ProFormField } from '@ant-design/pro-form';
const defaultData = new Array(20).fill(1).map((_, index) => {
    return {
        id: (Date.now() + index).toString(),
        title: `活动名称${index}`,
        decs: '122',
        state: 'open',
        created_at: '2020-05-26T09:42:56Z',
    };
});
const toArr = (()=>{
  let arr = [];
  for(let i=0;i<=100000;i++){
    arr.push(i)
  }
  return arr 
})()
const Demo = () => {
    const [editableKeys, setEditableRowKeys] = useState(() => defaultData.map((item) => item.id));
    const [dataSource, setDataSource] = useState(() => defaultData);
    const columns = [
        {
            title: '活动名称',
            dataIndex: 'title',
            width: '30%',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        whitespace: true,
                        message: '此项是必填项',
                    },
                    {
                        message: '必须包含数字',
                        pattern: /[0-9]/,
                    },
                    {
                        max: 16,
                        whitespace: true,
                        message: '最长为 16 位',
                    },
                    {
                        min: 6,
                        whitespace: true,
                        message: '最小为 6 位',
                    },
                ],
            },
        },
        {
            title: '状态',
            key: 'state',
            dataIndex: 'state',
            valueType: 'select',
            valueEnum: {
                all: { text: '全部', status: 'Default' },
                open: {
                    text: '未解决',
                    status: 'Error',
                },
                closed: {
                    text: '已解决',
                    status: 'Success',
                },
            },
        },
        {
            title: '描述',
            dataIndex: 'decs',
            valueType:'cascader',
            fieldProps: { options:  [
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                      {
                        value: 'xihu',
                        label: 'West Lake',
                      },
                    ],
                  },
                ],
              },
              {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                  {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                      {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                      },
                    ],
                  },
                ],
              },
            ] },
        },
        {
            title: '操作',
            valueType: 'option',
            width: 250,
            render: () => {
                return null;
            },
        },
    ];
    return (<>
      <EditableProTable
      rowKey='id'
        headerTitle="可编辑表格"
          columns={columns}
            value={dataSource}
             onChange={setDataSource}
              recordCreatorProps={{
            newRecordType: 'dataSource',
            record: () => ({
                id: Date.now(),
            }),
        }}
         toolBarRender={() => {
            return [
                <Button type="primary" key="save" onClick={() => {
                        // dataSource 就是当前数据，可以调用 api 将其保存
                        console.log(dataSource);
                    }}>
              保存数据
            </Button>,
            ];
        }} editable={{
            type: 'multiple',
            editableKeys,
            actionRender: (row, config, defaultDoms) => {
                return [defaultDoms.delete];
            },
            onValuesChange: (record, recordList) => {
                setDataSource(recordList);
            },
            onChange: setEditableRowKeys,
        }}/>
    </>);
};
export default  Demo
