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
     
       {mytodos.map(abc => <Track bc={abc} key={abc.id} />)}
      
    </>
  )
}
function Track({bc}) {
  return (
    <div> 
      {bc.todo}
    </div>
  )
}




export default App
