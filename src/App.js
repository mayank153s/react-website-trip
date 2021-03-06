import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import './App.css'; 
import Home from './components/pages/Home';

library.add(fab, faBars, faTimes);

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Switch><Route path="/" exact component={Home} />
   </Switch>
   </BrowserRouter>
   
   </>
 
    
  );
}

export default App;
