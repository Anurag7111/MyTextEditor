import React,{useState} from 'react'

export default function TextBox(props) {

  const [text, setText] = useState('');

  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  
  const handleClearClick = () => {
    setText('')
  }
  const handleCopyClick = () => {
    var text = document.getElementById("textBox");
    text.select();
    // text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
  }
  const handleUpperClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handleLowerClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  return (
    <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
          <div className="row my-2">
            <h2>{props.heading}</h2>
            <textarea className="form-control my-3" id="textBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
          </div>
          <div className="row my-2">
            <button className='col-2 btn btn-primary m-1' onClick={handleClearClick}>Clear-Text</button>
            <button className='col-2 btn btn-primary m-1' onClick={handleCopyClick}>Copy-Text</button>
            <button className='col-2 btn btn-primary m-1' onClick={handleUpperClick}>Upper-Case</button>
            <button className='col-2 btn btn-primary m-1' onClick={handleLowerClick}>Lower-Case</button>
            <button className='col-2 btn btn-primary m-1' onClick={handleExtraSpaces}>Remove Extra Space</button>
            {/* <button className='btn btn-primary mx-1' onClick={handleOccurencesClick}>Occurences of word</button> */}            
          </div>
          <div className="row my-2">
            <p>No. of Characters are : <b>{text.length}</b> and No. of Words are : <b>{(text.split(" ").length)}</b> </p>
            {/* <p>Occurences of seleted word is : </p> */}
          </div>
        </div>
    </>
  )
}
