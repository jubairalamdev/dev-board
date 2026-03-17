import './App.css'
import BoardBody from './Components/BoardBody/BoardBody'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <main className='max-w-[1200px] mx-auto py-5 space-y-5'>
      <Navbar></Navbar>
      <BoardBody></BoardBody>
    </main>
  )
}

export default App
