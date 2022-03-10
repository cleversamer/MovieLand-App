import React, { useEffect, useState } from "react";
import { API_URL } from "./config";
import SearchBar from "./components/SearchBar";
import Notification from "./components/Notification";

import "./css/App.css";
import Movies from "./components/Movies";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    searchMovies(searchTitle);
  }, [searchTitle]);

  const searchMovies = async (title) => {
    try {
      const apiEndpoint = `${API_URL}&s=${title.trim()}`;
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      setMovies(data.Search);
    } catch (ex) {
      setMovies([]);
      console.log(ex.message);
    }
  };

  return (
    <div className="app">
      <h1 className="brand">MovieLand</h1>
      <Notification text="Made With ❤️ By " linkText="Samer A." />
      <SearchBar
        onSearchChange={setSearchTitle}
        onSearch={searchMovies}
        value={searchTitle}
      />
      <div className="container">
        <Movies movies={movies} />
      </div>
    </div>
  );
}

export default App;
