import { Route, Router } from 'wouter';
import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import MainLayout from './layouts/MainLayout';
import Examen from './pages/Examen';

function App() {
  return (
    <>
      <Router base='/plataforma-frontend'>
        <Route path='/' component={Login} />
        <ProtectedRoute>
          <MainLayout>
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/examenes/:id' component={Examen} />
          </MainLayout>
        </ProtectedRoute>
      </Router>
    </>
  );
}

export default App;
