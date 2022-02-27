
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//insert css file
import './App.css';

//insert components
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import About from './components/About';
import Alert from './components/Alert';


function App() {
  const [mode,setMode]=useState("light")
  function toogleMode(){
    if(mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor='#5077b2'
      showAlert("Dark mode enabled..","success")
      // document.title="TextUtils - Dark Mode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled..","success")
      // document.title="TextUtils - Light Mode"
    }
    // setInterval(()=>{
    //   document.title="TextUtils - download textutils"
    // },2000)
    // setInterval(()=>{
    //   document.title="TextUtils - Home"
    // },1500)
  }

   const [alert,setAlert]=useState(null)
   const showAlert=(message,type)=>{
     setAlert({
       message:message,
       type:type
     })
     setTimeout(()=>{
       setAlert(null)
     },1500)
   }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About us" mode={mode} toggleColorMode={toogleMode}/>
      <Alert alert={alert}/>


     
       <Routes>
          <Route path="/" exact element={<TextForm label="Enter Text below " showAlert={showAlert} mode={mode} toggleColorMode={toogleMode}/>}/>
          <Route path="/about" exact element={<About mode={mode} toggleColorMode={toogleMode}/>} />

        </Routes>

    </Router>
      
      
     
      
      {/* <About/> */}
      
      {/* <Navbar /> */}
</>
  );
}

export default App;
