import React,{useState} from 'react';

import { motion } from "framer-motion"

  

 const MyComponent = () => {
   const [count,setCount] = useState(0)
  return(
    <div className="container">

<motion.button
style={{
  cursor:'pointer'
}}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    测试
    </motion.button>
    </div>
  ) 
 }
  





export default MyComponent



  

  