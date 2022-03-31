import React,{useState} from "react";
import "./App.css";
import ResidentsList from "./Components/ResidentsList";
import Search from "./Components/Search";
import Error from "./Components/Error";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [list,setList]=useState([])
  const [message,setMessage]=useState("")
  const validityStudent=(name)=>{
    setList([...list,name])
    // console.log(name)
    // console.log(list)
  }
  const error=(errorMessage)=>{
    setMessage(errorMessage)
setTimeout(() => {
  setMessage("")}, 5000);
}
// console.log(message)
  return (
    <div className="App mt-5">
      <h1>Student Validity Form</h1>
      <div className="  w-50 mx-auto ">
        <Search validityStudent={validityStudent} error={error} /> 
         <Error message={message}/>
        <ResidentsList list={list}/>
      </div>
    </div>
  );
}

export default App;
