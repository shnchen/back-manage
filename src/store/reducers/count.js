import {ADD,MINUS} from '../types'
export const count = (state={count:0},action)=>{
  switch (action.type) {
    case ADD:
        return {...state,count:state.count+action.n}
    case MINUS:
      return {...state,count:state.count-action.n}
    default:
      return state
  }
}
