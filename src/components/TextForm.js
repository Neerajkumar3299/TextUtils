import React ,{useState}from "react";

export default function TextForm(props){
    const [text,setText]=useState('')
    function handleUpClick(){
        let newText=text.toUpperCase()
        setText(newText)

    }
    function handleLoClick(){
        let newText=text.toLowerCase()
        setText(newText)
    }
    function handleOnChange(event){
        setText(event.target.value)

    }
    function handleClearClick(){
        setText('')
    }
    return(
        
        <>
        
        <div className="my-4">
            <h1>{props.label}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="btn btn-primary my-3"  onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-3"  onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-3 "  onClick={handleClearClick}>Clear Text</button>

            <h2>Text Summay</h2>
            <p>{text.split(" ").length} words {text.length} Length</p>
            <p>{0.008 * text.split(" ").length} Minut to read</p>
            <h2>Text Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}