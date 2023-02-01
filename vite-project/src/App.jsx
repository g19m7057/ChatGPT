import { useState } from 'react'
import './App.css'
import OptionSelection from './Components/OptionSelection'
import {arrayItems} from './AIOption'
import Translations from './Components/Translations'
import { Configuration, OpenAIApi } from "openai";
import {createRoot} from 'react-dom/client'

function App() {
  const [option, setOption] = useState({})
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')

  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_API,
  });

  const openai = new OpenAIApi(configuration);
 
  const selectOption = (option) => {
    setOption(option)
  }

  const submit = async () => {
    let object = {...option, prompt: prompt}

    const response = await openai.createCompletion(object);
    
    setResult(response.data.choices[0].text)
    console.log(response.data.choices[0].text)
  }

  const reset = () =>{
    return <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
  }

  return (
    <div>
      
      {/* show the translation object when theres something in the object else show option */}

      {Object.values(option).length === 0 ? 
        (<OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>)
        :(<Translations submit={submit} setPrompt={setPrompt} result={result} reset={reset}/>)
      }

    </div>
  )
}

export default App
