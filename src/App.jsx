import { useState, useEffect } from 'react'
import './App.css'
import Dictionary from './Dictionary'
import GetInputDef from './GetInputDef'

function App() {
  const [definition, setDefinition] = useState([])
  

  return (
    <>
      <h1>Find the definition of a word here!!</h1>
      <div>
        <p>crazy is(AKA developers are):</p>
          <Dictionary/>         
        <p>Or if you want to look up your own word enter it here:</p>
          <input type="string" id="word" placeholder="Enter your word here!"/>
          <GetInputDef/>
          //Output for the definition should be here.
      </div> 
    </>
  )
}

export default App
