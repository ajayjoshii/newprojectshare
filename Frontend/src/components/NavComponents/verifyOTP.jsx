import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3001";

export default function VerifyOTP({ onLogin }) {
  const location = useLocation();
  const navigate = useNavigate();
  const emailFromState = location.state?.email || "";
  const [email, setEmail] = useState(emailFromState);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const verify = async () => {
    if (!email || !otp) {
      toast.error("Email and OTP are required");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${BASE_URL}/api/users/verify-otp`, { email, otp });
      toast.success("✅ Verification successful. You can now login.");
      navigate("/login"); // Redirect to login after OTP
    } catch (err) {
      if (err.response) toast.error(err.response.data?.message || "Verification failed");
      else toast.error("Network error");
    }
    setLoading(false);
  };

  const resend = async () => {
    if (!email) {
      toast.error("Email required to resend OTP");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/api/users/resend-otp`, { email });
      toast.info(res.data.message || "OTP resent");
    } catch (err) {
      if (err.response) toast.error(err.response.data?.message || "Resend failed");
      else toast.error("Network error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-[48px] bg-gradient-to-br from-green-50 to-green-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl animate-fade-in-up transform transition-all duration-500 hover:scale-[1.02]">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
          Verify OTP
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-green-500"
          disabled={loading}
        />

        <input
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="mb-6 w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-green-500"
          disabled={loading}
        />

        <button
          onClick={verify}
          disabled={loading}
          className="w-full py-3 mb-3 rounded-xl bg-green-600 text-white font-semibold shadow-md hover:bg-green-700 hover:shadow-lg transition duration-300"
        >
          {loading ? "Please wait..." : "Verify OTP"}
        </button>

        <button
          onClick={resend}
          disabled={loading}
          className="w-full py-2 rounded-xl border border-gray-300 hover:border-green-500 hover:text-green-600 transition duration-300"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
}
