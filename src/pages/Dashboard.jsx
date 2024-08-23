import useAuth from '../services/useAuth';

function Dashboard() {
  const { user, isLoading } = useAuth();
  console.log(isLoading);
  console.log(user);

  return <div>Dashboard</div>;
}

export default Dashboard;
