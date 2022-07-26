import {useState, useEffect } from 'react';
import { Form ,Input,Button} from 'antd';
import {randomString} from '../../utils'
import './index.scss'

const Chart =()=>{
  const [ws] = useState(new WebSocket('ws://localhost:3008'));
  const [messageList,setMessageList]= useState([]);
  const [domList,setDomList] = useState([]);
  const [nick] = useState(randomString(4))
  const [form] = Form.useForm()
  const dealChartRecord = (list)=>{
    console.log(list,nick);
    let domList =[];
    list.map((item,index)=>{
      domList.push(<div className={
        (item.type==='in')?'in':
        item.type==='out'?'out':
        item.nick===nick?'mine':
        'others'
        } key={`chart-${index}`}>
        <div className='nick-name'><span className='nick'>{(item.nick===nick&&item.type==='in')?'您':item.nick}</span></div>
        <span>{item.message}</span>
        </div>)
    })
    setDomList(domList)
  }
  const init = ()=>{
    ws.onopen = (res)=>{
      console.log(res,1);
      ws.send(JSON.stringify({message:'加入群聊',nick,type:'in'}))
    }
    ws.onmessage = (res)=>{
      console.log(res,2);
      let temList = messageList;
      temList.push(JSON.parse(res.data));
      setMessageList(temList);
      dealChartRecord(temList)
    }
    ws.onclose =(res)=>{
      console.log(res,3);
      ws.close()
      ws.send(JSON.stringify({message:'离开群聊',nick,type:'out'}))
    }
  }
  useEffect(()=>{
     init();
  },[])
  return(<div className="chart-wrapper">
        <div className='chart-content'>
          {domList}
        </div>
        <Form
          name="basic"
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={(values)=>{
            if(values.content && values.content.trim()!==''){
              ws.send(JSON.stringify({message:values.content,nick}));
              form.setFieldsValue({content:''})
            }
            return
          }}
          autoComplete="off"
          layout='inline'
          style={{position:'fixed',bottom:0,width:'100%'}}
        >
          <Form.Item
            label=""
            name="content"
            style={{width:'71%'}}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
      </Form>
  </div>)
}

export default Chart;


// 草木会发芽孩子会长大
// 岁月的列车不为谁停下
// 命运的站台悲欢离合都是刹那
// 人像雪花一样飞很高又融化
// 世间的苦啊爱要离散雨要下
// 世间的甜啊走多远都记得回家
// 平凡的我们撑起屋檐之下一方烟火
// 不管人世间多少沧桑变化
// 祝你踏过千重浪
// 能留在爱人的身旁
// 在妈妈老去的时光
// 听她把儿时慢慢讲
// 也祝你不忘少年样
// 也无惧那白发苍苍
// 若年华终将被遗忘记得你我
// 火一样爱着
// 人世间值得

// Wu~~~~~~

// 有多少苦乐就有多少种活法
// 有多少变化太阳都会升起落下
// 平凡的我们一身雨雪风霜不问去哪
// 随四季枯荣依然迎风歌唱
// 祝你踏过千重浪
// 能留在爱人的身旁
// 在妈妈老去的时光
// 听她把儿时慢慢讲
// 也祝你不忘少年样
// 也无惧那白发苍苍
// 我们啊像种子一样
// 一生向阳
// 在这片土壤
// 随万物生长