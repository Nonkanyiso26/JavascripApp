import './Images/CoffeeLogo.jpg';
import './components/NavBar';

function App() {
  return (
    <div className="App">
    <div class="nav">
      <a href="#home">Home</a>
      <a href="#images">Images</a>
      <a href="#aboutUs">About Us</a>
      <a href="#contactUs">Contact Us</a>
      <img src='CoffeeLogo.jpg'></img>

    </div>
       <h1>Welcome to coffeeHub</h1>
       <p id="text">Yay!!! future Senior Developer!!!</p>
        
    </div>
  );
}

export default App;
