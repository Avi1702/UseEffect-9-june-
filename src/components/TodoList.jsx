import React from "react";

function TodoList({data, handleDelete, handleStatus}){

   
    return(
    
    <>
  { 
     data.map((item)=>{
  
     return (
      <>
    <div key={item.id}  style={{display:"flex",justifyContent:"space-around",alignItems:"center", width:"50%",margin:"auto"}}>
    <div>{item.status?<h2 style={{color:"green"}}>{item.title}</h2>:<h2 style={{color:"red"}}>{item.title}</h2>}</div>
    <div>{item.status?<h3 style={{color:"green"}}>-</h3>:<h3 style={{color:"red"}}>-</h3>}</div>
    <div>
        {item.status?  <h3 style={{color:"green"}}>Completed</h3>:  <h3 style={{color:"red"}}>Not Completed</h3>}  
    </div>
    {item.status?<button onClick={()=>handleStatus(item.id)}>Done</button>:<button onClick={()=>handleStatus(item.id)}>Mark As Done</button>}
    <button onClick={()=>handleDelete(item.id)}>Delete</button>
   </div>
  
    </>
    )
     }) }

    </>
    );
 }

  export default TodoList
  
  
  