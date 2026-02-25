import { useState } from 'react'

const StatisticsLine=(props)=>{
  return (
    <div>{props.text} {props.value}</div>
  )
}

const Statistics =(props)=>{
    if (props.all === 0) {
    return (
      <div>
        no feedback yet
      </div>
    )
  }
  return (
    <div>
      <p>Statistics</p>
      <StatisticsLine text = 'good' value={props.good}/>

      <StatisticsLine text ='bad' value={props.bad}/>

      <StatisticsLine text ='neutral' value={props.neutral}/>

      <StatisticsLine text='all' value={props.all}/>

      <StatisticsLine text='average' value= {props.average}/>

      <StatisticsLine text='positive' value={props.positive}/>
    </div>
  )
}
  const Button =(props)=> {
    return <button onClick={props.onClick}>{props.text}</button>
  }
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal] = useState(0)

  const handelGood =()=>{
    const New_Good = good +1
    setGood(New_Good)
    const total = good+bad + neutral
    setTotal(total)
  }
  const handelBad=()=>{
    const New_Bad = bad+1
    setBad(New_Bad)
    const total = good+bad + neutral
    setTotal(total)
  }
  const handelNeutral=()=>{
    const New_neutral = neutral+1
    setNeutral(New_neutral)
    const total = good+bad + neutral
    setTotal(total)
  }
  const average = total === 0 ? 0:(good-bad)/total
  const positive = total ===0 ? 0:(good/total)*100
  return (
    <div>
      <h1>Give feedback</h1>
      {good}
      <Button onClick={handelGood} text='good'/>
      {neutral}
      <Button onClick={handelNeutral} text='neutral'/>
      {bad}
      <Button onClick={handelBad} text='bad'/>
      <Statistics
        good={good}
        bad ={bad}
        neutral ={neutral}
        all ={total}
        average= {average}
        positive ={positive}/>
    </div>
    
  )
}

export default App