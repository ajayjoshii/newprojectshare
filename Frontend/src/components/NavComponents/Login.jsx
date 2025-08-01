// // import { useState, useEffect } from "react";
// // import { useNavigate, useLocation, Link } from "react-router-dom";

// // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// // const phoneRegex = /^9\d{9}$/;
// // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

// // const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// // export default function Login({ onLogin, onRegister }) {
// //   const [mode, setMode] = useState("login");
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [address, setAddress] = useState("");
// //   const [loading, setLoading] = useState(false);

// //   const navigate = useNavigate();
// //   const location = useLocation();

// //   useEffect(() => {
// //     if (location.pathname === "/login-success") {
// //       fetch(`${BASE_URL}/api/auth/current-user`, {
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
// //     if (!name.trim()) return "Name is required.";
// //     if (!emailRegex.test(email)) return "Invalid email format.";
// //     if (!phoneRegex.test(phone)) return "Invalid Nepali phone number.";
// //     if (!passwordRegex.test(password)) return "Password must be 6+ chars with letters and numbers.";
// //     if (!address.trim()) return "Address is required.";
// //     return null;
// //   };

// //   const validateLogin = () => {
// //     if (!emailRegex.test(email)) return "Invalid email format.";
// //     if (!password) return "Password is required.";
// //     return null;
// //   };

// //   const submit = async () => {
// //     setLoading(true);
// //     const url =
// //       mode === "register"
// //         ? `${BASE_URL}/api/auth/register`
// //         : `${BASE_URL}/api/auth/login`;

// //     const body =
// //       mode === "register"
// //         ? { name, email, phone, password, address }
// //         : { email, password };

