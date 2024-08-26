import { Route, Switch } from 'wouter';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import Examen from './pages/Examen';

function App() {
  return (
    <>
      <Switch>
        <Route path='/' component={Login} />
        <ProtectedRoute>
          <MainLayout>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/examenes/:id' component={Examen} />
          </MainLayout>
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
