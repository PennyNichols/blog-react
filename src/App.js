import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  const link = "http://www.google.com";

  //cannot output booleans or objects

  return (
    <div className="App">
      <Navbar />                {/* can be self closing, or have a closing tag */}
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