// //     const err = mode === "register" ? validateRegister() : validateLogin();
// //     if (err) {
// //       alert(err);
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       const res = await fetch(url, {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         credentials: "include",
// //         body: JSON.stringify(body),
// //       });

// //       const data = await res.json();
// //       if (res.ok) {
// //         alert(`${mode === "register" ? "Registration" : "Login"} successful`);
// //         if (mode === "register") {
// //           onRegister(data.user);
// //         } else {
// //           onLogin(data.user);
// //         }
// //         navigate("/");
// //       } else {
// //         alert(data.message || "Failed. Try again.");
// //       }
// //     } catch (error) {
// //       alert("Network error. Try again.");
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
// //       <div className="w-full max-w-xl bg-white shadow-lg rounded-lg p-10">
// //         <h2 className="text-3xl font-bold mb-8 text-center">
// //           {mode === "login" ? "Login" : "Register"}
// //         </h2>

// //         {mode === "register" && (
// //           <>
// //             <input
// //               placeholder="Name"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               className="mb-4 w-full p-3 border rounded focus:ring-2"
// //               disabled={loading}
// //             />
// //             <input
// //               placeholder="Phone (e.g. 98xxxxxxxx)"
// //               value={phone}
// //               onChange={(e) => setPhone(e.target.value)}
// //               className="mb-4 w-full p-3 border rounded focus:ring-2"
// //               disabled={loading}
// //             />
// //             <input
// //               placeholder="Address"
// //               value={address}
// //               onChange={(e) => setAddress(e.target.value)}
// //               className="mb-4 w-full p-3 border rounded focus:ring-2"
// //               disabled={loading}
// //             />
// //           </>
// //         )}

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           value={email}
// //           onChange={(e) => setEmail(e.target.value)}
// //           className="mb-4 w-full p-3 border rounded focus:ring-2"
// //           disabled={loading}
// //         />

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           value={password}
// //           onChange={(e) => setPassword(e.target.value)}
// //           className="mb-6 w-full p-3 border rounded focus:ring-2"
// //           disabled={loading}
// //         />

// //         {mode === "login" && (
// //           <div className="text-right text-sm mb-4">
// //             <Link to="/forgot-password" className="text-blue-600 hover:underline">
// //               Forgot Password?
// //             </Link>
// //           </div>
// //         )}

// //         <button
// //           onClick={submit}
// //           disabled={loading}
// //           className={`w-full py-3 rounded mb-4 text-white ${
// //             loading
// //               ? "bg-gray-400 cursor-not-allowed"
// //               : "bg-green-600 hover:bg-green-700"
// //           }`}
// //         >
// //           {loading ? "Please wait..." : mode === "login" ? "Login" : "Register"}
// //         </button>

        

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
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import axios from "axios";

// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const phoneRegex = /^9\d{9}$/;
// const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

// const BASE_URL = import.meta.env.VITE_BACKEND_URL;

// axios.defaults.withCredentials = true;

// export default function Login({ onLogin, onRegister=()=>{} }) {
//   const [mode, setMode] = useState("login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === "/login-success") {
//       axios
//         .get(`${BASE_URL}/api/auth/current-user`)
//         .then((res) => {
//           if (res.data.user) {
//             onLogin(res.data.user);
//             navigate("/");
//           } else {
//             alert("Failed to fetch user info");
//           }
//         })
//         .catch(() => {
//           alert("Error fetching user");
//         });
//     }
//   }, [location, navigate, onLogin]);

//   const validateRegister = () => {
//     if (!name.trim()) return "Name is required.";
//     if (!emailRegex.test(email)) return "Invalid email format.";
//     if (!phoneRegex.test(phone)) return "Invalid Nepali phone number.";
//     if (!passwordRegex.test(password)) return "Password must be 6+ chars with letters and numbers.";
//     if (!address.trim()) return "Address is required.";
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
//         ? `${BASE_URL}/api/auth/register`
//         : `${BASE_URL}/api/auth/login`;

//     const body =
//       mode === "register"
//         ? { name, email, phone, password, address }
//         : { email, password };

//     const err = mode === "register" ? validateRegister() : validateLogin();
//     if (err) {
//       alert(err);
//       setLoading(false);
//       return;
//     }

//     try {
//       const res = await axios.post(url, body);
//       if (mode === "register") {
//         alert("Registration successful");
//         onRegister(res.data.user);
//       } else {
//         alert("Login successful");
//         onLogin(res.data.user);
//       }
//       navigate("/");
//     } catch (error) {
//   console.error("Registration/Login error:", error);
//   if (error.response) {
//     alert(error.response.data?.msg || "Server error");
//   } else if (error.request) {
//     alert("No response from server. Possible CORS issue.");
//   } else {
//     alert("Request setup error.");
//   }
// }

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

//         {mode === "login" && (
//           <div className="text-right text-sm mb-4">
//             <Link to="/forgot-password" className="text-blue-600 hover:underline">
//               Forgot Password?
//             </Link>
//           </div>
//         )}

//         <button
//           onClick={submit}
//           disabled={loading}
//           className={`w-full py-3 rounded mb-4 text-white ${
//             loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-green-600 hover:bg-green-700"
//           }`}
//         >
//           {loading ? "Please wait..." : mode === "login" ? "Login" : "Register"}
//         </button>

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



import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import axios from "axios";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^9\d{9}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

axios.defaults.withCredentials = true;

export default function Login({ onLogin, onRegister = () => {} }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const validateRegister = () => {
    if (!name.trim()) return "Name is required.";
    if (!emailRegex.test(email)) return "Invalid email format.";
    if (!phoneRegex.test(phone)) return "Invalid Nepali phone number.";
    if (!passwordRegex.test(password)) return "Password must be 6+ chars with letters and numbers.";
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
        ? `${BASE_URL}/api/users/register`
        : `${BASE_URL}/api/users/login`;

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
      const res = await axios.post(url, body);
      const user = res.data.user;

      if (!user || !user.token) {
        throw new Error("Token missing in response");
      }

      // ✅ Save token
      localStorage.setItem("token", user.token);

      if (mode === "register") {
        alert("Registration successful");
        onRegister(user);
      } else {
        alert("Login successful");
        onLogin(user);
      }

      navigate("/");
    } catch (error) {
      console.error("Registration/Login error:", error);
      if (error.response) {
        alert(error.response.data?.message || "Server error");
      } else if (error.request) {
        alert("No response from server. Possible CORS issue.");
      } else {
        alert("Request setup error.");
      }
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
