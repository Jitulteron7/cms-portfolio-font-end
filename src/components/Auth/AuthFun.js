
const AuthFun=(History,dispatch)=>{
    
    fetch("http://localhost:5000/admin/check/",{
                  method:"get",
                  credentials:"include",
                  headers:{
                    "content-type":"application/json"
                  }
                }).then(res=>res.json())
                .then(data=>{
                  if(data.username){
                    dispatch({type:data.username,payload:data})
                    return data.username;
                  }else{
                      History.push("/");
                  }
                })
}

export default AuthFun;