// // // // import { FaShoppingCart } from 'react-icons/fa';

// // // // export default function Header({ setPage, user, cart, province }) {
// // // //   return (
// // // //     <header className="fixed text-center font-semibold w-full top-0 z-60 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-5 flex flex-wrap justify-between items-center shadow-lg">
// // // //       <h1
// // // //         className="text-3xl font-extrabold cursor-pointer"
// // // //         onClick={() => setPage('Home')}
// // // //       >
// // // //         FoodOrderNP
// // // //       </h1>
// // // //       <nav className="flex space-x-6">
// // // //         {['Home','Cart','About','Contact'].map(p => (
// // // //           <button key={p} onClick={() => setPage(p)} className="hover:text-yellow-300">
// // // //             {p}
// // // //           </button>
// // // //         ))}
// // // //       </nav>
// // // //       <div className="flex items-center space-x-4">
// // // //         {user ? <span>Hello, {user.name}</span> :
// // // //           <button onClick={()=>setPage('Login')} className="bg-white text-red-500 px-3 py-1 rounded">Login</button>
// // // //         }
// // // //         <button onClick={()=>setPage('Cart')} className="relative">
// // // //           <FaShoppingCart size={24} />
// // // //           {cart.length>0 && (
// // // //             <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
// // // //               {cart.length}
// // // //             </span>
// // // //           )}
// // // //         </button>
// // // //       </div>
// // // //       {province && (
// // // //         <div className="w-full text-center mt-2 font-semibold">
// // // //           Province: {province}
// // // //         </div>
// // // //       )}
// // // //     </header>
// // // //   );
// // // // }

// // // import { FaShoppingCart } from 'react-icons/fa';
// // // import { Link, useNavigate } from 'react-router-dom';

// // // export default function Header({ user, cart, province }) {
// // //   const navigate = useNavigate();

// // //   return (
// // //     <header className="fixed text-center font-semibold w-full top-0 z-60 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-5 flex flex-wrap justify-between items-center shadow-lg">
// // //       {/* Logo */}
// // //       <h1
// // //         className="text-3xl font-extrabold cursor-pointer"
// // //         onClick={() => navigate('/')}
// // //       >
// // //         FoodOrderNP
// // //       </h1>

// // //       {/* Navbar Links */}
// // //       <nav className="flex space-x-6">
// // //         <Link to="/" className="hover:text-yellow-300">Home</Link>
// // //         <Link to="/cart" className="hover:text-yellow-300">Cart</Link>
// // //         <Link to="/about" className="hover:text-yellow-300">About</Link>
// // //         <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
// // //       </nav>

// // //       {/* Right-side Login & Cart */}
// // //       <div className="flex items-center space-x-4">
// // //         {user ? (
// // //           <span>Hello, {user.name}</span>
// // //         ) : (
// // //           <button
// // //             onClick={() => navigate('/login')}
// // //             className="bg-white text-red-500 px-3 py-1 rounded"
// // //           >
// // //             Login
// // //           </button>
// // //         )}
// // //         <button onClick={() => navigate('/cart')} className="relative">
// // //           <FaShoppingCart size={24} />
// // //           {cart.length > 0 && (
// // //             <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
// // //               {cart.length}
// // //             </span>
// // //           )}
// // //         </button>
// // //       </div>

// // //       {/* Province Info */}
// // //       {province && (
// // //         <div className="w-full text-center mt-2 font-semibold">
// // //           Province: {province}
// // //         </div>
// // //       )}
// // //     </header>
// // //   );
// // // }


// // import { FaShoppingCart } from "react-icons/fa";
// // import { Link, useNavigate } from "react-router-dom";

// // export default function Header({ user, setUser, cart, province }) {
// //   const navigate = useNavigate();

// //   const logout = () => {
// //     setUser(null);
// //     navigate("/");
// //   };

// //   return (
// //     <header className="fixed text-center font-semibold w-full top-0 z-60 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-5 flex flex-wrap justify-between items-center shadow-lg">
// //       {/* Logo */}
// //       <h1 className="text-3xl font-extrabold cursor-pointer" onClick={() => navigate("/")}>
// //         FoodOrderNP
// //       </h1>

