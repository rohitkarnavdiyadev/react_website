import './App.css';
import Navigation from './component/Navigation';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';

const  App = () => {
  return (
    <>
      <Navigation/>
      <Switch >
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </>
  );
}

export default App;
