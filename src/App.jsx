import { Route, Switch } from 'wouter';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' component={Login} />
        <ProtectedRoute>
          <Route path='/dashboard' component={Dashboard} />
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
