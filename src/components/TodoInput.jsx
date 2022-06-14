import React from "react";

function GroceryInput({handleAdd}){
    const [value, setValue]=React.useState("")
  
    function handle(event){
      setValue(event.target.value)
      event.target.value=""
  
    //  console.log(event.target.value)
    }
    return(
    <>
    <input type={"text"} placeholder="Add an ToDo" value={value} onChange={handle}></input>
    
    <button onClick={()=>{handleAdd(value);setValue("")}}>Save</button>
    </>
    );
  }

  export default GroceryInput