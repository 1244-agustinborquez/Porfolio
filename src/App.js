import './Styles/App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Education from './pages/education/Education';
import Work from './pages/work/Work';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/education' component={Education}/>
        <Route path='/work' component={Work}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
