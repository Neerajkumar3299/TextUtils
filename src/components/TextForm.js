import React ,{useState}from "react";
import "../App.css"
export default function TextForm(props){
    const [text,setText]=useState('')
    function handleUpClick(){
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted in uppercase","success")

    }
    function handleLoClick(){
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted in lowercase","success")

    }
    function handleOnChange(event){
        setText(event.target.value)

    }
    function handleClearClick(){
        setText('')
        props.showAlert("text cleared..","success")
    }
    function handleCopyClick(){
        var myText=document.getElementById("text").value
        

        //to copy the text
        navigator.clipboard.writeText(myText)
        props.showAlert("Copied in clipboard","success")
    }
    return(
        
        <>
        
        <div className="myStyle my-4" style={{color:props.mode==='light'?'black':'white'}}>
            <h1 >{props.label}</h1>
            <textarea style={{backgroundColor:props.mode==='light'?'white':'#5077b2',color:props.mode==='light'?'black':'white'}} className="form-control" value={text} onChange={handleOnChange} id="text" rows="8"></textarea>
            <button className="btn btn-primary my-3 mx-1"  onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-1"  onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-3 mx-1"  onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary my-3 mx-1 "  onClick={handleCopyClick}>Copy Text</button>

            <h2 >Text Summary</h2>
            <p>{text.split(" ").filter((word)=>{return word.length>0}).length} words {text.length} Length</p>
            <p>{0.008 * text.split(" ").filter((word)=>{return word.length>0}).length} Minut to read</p>
            <h2>Text Preview</h2>
            <p>{text.length>0?text:"Please something in teatarea given above to preview here.."}</p>
        </div>
        </>
    )
}