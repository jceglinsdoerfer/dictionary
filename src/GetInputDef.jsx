import { useEffect, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import App from './App'


function GetInputDef() {
    const [inputWord, setInputWord] = useState('')
    const [outputDefinition, setOutputDefinition] = useState('')
    const wordSelected = document.getElementById('searchInput');
        wordSelected.addEventListener('input', (event) => {})
        setInputWord (event.target.value);    
    useEffect (() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`)
            .then(response => response.json())
            .then(outputDefinition => setOutputDefinition(data[0].meanings[0].definitions[0].definition))
     
    }, [])    
   return (<p> {outputDefinition} </p>)
}

export default GetInputDef;