
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Header({ user, cart, province, setProvince, onLogout, onSearch }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    const fetchProfileImage = async () => {
      if (!user) return;

      try {
        const res = await axios.get(`http://localhost:3001/api/users/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (res.data && res.data.profileImage) {
          setProfileImage(`http://localhost:3001${res.data.profileImage}`);
        } else {
          setProfileImage("/default-profile.png");
        }
      } catch (err) {
        console.error("❌ Failed to fetch profile image", err);
        setProfileImage("/default-profile.png");
      }
    };

    fetchProfileImage();
  }, [user]);

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
              src={profileImage || "/default-profile.png"}
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
