import { useState, useEffect } from 'react'
import './App.css'
import Dictionary from './Dictionary'
//import GetInputDef from './getInputDef'

//const [outputDefinition, setOutputDefinition] = useState('')
function MyButton(searchInput) {
    const handleClick = (searchInput) => {
    useEffect (() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`)
            .then(response => response.json())
            .then(OutputDefinition => setOutputDefinition(data[0].meanings[0].definitions[0].definition))
     
    }, [])    
  }
    return OutputDefinition;
}


function App() {
  const [definition, setDefinition] = useState([])
  

  return (
    <>
      <h1>Find the definition of a word here!!</h1>
      <div>
        <p>crazy is(AKA developers are):</p>
          <Dictionary/>         
        <p>Or if you want to look up your own word enter it here:</p>
          <form id='searchForm'>
            <input type='text' id='searchInput' name='query' placeholder='Enter your word'/>
            <button type='submit' onClick={MyButton}>Find</button>
          </form>
          
      </div> 
    </>
  )
}

export default App
