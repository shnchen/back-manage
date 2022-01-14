import React, { useState } from 'react';
import { Upload,InputNumber,Button } from 'antd';
// import ImgCrop from 'antd-img-crop';

const Demo = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
const [year,setYear] = useState(undefined);
const [text,setText] = useState('')
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };


  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
      <InputNumber max={9999} value={year} onChange={(e)=>{
        typeof e ==='number'&&setYear(e)
      }} />
      {/* 庚午 乙酉 庚寅 壬酉*/}
      <Button onClick={()=>{
        // const tiangan=['甲','乙','丙','丁','戊','己','庚','辛','壬','癸'];
        // const dizhi=['子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'];
        // const t = (year-4)%10
        // const d = (year-4)%12
        // setText(`${tiangan[t]}${dizhi[d]}`)
        //月：月支正月是由寅开始，月支固定不变，然后依次与天干组合；由第一年的正月丙寅月、二月是丁卯月、三月是戊辰。从甲子月到癸亥月，共六十甲子，刚好五年。
        //甲己之年丙作首，乙庚之年戊为头，丙辛之岁寻庚土，丁壬壬寅顺水流，若问戊癸何处起，甲寅之上好追求
        // const jieqi = ['立春','雨水','惊蛰','春分','清明','谷雨','立夏','小满','芒种','夏至','小暑', '大暑', '立秋','处暑','白露','秋分','寒露','霜降','立冬','小雪','大雪','冬至','小寒','大寒']
        // const yuezhi =['寅','卯','辰','巳','午','未','申','酉','戌','亥','子','丑']
        // const yuegan = ['戊','己','庚','辛','壬','癸','甲','乙','丙','丁'];
        // const ri =(year)=>{
        //   let a =(year-1900)*5+(year-1900+3)/4+9+(31+28+31+30+31+30+31+31+22);
        //   return Math.floor(a)%60 
        // }
        // let c = ri(1990)
        // console.log(c%10,c%12);
        // 时支公式：时支=小时÷2-1（小时为偶数），时支=（小时+1）÷2-1（小时为奇数）

        // 时干公式：时干=日干×2+时支（晨子=-1，夜子=11），（如果和大于10，则取个位数；如果和为20，则取10）
       
      }}>换算</Button>
      <span>{text}</span>
      </>
  );
};
 export default Demo

