import React, { Component } from 'react';
import './App.css';
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import ProfileSection from "./components/ProfileSection";

class App extends Component {
  render() {
    return (
      <div className="App">
       <TopBar />
       <ProfileSection />
       <Footer />
      </div>
    );
  }
}

export default App;
