// Nav bar component
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  return (
    <header className="bg-blue-900 text-white sticky top-0 z-40">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">Hu Tao</div>
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Beranda</a>
          <a href="#" className="hover:underline">Kelompok</a>
        </nav>
        <div className="flex items-center space-x-4">
          <i className="fas fa-bell"></i>
          <i className="fas fa-user-circle"></i>
          <DarkModeToggle />
        </div>
      </div>
    </header>

    // Page routes
  );
}

export default Navbar;