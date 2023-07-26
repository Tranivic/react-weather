import SearchBar from "../components/SearchBar/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay/WeatherDisplay";
import { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <section className="app-container">
        <SearchBar />
        <WeatherDisplay />
      </section>
    );
  }
}

export default App;
