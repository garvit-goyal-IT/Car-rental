import { Link } from 'react-router-dom';
import { FaCar, FaCheckCircle, FaClock, FaShieldAlt, FaArrowRight, FaUserCircle } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 text-white py-20 overflow-hidden min-h-[600px]">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=1920&auto=format&fit=crop')",
          }}
        >
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute transform rotate-45 -top-20 -right-20 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute transform -rotate-45 -bottom-20 -left-20 w-96 h-96 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-shadow">
              Rent Your  Vehicle
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
                Choose the Car you have dream to drive
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/cars"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <span>Browse Vehicles</span>
              </Link>
              {!user && (
                <Link
                  to="/register"
                  className="bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-all shadow-xl hover:shadow-2xl"
                >
                  Get Started
                </Link>
              )}
              {user && (
                <Link
                  to="/dashboard"
                  className="bg-accent-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-accent-600 transition-all shadow-xl hover:shadow-2xl"
                >
                  My Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="w-full py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Register', desc: 'Create your free account' },
              { step: '2', title: 'Browse', desc: 'Filter and find your car' },
              { step: '3', title: 'Book', desc: 'Select dates and location' },
              { step: '4', title: 'Drive', desc: 'Pick up and enjoy!' },
            ].map((item, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-gradient-to-br from-primary-600 to-primary-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaCar className="text-6xl mx-auto mb-6 animate-pulse-slow" />
          <h2 className="text-4xl font-bold mb-4">Ready ?</h2>
          <p className="text-xl mb-8 text-gray-100">
             Start Renting it Today......
          </p>
          <Link
            to="/cars"
            className="bg-white text-primary-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl inline-flex items-center space-x-2"
          >
            <span>Start Browsing</span>
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

