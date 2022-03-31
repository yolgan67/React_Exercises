import React,{useState} from 'react';
import {STUDENTS} from '../studentList'


// DO NOT CHANGE THIS FUNCTION, IT RETURNS TRUE OR FALSE ACCORDING TO GIVEN DATES
// joiningDate COMES FROM input-date, validityDate COMES FROM studentList,

function checkValidity(joiningDate, validityDate) {

  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const [year, month, day] = joiningDate.split('-');
  const [yyyy, mm, dd] = validityDate.split('-');
  const maxValid = new Date(yyyy, mm - 1, dd);
  const selected = new Date(year, month - 1, day);
   return (maxValid >= selected) && (maxValid >= today);
}

function Search({validityStudent,error}) {
const [user,setUser]=useState("")
const [date,setDate]=useState("")


const searchedName= STUDENTS.find(student=>{
  return student.name.toLowerCase() === user.toLowerCase()
  // return student.name.toLocaleLowerCase().indexOf(user.toLowerCase()) !== -1
})
// console.log(searchedName)
// console.log(user)
// console.log(date)

const handleClick=(e)=>{
 e.preventDefault()
  if(searchedName !== undefined  && date){
     if( checkValidity(date,searchedName.validityDate)){
  
    validityStudent(searchedName.name)
      } else if(!checkValidity(date,searchedName.validityDate)){
   
    error(`Sorry,${searchedName.name}'s validity is expired`)
  }
}else if(searchedName === undefined && user && date) {
  error(`Sorry,${user.charAt(0).toUpperCase()+user.slice(1).toLowerCase() } is not a verified student`)
  }else if(!date || !user){
   error(`Please fill in this form `)
  }
    setUser("")
    setDate("")
  
}
  return (
    <div> 
      <form>
  <div class="my-4 text-start">
    <label htmlFor="exampleInputName" className="form-label">Student Name</label>
    <input type="type" className="form-control" id="exampleInputName" onChange={(e)=> setUser(e.target.value)}  value={user}/>
  </div>
  <div class="mb-3 text-start">
    <label htmlFor="exampleInputDate" className="form-label">Joining Date</label>
    <input type="date" className="form-control" id="exampleInputDate" onChange={(e)=>setDate(e.target.value)} value={date}/>
  </div>
 
  <button type="submit" className="btn btn-primary " onClick={handleClick}>Submit</button>
</form>
    </div>
   
  )
}

export default Search;
