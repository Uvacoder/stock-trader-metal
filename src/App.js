import TopBar from './components/TopBar';
import Menu from './components/Menu';
import Graph from './components/Graph';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
<TopBar />
<Menu />
<Graph />
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
