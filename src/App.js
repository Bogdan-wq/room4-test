import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/Main";
import ArtistPage from "./pages/Artist";
import SearchTracksPage from "./pages/SearchTracks";

function App() {
  return (
      <Router>
          <Header />
          <div style={{paddingTop:'100px'}}>
              <Route path="/" component={MainPage} exact/>
              <Route path="/artist/:artistId" component={ArtistPage}/>
              <Route path="/search-tracks" component={SearchTracksPage}/>
          </div>
      </Router>
  );
}

export default App;
