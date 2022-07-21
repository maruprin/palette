
import './App.css';
import Circles from './components/Circles';
import Component from './components/ColorPicker';
import Header from './components/Header';
import Name from './components/Name';
import Saved from './components/Saved';

function App() {
  return (
    <div className="App">
      <Header/>
      <Circles/>
      <Name/>
      <Saved/>
    </div>
  );
}

export default App;
