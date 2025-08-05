import { useEffect, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import App from './App'









function Dictionary() {
    const [crazyDefinition, setCrazyDefinition] = useState('empty')
    const [inputWord, setInputWord] = useState('')
    const [outputDefinition, setoutputDefinition] = useState('')
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/crazy')
      .then(response => response.json())
      .then(data => setCrazyDefinition(data[0].meanings[0].definitions[0].definition));
      
    
   return (<p> {crazyDefinition} </p>)
   
   
}

export default Dictionary;





