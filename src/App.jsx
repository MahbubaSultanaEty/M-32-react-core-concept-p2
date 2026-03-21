import { useState } from 'react'
import './App.css'
import Counter from './counter'
import Batsman from './Batsman'
 import Users from './users'

function App() {
  const [count, setCount] = useState(0)

  function handleClick() {
  alert('I am clicked')
}

  const handleClick3 = () => {
    alert('(arrow function) clicked me 3')
  }

  const handleMinus5 = (num) => {
    const newNum = num - 5;
    alert(`function wrapping (arrow function দিয়ে wrap করা), ${newNum}`)
  }
  
  return (
    <>
      <section id="center">
        
        <div>
          <h1>Get started</h1>

          <Users></Users>
          <Batsman></Batsman>
          <Counter></Counter>

          <button onClick={handleClick}>Click Me</button>
          <button onClick={function handleClick2() {
            alert('(inline function)CLicked Me 2')
          }}>Click Me 2</button>

          <button onClick={handleClick3}>Click ME 3</button>
         
          <button onClick={() => {
            alert('(Inline arrow function )clicked Me 4')
          }}>Click ME 4</button>

          <button onClick={() => handleMinus5(15)}>CLick ME 5</button>
        </div>
        


      </section>

    
    </>
  )
}

export default App
