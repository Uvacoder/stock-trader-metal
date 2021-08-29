import TopBar from './components/TopBar';
import Menu from './components/Menu';
import Graph from './components/Graph';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
        <TopBar />
        <Menu />
      </header>
      <div className="content-container">
      <Graph />
      </div>
      <footer><Footer /></footer>
    </div>
  );
}

export default App;
