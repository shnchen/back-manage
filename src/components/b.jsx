import {useState,useEffect, useContext } from "react"
import {Context} from '../pages/list'
const B = ()=>{
  const [v,setV] = useState(1)
  const value = useContext(Context)
  useEffect(()=>{
    
   let c = JSON.stringify()
  
  console.log(c);
  },[])
  return <div dangerouslySetInnerHTML={{__html:value}}></div>
}

export default B