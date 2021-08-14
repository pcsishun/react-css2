import logo from './logo.svg';
import './App.css'; 
import { useHistory, Route, Switch} from 'react-router-dom';
import LearnCSS from './components/LearnCSS';
import ReactHome from './components/ReactHome';
import NavMenu from './components/NavMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 
  return (
    <>
      <NavMenu/>
      <Switch>
        <Route path="/" exact>
          <div>
          </div>
        </Route>
        <Route path="/learn">
          <LearnCSS/>
        </Route>
        <Route>
          <ReactHome path="/react"/>
        </Route>
      </Switch>


    </>
  );
}

export default App;
