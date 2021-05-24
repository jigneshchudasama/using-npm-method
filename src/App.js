import './App.css';
import { Badge, Button } from './lib';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="Test Button" />
        <Badge value={10} />
      </header>
    </div>
  );
}

export default App;
