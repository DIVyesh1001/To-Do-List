import React,{useState} from "react"

function ToDo(){
    const [toDo, setToDo] = useState(["ToDoElement"]);
    const[toDoelement,setToDoElement]=useState("");
    const handleInput=(e)=>{
        setToDoElement(e.target.value);
    }
    const updateTodo=()=>{
        // const Todotext=document.getElementById("todoText").value;
        if(toDoelement===""){
            alert("Please enter a valid ToDo");
            return;
        }
        setToDo(t=>[...t,toDoelement]);
        setToDoElement("");
        // document.getElementById("todoText").value="";
    }

    const handleDelete=(i)=>{
        setToDo(toDo.filter((_,ind)=> i!==ind))
    }
    return(<div className="container">
        <h1>ToDo List</h1>
        <input type="text" id="todoText" value={toDoelement} onChange={handleInput} placeholder="What do you want to-do"/>
        <br></br>
        <button className="button" onClick={updateTodo}>Add</button>
        <ul>
            {toDo.map((element,index)=>
                <li className="ListItem" key={index}>
                    <span>{element}</span>
                    <div className="button-grp">
                    <button className="delete-btn" onClick={()=>handleDelete(index)}>Delete</button>
                    </div>
                </li>
            )}
        </ul>

    </div>);
}

export default ToDo