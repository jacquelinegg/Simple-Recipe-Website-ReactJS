import './App.css';
import Navbar from './components/Header'; 
import BelowHeader from './components/BelowHeader'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar/>
      </header>
      <body>
      <BelowHeader/>
      </body>
    </div>
  );
}

export default App;