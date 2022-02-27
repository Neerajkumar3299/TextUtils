// import React,{useState} from "react";
import React from 'react';
import '../App.css';
export default function About(props){


  let myStyle={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'rgba(97,139,202,1)':'white'
  }
  console.log(props.mode)
  // const [buttonText,setButtonText]=useState("Enable dark Neeraj mode")
  // const [myStyle,setMyStyle]=useState({
  //   color:'black',
  //   backgroundColor:"white",
  //   border:"1px solid white"
  // })
  // function toggleStyle(){
  //   if(myStyle.color==='black'){
  //     setMyStyle({
  //       color:'white',
  //       backgroundColor:"black",
  //       border:"1px solid white"
  //   });
  //   setButtonText("Desable dark mode")
  //   }
  //   else{
  //     setMyStyle({
  //       color:'black',
  //       backgroundColor:"white",
  //       border:"1px solid white"
  //   });
  //   setButtonText("Enable dark mode")
  //   }
  // }
  // const [myStyletColor,setMyStyleColor]=useState(myStyle)
    return(
        <>
      <div className="container" style={myStyle}>
      <div className="accordion"  id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Analyze your text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      TextUtils gives you a way to analyze your text quickly whether it is text or sentence
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       TextUtils is free to use in word counting, character counting, copying in clipboard etc..
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       TextUtils works in any browser like chrome, microsoft edge, firefox etc..
      </div>
    </div>
  </div>
</div>

{/* <button class="btn btn-primary my-2" onClick={toggleStyle}>{buttonText}</button> */}
      </div>
        </>
    )
}