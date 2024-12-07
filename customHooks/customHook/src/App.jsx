import React, { useEffect, useState } from 'react';

function App(){
 const [render, setRender] = useState(true);
  useEffect(() => {
    setInterval(() => {setRender(r=>!r)}, 2000);
  },[])
  return (
    <>
     
       {render? <MyComponent />: <div></div>}
      
    </>
  )
}

function MyComponent() {
  useEffect(() => {
    // Component mounting logic
    console.log('Component mounted');
    return () => {
      // Component unmounting logic
      console.log('Component unmounted');
    };
  }, []);

  return (
    <div>
      MyComponent
    </div>
  );
}
export default App
