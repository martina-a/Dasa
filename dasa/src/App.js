import './App.css';
import PartTable from './components/features/PartTable'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PartTable title='Engine' partValues={['Engine Value 1', 'Engine Value 2']} max={200} min={0}/>
      </header>
    </div>
  );
}

export default App;
