import React from "react";
// import {v4 as uuidv4} from "uuid";
import TodoInput from './TodoInput';
import TodoList from './TodoList';

function Grocery(){
    const [data,setData]=React.useState([])
    const [loading,setLoading]=React.useState(false)
    const [page,setPage]=React.useState(1)

    React.useEffect(()=>{
      setLoading(true);
      fetch(`http://localhost:3000/todos?_page=${page}&_limit=3`)
      .then((res)=>res.json())
      .then((res)=>{setData(res);
             setLoading(false);})
      .catch((error)=>console.log(error))
     
    },[page])
  
    const handleAdd=(value)=>{
      // console.log(value)
      const payload={
        title:value,
        status:false
      };
        setLoading(true)
        fetch(`http://localhost:3000/todos?_page=${page}&_limit={3}`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "content-type":"application/json"
          }
        })
        .then((res)=>res.json())
        .then((res)=>{console.log(res);setLoading(false);})
        .catch((error)=>console.log(error))
        
        // id:uuidv4()
      
      setData([...data, payload])
    };
    
    function handleDelete(id){
      // const filteredData= data.filter((items)=>items.id!==id)
    //  alert(id)
    // setData(filteredData)
    setLoading(true)
    fetch(`http://localhost:3000/todos/${id}`,{method:"DELETE"})
    .then((res)=>res.json())
    .then((res)=>{window.location.reload();setLoading(false)})
    .catch((err)=>console.log(err))
    
    }
  
    function handleStatus(id){
      // console.log(id)
     const updatedData= data.map((items)=>items.id===id ? { ...items, status: !items.status} : items)
  
  
     
     setData(updatedData)
  
    //  {updatedData.map((items)=>items.status?<h1>true</h1>:<h1>false</h1>)}
     console.log(data)
      
    }
  
    return loading?(<p>Loading...</p>):(
      <>
      <h1>Your ToDo's</h1>
    <TodoInput handleAdd={handleAdd} />

    <TodoList data={data} handleDelete={handleDelete} handleStatus={handleStatus}/>

    
    <button onClick={()=>setPage(page-1)} disabled={page===1}>Previous</button>
    <button onClick={()=>setPage(page+1)}>Next</button>
    </>
    
    );
  }
  export default Todo