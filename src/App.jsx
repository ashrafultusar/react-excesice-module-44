
import './App.css'
import LineChart from './Component/Linechart/LineChart'
import Navber from './Component/Navber/Navber'
import Options from './Component/Options/Options'



function App() {
 

  return (
    <>
      <Navber></Navber>
      
      <h1 className='text-4xl font-bold'>Vite + React</h1>
  
<Options></Options>

     <LineChart></LineChart>
    </>
  )
}

export default App
