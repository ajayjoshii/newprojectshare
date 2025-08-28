// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../utils/api";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const submit = async () => {
//     try {
//       const res = await api.post("/admin/login", { email, password });
//       const token = res.data.user.token;
//       localStorage.setItem("adminToken", token);
//       alert("Admin logged in");
//       navigate("/admin");
//     } catch (err) {
//       console.error(err);
//       alert(err.response?.data?.msg || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100">
//       <div className="bg-white p-8 rounded shadow-lg w-96">
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-4 p-2 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-4 p-2 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
//           onClick={submit}
//         >
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async () => {
    try {
      const res = await api.post("/admin/login", { email, password });
      const token = res.data.user.token;
      localStorage.setItem("adminToken", token);
      alert("Admin logged in");
      navigate("/admin");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          onClick={submit}
        >
          Login
        </button>
      </div>
    </div>
  );
}
