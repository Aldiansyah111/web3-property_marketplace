// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Staking from './pages/Staking';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <Router>
      <div className=" bg-gray-300 flex flex-col min-h-screen ">
        <Navbar />

         <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/staking" element={<Staking />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}








// App.jsx
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Dashboard from './pages/Dashboard';
// import Staking from './pages/Staking';
// import ProtectedRoute from './components/ProtectedRoute'; // ✅ Import

// import { Toaster } from 'react-hot-toast';

// export default function App() {
//   return (
//     <Router>
//       <div className="bg-gray-300 flex flex-col min-h-screen">
//         <Navbar />

//         <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

//         <main className="flex-1">
//           <Routes>
//             {/* Public routes */}
//             <Route path="/" element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />

//             {/* Protected routes */}
//             <Route
//               path="/dashboard"
//               element={
//                 <ProtectedRoute>
//                   <Dashboard />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/staking"
//               element={
//                 <ProtectedRoute>
//                   <Staking />
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </Router>
//   );
// }
