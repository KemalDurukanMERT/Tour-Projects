import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return(
    <div className="App">
      <Navbar/>
      <Header/>
      <Main/>
    </div>
  )
}

export default App;