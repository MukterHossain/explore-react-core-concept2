
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'
import Posts from './Posts'

function App() {
  function handleClick(){
    alert('Button Clicked')
  }
  const handleClick2 = () =>{
    alert('Clicked btn2')
  }
  // with parameter
  const handleClick4=(num)=>{
    alert(num + 5);
  }
  return (
    <>   
      <h2>React Core Concepts 2</h2>
      <ol>
        <li>Component</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>load data</li>
      </ol>


      <hr />


  
    <Posts></Posts>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={()=> {alert('third Clicked')}}>Third</button>
      <button onClick={()=>handleClick4(3)}>Button 4</button>
      
     
    </>
  )
}

export default App
