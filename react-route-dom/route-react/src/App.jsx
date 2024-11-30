
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Landing = React.lazy(()=> import('./pages/Landing'));
function App() {
  
  
  return (<div>
<div>
</div>
    <BrowserRouter>
    <Topbar />
      <Routes>
          <Route path ="/dashboard" element={
            <Suspense fallback={<div>Loading!!...</div>}>
              <Dashboard />
              </Suspense> }/>
          <Route path ="/" element={
            <Suspense fallback={<div>Loading!!...</div>}>
              <Landing />
              </Suspense> }/>
          
      </Routes>
    </BrowserRouter>
  </div>
  )
}

function Topbar(){
  const navigate = useNavigate();
  return <div>
   
      <button onClick={()=> {
        navigate('/')
      }
      }>Landing</button>

      <button onClick={()=>{
        navigate('/dashboard');
      }}>Dashboard</button>
  </div>
}
export default App
