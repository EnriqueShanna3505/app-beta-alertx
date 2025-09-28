import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import { useAuthStore } from './store/useAuthStore';

function App() {
  const { authUser, login, isLoggedIn } = useAuthStore();
  console.log('authUser', authUser);
  console.log('isLoggedIn', isLoggedIn);
  return (
    <div
      className="min-h-screen relative flex items-center justify-center overflow-hidden
                    p-2 sm:p-4 md:p-6 lg:p-8
                    bg-gradient-to-br from-slate-50 via-orange-50/30 to-red-50/20"
    >
      {/* ANIMATED GRID BACKGROUND (60% - Neutral) */}
      <div
        className="absolute inset-0 opacity-20 sm:opacity-30 md:opacity-40
                      bg-[linear-gradient(to_right,#ff511a15_1px,transparent_1px),linear-gradient(to_bottom,#ff511a15_1px,transparent_1px)] 
                      bg-[size:40px_40px] sm:bg-[size:50px_50px] md:bg-[size:60px_60px] lg:bg-[size:80px_80px]
                      animate-pulse"
        style={{ animationDuration: '4s' }}
      />

      {/* FLOATING GEOMETRIC SHAPES */}
      <div
        className="absolute top-10 left-10 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32
                      border-2 border-orange-300/40 rounded-lg rotate-45
                      animate-spin"
        style={{ animationDuration: '20s' }}
      />

      <div
        className="absolute bottom-20 right-20 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24
                      border-2 border-red-300/40 rounded-full
                      animate-bounce"
        style={{ animationDuration: '3s' }}
      />

      <div
        className="absolute top-1/2 left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20
                      bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full
                      animate-ping"
        style={{ animationDuration: '2s' }}
      />

      {/* MAIN GLOW EFFECTS (30% - Orange theme) */}
      <div
        className="absolute top-0 left-0 
                      w-96 h-96 sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]
                      bg-gradient-to-br from-orange-500/30 via-orange-400/20 to-transparent
                      blur-[100px] sm:blur-[120px] md:blur-[140px] lg:blur-[160px]
                      rounded-full animate-pulse transform -translate-x-1/2 -translate-y-1/2"
        style={{ animationDuration: '6s' }}
      />

      <div
        className="absolute bottom-0 right-0 
                      w-80 h-80 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]
                      bg-gradient-to-tl from-red-500/25 via-orange-500/15 to-transparent
                      blur-[120px] sm:blur-[140px] md:blur-[160px] lg:blur-[180px]
                      rounded-full animate-pulse transform translate-x-1/2 translate-y-1/2"
        style={{ animationDuration: '8s', animationDelay: '2s' }}
      />

      {/* MIDDLE AMBIENT GLOW */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      w-[800px] h-[400px] sm:w-[1000px] sm:h-[500px] md:w-[1200px] md:h-[600px]
                      bg-gradient-to-r from-transparent via-orange-300/10 to-transparent
                      blur-[150px] sm:blur-[180px] md:blur-[200px]
                      rounded-full animate-pulse"
        style={{ animationDuration: '10s', animationDelay: '1s' }}
      />

      {/* FLOATING PARTICLES (10% - Accent highlights) */}
      <div
        className="absolute top-1/4 right-1/3 
                      w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5
                      bg-gradient-to-r from-orange-500 to-red-500 
                      rounded-full shadow-lg shadow-orange-500/50
                      animate-bounce"
        style={{ animationDuration: '2s', animationDelay: '0.5s' }}
      />

      <div
        className="absolute bottom-1/3 left-1/4 
                      w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4
                      bg-gradient-to-r from-red-400 to-orange-400 
                      rounded-full shadow-lg shadow-red-400/50
                      animate-ping"
        style={{ animationDuration: '3s', animationDelay: '1s' }}
      />

      <div
        className="absolute top-2/3 left-2/3 
                      w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 md:w-4.5 md:h-4.5
                      bg-gradient-to-r from-orange-600 to-red-600 
                      rounded-full shadow-lg shadow-orange-600/50
                      animate-pulse"
        style={{ animationDuration: '4s', animationDelay: '2s' }}
      />

      <div
        className="absolute top-1/6 left-1/2 
                      w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3
                      bg-orange-400 rounded-full shadow-lg shadow-orange-400/50
                      animate-bounce"
        style={{ animationDuration: '2.5s', animationDelay: '1.5s' }}
      />

      <div
        className="absolute bottom-1/6 right-1/6 
                      w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3.5 md:h-3.5
                      bg-red-500 rounded-full shadow-lg shadow-red-500/50
                      animate-ping"
        style={{ animationDuration: '3.5s', animationDelay: '0.8s' }}
      />

      {/* SUBTLE LIGHT RAYS */}
      <div
        className="absolute top-0 left-1/4 w-px h-32 sm:h-40 md:h-48 lg:h-56
                      bg-gradient-to-b from-orange-400/40 to-transparent
                      animate-pulse"
        style={{ animationDuration: '5s' }}
      />

      <div
        className="absolute bottom-0 right-1/3 w-px h-24 sm:h-32 md:h-40 lg:h-48
                      bg-gradient-to-t from-red-400/40 to-transparent
                      animate-pulse"
        style={{ animationDuration: '6s', animationDelay: '2s' }}
      />

      {/* GLASSMORPHISM OVERLAY */}
      <div
        className="absolute inset-0 
                      bg-gradient-to-br from-white/5 via-transparent to-white/5
                      backdrop-blur-[0.5px]"
      />

      {/* MAIN CONTENT AREA */}
      <div
        className="relative z-10 w-full max-w-7xl mx-auto
                      backdrop-blur-sm bg-white/5 rounded-3xl
                      border border-white/10 shadow-2xl shadow-orange-500/10"
      >
        <button onClick={login} className="z-10 text-red-900">
          Click
        </button>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
