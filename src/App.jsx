
import './App.scss'
import Main from './layout/Main'
import IconSun from './assets/icon-sun.svg'
function App() {

  return (
    <div className="main-container">
      <div className="top">
      <div className="title">
        <h2>TODO</h2>
        <img src={IconSun} alt="toogle image" />
      </div>
      </div>
      <div className="todos">
        <Main/>
      </div>
    </div>
  )
}

export default App
