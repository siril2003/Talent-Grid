
import './App.css'
import { SignInButton } from '@clerk/clerk-react'

function App() {
 

  return (
    <>
    <h1>Welcome to Talent Grid</h1>

    <SignInButton mode="modal" />
    </>
  )
}

export default App
