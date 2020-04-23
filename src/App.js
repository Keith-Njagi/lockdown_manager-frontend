import React, {Component} from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <MainContent />
        <Footer />
      </div>
    )
  }
}

export default App;
