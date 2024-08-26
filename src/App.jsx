import { Route, Switch } from 'wouter';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' component={Login} />
        <ProtectedRoute>
          <MainLayout>
            <Route path='/dashboard' component={Dashboard} />
          </MainLayout>
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
