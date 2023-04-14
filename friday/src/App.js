import './App.css';
import './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
       <h1>Welcome to coffeeHub</h1>
       <p id="text">Yay!!! future Senior Developer!!!</p>
       <button type="button" onclick='document.getElementById("text").innerHTML = {navBar/}'>Click Me!</button>
       <button type="button"onclick="document.getElementById('text').innerHTML = Date()">
Click me to display Date and Time.</button>
<p id="text"></p>
    </div>
  );
}

export default App;
