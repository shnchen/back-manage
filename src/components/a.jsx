import {useContext} from 'react';
import {Context} from '../pages/list'
import B from './b'


const A = ()=>{
  const value = useContext(Context)
  return (<div>
    <p dangerouslySetInnerHTML={{__html:value}} />
    <B />
  </div>)
}

export default A