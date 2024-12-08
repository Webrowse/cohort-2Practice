import  { useEffect, useState } from 'react';
import axios from 'axios';
function App(){
 const [mytodos, setMytodos] = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/todos')
    .then(res => {
      setMytodos(res.data.todos);
      console.log(mytodos); 
    })
  },[])
  return (
    <>
     
       {mytodos.map(abc => <Track todo={abc} key={abc.id} />)}
      
    </>
  )
}
function Track({todo}) {
  return (
    <div> 
      {todo.todo}
    </div>
  )
}




export default App
