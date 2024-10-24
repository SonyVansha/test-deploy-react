import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Simpan pilihan tema di localStorage agar tetap aktif setelah refresh
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="text-white">
      {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
    </button>
  );
}

export default DarkModeToggle;
