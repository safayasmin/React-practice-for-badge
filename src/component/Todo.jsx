import React ,{useReducer} from 'react'
  const Reducer=(state,action)=>{
    if(action.type==="inc"){
      return {count:state.count+1};
    }
    if(action.type==="dec"){
      return {count:state.count-1};
    }
    return state;
  }
 export default Reducer;

