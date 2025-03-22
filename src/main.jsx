import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CustomInput, Person } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Person />,
    <CustomInput />
    </>
  </StrictMode>,
)
