import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaCar, FaUser, FaSignOutAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-500 shadow-xl sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <FaCar className="text-white text-5xl group-hover:scale-110 transition-transform" />
            <span className="text-white font-bold text-3xl hidden sm:block">
              Car<span className="text-accent-300">Yatra</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-accent-200 font-semibold text-lg transition-colors"
            >
              Home
            </Link>
            <Link
              to="/cars"
              className="text-white hover:text-accent-200 font-semibold text-lg transition-colors"
            >
              Browse Vehicles
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-white hover:text-accent-200 font-semibold text-lg transition-colors flex items-center space-x-2"
                >
                  <FaUser className="text-lg" />
                  <span>{user?.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-all shadow-md hover:shadow-lg"
                >
                  <FaSignOutAlt className="text-lg" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-all shadow-md hover:shadow-lg"
                >
                  <FaSignInAlt className="text-lg" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-all shadow-md hover:shadow-lg"
                >
                  <FaUserPlus className="text-lg" />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
