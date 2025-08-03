import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./components/NavComponents/Header";
import About from "./components/NavComponents/About";
import Cart from "./components/NavComponents/Cart";
import Contact from "./components/NavComponents/Contact";
import Home from "./components/NavComponents/Home";
import Login from "./components/NavComponents/Login";
import Profile from "./components/NavComponents/Profile";
import PaymentGateway from "./components/NavComponents/PaymentGateway";
import Delivery_Charges from "./components/Footer/Delivery_Charges";
import Faqs from "./components/Footer/Faqs";
import Footer from "./components/Footer/Footer";
import HowToOrder from "./components/Footer/HowToOrder";
import SuccessPage from "./components/Success_Failure_page/SuccessPage";
import FailurePage from "./components/Success_Failure_page/FailurePage";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const PROVINCES = [
  "Koshi",
  "Madhesh",
  "Bagmati",
  "Gandaki",
  "Lumbini",
  "Karnali",
  "Sudurpashchim",
];

const defaultFoodItems = [
  { id: 1, name: "Dal Bhat", img: "https://grrrltraveler.com/wp-content/uploads/2018/08/NEPALI-DAL-BHAT.jpg", price: 250 },
  { id: 2, name: "Momo", img: "https://e7.pngegg.com/pngimages/979/343/png-clipart-mandu-momo-buuz-khinkali-pelmeni-meat-food-recipe-thumbnail.png", price: 200 },
  { id: 3, name: "Sel Roti", img: "https://i.ytimg.com/vi/tRy6TAKNNes/sddefault.jpg", price: 25 },
  { id: 4, name: "Gundruk", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSh3NXAD3EUkm8ls-5c7lIt7_xJalJeSceRCKg8rU2ipHeOohlElWGDFjsjnOYzqoz9qgfVs9_VGA7irfyIAmZ0HLCeXNsrEPdXN2n1hyphenhypheneUfeHwCIIoPMaleW5Xi3NZpZiWjM0fB6Wle4/s1600/DSC04152.JPG", price: 100 },
  { id: 5, name: "Chatamari", img: "https://nepaltraveller.com/laravel-filemanager/photos/64/Chatamari/Untitled%20design%20(4).png", price: 300 },
  { id: 6, name: "Thukpa", img: "https://www.awesomecuisine.com/wp-content/uploads/2020/03/chicken-thukpa.jpg", price: 280 },
  { id: 7, name: "Yomari", img: "https://static1.squarespace.com/static/53ecd1bde4b0a6f9524254f8/t/675bdd6f2fda443f1ac0726e/1734073711928/Yomari-Punhi-Nepal-Festivals-shankerhotel_com_np.png?format=1500w", price: 200 },
  { id: 8, name: "Sukuti", img: "https://uws.com.np/wp-content/uploads/2023/02/mutton-sukuti-fry.webp", price: 350 },
  { id: 9, name: "Juju Dhau", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhljhoGLu-SeG7_MbewOcsgN1ao786EgCmI2Htqdy6AWVl01jMCVmp4Sbg_o3TnSMQl3qJKwRpWSL1Dg2AYtvA-XL5fjP3q51l2yHWmowJgFxcFLSbTXNHewa2brcMIBS1sFh_S7JrD0-Q/s1600/2008+-+sept-nov+%28Nepal%29+050.jpg", price: 300 },
  { id: 10, name: "Kwati", img: "https://naturallynidhi.com/wp-content/uploads/2019/05/InstantPot_NepaliKwatiDaal_MixedLentilStew-480x270.jpg", price: 180 },
  { id: 11, name: "Samay Baji", img: "https://www.tasteatlas.com/images/dishes/856738bc40274f5694e144c242195a0c.jpg", price: 160 },
  { id: 12, name: "Aloo Tama", img: "https://images.slurrp.com/prod/recipe_images/transcribe/main%20course/Aloo-tama.webp", price: 170 },
  { id: 13, name: "Choila", img: "https://junifoods.com/wp-content/uploads/2023/04/Chicken-Choila-Main-2-500x500.png", price: 120 },
  { id: 14, name: "Bara", img: "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/52/71/73/5M1NG6h3SIKGKlhhKM9f_Nepali%20Bara.jpg", price: 100 },
  { id: 15, name: "Sekuwa", img: "https://junifoods.com/wp-content/uploads/2022/12/Chicken-Sekuwa-1024x576.png", price: 140 },
  { id: 16, name: "Gorkhali Lamb", img: "https://i.pinimg.com/236x/9a/c4/80/9ac480669bcd49ea1bb3ecc968ce99de.jpg", price: 200 },
  { id: 17, name: "Pulao", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFPjIluL4H7E7Qznz6kq0DziLeDpnSg0RqM_0J-3nemYyxHbWSK0EaaAZ70NBiy1kLAFy5ZCxgBfCpETdfnL2oSqhS88KOdNTexX9Me5y1xKbFCU0D0DocySLaCPdiP1eXT7dvEWHXstDA/s1600/vegetable+pulao.JPG", price: 190 },
  { id: 18, name: "Thakali Set", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfQimYoVlL3uplkHguLSCB4m554dDzTv-Ug&s", price: 350 },
  { id: 19, name: "Masu", img: "https://junifoods.com/wp-content/uploads/2023/12/Easy-Goat-Curry-Sajilo-Khasi-Ko-Masu-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%96%E0%A4%B8%E0%A5%80%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%BE%E0%A4%B8%E0%A5%81-1.jpg", price: 1400 },
  { id: 20, name: "Bhutuwa", img: "https://cdn.tasteatlas.com//images/dishes/cc879765847047629baf56168ed7501c.jpg?width=320&height=205", price: 400 },
];

export default function App() {
  const [user, setUser] = useState(null);
  const [province, setProvince] = useState("");
  const [cart, setCart] = useState([]);
  const [recs, setRecs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/orders/recommendations");
      setRecommendations(res.data);
    } catch (error) {
      alert("Could not fetch recommended items.");
    }
  };

  useEffect(() => {
    getRecommendations();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const res = await axios.get("http://localhost:3001/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
        setProvince(res.data.province || "");
      } catch {
        alert("Failed to load profile");
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    if (!user || province) return;
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const { latitude: lat, longitude: lng } = coords;
        let prov = "Unknown";

        if (lat >= 26.6 && lat <= 27.4 && lng >= 87.0 && lng <= 88.3) prov = "Koshi";
        else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.5) prov = "Madhesh";
        else if (lat >= 27.0 && lat <= 28.5 && lng >= 85.0 && lng <= 85.9) prov = "Bagmati";
        else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
        else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
        else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
        else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";

        setProvince(prov);
        alert(`📍 Location detected: ${prov}`);
      },
      () => {
        alert("❌ Location permission denied. Please select province manually.");
      }
    );
  }, [user]);

  const addToCart = async (item) => {
    if (!user) {
      alert("Please login to add to cart.");
      navigate("/login");
      return;
    }
    if (!province || province === "Unknown") {
      alert("Please allow location or select a valid province.");
      return;
    }
    const exists = cart.find((c) => c.id === item.id);
    let updatedCart;
    if (exists) {
      updatedCart = cart.map((c) =>
        c.id === item.id ? { ...c, qty: c.qty + 1 } : c
      );
    } else {
      updatedCart = [...cart, { ...item, qty: 1 }];
    }
    setCart(updatedCart);
    try {
      await axios.post(`${BASE_URL}/api/cart/add`, {
        userId: user._id,
        itemId: item.id,
        name: item.name,
        price: item.price,
        qty: exists ? exists.qty + 1 : 1,
        province: province,
      });
    } catch {}
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const deleteItem = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);

  const submitOrder = async () => {
    if (!user || !province || cart.length === 0) {
      alert("Please login, select province, and add items to cart.");
      return;
    }
    try {
      const payload = {
        user: { name: user.name, email: user.email },
        items: cart,
        province,
        orderDate: new Date(),
      };
      const res = await axios.post("http://localhost:5000/api/orders/submit", payload);
      alert(res.data.message || "Order submitted.");
      clearCart();
      navigate("/cart");
    } catch {
      alert("Order submission failed.");
    }
  };

  const handleLogin = (loggedUser) => {
    setUser(loggedUser);
    localStorage.setItem("token", loggedUser.token);
  };

  const handleLogout = () => {
    setUser(null);
    setCart([]);
    localStorage.removeItem("token");
    navigate("/");
  };

  const filteredFoodItems = defaultFoodItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header
        user={user}
        cart={cart}
        province={province}
        setProvince={setProvince}
        onLogout={handleLogout}
        onSearch={setSearchTerm}
      />
      <main className="flex-grow container mx-auto p-6">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addToCart={addToCart}
                province={province}
                setProvince={setProvince}
                provinces={PROVINCES}
                recs={recs}
                defaultFoodItems={filteredFoodItems}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cart}
                updateQty={updateQty}
                deleteItem={deleteItem}
                clearCart={clearCart}
                user={user}
                province={province}
                submitOrder={submitOrder}
              />
            }
          />
          <Route path="/login" element={<Login onLogin={handleLogin} onRegister={setUser} />} />


          <Route path="/delivery-charges" element={<Delivery_Charges />} />
          <Route path="/how-to-order" element={<HowToOrder />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/payment-gateway" element={<PaymentGateway />} />
          <Route path="/payment-success" element={<SuccessPage onLogin={setUser}/>
             } />
          <Route path="/payment-failure" element={<FailurePage />} />
          
          <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
