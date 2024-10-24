// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import PageRoutes from './routes/ProfilePage';
import { useEffect, useState } from 'react';
import LoadingPage from './components/LoadingPage';

function App() {

  const [loading, setLoading] = useState(true);

  // Simulate a 2-second loading time
  useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 2000); // Simulate a 2-second loading time
  }, []);

  // Loading page
  if (loading) {
    return (
      <>
        <LoadingPage />
      </>
    );
  }

  return (
    <>
      <PageRoutes />
    </>
  )
}

export default App
