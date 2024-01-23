import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button } from '@jabuti-ds/core';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <Box display="flex" justifyContent="space-around" alignItems="center" flexDirection='column' width='100%' height="300px" style={{'border': '2px solid black', 'borderRadius': '1rem'}}>
        <div style={{'height': '50px', 'width': '50px', 'backgroundColor': '#E11D48',  'borderRadius': '0.5rem'}}></div>
        <div style={{'height': '50px', 'width': '50px', 'backgroundColor': '#E11D48',  'borderRadius': '0.5rem'}}></div>
        <div style={{'height': '50px', 'width': '50px', 'backgroundColor': '#E11D48',  'borderRadius': '0.5rem'}}></div>
        <div style={{'height': '50px', 'width': '50px', 'backgroundColor': '#E11D48',  'borderRadius': '0.5rem'}}></div>
        <div style={{'height': '50px', 'width': '50px', 'backgroundColor': '#E11D48',  'borderRadius': '0.5rem'}}></div>
      </Box>
      <div className="card">
        <Button size="small" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
