const webSoketServer = require('websocket').server;
const http = require('http');
const server = http.createServer()

const wsServer  = new webSoketServer({
  httpServer:server
})

let chartUser = [];
wsServer.on('request',(request)=>{
  const connection = request.accept(null,request.origin)
  chartUser.push(connection)
  // connection.sendUTF();
  connection.on('message',(message)=>{
    console.log(message);
   
    if(message.type==='utf8'){
      chartUser.forEach(item=>{
        item.sendUTF(message.utf8Data)
      })
    }else if(message.type ==='binary'){ 
      chartUser.forEach(item=>{
        item.sendBytes(message.binaryData)
      })
    }
  });
  connection.on('close',(reasonCode,description)=>{
   
    // chartUser.forEach(item=>{
    //   item.sendUTF(JSON.stringify({message:'离开群聊',nick:9}));
    // })
  })
})



server.listen(3008,()=>{
  console.log('服务开启，请打开ws://localhost:3008');
})
