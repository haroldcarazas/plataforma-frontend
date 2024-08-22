import { Route, Switch } from 'wouter';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' component={Login} />
      </Switch>
    </>
  );
}

export default App;
