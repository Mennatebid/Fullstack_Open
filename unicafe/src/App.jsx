import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)

  const handelGood =()=>{
    setGood(good+1)
    setTotal(good+bad+neutral)
  }
  const handelBad=()=>{
    setBad(bad+1)
    setTotal(good+bad+neutral)
  }
  const handelNeutral=()=>{
    setNeutral(neutral+1)
    setTotal(good+bad+neutral)
  }
  const Button =(props)=> {
    <button onClick={props.onClick}>{text}</button>
  }
  return (
    <div>
      <h1>Give feedback</h1>
      {good}
      <button onClick={handelGood}>good</button>
      {neutral}
      <button onClick={handelNeutral}>neutral</button>
      {bad}
      <button onClick={handelBad}>bad</button>
      <p>Statistics</p>
      <p>good {good}</p>
      <p>bad {bad}</p>
      <p>neutral {neutral}</p>
      <p>all {total}</p>
      <p>average {(bad+good+neutral)/ total}</p>
      <p>positive {good/total *100}</p>
    </div>
  )
}

export default App