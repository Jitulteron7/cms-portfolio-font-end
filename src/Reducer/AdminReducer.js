export const initialState=localStorage.getItem("admin")||localStorage.getItem("user")||null;

export  const AdminReducer=(state,action)=>{

    if(action.type=="owner"){
        
        return action.payload;
    }
    // else if(action.type!="Owner"){
    //     return action.payload;
    // }
    else if(action.type=="expired"){
        console.log("expired bro");
         return null;
    }
    
    return state;
}