// //       {/* Navbar Links */}
// //       <nav className="flex space-x-6">
// //         <Link to="/" className="hover:text-yellow-300">
// //           Home
// //         </Link>
// //         <Link to="/cart" className="hover:text-yellow-300">
// //           Cart
// //         </Link>
// //         <Link to="/about" className="hover:text-yellow-300">
// //           About
// //         </Link>
// //         <Link to="/contact" className="hover:text-yellow-300">
// //           Contact
// //         </Link>
// //       </nav>

// //       {/* Right-side Login & Cart */}
// //       <div className="flex items-center space-x-4">
// //         {user ? (
// //           <>
// //             <span>Hello, {user.name}</span>
// //             <button
// //               onClick={logout}
// //               className="bg-white text-red-500 px-3 py-1 rounded hover:bg-red-200"
// //             >
// //               Logout
// //             </button>
// //           </>
// //         ) : (
// //           <Link
// //             to="/login"
// //             className="bg-white text-red-500 px-3 py-1 rounded hover:bg-red-200 text-lg"
// //           >
// //             Login
// //           </Link>
// //         )}

// //         <button onClick={() => navigate("/cart")} className="relative">
// //           <FaShoppingCart size={24} />
// //           {cart.length > 0 && (
// //             <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
// //               {cart.length}
// //             </span>
// //           )}
// //         </button>
// //       </div>

// //       {/* Province Info */}
// //       {province && <div className="w-full text-center mt-2 font-semibold">Province: {province}</div>}
// //     </header>
// //   );
// // }
// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";

// export default function Header({ user, cart, province, setUser }) {
//   const navigate = useNavigate();

//   const logout = () => {
//     fetch("http://localhost:5000/api/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     }).then(() => {
//       setUser(null);
//       navigate("/login");
//     });
//   };

//   return (
//     <header className="fixed text-center font-semibold w-full top-0 z-60 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-5 flex flex-wrap justify-between items-center shadow-lg">
//       <h1 className="text-3xl font-extrabold cursor-pointer">
//         <Link to="/">FoodOrderNP</Link>
//       </h1>
//       <nav className="flex space-x-6">
//         {["Home", "Cart", "About", "Contact"].map((p) => (
//           <Link
//             key={p}
//             to={`/${p.toLowerCase() === "home" ? "" : p.toLowerCase()}`}
//             className="hover:text-yellow-300"
//           >
//             {p}
//           </Link>
//         ))}
//       </nav>
//       <div className="flex items-center space-x-4">
//         {user ? (
//           <>
//             <span>Hello, {user.name}</span>
//             <button
//               onClick={logout}
//               className="bg-white text-red-500 px-3 py-1 rounded"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <Link
//             to="/login"
//             className="bg-white text-red-500 px-3 py-1 rounded"
//           >
//             Login
//           </Link>
//         )}
//         <Link to="/cart" className="relative">
//           <FaShoppingCart size={24} />
//           {cart.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//               {cart.length}
//             </span>
//           )}
//         </Link>
//       </div>
//       {province && (
//         <div className="w-full text-center mt-2 font-semibold">Province: {province}</div>
//       )}
//     </header>
//   );
// }import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import { useState } from "react";
// import Profile from "./Profile";

// export default function Header({ user, cart, province, setUser, onLogout }) {
//   const navigate = useNavigate();
//   const [profileOpen, setProfileOpen] = useState(false);

//   const logout = () => {
//     fetch("http://localhost:5000/api/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     }).then(() => {
//       setUser(null);
//       setProfileOpen(false);
//       navigate("/login");
//       if (onLogout) onLogout();
//     });
//   };

//   return (
//     <header className="fixed text-center font-semibold w-full top-0 z-60 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-5 flex flex-wrap justify-between items-center shadow-lg">
//       <h1 className="text-3xl font-extrabold cursor-pointer">
//         <Link to="/">FoodOrderNP</Link>

