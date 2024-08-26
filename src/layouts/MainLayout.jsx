import NavBar from '../components/NavBar';

/* eslint-disable react/prop-types */
function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default MainLayout;
