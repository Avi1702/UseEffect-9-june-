import React from "react";
// import {v4 as uuidv4} from "uuid";
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';

function Grocery(){
    const [data,setData]=React.useState([])

    React.useEffect(()=>{
      fetch(`http://localhost:3001/todos`)
      .then((res)=>res.json())
      .then((res)=>setData(res))
      .catch((error)=>console.log(error))
    },[])
  
    const handleAdd=(value)=>{
      console.log(value)
      const payload={
        title:value,
        status:false
      };

        fetch(`http://localhost:3001/todos`,
        {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "content-type":"application/json"
          }
        })
        .then((res)=>res.json())
        .then((res)=>console.log(res))
        .catch((error)=>console.log(error))
        
        // id:uuidv4()
      
      setData([...data, payload])
    };
    
    function handleDelete(id){
      const filteredData= data.filter((items)=>items.id!==id)
    //  console.log(id)
    setData(filteredData)
    }
  
    function handleStatus(id){
      // console.log(id)
     const updatedData= data.map((items)=>items.id===id ? { ...items, status: !items.status} : items)
  
  
     
     setData(updatedData)
  
    //  {updatedData.map((items)=>items.status?<h1>true</h1>:<h1>false</h1>)}
     console.log(data)
      
    }
  
    return(
      <>
      <h1>Your ToDo's</h1>
    <GroceryInput handleAdd={handleAdd} />

    <GroceryList data={data} handleDelete={handleDelete} handleStatus={handleStatus}/>
    </>
    
    );
  }
  export default Grocery