//       </h1>
//       <nav className="flex space-x-6">
//         {["Home", "Cart", "About", "Contact"].map((p) => (
//           <Link
//             key={p}
//             to={`/${p.toLowerCase() === "home" ? "" : p.toLowerCase()}`}
//             className="hover:text-yellow-300"
//           >
//             {p}
//           </Link>
//         ))}
//       </nav>
//       <div className="flex items-center space-x-4 relative">
//         {user ? (
//           <>
//             {/* Profile Icon */}
//             <img
//               src={
//                 user.image
//                   ? `http://localhost:5000/uploads/${user.image}`
//                   : "/default-profile.png"
//               }
//               alt="Profile"
//               className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
//               onClick={() => setProfileOpen(!profileOpen)}
//               title={`Hello, ${user.name}`}
//             />

//             {/* Profile Dropdown */}
//             {profileOpen && (
//               <div className="absolute right-0 top-12 z-50">
//                 <Profile user={user} onLogout={logout} />
//               </div>
//             )}
//           </>
//         ) : (
//           <Link to="/login" className="bg-white text-red-500 px-3 py-1 rounded">
//             Login
//           </Link>
//         )}
//         <Link to="/cart" className="relative">
//           <FaShoppingCart size={24} />
//           {cart.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//               {cart.length}
//             </span>
//           )}
//         </Link>
//       </div>
//       {province && (
//         <div className="w-full text-center mt-2 font-semibold">
//           Province: {province}
//         </div>
//       )}
//     </header>
//   );
// }

// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import { useState } from "react";
// import Profile from "./Profile";

// export default function Header({ user, cart, province, setUser, onLogout, onProfileClick }) {
//   const navigate = useNavigate();
//   const [profileOpen, setProfileOpen] = useState(false);

//   const logout = () => {
//     fetch("http://localhost:5000/api/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     }).then(() => {
//       setUser(null);
//       setProfileOpen(false);
//       navigate("/login");
//       if (onLogout) onLogout();
//     });
//   };

//   return (
//     <header className="fixed text-center font-semibold w-full top-0 z-60 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-5 flex flex-wrap justify-between items-center shadow-lg">
//       <h1 className="text-3xl font-extrabold cursor-pointer">
//         <Link to="/">FoodOrderNP</Link>
//       </h1>
//       <nav className="flex space-x-6">
//         {["Home", "Cart", "About", "Contact"].map((p) => (
//           <Link
//             key={p}
//             to={`/${p.toLowerCase() === "home" ? "" : p.toLowerCase()}`}
//             className="hover:text-yellow-300"
//           >
//             {p}
//           </Link>
//         ))}
//       </nav>
//       <div className="flex items-center space-x-4 relative">
//         {user ? (
//           <>
//             <img
//               src={
//                 user.image
//                   ? `http://localhost:5000/uploads/${user.image}`
//                   : "/default-profile.png"
//               }
//               alt="Profile"
//               className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
//               onClick={() => navigate("/profile")}
//               title={`Hello, ${user.name}`}
//             />


//             {/* Profile Dropdown */}
//             {profileOpen && (
//               <div className="absolute right-0 top-12 z-50">
//                 <Profile user={user} onLogout={logout} />
//               </div>
//             )}
//           </>
//         ) : (
//           <Link to="/login" className="bg-white text-red-500 px-3 py-1 rounded">
//             Login
//           </Link>
//         )}
//         <Link to="/cart" className="relative">
//           <FaShoppingCart size={24} />
//           {cart.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//               {cart.length}
//             </span>
//           )}
//         </Link>
//       </div>
//       {province && (
//         <div className="w-full text-center mt-2 font-semibold">
//           Province: {province}
//         </div>
//       )}
//     </header>
//   );
// }


// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart, FaSearch } from "react-icons/fa";  // add search icon
// import { useState } from "react";
// import Profile from "./Profile";

