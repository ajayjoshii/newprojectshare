// // // import { useState, useEffect } from "react";
// // // import { useNavigate, useLocation } from "react-router-dom";

// // // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // // const phoneRegex = /^9\d{9}$/;
// // // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

// // // export default function Login({ onLogin, onRegister }) {
// // //   const [mode, setMode] = useState("login");
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [phone, setPhone] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const navigate = useNavigate();
// // //   const location = useLocation();

// // //   // Read token from URL on OAuth success redirect
// // //   useEffect(() => {
// // //     const params = new URLSearchParams(location.search);
// // //     const token = params.get("token");
// // //     if (token) {
// // //       // Optional: verify token by calling backend or decode JWT here
// // //       // For demo: store token & navigate
// // //       localStorage.setItem("authToken", token);
// // //       alert("Login successful via social account!");
// // //       navigate("/");
// // //     }
// // //   }, [location, navigate]);

// // //   const validateRegister = () => {
// // //     if (!name) return "Name is required.";
// // //     if (!emailRegex.test(email)) return "Invalid email format.";
// // //     if (!phoneRegex.test(phone)) return "Invalid Nepali phone number.";
// // //     if (!passwordRegex.test(password))
// // //       return "Password must be 6+ chars with letters and numbers.";
// // //     return null;
// // //   };

// // //   const validateLogin = () => {
// // //     if (!emailRegex.test(email)) return "Invalid email format.";
// // //     if (!password) return "Password is required.";
// // //     return null;
// // //   };

// // //   const submit = async () => {
// // //     const url =
// // //       mode === "register"
// // //         ? "http://localhost:5000/api/auth/register"
// // //         : "http://localhost:5000/api/auth/login";

// // //     const body =
// // //       mode === "register"
// // //         ? { name, email, phone, password }
// // //         : { email, password };

// // //     const err = mode === "register" ? validateRegister() : validateLogin();
// // //     if (err) return alert(err);

// // //     const res = await fetch(url, {
// // //       method: "POST",
// // //       headers: { "Content-Type": "application/json" },
// // //       body: JSON.stringify(body),
// // //     });

// // //     const data = await res.json();
// // //     if (res.ok) {
// // //       alert(`${mode === "register" ? "Registration" : "Login"} successful`);
// // //       mode === "register" ? onRegister(data.user) : onLogin(data.user);
// // //       localStorage.setItem("authToken", data.token);
// // //       navigate("/");
// // //     } else {
// // //       alert(data.message || "Failed. Try again.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
// // //       <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-10">
// // //         <h2 className="text-3xl font-bold mb-8 text-center">
// // //           {mode === "login" ? "Login" : "Register"}
// // //         </h2>

// // //         {mode === "register" && (
// // //           <input
// // //             placeholder="Name"
// // //             value={name}
// // //             onChange={(e) => setName(e.target.value)}
// // //             className="mb-4 w-full p-3 border rounded focus:ring-2"
// // //           />
// // //         )}

// // //         <input
// // //           type="email"
// // //           placeholder="Email"
// // //           value={email}
// // //           onChange={(e) => setEmail(e.target.value)}
// // //           className="mb-4 w-full p-3 border rounded focus:ring-2"
// // //         />

// // //         {mode === "register" && (
// // //           <input
// // //             placeholder="Phone (e.g. 98xxxxxxxx)"
// // //             value={phone}
// // //             onChange={(e) => setPhone(e.target.value)}
// // //             className="mb-4 w-full p-3 border rounded focus:ring-2"
// // //           />
// // //         )}

// // //         <input
// // //           type="password"
// // //           placeholder="Password"
// // //           value={password}
// // //           onChange={(e) => setPassword(e.target.value)}
// // //           className="mb-6 w-full p-3 border rounded focus:ring-2"
// // //         />

// // //         <button
// // //           onClick={submit}
// // //           className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 mb-4"
// // //         >
// // //           {mode === "login" ? "Login" : "Register"}
// // //         </button>

// // //         <div className="mb-6 text-center space-y-2">
// // //           <a
// // //             href="http://localhost:5000/api/auth/google"
// // //             className="block w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
// // //           >
// // //             Continue with Google
// // //           </a>
// // //           <a
// // //             href="http://localhost:5000/api/auth/facebook"
// // //             className="block w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// // //           >
// // //             Continue with Facebook
// // //           </a>
// // //         </div>

