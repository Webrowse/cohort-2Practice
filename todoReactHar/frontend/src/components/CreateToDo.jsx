import { useState } from 'react';

export function CreateToDo(props){
    //react query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" id="title" placeholder="title" onChange={function(e){
                const value = e.target.value;
                setTitle(value);
            }
        } /><br />
        <input type="text" id="desc" placeholder="Description" 
        onChange={function(e){
            const value = e.target.value;
                setDescription(value);
    
        }} /><br />
        <button onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( {
                    title: title,
                    description: description,
                })
            })
            .then(async function(res) {
                const data = await res.json();
                console.log(data);
                alert("todo added");
            })
        }
        
        }>Add a todo</button>
    </div>
}