// export default function Header({ user, cart, province, setUser, onLogout, onProfileClick, onSearch }) {
//   const navigate = useNavigate();
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const logout = () => {
//     fetch("http://localhost:5000/api/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     }).then(() => {
//       setUser(null);
//       setProfileOpen(false);
//       navigate("/login");
//       if (onLogout) onLogout();
//     });
//   };

//   const handleSearchChange = (e) => {
//     const val = e.target.value;
//     setSearchTerm(val);
//     if (onSearch) onSearch(val);
//   };

//   return (
//     <header className="fixed text-center font-semibold w-full top-0 z-60 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-5 flex flex-wrap justify-between items-center shadow-lg">
//       <h1 className="text-3xl font-extrabold cursor-pointer">
//         <Link to="/">FoodOrderNP</Link>
//       </h1>

//       <nav className="flex space-x-6 items-center">
//         {["Home", "Cart", "About", "Contact"].map((p) => (
//           <Link
//             key={p}
//             to={`/${p.toLowerCase() === "home" ? "" : p.toLowerCase()}`}
//             className="hover:text-yellow-300"
//           >
//             {p}
//           </Link>
//         ))}
//         {/* Search Icon + Input */}
//         <div className="relative ml-4">
//           {showSearch && (
//             <input
//               type="text"
//               className="rounded px-2 py-1 text-black outline-none w-48"
//               placeholder="Search food..."
//               value={searchTerm}
//               onChange={handleSearchChange}
//               autoFocus
//             />
//           )}
//           <button
//             onClick={() => setShowSearch((prev) => !prev)}
//             className="ml-2 text-white hover:text-yellow-300 transition"
//             aria-label="Toggle search"
//             title="Toggle search"
//           >
//             <FaSearch />
//           </button>
//         </div>
//       </nav>

//       <div className="flex items-center space-x-4 relative">
//         {user ? (
//           <>
//             <img
//               src={
//                 user.image
//                   ? `http://localhost:5000/uploads/${user.image}`
//                   : "/default-profile.png"
//               }
//               alt="Profile"
//               className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
//               onClick={() => navigate("/profile")}
//               title={`Hello, ${user.name}`}
//             />

//             {/* Profile Dropdown */}
//             {profileOpen && (
//               <div className="absolute right-0 top-12 z-50">
//                 <Profile user={user} onLogout={logout} />
//               </div>
//             )}
//           </>
//         ) : (
//           <Link to="/login" className="bg-white text-red-500 px-3 py-1 rounded">
//             Login
//           </Link>
//         )}
//         <Link to="/cart" className="relative">
//           <FaShoppingCart size={24} />
//           {cart.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//               {cart.length}
//             </span>
//           )}
//         </Link>
//       </div>

//       {province && (
//         <div className="w-full text-center mt-2 font-semibold">
//           Province: {province}
//         </div>
//       )}
//     </header>
//   );
// }


// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart, FaSearch, FaTimes } from "react-icons/fa";
// import { useState } from "react";

// export default function Header({ user, cart, province, setUser, onLogout, onProfileClick, onSearch }) {
//   const navigate = useNavigate();
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const logout = () => {
//     fetch("http://localhost:5000/api/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     }).then(() => {
//       setUser(null);
//       setProfileOpen(false);
//       navigate("/login");
//       if (onLogout) onLogout();
//     });
//   };

//   const toggleSearch = () => {
//     if (searchOpen && searchTerm) {
//       setSearchTerm("");
//       onSearch("");
//     }
//     setSearchOpen(!searchOpen);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <header className="fixed text-center font-semibold w-full top-0 z-60 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-5 flex flex-wrap justify-between items-center shadow-lg">
//       <h1 className="text-3xl font-extrabold cursor-pointer">
//         <Link to="/">FoodOrderNP</Link>
//       </h1>
//       <nav className="flex space-x-6">
//         {["Home", "Cart", "About", "Contact"].map((p) => (
//           <Link
//             key={p}
//             to={`/${p.toLowerCase() === "home" ? "" : p.toLowerCase()}`}
//             className="hover:text-yellow-300"
//           >
//             {p}
//           </Link>
//         ))}
//       </nav>

//       {/* Search Box & Icon */}
//       <div className="relative flex items-center space-x-2">
//         {searchOpen && (
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={handleSearchChange}
//             placeholder="Search food..."
//             className="px-3 py-1 rounded text-black focus:outline-none focus:ring-2 focus:ring-green-500 w-48"
//           />
//         )}
//         <button onClick={toggleSearch} className="text-white hover:text-yellow-300 focus:outline-none">
//           {searchOpen ? <FaTimes size={20} /> : <FaSearch size={20} />}
//         </button>
//       </div>

//       <div className="flex items-center space-x-4 relative">
//         {user ? (
//           <>
//             <img
//               src={
//                 user.image
//                   ? `http://localhost:5000/uploads/${user.image}`
//                   : "/default-profile.png"
//               }
//               alt="Profile"
//               className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
//               onClick={() => navigate("/profile")}
//               title={`Hello, ${user.name}`}
//             />
//             {/* Profile Dropdown */}
//             {profileOpen && (
//               <div className="absolute right-0 top-12 z-50">
//                 {/* Assuming Profile component or dropdown here */}
//               </div>
//             )}
//           </>
//         ) : (
//           <Link to="/login" className="bg-white text-red-500 px-3 py-1 rounded">
//             Login
//           </Link>
//         )}
//         <Link to="/cart" className="relative">
//           <FaShoppingCart size={24} />
//           {cart.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//               {cart.length}
//             </span>
//           )}
//         </Link>
//       </div>
//       {province && (
//         <div className="w-full text-center mt-2 font-semibold">
//           Province: {province}
//         </div>
//       )}
//     </header>
//   );
// }

// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart, FaSearch } from "react-icons/fa";
// import { useState } from "react";

// export default function Header({ user, cart, province, setUser, searchTerm, setSearchTerm }) {
//   const navigate = useNavigate();
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [showSearchInput, setShowSearchInput] = useState(false);

//   const logout = () => {
//     // Your logout logic here
//     setUser(null);
//     setProfileOpen(false);
//     navigate("/login");
//   };

//   const toggleProfile = () => setProfileOpen(!profileOpen);

//   const toggleSearchInput = () => {
//     setShowSearchInput(!showSearchInput);
//     if (showSearchInput) setSearchTerm(""); // Clear on close
//   };

//   return (
//     <header className="fixed text-center font-semibold w-full top-0 z-60 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-5 flex flex-wrap justify-between items-center shadow-lg">
//       <h1 className="text-3xl font-extrabold cursor-pointer">
//         <Link to="/">FoodOrderNP</Link>
//       </h1>
//       <nav className="flex space-x-6 items-center">
//         {["Home", "Cart", "About", "Contact"].map((p) => (
//           <Link
//             key={p}
//             to={`/${p.toLowerCase() === "home" ? "" : p.toLowerCase()}`}
//             className="hover:text-yellow-300"
//           >
//             {p}
//           </Link>
//         ))}
//       </nav>

//       <div className="flex items-center space-x-4 relative">
//         {/* Search Icon and Input */}
//         <div className="relative">
//           <button
//             onClick={toggleSearchInput}
//             className="text-white hover:text-yellow-300 focus:outline-none"
//             aria-label="Toggle Search"
//           >
//             <FaSearch size={20} />
//           </button>
//           {showSearchInput && (
//             <input
//               type="text"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               placeholder="Search food..."
//               className="absolute right-0 mt-2 w-48 px-2 py-1 rounded border border-gray-300 text-black focus:outline-none"
//               autoFocus
//             />
//           )}
//         </div>

//         {user ? (
//           <>
//             <img
//               src={
//                 user.image
//                   ? `http://localhost:5000/uploads/${user.image}`
//                   : "/default-profile.png"
//               }
//               alt="Profile"
//               className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
//               onClick={toggleProfile}
//               title={`Hello, ${user.name}`}
//             />
//             {profileOpen && (
//               <div className="absolute right-0 top-12 z-50 bg-white text-black rounded shadow-md p-3">
//                 <p className="mb-2 font-semibold">{user.name}</p>
//                 <button
//                   onClick={logout}
//                   className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <Link to="/login" className="bg-white text-red-500 px-3 py-1 rounded">
//             Login
//           </Link>
//         )}

//         <Link to="/cart" className="relative" title="Cart">
//           <FaShoppingCart size={24} />
//           {cart.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//               {cart.length}
//             </span>
//           )}
//         </Link>
//       </div>

//       {province && (
//         <div className="w-full text-center mt-2 font-semibold">
//           Province: {province}
//         </div>
//       )}
//     </header>
//   );
// }

// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart, FaSearch } from "react-icons/fa";
// import { useState } from "react";
// import Profile from "./Profile";

// export default function Header({ user, cart, province, setUser, onLogout, onProfileClick, searchTerm, setSearchTerm }) {
//   const navigate = useNavigate();
//   const [profileOpen, setProfileOpen] = useState(false);

//   const logout = () => {
//     fetch("http://localhost:5000/api/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     }).then(() => {
//       setUser(null);
//       setProfileOpen(false);
//       navigate("/login");
//       if (onLogout) onLogout();
//     });
//   };

//   const handleSearchClick = () => {
//     navigate("/");
//   };

//   return (
//     <header className="fixed w-full top-0 z-50 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-4 flex justify-between items-center shadow-lg">
//       <Link to="/" className="text-3xl font-extrabold">
//         FoodOrderNP
//       </Link>

//       <nav className="flex space-x-6">
//         {["Home", "Cart", "About", "Contact"].map((p) => (
//           <Link key={p} to={`/${p.toLowerCase() === "home" ? "" : p.toLowerCase()}`} className="hover:text-yellow-300">
//             {p}
//           </Link>
//         ))}
//       </nav>

//       <div className="flex items-center gap-4 relative">
//         {/* Search */}
//         <div className="flex items-center bg-white rounded px-2 py-1">
//           <input
//             type="text"
//             value={searchTerm}
//             onChange={(e) => {
//               setSearchTerm(e.target.value);
//               navigate("/");
//             }}
//             placeholder="Search food..."
//             className="outline-none text-black px-2 w-32 md:w-48"
//           />
//           <FaSearch
//             className="text-black cursor-pointer"
//             onClick={handleSearchClick}
//             title="Search"
//           />
//         </div>

//         {/* Profile */}
//         {user ? (
//           <img
//             src={user.image ? `http://localhost:5000/uploads/${user.image}` : "/default-profile.png"}
//             alt="Profile"
//             className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
//             onClick={() => navigate("/profile")}
//             title={`Hello, ${user.name}`}
//           />
//         ) : (
//           <Link to="/login" className="bg-white text-red-500 px-3 py-1 rounded">Login</Link>
//         )}

//         {/* Cart */}
//         <Link to="/cart" className="relative">
//           <FaShoppingCart size={24} />
//           {cart.length > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
//               {cart.reduce((sum, item) => sum + item.qty, 0)}
//             </span>
//           )}
//         </Link>
//       </div>

//       {province && (
//         <div className="w-full text-center mt-2 font-semibold">
//           Province: {province}
//         </div>
//       )}
//     </header>
//   );
// }import { Link, useNavigate } from "react-router-dom";







// import { Link, useNavigate } from "react-router-dom";
// import { FaShoppingCart } from "react-icons/fa";
// import { useState } from "react";

// export default function Header({ user, cart, province, setProvince, onLogout }) {
//   const navigate = useNavigate();

//   const logout = () => {
//     fetch("http://localhost:5000/api/auth/logout", {
//       method: "POST",
//       credentials: "include",
//     }).then(() => {
//       onLogout();
//       navigate("/login");
//     });
//   };

//   const provinces = [
//     "Koshi",
//     "Madhesh",
//     "Bagmati",
//     "Gandaki",
//     "Lumbini",
//     "Karnali",
//     "Sudurpashchim",
//   ];

//   return (
//     <header className="fixed top-0 w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white shadow-lg z-50 p-4 flex flex-wrap items-center justify-between">
//       <div className="flex items-center space-x-4">
//         <h1 className="text-3xl font-extrabold cursor-pointer">
//           <Link to="/">FoodOrderNP</Link>
//         </h1>

//         <select
//           className="ml-4 bg-white text-black rounded px-3 py-2"
//           value={province}
//           onChange={(e) => setProvince(e.target.value)}
//           title="Select Province"
//         >
//           <option value="">Select Province</option>
//           {provinces.map((prov) => (
//             <option key={prov} value={prov}>
//               {prov}
//             </option>
//           ))}
//         </select>

//         {province && (
//           <div className="ml-4 font-semibold bg-green-700 px-6 py-2 rounded">
//             Province: {province}
//           </div>
//         )}
//       </div>

//       <nav className="flex space-x-6 items-center">
//         {["Home", "Cart", "About", "Contact"].map((p) => (
//           <Link
//             key={p}
//             to={`/${p.toLowerCase() === "home" ? "" : p.toLowerCase()}`}
//             className="hover:text-yellow-300 font-semibold"
//           >
//             {p}
//           </Link>
//         ))}

//         {user ? (
//           <>
//             <img
//               src={
//                 user.image
//                   ? `http://localhost:5000/uploads/${user.image}`
//                   : "/default-profile.png"
//               }
//               alt="Profile"
//               className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
//               onClick={() => navigate("/profile")}
//               title={`Hello, ${user.name}`}
//             />
//             <button
//               onClick={logout}
//               className="ml-4 bg-white text-red-500 px-3 py-1 rounded font-semibold"
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <Link
//             to="/login"
//             className="bg-white text-red-500 px-4 py-2 rounded font-semibold"
//           >
//             Login
//           </Link>
//         )}

//         <div
//           className="relative cursor-pointer"
//           onClick={() => navigate("/cart")}
//           title="Cart"
//         >
//           <FaShoppingCart className="text-2xl" />
//           {cart.length > 0 && (
//             <span className="absolute -top-1 -right-2 bg-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center text-white font-bold">
//               {cart.reduce((a, c) => a + c.qty, 0)}
//             </span>
//           )}
//         </div>
//       </nav>
//     </header>
//   );
// }




import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function Header({ user, cart, province, setProvince, onLogout, onSearch }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const logout = () => {
    fetch("http://localhost:3001/api/auth/logout", {
      method: "POST",
      credentials: "include",
    }).then(() => {
      onLogout();
      navigate("/login");
    });
  };

  const provinces = [
    "Koshi",
    "Madhesh",
    "Bagmati",
    "Gandaki",
    "Lumbini",
    "Karnali",
    "Sudurpashchim",
  ];

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white shadow-lg z-50 p-4 flex flex-wrap items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-3xl font-extrabold cursor-pointer">
          <Link to="/">FoodOrderNP</Link>
        </h1>

        <select
          className="ml-4 bg-white text-black rounded px-3 py-2"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          title="Select Province"
        >
          <option value="">Select Province</option>
          {provinces.map((prov) => (
            <option key={prov} value={prov}>
              {prov}
            </option>
          ))}
        </select>

        {province && (
          <div className="ml-4 font-semibold bg-green-700 px-6 py-2 rounded">
            Province: {province}
          </div>
        )}
      </div>

      <nav className="flex space-x-6 items-center">
        <div className="relative text-gray-600">
          <input
            type="search"
            name="search"
            placeholder="Search food..."
            value={searchInput}
            onChange={handleSearchChange}
            className="bg-white h-10 px-12 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black shadow-md"
          />
          <FaSearch
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400"
            size={16}
          />
        </div>

        {["Home", "Cart", "About", "Contact"].map((p) => (
          <Link
            key={p}
            to={`/${p.toLowerCase() === "home" ? "" : p.toLowerCase()}`}
            className="hover:text-yellow-300 font-semibold"
          >
            {p}
          </Link>
        ))}

        {user ? (
          <>
            <img
              src={
                user.image
                  ? `http://localhost:5000/uploads/${user.image}`
                  : "/default-profile.png"
              }
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
              onClick={() => navigate("/profile")}
              title={`Hello, ${user.name}`}
            />
            <button
              onClick={logout}
              className="ml-4 bg-white text-red-500 px-3 py-1 rounded font-semibold"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="bg-white text-red-500 px-4 py-2 rounded font-semibold"
          >
            Login
          </Link>
        )}

        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
          title="Cart"
        >
          <FaShoppingCart className="text-2xl" />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center text-white font-bold">
              {cart.reduce((a, c) => a + c.qty, 0)}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}





