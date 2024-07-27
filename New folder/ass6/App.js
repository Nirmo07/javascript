import logo from './logo.svg';
import './App.css';


// Handle input change event
function handlerChange(event){
  console.log(event.target.value)// Log input value
}
// Change background color on mouse over
function handlerMouseOver(event){
  event.target.style.background = 'red'// Set background to red
}
// Reset background color on mouse out
function handlerMouseOut(event){
  event.target.style.background = 'black'// Set background to black
}

function App() {
  return (
    <div className="App">
      <div>
        <button onClick = {()=>{
          console.log("button was clicked")}}>Click me</button>
          {/* Log button click */}
        <input type="text" onChange={handlerChange} style={{margin:"2em",padding:"2em"}} /> 
        {/* Input field captures user input */}
      </div>
      <div style={{background:"black" ,width: "120px" ,height:"120px" ,margin : 6}} onMouseOver={handlerMouseOver} onMouseOut={handlerMouseOut} ></div>
    </div>
  )
}

export default App // Export App component
