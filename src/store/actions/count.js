import {ADD} from '../types'
export const add = (n)=>{
  return {
    type:ADD,
    n
  }
}