
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Common/Header';
import About from './pages/About';
import Home from './pages/Home';
import { HashRouter as  Router, Route, Routes,} from "react-router-dom";
import WhyUs from './pages/WhyUs';
import Team from './pages/Team';
import Service from './pages/Service';
import Footer from './Common/Footer';

function App() {
  return (
    <div className="main-wrapper">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/service" exact element={<Service />} />
          <Route path="/whyus" exact element={<WhyUs />} />
          <Route path="/team" exact element={<Team />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