// // //         <p className="text-sm text-center">
// // //           {mode === "login" ? (
// // //             <>
// // //               Don't have an account?{" "}
// // //               <span
// // //                 className="text-blue-600 underline cursor-pointer"
// // //                 onClick={() => setMode("register")}
// // //               >
// // //                 Register
// // //               </span>
// // //             </>
// // //           ) : (
// // //             <>
// // //               Already registered?{" "}
// // //               <span
// // //                 className="text-blue-600 underline cursor-pointer"
// // //                 onClick={() => setMode("login")}
// // //               >
// // //                 Login
// // //               </span>
// // //             </>
// // //           )}
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import { useState, useEffect } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";

// // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // const phoneRegex = /^9\d{9}$/;
// // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

// // export default function Login({ onLogin, onRegister }) {
// //   const [mode, setMode] = useState("login");
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   useEffect(() => {
// //     if (location.pathname === "/login-success") {
// //       // Fetch current user or just simulate logged-in state
// //       fetch("http://localhost:5000/api/auth/current-user", {
// //         credentials: "include",
// //       })
// //         .then((res) => res.json())
// //         .then((data) => {
// //           if (data.user) {
// //             onLogin(data.user);
// //             navigate("/");
// //           } else {
// //             alert("Failed to fetch user info");
// //           }
// //         });
// //     }
// //   }, [location, navigate, onLogin]);

// //   const validateRegister = () => {
// //     if (!name) return "Name is required.";
// //     if (!emailRegex.test(email)) return "Invalid email format.";
// //     if (!phoneRegex.test(phone)) return "Invalid Nepali phone number.";
// //     if (!passwordRegex.test(password))
// //       return "Password must be 6+ chars with letters and numbers.";
// //     return null;
// //   };

// //   const validateLogin = () => {
// //     if (!emailRegex.test(email)) return "Invalid email format.";
// //     if (!password) return "Password is required.";
// //     return null;
// //   };

// //   const submit = async () => {
// //     const url =
// //       mode === "register"
// //         ? "http://localhost:5000/api/auth/register"
// //         : "http://localhost:5000/api/auth/login";

// //     const body =
// //       mode === "register"
// //         ? { name, email, phone, password }
// //         : { email, password };

// //     const err = mode === "register" ? validateRegister() : validateLogin();
// //     if (err) return alert(err);

// //     const res = await fetch(url, {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       credentials: "include",
// //       body: JSON.stringify(body),
// //     });

// //     const data = await res.json();
// //     if (res.ok) {
// //       alert(`${mode === "register" ? "Registration" : "Login"} successful`);
// //       mode === "register" ? onRegister(data.user) : onLogin(data.user);
// //       navigate("/");
// //     } else {
// //       alert(data.message || "Failed. Try again.");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
// //       <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-10">
// //         <h2 className="text-3xl font-bold mb-8 text-center">
// //           {mode === "login" ? "Login" : "Register"}
// //         </h2>

// //         {mode === "register" && (
// //           <input
// //             placeholder="Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             className="mb-4 w-full p-3 border rounded focus:ring-2"
// //           />
// //         )}

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="mb-4 w-full p-3 border rounded focus:ring-2"
// //         />

// //         {mode === "register" && (
// //           <input
// //             placeholder="Phone (e.g. 98xxxxxxxx)"
// //             value={phone}
// //             onChange={(e) => setPhone(e.target.value)}
// //             className="mb-4 w-full p-3 border rounded focus:ring-2"
// //           />
// //         )}

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="mb-6 w-full p-3 border rounded focus:ring-2"
// //         />

// //         <button
// //           onClick={submit}
// //           className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 mb-4"
// //         >
// //           {mode === "login" ? "Login" : "Register"}
// //         </button>

// //         {/* OAuth buttons */}
// //         <div className="mb-6 text-center space-y-2">
// //           <a
// //             href="http://localhost:5000/api/auth/google"
// //             className="block w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
// //           >
// //             Continue with Google
// //           </a>
// //           <a
// //             href="http://localhost:5000/api/auth/facebook"
// //             className="block w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
// //           >
// //             Continue with Facebook
// //           </a>
// //         </div>

// //         <p className="text-sm text-center">
// //           {mode === "login" ? (
// //             <>
// //               Don't have an account?{" "}
// //               <span
// //                 className="text-blue-600 underline cursor-pointer"
// //                 onClick={() => setMode("register")}
// //               >
// //                 Register
// //               </span>
// //             </>
// //           ) : (
// //             <>
// //               Already registered?{" "}
// //               <span
// //                 className="text-blue-600 underline cursor-pointer"
// //                 onClick={() => setMode("login")}
// //               >
// //                 Login
// //               </span>
// //             </>
// //           )}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }
// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const phoneRegex = /^9\d{9}$/;
// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

// export default function Login({ onLogin, onRegister }) {
//   const [mode, setMode] = useState("login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === "/login-success") {
//       // Fetch current user or just simulate logged-in state
//       fetch("http://localhost:5000/api/auth/current-user", {
//         credentials: "include",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.user) {
//             onLogin(data.user);
//             navigate("/");
//           } else {
//             alert("Failed to fetch user info");
//           }
//         });
//     }
//   }, [location, navigate, onLogin]);

//   const validateRegister = () => {
//     if (!name) return "Name is required.";
//     if (!emailRegex.test(email)) return "Invalid email format.";
//     if (!phoneRegex.test(phone)) return "Invalid Nepali phone number.";
//     if (!passwordRegex.test(password))
//       return "Password must be 6+ chars with letters and numbers.";
//     return null;
//   };

//   const validateLogin = () => {
//     if (!emailRegex.test(email)) return "Invalid email format.";
//     if (!password) return "Password is required.";
//     return null;
//   };

//   const submit = async () => {
//     const url =
//       mode === "register"
//         ? "http://localhost:5000/api/auth/register"
//         : "http://localhost:5000/api/auth/login";

//     const body =
//       mode === "register"
//         ? { name, email, phone, password }
//         : { email, password };

//     const err = mode === "register" ? validateRegister() : validateLogin();
//     if (err) return alert(err);

//     const res = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify(body),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       alert(`${mode === "register" ? "Registration" : "Login"} successful`);
//       mode === "register" ? onRegister(data.user) : onLogin(data.user);
//       navigate("/");
//     } else {
//       alert(data.message || "Failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
//       <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-10">
//         <h2 className="text-3xl font-bold mb-8 text-center">
//           {mode === "login" ? "Login" : "Register"}
//         </h2>

//         {mode === "register" && (
//           <input
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mb-4 w-full p-3 border rounded focus:ring-2"
//           />
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mb-4 w-full p-3 border rounded focus:ring-2"
//         />

//         {mode === "register" && (
//           <input
//             placeholder="Phone (e.g. 98xxxxxxxx)"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="mb-4 w-full p-3 border rounded focus:ring-2"
//           />
//         )}

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mb-6 w-full p-3 border rounded focus:ring-2"
//         />

//         <button
//           onClick={submit}
//           className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 mb-4"
//         >
//           {mode === "login" ? "Login" : "Register"}
//         </button>

//         {/* OAuth buttons */}
//         <div className="mb-6 text-center space-y-2">
//           <a
//             href="http://localhost:5000/api/auth/google"
//             className="block w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
//           >
//             Continue with Google
//           </a>
//           <a
//             href="http://localhost:5000/api/auth/facebook"
//             className="block w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Continue with Facebook
//           </a>
//         </div>

//         <p className="text-sm text-center">
//           {mode === "login" ? (
//             <>
//               Don't have an account?{" "}
//               <span
//                 className="text-blue-600 underline cursor-pointer"
//                 onClick={() => setMode("register")}
//               >
//                 Register
//               </span>
//             </>
//           ) : (
//             <>
//               Already registered?{" "}
//               <span
//                 className="text-blue-600 underline cursor-pointer"
//                 onClick={() => setMode("login")}
//               >
//                 Login
//               </span>
//             </>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// }
// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const phoneRegex = /^9\d{9}$/;
// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

// export default function Login({ onLogin, onRegister }) {
//   const [mode, setMode] = useState("login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const [image, setImage] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === "/login-success") {
//       fetch("http://localhost:5000/api/auth/current-user", {
//         credentials: "include",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.user) {
//             onLogin(data.user);
//             navigate("/");
//           } else {
//             alert("Failed to fetch user info");
//           }
//         });
//     }
//   }, [location, navigate, onLogin]);

//   const validateRegister = () => {
//     if (!name) return "Name is required.";
//     if (!emailRegex.test(email)) return "Invalid email format.";
//     if (!phoneRegex.test(phone)) return "Invalid Nepali phone number.";
//     if (!passwordRegex.test(password))
//       return "Password must be 6+ chars with letters and numbers.";
//     if (!address) return "Address is required.";
//     if (!image) return "Image URL is required.";
//     return null;
//   };

//   const validateLogin = () => {
//     if (!emailRegex.test(email)) return "Invalid email format.";
//     if (!password) return "Password is required.";
//     return null;
//   };

//   const submit = async () => {
//     const url =
//       mode === "register"
//         ? "http://localhost:5000/api/auth/register"
//         : "http://localhost:5000/api/auth/login";

//     const body =
//       mode === "register"
//         ? { name, email, phone, password, address, image }
//         : { email, password };

//     const err = mode === "register" ? validateRegister() : validateLogin();
//     if (err) return alert(err);

//     const res = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include",
//       body: JSON.stringify(body),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       alert(`${mode === "register" ? "Registration" : "Login"} successful`);
//       mode === "register" ? onRegister(data.user) : onLogin(data.user);
//       navigate("/");
//     } else {
//       alert(data.message || "Failed. Try again.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
//       <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-10">
//         <h2 className="text-3xl font-bold mb-8 text-center">
//           {mode === "login" ? "Login" : "Register"}
//         </h2>

//         {mode === "register" && (
//           <>
//             <input
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mb-4 w-full p-3 border rounded focus:ring-2"
//             />
//             <input
//               placeholder="Phone (e.g. 98xxxxxxxx)"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="mb-4 w-full p-3 border rounded focus:ring-2"
//             />
//             <input
//               placeholder="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="mb-4 w-full p-3 border rounded focus:ring-2"
//             />
//             <input
//               placeholder="Image URL"
//               value={image}
//               onChange={(e) => setImage(e.target.value)}
//               className="mb-4 w-full p-3 border rounded focus:ring-2"
//             />
//           </>
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mb-4 w-full p-3 border rounded focus:ring-2"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mb-6 w-full p-3 border rounded focus:ring-2"
//         />

//         <button
//           onClick={submit}
//           className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 mb-4"
//         >
//           {mode === "login" ? "Login" : "Register"}
//         </button>

//         <div className="mb-6 text-center space-y-2">
//           <a
//             href="http://localhost:5000/api/auth/google"
//             className="block w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
//           >
//             Continue with Google
//           </a>
//           <a
//             href="http://localhost:5000/api/auth/facebook"
//             className="block w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Continue with Facebook
//           </a>
//         </div>

//         <p className="text-sm text-center">
//           {mode === "login" ? (
//             <>
//               Don't have an account?{" "}
//               <span
//                 className="text-blue-600 underline cursor-pointer"
//                 onClick={() => setMode("register")}
//               >
//                 Register
//               </span>
//             </>
//           ) : (
//             <>
//               Already registered?{" "}
//               <span
//                 className="text-blue-600 underline cursor-pointer"
//                 onClick={() => setMode("login")}
//               >
//                 Login
//               </span>
//             </>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// // }
// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const phoneRegex = /^9\d{9}$/;
// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

// export default function Login({ onLogin, onRegister }) {
//   const [mode, setMode] = useState("login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const [imageFile, setImageFile] = useState(null);
//   const [imageBase64, setImageBase64] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === "/login-success") {
//       fetch("http://localhost:5000/api/auth/current-user", {
//         credentials: "include",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.user) {
//             onLogin(data.user);
//             navigate("/");
//           } else {
//             alert("Failed to fetch user info");
//           }
//         });
//     }
//   }, [location, navigate, onLogin]);

//   // Convert image file to base64 string for sending to backend
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) {
//       setImageFile(null);
//       setImageBase64("");
//       return;
//     }
//     setImageFile(file);
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImageBase64(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const validateRegister = () => {
//     if (!name.trim()) return "Name is required.";
//     if (!emailRegex.test(email)) return "Invalid email format.";
//     if (!phoneRegex.test(phone)) return "Invalid Nepali phone number.";
//     if (!passwordRegex.test(password))
//       return "Password must be 6+ chars with letters and numbers.";
//     if (!address.trim()) return "Address is required.";
//     if (!imageBase64) return "Profile image is required.";
//     return null;
//   };

//   const validateLogin = () => {
//     if (!emailRegex.test(email)) return "Invalid email format.";
//     if (!password) return "Password is required.";
//     return null;
//   };

//   const submit = async () => {
//     setLoading(true);
//     const url =
//       mode === "register"
//         ? "http://localhost:5000/api/auth/register"
//         : "http://localhost:5000/api/auth/login";

//     const body =
//       mode === "register"
//         ? { name, email, phone, password, address, profileImage: imageBase64 }
//         : { email, password };

//     const err = mode === "register" ? validateRegister() : validateLogin();
//     if (err) {
//       alert(err);
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify(body),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert(`${mode === "register" ? "Registration" : "Login"} successful`);
//         if (mode === "register") {
//           onRegister(data.user);
//         } else {
//           onLogin(data.user);
//         }
//         navigate("/");
//       } else {
//         alert(data.message || "Failed. Try again.");
//       }
//     } catch (error) {
//       alert("Network error. Try again.");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
//       <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-10">
//         <h2 className="text-3xl font-bold mb-8 text-center">
//           {mode === "login" ? "Login" : "Register"}
//         </h2>

//         {mode === "register" && (
//           <>
//             <input
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="mb-4 w-full p-3 border rounded focus:ring-2"
//               disabled={loading}
//             />
//             <input
//               placeholder="Phone (e.g. 98xxxxxxxx)"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="mb-4 w-full p-3 border rounded focus:ring-2"
//               disabled={loading}
//             />
//             <input
//               placeholder="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="mb-4 w-full p-3 border rounded focus:ring-2"
//               disabled={loading}
//             />
//             <label className="mb-4 block">
//               Profile Image Upload:
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 className="mt-1"
//                 disabled={loading}
//               />
//             </label>
//             {imageBase64 && (
//               <img
//                 src={imageBase64}
//                 alt="Profile preview"
//                 className="w-24 h-24 object-cover rounded-full mb-4"
//               />
//             )}
//           </>
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="mb-4 w-full p-3 border rounded focus:ring-2"
//           disabled={loading}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="mb-6 w-full p-3 border rounded focus:ring-2"
//           disabled={loading}
//         />

//         <button
//           onClick={submit}
//           disabled={loading}
//           className={`w-full py-3 rounded mb-4 text-white ${
//             loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
//           }`}
//         >
//           {loading ? "Please wait..." : mode === "login" ? "Login" : "Register"}
//         </button>

//         <div className="mb-6 text-center space-y-2">
//           <a
//             href="http://localhost:5000/api/auth/google"
//             className="block w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
//           >
//             Continue with Google
//           </a>
//           <a
//             href="http://localhost:5000/api/auth/facebook"
//             className="block w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//           >
//             Continue with Facebook
//           </a>
//         </div>

//         <p className="text-sm text-center">
//           {mode === "login" ? (
//             <>
//               Don't have an account?{" "}
//               <span
//                 className="text-blue-600 underline cursor-pointer"
//                 onClick={() => setMode("register")}
//               >
//                 Register
//               </span>
//             </>
//           ) : (
//             <>
//               Already registered?{" "}
//               <span
//                 className="text-blue-600 underline cursor-pointer"
//                 onClick={() => setMode("login")}
//               >
//                 Login
//               </span>
//             </>
//           )}
//         </p>
//       </div>
//     </div>
//   );
// }




// imported comment working

import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^9\d{9}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

export default function Login({ onLogin, onRegister }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login-success") {
      fetch("http://localhost:5000/api/auth/current-user", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.user) {
            onLogin(data.user);
            navigate("/");
          } else {
            alert("Failed to fetch user info");
          }
        });
    }
  }, [location, navigate, onLogin]);

  const validateRegister = () => {
    if (!name.trim()) return "Name is required.";
    if (!emailRegex.test(email)) return "Invalid email format.";
    if (!phoneRegex.test(phone)) return "Invalid Nepali phone number.";
    if (!passwordRegex.test(password))
      return "Password must be 6+ chars with letters and numbers.";
    if (!address.trim()) return "Address is required.";
    return null;
  };

  const validateLogin = () => {
    if (!emailRegex.test(email)) return "Invalid email format.";
    if (!password) return "Password is required.";
    return null;
  };

  const submit = async () => {
    setLoading(true);
    const url =
      mode === "register"
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";

    const body =
      mode === "register"
        ? { name, email, phone, password, address }
        : { email, password };

    const err = mode === "register" ? validateRegister() : validateLogin();
    if (err) {
      alert(err);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (res.ok) {
        alert(`${mode === "register" ? "Registration" : "Login"} successful`);
        if (mode === "register") {
          onRegister(data.user);
        } else {
          onLogin(data.user);
        }
        navigate("/");
      } else {
        alert(data.message || "Failed. Try again.");
      }
    } catch (error) {
      alert("Network error. Try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-10">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {mode === "login" ? "Login" : "Register"}
        </h2>

        {mode === "register" && (
          <>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4 w-full p-3 border rounded focus:ring-2"
              disabled={loading}
            />
            <input
              placeholder="Phone (e.g. 98xxxxxxxx)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mb-4 w-full p-3 border rounded focus:ring-2"
              disabled={loading}
            />
            <input
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mb-4 w-full p-3 border rounded focus:ring-2"
              disabled={loading}
            />
          </>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full p-3 border rounded focus:ring-2"
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6 w-full p-3 border rounded focus:ring-2"
          disabled={loading}
        />

        {mode === "login" && (
          <div className="text-right text-sm mb-4">
            <Link to="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
        )}

        <button
          onClick={submit}
          disabled={loading}
          className={`w-full py-3 rounded mb-4 text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {loading ? "Please wait..." : mode === "login" ? "Login" : "Register"}
        </button>

        <div className="mb-6 text-center space-y-2">
          <a
            href="http://localhost:5000/api/auth/google"
            className="block w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Continue with Google
          </a>
          <a
            href="http://localhost:5000/api/auth/facebook"
            className="block w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Continue with Facebook
          </a>
        </div>

        <p className="text-sm text-center">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <span
                className="text-blue-600 underline cursor-pointer"
                onClick={() => setMode("register")}
              >
                Register
              </span>
            </>
          ) : (
            <>
              Already registered?{" "}
              <span
                className="text-blue-600 underline cursor-pointer"
                onClick={() => setMode("login")}
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}






// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login({ setUser }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");
//   const [isRegister, setIsRegister] = useState(false);
//   const [phone, setPhone] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const url = isRegister ? "http://localhost:5000/api/auth/register" : "http://localhost:5000/api/auth/login";
//     const payload = isRegister
//       ? { name, email, phone, password }
//       : { email, password };

//     try {
//       const res = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();

//       if (res.ok) {
//         setUser(data.user);
//         localStorage.setItem("token", data.token);
//         alert("Success!");
//         navigate("/");
//       } else {
//         alert(data.message || "Error");
//       }
//     } catch (err) {
//       alert("Network error");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-24 p-6 bg-white rounded shadow">
//       <h2 className="text-2xl font-bold mb-4">{isRegister ? "Register" : "Login"}</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {isRegister && (
//           <>
//             <input
//               required
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={e => setName(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//             />
//             <input
//               required
//               type="text"
//               placeholder="Phone"
//               value={phone}
//               onChange={e => setPhone(e.target.value)}
//               className="w-full border rounded px-3 py-2"
//             />
//           </>
//         )}
//         <input
//           required
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           className="w-full border rounded px-3 py-2"
//         />
//         <input
//           required
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           className="w-full border rounded px-3 py-2"
//         />
//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//         >
//           {isRegister ? "Register" : "Login"}
//         </button>
//       </form>
//       <p className="mt-4 text-center">
//         {isRegister ? "Already have an account? " : "Don't have an account? "}
//         <button
//           onClick={() => setIsRegister(!isRegister)}
//           className="text-green-600 underline"
//         >
//           {isRegister ? "Login" : "Register"}
//         </button>
//       </p>
//     </div>
//   );
// }



