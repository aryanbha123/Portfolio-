// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import Loader from './components/Loader';
// import { AuthProvider } from './AuthContext';

// const Navbar = lazy(() => import('./components/navbar'));
// const Footer = lazy(() => import('./components/footer'));
// const Yoni = lazy(() => import('./pages/Yoni'));
// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./pages/About'));
// const Exp = lazy(() => import('./pages/Exp'));
// const Projects = lazy(() => import('./pages/Projects'));
// const Project = lazy(() => import('./pages/Project'));

// export default function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Suspense fallback={<Loader />}>
//           <Navbar />
//           <AnimatedRoutes />
//           <Footer />
//         </Suspense>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// function AnimatedRoutes() {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode='wait'>
//       <Routes location={location} key={location.pathname}>
//         <Route path='/' element={<PageTransition><Home /></PageTransition>} />
//         <Route path='/about' element={<PageTransition><About /></PageTransition>} />
//         <Route path='/experience' element={<PageTransition><Exp /></PageTransition>} />
//         <Route path='/project' element={<PageTransition><Projects /></PageTransition>} />
//         <Route path='/projects/:id' element={<PageTransition><Project /></PageTransition>} />
//         <Route path='internship/yoni-bleed-with-pride' element={<PageTransition><Yoni /></PageTransition>} />
//         <Route path='*' element={<PageTransition><NotFound /></PageTransition>} />
//       </Routes>
//     </AnimatePresence>
//   );
// }

// function NotFound() {
//   return <div>Not Found</div>;
// }

// function PageTransition({ children }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.2 }}
//     >
//       {children}
//     </motion.div>
//   );
// }


import React, { useState } from 'react';

const GangJoinForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
    sap: '',
    reason: '',
    skills: '',
    alooRoll: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 border border-gray-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Gang Join Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="course" className="text-lg font-medium">Course</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="sap" className="text-lg font-medium">SAP</label>
          <input
            type="text"
            id="sap"
            name="sap"
            value={formData.sap}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="reason" className="text-lg font-medium">Why do you want to join Maithani Gang?</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="skills" className="text-lg font-medium">Skills</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="alooRoll"
            name="alooRoll"
            checked={formData.alooRoll}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="alooRoll" className="text-lg">Is Aloo Roll your favorite food?</label>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      <div className="mt-6 text-center text-gray-600">
        <p className="font-medium">Finance: Daksh Punetha</p>
        <p className="font-medium">Entertainment: Jaggu</p>
        <p className="font-medium">Founder: Ayush Maithani</p>
        <p className="font-medium">Co-Founder: Aryan</p>
      </div>
    </div>
  );
};

export default GangJoinForm;
