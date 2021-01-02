import React,{useEffect,createContext,useReducer,useContext, useState} from "react";
import "./scss/main/_main.scss";
import Home from "./components/Home/Home";
import Blog from ".//components/Blog/Blog";
import NavBar from "./components/Partials/navBar";
import Footer from "./components/Partials/footer";
import Topic from "./components/Topic/Topic";
import Category from "./components/Category/Category";
import DashBoard from "./components/DashBoard/DashBoard"
import {Route,BrowserRouter,Switch,useHistory} from "react-router-dom";
import Owner from "./components/Admin/Owner";
import Moderator from "./components/Admin/Moderator";
import CreateContent from "./components/DashBoard/Content/ContentCreate";
import EditContent from "./components/DashBoard/Content/Edit";
import Contents  from "./components/DashBoard/Content/Contents";
import ViewPost from "./components/DashBoard/Content/ViewPost";
import {initialState,AdminReducer} from "./Reducer/AdminReducer";

export const AdminContext=createContext();

const Router=()=>{
const History=useHistory()
  const {state,dispatch}=useContext(AdminContext);
  const [check,setCheck]=useState({});
  useEffect(()=>{
    fetch("http://localhost:5000/admin/check/",{
      method:"get",
      credentials:"include",
      headers:{
        "content-type":"application/json"
      }
    }).then(res=>res.json())
    .then(data=>{
      // console.log(data);
      setCheck(data);
      if(data){
        data.password = null;
           localStorage.setItem("loggedIn",true);
           localStorage.setItem("admin",JSON.stringify(data));
           dispatch({type:data.username,payload:data});
           
        // if(data&&!data.error){
          // console.log(data);
          // setCheck(data);
          // if(data.message=="jwt expired"){
          //   localStorage.clear("loggedIn");
          //   localStorage.clear("admin");    
          //   dispatch({type:"expired",payload:null})
          //   console.log("expired bro");
          // }else{
          //   data.password = null;
          //  localStorage.setItem("loggedIn",true);
          //  localStorage.setItem("admin",JSON.stringify(data));
          //  dispatch({type:data.username,payload:data})
          // }
          
        // }
      }else{
        localStorage.clear("loggedIn");
        localStorage.clear("admin");    
        dispatch({type:"expired",payload:null})
        // History.push("/");
      }
    });
  },[check])
  return(<Switch>
            
              <Route exact path="/">
                  <NavBar/>
                    <Home/>
                  <Footer/> 
              </Route>
              <Route exact path="/blogs">
                  <NavBar/>
                    <Blog/>
                  <Footer/> 
              </Route>
              <Route exact path="/catergory">
                  <NavBar/>
                    <Category/>
                  <Footer/> 
              </Route>
              <Route exact path="/topic">
                  <NavBar/>
                    <Topic/>
                  <Footer/> 
              </Route>
              {/* dashboar options */}
              <Route exact path="/admin/dash"  >
                  <DashBoard  compo={"Welcome to Admin Dashboard"}/>
              </Route>
              <Route exact path="/admin/dash/content/view">
                  <DashBoard compo={<Contents/>} />
              </Route>
              
              <Route exact path="/admin/dash/content/edit:editID">
                  <DashBoard compo={<EditContent/>}/>
              </Route>
              <Route exact path="/admin/dash/content/create">
                  <DashBoard compo={<CreateContent/>}/>
              </Route>
              
              <Route exact path="/admin/login/owner">
                  <Owner/>
              </Route>
              <Route exact path="/admin/login/moderator">
                  <Moderator/>
              </Route>
              <Route exact path="/blog/contentno/:paramID">
                <Topic/>
              </Route>
         </Switch>
        )
}
function App() {
  const [state,dispatch]=useReducer(AdminReducer,initialState)
  return (
    <>
      <AdminContext.Provider value={{state,dispatch}}>
          <BrowserRouter>
              <Router/>
          </BrowserRouter>
      </AdminContext.Provider>      
    </>
  );
}

export default App;
