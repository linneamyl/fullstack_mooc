import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  const all = props.feedback[0] + props.feedback[1] + props.feedback[2]

  if (all > 0){
    return(
      <div>
        <StatistickLine text='good' value={props.feedback[0]} />
        <StatistickLine text='neutral' value={props.feedback[1]} />
        <StatistickLine text='bad' value={props.feedback[2]} />
        <StatistickLine text='all' value={all} />
        <StatistickLine text='average' value={ (props.feedback[0] - props.feedback[2]) / all } />
        <StatistickLine text='positive' value= { (props.feedback[0] * 100) / all }  />
      </div>
    )
  } else {
    return(<p>No feedback given</p>)
  }
}

const StatistickLine = (props) => {
  return (
    <p>{props.text} {props.value}</p>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='bad'/>
      <h1>Statisticks</h1>
      <Statistics feedback={[good, neutral, bad]}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
