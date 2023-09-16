
import './App.css'
import Header from './components/Header/Header'
import AllTodos from './components/Todos/AllTodos'

function App() {

  return (
    <>
      <Header />
      <div className='main-content'>
        <AllTodos />
      </div>
    </>
  )
}

export default App
