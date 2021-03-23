import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const state = []
let index = 0

function useState(defaultValue) {
  const id = index++

  if (state[id]) {
    return state[id]
  }

  const setValue = newValue => {
    state[id][0] = newValue
    render()
  }

  const currentState = [ defaultValue, setValue ]
  state[id] = currentState

  return currentState

}

function TestHook() {

  const [ value, setValue ] = useState('start')
  const [ text, setText ] = useState('drugi stan')

  return (
    <>
      <h1>Test hook</h1>
      {text}<br/>
      <input 
        type="text" 
        value={value} 
        onChange={ e => setValue(e.target.value) }  />
    </>
  )

}
function render() {
  index = 0
  ReactDOM.render(
    <React.StrictMode>
    <TestHook />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
  );
}

render()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
