

import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
