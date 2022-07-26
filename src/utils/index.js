export const jugeType = (value)=>{
  return Object.prototype.toString.call(value).slice(8,-1).toLowerCase();
}

export const unique = (array)=>{
  if(!Array.isArray(array)){
    return;
  }
  array.map((item,index) => {array[index]= JSON.stringify(array[index])})
  // let result = [];
  // for(let i = 0;i<array.length;i++){
  //   if(!result.includes(array[i])){
  //     result.push(array[i])
  //   }
  // }

  let result = [...new Set(array)];
  
  result.map((item,index) => {result[index]=JSON.parse(result[index])});
  return result
}

export const flat = (array)=>{
  // if(!Array.isArray(array)){
  //   return;
  // }
  // return array.flat(Infinity)
  let result = []
  for(let i=0;i<array.length;i++){
    if(Array.isArray(array[i])){
      result = [...result,...flat(array[i])]
    }else{
      result.push(array[i])
    }
  }
  return result;
}

export const debounce = (fn,time)=>{
  let timer = null;
  return function() {
    clearTimeout(timer);
    timer=setTimeout(() => {
      fn.apply(this,arguments)
    }, time);
  }
}

export const throttle = (fn,time)=>{
  let flag = true;
  return function() {
    if(!flag){
      return;
    }
    flag=false;
    setTimeout(() => {
      fn.apply(this,arguments);
      flag = true;
    }, time);
  }
}

export const randomString = (len=32)=> {
    const $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    const maxPos = $chars.length;
    let result= '';
    for (let i = 0; i < len; i++) {
      result+= $chars.charAt(Math.floor(Math.random() * maxPos));
    }
  return result;
}