// // // // // // // import Header from '../components/Header';
// // // // // // // import Home from '../components/Home';
// // // // // // // import Login from '../components/Login';
// // // // // // // import About from '../components/About';
// // // // // // // import Contact from '../components/Contact';
// // // // // // // import Cart from '../components/Cart';
// // // // // // // import Footer from '../components/Footer';


// // // // // // // const PROVINCES = [
// // // // // // //   'Province 1','Province 2','Bagmati','Gandaki','Province 5','Karnali','Sudurpashchim'
// // // // // // // ];

// // // // // // // export default function App() {
// // // // // // //   const [page, setPage] = useState('Home');
// // // // // // //   const [user, setUser] = useState(null);
// // // // // // //   const [cart, setCart] = useState([]);
// // // // // // //   const [province, setProvince] = useState('');
// // // // // // //   const [recs, setRecs] = useState([]);


// // // // // // // useEffect(() => {
// // // // // // //   if (user) {
// // // // // // //     navigator.geolocation.getCurrentPosition(
// // // // // // //       ({ coords }) => {
// // // // // // //         const { latitude: lat, longitude: lng } = coords;
// // // // // // //         let prov = '';

// // // // // // //         if (lat >= 26.7 && lat <= 28.3 && lng >= 87.0 && lng <= 88.3) {
// // // // // // //           prov = 'Province 1';
// // // // // // //         } else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.9) {
// // // // // // //           prov = 'Province 2';
// // // // // // //         } else if (lat >= 27.3 && lat <= 28.5 && lng >= 85.0 && lng <= 85.8) {
// // // // // // //           prov = 'Bagmati';
// // // // // // //         } else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) {
// // // // // // //           prov = 'Gandaki';
// // // // // // //         } else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) {
// // // // // // //           prov = 'Lumbini';
// // // // // // //         } else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) {
// // // // // // //           prov = 'Karnali';
// // // // // // //         } else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) {
// // // // // // //           prov = 'Sudurpashchim';
// // // // // // //         } else {
// // // // // // //           prov = 'Unknown';
// // // // // // //         }

// // // // // // //         setProvince(prov);
// // // // // // //         setSelectedProvince(prov);
// // // // // // //         alert(`Location allowed. Detected province: ${prov}`);
// // // // // // //       },
// // // // // // //       () => {
// // // // // // //         setProvince('');
// // // // // // //         setSelectedProvince('');
// // // // // // //         alert('Location access denied. Please select province manually.');
// // // // // // //       }
// // // // // // //     );
// // // // // // //   }
// // // // // // // }, [user]);


// // // // // // //   const addToCart = item => {
// // // // // // //     if (!user) return setPage('Login');
// // // // // // //     if (!province) return alert('📍 Please allow or select province first.');
// // // // // // //     const exists = cart.find(c => c.id === item.id);
// // // // // // //     if (exists) {
// // // // // // //       setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty+1 } : c));
// // // // // // //     } else {
// // // // // // //       setCart([...cart, { ...item, qty: 1, price: item.price }]);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const updateQty = (id, delta) =>
// // // // // // //     setCart(cart.map(c => c.id === id ? { ...c, qty: c.qty+delta >=1 ? c.qty+delta : 1 } : c));

// // // // // // //   const deleteItem = id => setCart(cart.filter(c => c.id !== id));

// // // // // // //   const clearCart = () => setCart([]);

// // // // // // //   const total = cart.reduce((s,c) => s + c.qty * c.price, 0);

// // // // // // //   const submitOrder = async () => {
// // // // // // //     if (!user) return alert('Login required');
// // // // // // //     if (!province) return alert('Province needed');
// // // // // // //     if (cart.length === 0) return alert('Cart empty');
// // // // // // //     const res = await fetch('http://localhost:5000/api/order/submit', {
// // // // // // //       method:'POST', headers:{'Content-Type':'application/json'},
// // // // // // //       body:JSON.stringify({ user, items:cart, province })
// // // // // // //     });
// // // // // // //     const data = await res.json();
// // // // // // //     if (res.ok) {
// // // // // // //       alert(data.msg);
// // // // // // //       setRecs(data.recs);
// // // // // // //       setPage('Cart');
// // // // // // //     } else alert(data.msg);
// // // // // // //   };

// // // // // // //   const handlePayment = async () => {
// // // // // // //     const res = await fetch('http://localhost:5000/api/order/pay', {
// // // // // // //       method:'POST', headers:{'Content-Type':'application/json'},
// // // // // // //       body:JSON.stringify({ orderId:'temp123', amount: total, esewaRef:'ESEWA123' })
// // // // // // //     });
// // // // // // //     const data = await res.json();
// // // // // // //     if (data.success) {
// // // // // // //       alert(data.msg);
// // // // // // //       clearCart();
// // // // // // //       setPage('Home');
// // // // // // //     } else alert('Payment error');
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div className=" min-h-screen flex flex-col bg-gray-50">
// // // // // // //       <Header
// // // // // // //         setPage={setPage}
// // // // // // //         user={user}
// // // // // // //         cart={cart}
// // // // // // //         province={province}
// // // // // // //       />
// // // // // // //       <main className="flex-grow container mx-auto p-6">
// // // // // // //         {page === 'Home' && (
// // // // // // //           <Home
// // // // // // //             addToCart={addToCart}
// // // // // // //             province={province}
// // // // // // //             setProvince={setProvince}
// // // // // // //             provinces={PROVINCES}
// // // // // // //             recs={recs}
// // // // // // //           />
// // // // // // //         )}
// // // // // // //         {page === 'Cart' && (
// // // // // // //           <Cart
// // // // // // //             cart={cart}
// // // // // // //             total={total}
// // // // // // //             updateQty={updateQty}
// // // // // // //             deleteItem={deleteItem}
// // // // // // //             clearCart={clearCart}
// // // // // // //             submitOrder={submitOrder}
// // // // // // //             handlePayment={handlePayment}
// // // // // // //           />
// // // // // // //         )}
// // // // // // //         {page === 'Login' && <Login onLogin={setUser} onRegister={setUser} />}
// // // // // // //         {page === 'About' && <About />}
// // // // // // //         {page === 'Contact' && <Contact />}
// // // // // // //       </main>
// // // // // // //       <Footer/>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // import { useState, useEffect } from 'react';
// // // // // // import { Routes, Route, useNavigate } from 'react-router-dom';
// // // // // // import Header from '../components/Header';
// // // // // // import Home from '../components/Home';
// // // // // // import Login from '../components/Login';
// // // // // // import About from '../components/About';
// // // // // // import Contact from '../components/Contact';
// // // // // // import Cart from '../components/Cart';
// // // // // // import Footer from '../components/Footer';

// // // // // // const PROVINCES = [
// // // // // //   'Province 1', 'Province 2', 'Bagmati', 'Gandaki', 'Province 5', 'Karnali', 'Sudurpashchim'
// // // // // // ];

// // // // // // export default function App() {
// // // // // //   const [user, setUser] = useState(null);
// // // // // //   const [cart, setCart] = useState([]);
// // // // // //   const [province, setProvince] = useState('');
// // // // // //   const [recs, setRecs] = useState([]);
// // // // // //   const navigate = useNavigate();

// // // // // //   useEffect(() => {
// // // // // //     if (user) {
// // // // // //       navigator.geolocation.getCurrentPosition(
// // // // // //         ({ coords }) => {
// // // // // //           const { latitude: lat, longitude: lng } = coords;
// // // // // //           let prov = '';

// // // // // //           if (lat >= 26.7 && lat <= 28.3 && lng >= 87.0 && lng <= 88.3) prov = 'Province 1';
// // // // // //           else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.9) prov = 'Province 2';
// // // // // //           else if (lat >= 27.3 && lat <= 28.5 && lng >= 85.0 && lng <= 85.8) prov = 'Bagmati';
// // // // // //           else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = 'Gandaki';
// // // // // //           else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = 'Lumbini';
// // // // // //           else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = 'Karnali';
// // // // // //           else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = 'Sudurpashchim';
// // // // // //           else prov = 'Unknown';

// // // // // //           setProvince(prov);
// // // // // //           alert(`Location allowed. Detected province: ${prov}`);
// // // // // //         },
// // // // // //         () => {
// // // // // //           setProvince('');
// // // // // //           alert('Location access denied. Please select province manually.');
// // // // // //         }
// // // // // //       );
// // // // // //     }
// // // // // //   }, [user]);

// // // // // //   const addToCart = item => {
// // // // // //     if (!user) return navigate('/login');
// // // // // //     if (!province) return alert('📍 Please allow or select province first.');

// // // // // //     const exists = cart.find(c => c.id === item.id);
// // // // // //     if (exists) {
// // // // // //       setCart(cart.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
// // // // // //     } else {
// // // // // //       setCart([...cart, { ...item, qty: 1, price: item.price }]);
// // // // // //     }
// // // // // //   };

// // // // // //   const updateQty = (id, delta) => {
// // // // // //     setCart(cart.map(c =>
// // // // // //       c.id === id ? { ...c, qty: c.qty + delta >= 1 ? c.qty + delta : 1 } : c
// // // // // //     ));
// // // // // //   };

// // // // // //   const deleteItem = id => setCart(cart.filter(c => c.id !== id));
// // // // // //   const clearCart = () => setCart([]);

// // // // // //   const total = cart.reduce((sum, c) => sum + c.qty * c.price, 0);

// // // // // //   const submitOrder = async () => {
// // // // // //     if (!user) return alert('Login required');
// // // // // //     if (!province) return alert('Province needed');
// // // // // //     if (cart.length === 0) return alert('Cart empty');

// // // // // //     const res = await fetch('http://localhost:5000/api/order/submit', {
// // // // // //       method: 'POST',
// // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // //       body: JSON.stringify({ user, items: cart, province })
// // // // // //     });
// // // // // //     const data = await res.json();
// // // // // //     if (res.ok) {
// // // // // //       alert(data.msg);
// // // // // //       setRecs(data.recs);
// // // // // //       navigate('/cart');
// // // // // //     } else alert(data.msg);
// // // // // //   };

// // // // // //   const handlePayment = async () => {
// // // // // //     const res = await fetch('http://localhost:5000/api/order/pay', {
// // // // // //       method: 'POST',
// // // // // //       headers: { 'Content-Type': 'application/json' },
// // // // // //       body: JSON.stringify({ orderId: 'temp123', amount: total, esewaRef: 'ESEWA123' })
// // // // // //     });
// // // // // //     const data = await res.json();
// // // // // //     if (data.success) {
// // // // // //       alert(data.msg);
// // // // // //       clearCart();
// // // // // //       navigate('/');
// // // // // //     } else alert('Payment error');
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="min-h-screen flex flex-col bg-gray-50">
// // // // // //       <Header user={user} cart={cart} province={province} />
// // // // // //       <main className="flex-grow container mx-auto p-6">
// // // // // //         <Routes>
// // // // // //           <Route path="/" element={
// // // // // //             <Home
// // // // // //               addToCart={addToCart}
// // // // // //               province={province}
// // // // // //               setProvince={setProvince}
// // // // // //               provinces={PROVINCES}
// // // // // //               recs={recs}
// // // // // //             />
// // // // // //           } />
// // // // // //           <Route path="/about" element={<About />} />
// // // // // //           <Route path="/contact" element={<Contact />} />
// // // // // //           <Route path="/cart" element={
// // // // // //             <Cart
// // // // // //               cart={cart}
// // // // // //               total={total}
// // // // // //               updateQty={updateQty}
// // // // // //               deleteItem={deleteItem}
// // // // // //               clearCart={clearCart}
// // // // // //               submitOrder={submitOrder}
// // // // // //               handlePayment={handlePayment}
// // // // // //             />
// // // // // //           } />
// // // // // //           <Route path="/login" element={<Login onLogin={setUser} onRegister={setUser} />} />
// // // // // //         </Routes>
// // // // // //       </main>
// // // // // //       <Footer />
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import React, { useState, useEffect } from "react";
// // // // // import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// // // // // const KHALTI_PUBLIC_KEY = 'fcd39921c143425a85bdbbe6bbebe062'; // Replace with your Khalti public key

// // // // // import Header from "../components/Header";
// // // // // import Home from "../components/Home";
// // // // // import Login from "../components/Login";
// // // // // import About from "../components/About";
// // // // // import Contact from "../components/Contact";
// // // // // import Cart from "../components/Cart";
// // // // // import Footer from "../components/Footer";
// // // // // import KhaltiPayment from "../components/KhaltiPayment";

// // // // // const PROVINCES = [
// // // // //   "Province 1",
// // // // //   "Province 2",
// // // // //   "Bagmati",
// // // // //   "Gandaki",
// // // // //   "Province 5",
// // // // //   "Karnali",
// // // // //   "Sudurpashchim",
// // // // // ];

// // // // // export default function App() {
// // // // //   const [user, setUser] = useState(null);
// // // // //   const [cart, setCart] = useState([]);
// // // // //   const [province, setProvince] = useState("");
// // // // //   const [recs, setRecs] = useState([]);
// // // // //   const navigate = useNavigate();

// // // // //   useEffect(() => {
// // // // //     if (user) {
// // // // //       navigator.geolocation.getCurrentPosition(
// // // // //         ({ coords }) => {
// // // // //           const { latitude: lat, longitude: lng } = coords;
// // // // //           let prov = "";

// // // // //           if (lat >= 26.7 && lat <= 28.3 && lng >= 87.0 && lng <= 88.3) prov = "Province 1";
// // // // //           else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.9) prov = "Province 2";
// // // // //           else if (lat >= 27.3 && lat <= 28.5 && lng >= 85.0 && lng <= 85.8) prov = "Bagmati";
// // // // //           else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
// // // // //           else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
// // // // //           else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
// // // // //           else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";
// // // // //           else prov = "Unknown";

// // // // //           setProvince(prov);
// // // // //           alert(`Location allowed. Detected province: ${prov}`);
// // // // //         },
// // // // //         () => {
// // // // //           setProvince("");
// // // // //           alert("Location access denied. Please select province manually.");
// // // // //         }
// // // // //       );
// // // // //     }
// // // // //   }, [user]);

// // // // //   const addToCart = (item) => {
// // // // //     if (!user) return navigate("/login");
// // // // //     if (!province) return alert("📍 Please allow or select province first.");

// // // // //     const exists = cart.find((c) => c.id === item.id);
// // // // //     if (exists) {
// // // // //       setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
// // // // //     } else {
// // // // //       setCart([...cart, { ...item, qty: 1, price: item.price }]);
// // // // //     }
// // // // //   };

// // // // //   const updateQty = (id, delta) => {
// // // // //     setCart(
// // // // //       cart.map((c) =>
// // // // //         c.id === id ? { ...c, qty: c.qty + delta >= 1 ? c.qty + delta : 1 } : c
// // // // //       )
// // // // //     );
// // // // //   };

// // // // //   const deleteItem = (id) => setCart(cart.filter((c) => c.id !== id));
// // // // //   const clearCart = () => setCart([]);

// // // // //   const total = cart.reduce((sum, c) => sum + c.qty * c.price, 0);

// // // // //   const submitOrder = async () => {
// // // // //     if (!user) return alert("Login required");
// // // // //     if (!province) return alert("Province needed");
// // // // //     if (cart.length === 0) return alert("Cart empty");

// // // // //     const res = await fetch("http://localhost:5000/api/order/submit", {
// // // // //       method: "POST",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({ user, items: cart, province }),
// // // // //     });
// // // // //     const data = await res.json();
// // // // //     if (res.ok) {
// // // // //       alert(data.msg);
// // // // //       setRecs(data.recs);
// // // // //       navigate("/cart");
// // // // //     } else alert(data.msg);
// // // // //   };

// // // // //   const handlePayment = async () => {
// // // // //     const res = await fetch("http://localhost:5000/api/order/pay", {
// // // // //       method: "POST",
// // // // //       headers: { "Content-Type": "application/json" },
// // // // //       body: JSON.stringify({ orderId: "temp123", amount: total, esewaRef: "ESEWA123" }),
// // // // //     });
// // // // //     const data = await res.json();
// // // // //     if (data.success) {
// // // // //       alert(data.msg);
// // // // //       clearCart();
// // // // //       navigate("/");
// // // // //     } else alert("Payment error");
// // // // //   };

// // // // //   return (
// // // // //     <div className="min-h-screen flex flex-col bg-gray-50">
// // // // //       <Header user={user} cart={cart} province={province} setUser={setUser} />
// // // // //       <main className="flex-grow container mx-auto p-6">
// // // // //         <Routes>
// // // // //           <Route
// // // // //             path="/"
// // // // //             element={
// // // // //               <Home
// // // // //                 addToCart={addToCart}
// // // // //                 province={province}
// // // // //                 setProvince={setProvince}
// // // // //                 provinces={PROVINCES}
// // // // //                 recs={recs}
// // // // //               />
// // // // //             }
// // // // //           />
// // // // //           <Route path="/about" element={<About />} />
// // // // //           <Route path="/contact" element={<Contact />} />
// // // // //           <Route
// // // // //             path="/cart"
// // // // //             element={
// // // // //               <Cart
// // // // //                 cart={cart}
// // // // //                 total={total}
// // // // //                 updateQty={updateQty}
// // // // //                 deleteItem={deleteItem}
// // // // //                 clearCart={clearCart}
// // // // //                 submitOrder={submitOrder}
// // // // //                 handlePayment={handlePayment}
// // // // //               />
// // // // //             }
// // // // //           />
// // // // //           <Route path="/login" element={<Login onLogin={setUser} onRegister={setUser} />} />
// // // // //         </Routes>
// // // // //       </main>
// // // // //       <Footer />
// // // // //       <KhaltiPayment />
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import React, { useState } from 'react';

// // // // const KHALTI_PUBLIC_KEY = 'fcd39921c143425a85bdbbe6bbebe062'; // Replace with your Khalti public key

// // // // const sampleCartItems = [
// // // //   { productId: 'p1', name: 'Product 1', quantity: 1, price: 5000 },
// // // //   { productId: 'p2', name: 'Product 2', quantity: 2, price: 10000 },
// // // // ];

// // // // export default function App() {
// // // //   const [paymentStatus, setPaymentStatus] = useState(null);

// // // //   const totalAmount = sampleCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

// // // //   const handleKhaltiPayment = () => {
// // // //     let config = {
// // // //       publicKey: KHALTI_PUBLIC_KEY,
// // // //       productIdentity: '1234567890',
// // // //       productName: 'Sample E-commerce Products',
// // // //       productUrl: 'http://localhost:3000',
// // // //       eventHandler: {
// // // //         onSuccess(payload) {
// // // //           console.log('Khalti payment success:', payload);
// // // //           verifyPayment(payload);
// // // //         },
// // // //         onError(error) {
// // // //           console.error('Khalti payment error:', error);
// // // //           setPaymentStatus('error');
// // // //         },
// // // //         onClose() {
// // // //           console.log('Khalti widget is closed');
// // // //         },
// // // //       },
// // // //       paymentPreference: [
// // // //         "KHALTI", "EBANKING", "MOBILE_BANKING", "CONNECT_IPS", "SCT",
// // // //       ],
// // // //     };

// // // //     let checkout = new window.KhaltiCheckout(config);
// // // //     checkout.show({ amount: totalAmount }); // amount in paisa (NRs * 100)
// // // //   };

// // // //   async function verifyPayment(payload) {
// // // //     try {
// // // //       const res = await fetch('http://localhost:4000/api/payment/verify', {
// // // //         method: 'POST',
// // // //         headers: { 'Content-Type': 'application/json' },
// // // //         body: JSON.stringify({
// // // //           token: payload.token,
// // // //           amount: payload.amount,
// // // //           items: sampleCartItems,
// // // //         }),
// // // //       });
// // // //       const data = await res.json();
// // // //       if (res.ok) {
// // // //         setPaymentStatus('success');
// // // //         alert('Payment successful! Order ID: ' + data.orderId);
// // // //       } else {
// // // //         setPaymentStatus('failed');
// // // //         alert('Payment verification failed.');
// // // //       }
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //       setPaymentStatus('failed');
// // // //     }
// // // //   }

// // // //   // Load Khalti SDK script dynamically
// // // //   React.useEffect(() => {
// // // //     if (!document.getElementById('khalti-script')) {
// // // //       const script = document.createElement('script');
// // // //       script.id = 'khalti-script';
// // // //       script.src = 'https://khalti.com/static/khalti-checkout.js';
// // // //       script.async = true;
// // // //       document.body.appendChild(script);
// // // //     }
// // // //   }, []);

// // // //   return (
// // // //     <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
// // // //       <h1 className="text-2xl font-bold mb-4">Sample E-commerce Checkout</h1>

// // // //       <ul className="mb-4">
// // // //         {sampleCartItems.map(item => (
// // // //           <li key={item.productId} className="mb-2">
// // // //             {item.name} — {item.quantity} × NPR {item.price / 100}
// // // //           </li>
// // // //         ))}
// // // //       </ul>

// // // //       <p className="mb-4 font-semibold">Total: NPR {totalAmount / 100}</p>

// // // //       <button
// // // //         onClick={handleKhaltiPayment}
// // // //         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
// // // //       >
// // // //         Pay with Khalti
// // // //       </button>

// // // //       {paymentStatus === 'success' && <p className="mt-4 text-green-600">Payment Successful!</p>}
// // // //       {paymentStatus === 'error' && <p className="mt-4 text-red-600">Payment Error!</p>}
// // // //       {paymentStatus === 'failed' && <p className="mt-4 text-red-600">Verification Failed!</p>}
// // // //     </div>
// // // //   );
// // // // }
// // // import { useState } from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // // import Header from "../components/Header";
// // // import Home from "../components/Home";
// // // import Login from "../components/Login";
// // // import About from "../components/About";
// // // import Contact from "../components/Contact";
// // // import Cart from "../components/Cart";
// // // import Footer from "../components/Footer";

// // // export default function App() {
// // //   const [user, setUser] = useState(null);
// // //   const [cart, setCart] = useState([]);
// // //   const [province, setProvince] = useState("");
// // //   //... your other states and handlers

// // //   return (
// // //     <Router>
// // //       <div className="min-h-screen flex flex-col bg-gray-50">
// // //         <Header user={user} cart={cart} province={province} setUser={setUser} />
// // //         <main className="flex-grow container mx-auto p-6">
// // //           <Routes>
// // //             <Route
// // //               path="/"
// // //               element={
// // //                 <Home
// // //                   addToCart={() => {}}
// // //                   province={province}
// // //                   setProvince={setProvince}
// // //                   provinces={/* your provinces */}
// // //                 />
// // //               }
// // //             />
// // //             <Route path="/cart" element={<Cart cart={cart} />} />
// // //             <Route
// // //               path="/login"
// // //               element={<Login onLogin={setUser} onRegister={setUser} />}
// // //             />
// // //             <Route path="/about" element={<About />} />
// // //             <Route path="/contact" element={<Contact />} />
// // //             <Route path="/login-success" element={<Login onLogin={setUser} onRegister={setUser} />} />
// // //           </Routes>
// // //         </main>
// // //         <Footer />
// // //       </div>
// // //     </Router>
// // //   );
// // // }
// // import React, { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Header from "../components/Header";
// // import Home from "../components/Home";
// // import Login from "../components/Login";
// // import About from "../components/About";
// // import Contact from "../components/Contact";
// // import Cart from "../components/Cart";
// // import Footer from "../components/Footer";

// // const PROVINCES = [
// //   "Province 1",
// //   "Province 2",
// //   "Bagmati",
// //   "Gandaki",
// //   "Province 5",
// //   "Karnali",
// //   "Sudurpashchim",
// // ];

// // export default function App() {
// //   const [user, setUser] = useState(null);
// //   const [cart, setCart] = useState([]);
// //   const [province, setProvince] = useState("");

// //   return (
// //     <Router>
// //       <div className="min-h-screen flex flex-col bg-gray-50">
// //         <Header user={user} cart={cart} province={province} setUser={setUser} />
// //         <main className="flex-grow container mx-auto p-6">
// //           <Routes>
// //             <Route
// //               path="/"
// //               element={
// //                 <Home
// //                   addToCart={() => {}}
// //                   province={province}
// //                   setProvince={setProvince}
// //                   provinces={PROVINCES}   {/* <-- Make sure this is not empty */}
// //                 />
// //               }
// //             />
// //             <Route path="/cart" element={<Cart cart={cart} />} />
// //             <Route
// //               path="/login"
// //               element={<Login onLogin={setUser} onRegister={setUser} />}
// //             />
// //             <Route path="/about" element={<About />} />
// //             <Route path="/contact" element={<Contact />} />
// //             <Route
// //               path="/login-success"
// //               element={<Login onLogin={setUser} onRegister={setUser} />}
// //             />
// //           </Routes>
// //         </main>
// //         <Footer />
// //       </div>
// //     </Router>
// //   );
// // // }
// // import React, { useState, useEffect } from "react";
// // import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// // import Header from "../components/Header";
// // import Home from "../components/Home";
// // import Login from "../components/Login";
// // import About from "../components/About";
// // import Contact from "../components/Contact";
// // import Cart from "../components/Cart";
// // import Footer from "../components/Footer";
// // import UserProfile from "../components/UserProfile";

// // const PROVINCES = [
// //   "Province 1",
// //   "Province 2",
// //   "Bagmati",
// //   "Gandaki",
// //   "Province 5",
// //   "Karnali",
// //   "Sudurpashchim",
// // ];

// // export default function App() {
// //   const [user, setUser] = useState(null);
// //   const [cart, setCart] = useState([]);
// //   const [province, setProvince] = useState("");
// //   const [recs, setRecs] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (user) {
// //       navigator.geolocation.getCurrentPosition(
// //         ({ coords }) => {
// //           const { latitude: lat, longitude: lng } = coords;
// //           let prov = "";

// //           if (lat >= 26.7 && lat <= 28.3 && lng >= 87.0 && lng <= 88.3) prov = "Province 1";
// //           else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.9) prov = "Province 2";
// //           else if (lat >= 27.3 && lat <= 28.5 && lng >= 85.0 && lng <= 85.8) prov = "Bagmati";
// //           else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
// //           else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
// //           else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
// //           else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";
// //           else prov = "Unknown";

// //           setProvince(prov);
// //           alert(`Location allowed. Detected province: ${prov}`);
// //         },
// //         () => {
// //           setProvince("");
// //           alert("Location access denied. Please select province manually.");
// //         }
// //       );
// //     }
// //   }, [user]);

// //   const addToCart = (item) => {
// //     if (!user) return navigate("/login");
// //     if (!province) return alert("📍 Please allow or select province first.");

// //     const exists = cart.find((c) => c.id === item.id);
// //     if (exists) {
// //       setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
// //     } else {
// //       setCart([...cart, { ...item, qty: 1, price: item.price }]);
// //     }
// //   };

// //   const updateQty = (id, delta) => {
// //     setCart(
// //       cart.map((c) =>
// //         c.id === id ? { ...c, qty: c.qty + delta >= 1 ? c.qty + delta : 1 } : c
// //       )
// //     );
// //   };

// //   const deleteItem = (id) => setCart(cart.filter((c) => c.id !== id));
// //   const clearCart = () => setCart([]);

// //   const total = cart.reduce((sum, c) => sum + c.qty * c.price, 0);

// //   const submitOrder = async () => {
// //     if (!user) return alert("Login required");
// //     if (!province) return alert("Province needed");
// //     if (cart.length === 0) return alert("Cart empty");

// //     const res = await fetch("http://localhost:5000/api/order/submit", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ user, items: cart, province }),
// //     });
// //     const data = await res.json();
// //     if (res.ok) {
// //       alert(data.msg);
// //       setRecs(data.recs);
// //       navigate("/cart");
// //     } else alert(data.msg);
// //   };

// //   const handlePayment = async () => {
// //     const res = await fetch("http://localhost:5000/api/order/pay", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ orderId: "temp123", amount: total, esewaRef: "ESEWA123" }),
// //     });
// //     const data = await res.json();
// //     if (data.success) {
// //       alert(data.msg);
// //       clearCart();
// //       navigate("/");
// //     } else alert("Payment error");
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col bg-gray-50">
// //       <Header user={user} cart={cart} province={province} setUser={setUser} />
// //       <main className="flex-grow container mx-auto p-6">
// //         <Routes>
// //           <Route
// //             path="/"
// //             element={
// //               <Home
// //                 addToCart={addToCart}
// //                 province={province}
// //                 setProvince={setProvince}
// //                 provinces={PROVINCES}
// //                 recs={recs}
// //               />
// //             }
// //           />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/contact" element={<Contact />} />
// //           <Route
// //             path="/cart"
// //             element={
// //               <Cart
// //                 cart={cart}
// //                 total={total}
// //                 updateQty={updateQty}
// //                 deleteItem={deleteItem}
// //                 clearCart={clearCart}
// //                 submitOrder={submitOrder}
// //                 handlePayment={handlePayment}
// //               />
// //             }
// //           />
// //           <Route path="/login" element={<Login onLogin={setUser} onRegister={setUser} />} />
// //           <Route path="/userprofile" element={<UserProfile/>} />

// //         </Routes>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }


// // import React, { useState, useEffect } from "react";
// // import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

// // import Header from "../components/Header";
// // import Home from "../components/Home";
// // import Login from "../components/Login";
// // import About from "../components/About";
// // import Contact from "../components/Contact";
// // import Cart from "../components/Cart";
// // import Footer from "../components/Footer";
// // import UserProfile from "../components/Profile";

// // const PROVINCES = [
// //   "Province 1",
// //   "Province 2",
// //   "Bagmati",
// //   "Gandaki",
// //   "Province 5",
// //   "Karnali",
// //   "Sudurpashchim",
// // ];

// // export default function App() {
// //   const [user, setUser] = useState(null);
// //   const [cart, setCart] = useState([]);
// //   const [province, setProvince] = useState("");
// //   const [recs, setRecs] = useState([]);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (user) {
// //       navigator.geolocation.getCurrentPosition(
// //         ({ coords }) => {
// //           const { latitude: lat, longitude: lng } = coords;
// //           let prov = "";

// //           if (lat >= 26.7 && lat <= 28.3 && lng >= 87.0 && lng <= 88.3) prov = "Province 1";
// //           else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.9) prov = "Province 2";
// //           else if (lat >= 27.3 && lat <= 28.5 && lng >= 85.0 && lng <= 85.8) prov = "Bagmati";
// //           else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
// //           else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
// //           else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
// //           else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";
// //           else prov = "Unknown";

// //           setProvince(prov);
// //           alert(`Location allowed. Detected province: ${prov}`);
// //         },
// //         () => {
// //           setProvince("");
// //           alert("Location access denied. Please select province manually.");
// //         }
// //       );
// //     }
// //   }, [user]);

// //   const addToCart = (item) => {
// //     if (!user) return navigate("/login");
// //     if (!province) return alert("📍 Please allow or select province first.");

// //     const exists = cart.find((c) => c.id === item.id);
// //     if (exists) {
// //       setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
// //     } else {
// //       setCart([...cart, { ...item, qty: 1, price: item.price }]);
// //     }
// //   };

// //   const updateQty = (id, delta) => {
// //     setCart(
// //       cart.map((c) =>
// //         c.id === id ? { ...c, qty: c.qty + delta >= 1 ? c.qty + delta : 1 } : c
// //       )
// //     );
// //   };

// //   const deleteItem = (id) => setCart(cart.filter((c) => c.id !== id));
// //   const clearCart = () => setCart([]);

// //   const total = cart.reduce((sum, c) => sum + c.qty * c.price, 0);

// //   const submitOrder = async () => {
// //     if (!user) return alert("Login required");
// //     if (!province) return alert("Province needed");
// //     if (cart.length === 0) return alert("Cart empty");

// //     const res = await fetch("http://localhost:5000/api/order/submit", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ user, items: cart, province }),
// //     });
// //     const data = await res.json();
// //     if (res.ok) {
// //       alert(data.msg);
// //       setRecs(data.recs);
// //       navigate("/cart");
// //     } else alert(data.msg);
// //   };

// //   const handlePayment = async () => {
// //     const res = await fetch("http://localhost:5000/api/order/pay", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ orderId: "temp123", amount: total, esewaRef: "ESEWA123" }),
// //     });
// //     const data = await res.json();
// //     if (data.success) {
// //       alert(data.msg);
// //       clearCart();
// //       navigate("/");
// //     } else alert("Payment error");
// //   };

// //   // Login handler for Login component
// //   const handleLogin = (loggedUser) => {
// //     setUser(loggedUser);
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col bg-gray-50">
// //       <Header user={user} cart={cart} province={province} setUser={setUser} />
// //       <main className="flex-grow container mx-auto p-6">
// //         <Routes>
// //           <Route
// //             path="/"
// //             element={
// //               <Home
// //                 addToCart={addToCart}
// //                 province={province}
// //                 setProvince={setProvince}
// //                 provinces={PROVINCES}
// //                 recs={recs}
// //               />
// //             }
// //           />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/contact" element={<Contact />} />
// //           <Route
// //             path="/cart"
// //             element={
// //               <Cart
// //                 cart={cart}
// //                 total={total}
// //                 updateQty={updateQty}
// //                 deleteItem={deleteItem}
// //                 clearCart={clearCart}
// //                 submitOrder={submitOrder}
// //                 handlePayment={handlePayment}
// //               />
// //             }
// //           />
// //           <Route path="/login" element={<Login onLogin={handleLogin} />} />
// //           <Route path="/userprofile" element={<UserProfile user={user} setUser={setUser} />} />
// //         </Routes>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }


// // import React, { useState, useEffect } from "react";
// // import { Routes, Route, useNavigate } from "react-router-dom";

// // import Header from "../components/Header";
// // import Home from "../components/Home";
// // import Login from "../components/Login";
// // import About from "../components/About";
// // import Contact from "../components/Contact";
// // import Cart from "../components/Cart";
// // import Footer from "../components/Footer";
// // import UserProfile from "../components/Profile";

// // import axios from "axios";

// // const PROVINCES = [
// //   "Province 1",
// //   "Province 2",
// //   "Bagmati",
// //   "Gandaki",
// //   "Province 5",
// //   "Karnali",
// //   "Sudurpashchim",
// // ];

// // export default function App() {
// //   const [user, setUser] = useState(null);
// //   const [cart, setCart] = useState([]);
// //   const [province, setProvince] = useState("");
// //   const [recs, setRecs] = useState([]);
// //   const navigate = useNavigate();

// //   // Auto fetch profile if token exists
// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       const token = localStorage.getItem("token");
// //       if (token) {
// //         try {
// //           const { data } = await axios.get("http://localhost:5000/api/users/profile", {
// //             headers: { Authorization: token },
// //           });
// //           setUser(data);
// //         } catch (err) {
// //           console.log("Profile fetch failed", err);
// //         }
// //       }
// //     };
// //     fetchUser();
// //   }, []);

// //   useEffect(() => {
// //     if (user) {
// //       navigator.geolocation.getCurrentPosition(
// //         ({ coords }) => {
// //           const { latitude: lat, longitude: lng } = coords;
// //           let prov = "";

// //           if (lat >= 26.7 && lat <= 28.3 && lng >= 87.0 && lng <= 88.3) prov = "Province 1";
// //           else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.9) prov = "Province 2";
// //           else if (lat >= 27.3 && lat <= 28.5 && lng >= 85.0 && lng <= 85.8) prov = "Bagmati";
// //           else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
// //           else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
// //           else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
// //           else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";
// //           else prov = "Unknown";

// //           setProvince(prov);
// //           alert(`Location allowed. Detected province: ${prov}`);
// //         },
// //         () => {
// //           setProvince("");
// //           alert("Location access denied. Please select province manually.");
// //         }
// //       );
// //     }
// //   }, [user]);

// //   const addToCart = (item) => {
// //     if (!user) return navigate("/login");
// //     if (!province) return alert("📍 Please allow or select province first.");

// //     const exists = cart.find((c) => c.id === item.id);
// //     if (exists) {
// //       setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
// //     } else {
// //       setCart([...cart, { ...item, qty: 1, price: item.price }]);
// //     }
// //   };

// //   const updateQty = (id, delta) => {
// //     setCart(
// //       cart.map((c) =>
// //         c.id === id ? { ...c, qty: c.qty + delta >= 1 ? c.qty + delta : 1 } : c
// //       )
// //     );
// //   };

// //   const deleteItem = (id) => setCart(cart.filter((c) => c.id !== id));
// //   const clearCart = () => setCart([]);

// //   const total = cart.reduce((sum, c) => sum + c.qty * c.price, 0);

// //   const submitOrder = async () => {
// //     if (!user) return alert("Login required");
// //     if (!province) return alert("Province needed");
// //     if (cart.length === 0) return alert("Cart empty");

// //     const res = await fetch("http://localhost:5000/api/order/submit", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ user, items: cart, province }),
// //     });
// //     const data = await res.json();
// //     if (res.ok) {
// //       alert(data.msg);
// //       setRecs(data.recs);
// //       navigate("/cart");
// //     } else alert(data.msg);
// //   };

// //   const handlePayment = async () => {
// //     const res = await fetch("http://localhost:5000/api/order/pay", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ orderId: "temp123", amount: total, esewaRef: "ESEWA123" }),
// //     });
// //     const data = await res.json();
// //     if (data.success) {
// //       alert(data.msg);
// //       clearCart();
// //       navigate("/");
// //     } else alert("Payment error");
// //   };

// //   // Login handler for Login component
// //   const handleLogin = (loggedUser) => {
// //     setUser(loggedUser);
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col bg-gray-50">
// //       <Header user={user} cart={cart} province={province} setUser={setUser} />
// //       <main className="flex-grow container mx-auto p-6">
// //         <Routes>
// //           <Route
// //             path="/"
// //             element={
// //               <Home
// //                 addToCart={addToCart}
// //                 province={province}
// //                 setProvince={setProvince}
// //                 provinces={PROVINCES}
// //                 recs={recs}
// //               />
// //             }
// //           />
// //           <Route path="/about" element={<About />} />
// //           <Route path="/contact" element={<Contact />} />
// //           <Route
// //             path="/cart"
// //             element={
// //               <Cart
// //                 cart={cart}
// //                 total={total}
// //                 updateQty={updateQty}
// //                 deleteItem={deleteItem}
// //                 clearCart={clearCart}
// //                 submitOrder={submitOrder}
// //                 handlePayment={handlePayment}
// //               />
// //             }
// //           />
// //           <Route path="/login" element={<Login onLogin={handleLogin} />} />
// //           <Route path="/userprofile" element={<UserProfile user={user} setUser={setUser} />} />
// //         </Routes>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }


// // import React, { useState, useEffect } from "react";
// // import { Routes, Route, useNavigate } from "react-router-dom";

// // import Header from "../components/Header";
// // import Home from "../components/Home";
// // import Login from "../components/Login";
// // import About from "../components/About";
// // import Contact from "../components/Contact";
// // import Cart from "../components/Cart";
// // import Footer from "../components/Footer";


// // import axios from "axios";

// // const PROVINCES = [
// //   "Province 1",
// //   "Province 2",
// //   "Bagmati",
// //   "Gandaki",
// //   "Province 5",
// //   "Karnali",
// //   "Sudurpashchim",
// // ];

// // export default function App() {
// //   const [user, setUser] = useState(null);
// //   const [cart, setCart] = useState([]);
// //   const [showProfile, setShowProfile] = useState(false);

// //   const [province, setProvince] = useState("");
// //   const [recs, setRecs] = useState([]);
// //   const navigate = useNavigate();

// //   // Auto fetch profile if token exists
// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       const token = localStorage.getItem("token");
// //       if (token) {
// //         try {
// //           const { data } = await axios.get("http://localhost:5000/api/users/profile", {
// //             headers: { Authorization: token },
// //           });
// //           setUser(data);
// //         } catch (err) {
// //           console.log("Profile fetch failed", err);
// //           setUser(null);
// //           localStorage.removeItem("token");
// //         }
// //       }
// //     };
// //     fetchUser();
// //   }, []);

// //   // Location logic remains the same
// //   useEffect(() => {
// //     if (user) {
// //       navigator.geolocation.getCurrentPosition(
// //         ({ coords }) => {
// //           const { latitude: lat, longitude: lng } = coords;
// //           let prov = "";

// //           if (lat >= 26.7 && lat <= 28.3 && lng >= 87.0 && lng <= 88.3) prov = "Province 1";
// //           else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.9) prov = "Province 2";
// //           else if (lat >= 27.3 && lat <= 28.5 && lng >= 85.0 && lng <= 85.8) prov = "Bagmati";
// //           else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
// //           else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
// //           else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
// //           else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";
// //           else prov = "Unknown";

// //           setProvince(prov);
// //           alert(`Location allowed. Detected province: ${prov}`);
// //         },
// //         () => {
// //           setProvince("");
// //           alert("Location access denied. Please select province manually.");
// //         }
// //       );
// //     }
// //   }, [user]);
// //   const handleProfileToggle = () => {
// //     setShowProfile((prev) => !prev);
// //   };


// //   // Cart functions (unchanged)
// //   const addToCart = (item) => {
// //     if (!user) return navigate("/login");
// //     if (!province) return alert("📍 Please allow or select province first.");

// //     const exists = cart.find((c) => c.id === item.id);
// //     if (exists) {
// //       setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
// //     } else {
// //       setCart([...cart, { ...item, qty: 1, price: item.price }]);
// //     }
// //   };

// //   const updateQty = (id, delta) => {
// //     setCart(
// //       cart.map((c) =>
// //         c.id === id ? { ...c, qty: c.qty + delta >= 1 ? c.qty + delta : 1 } : c
// //       )
// //     );
// //   };

// //   const deleteItem = (id) => setCart(cart.filter((c) => c.id !== id));
// //   const clearCart = () => setCart([]);

// //   const total = cart.reduce((sum, c) => sum + c.qty * c.price, 0);

// //   const submitOrder = async () => {
// //     if (!user) return alert("Login required");
// //     if (!province) return alert("Province needed");
// //     if (cart.length === 0) return alert("Cart empty");

// //     const res = await fetch("http://localhost:5000/api/order/submit", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ user, items: cart, province }),
// //     });
// //     const data = await res.json();
// //     if (res.ok) {
// //       alert(data.msg);
// //       setRecs(data.recs);
// //       navigate("/cart");
// //     } else alert(data.msg);
// //   };

// //   const handlePayment = async () => {
// //     const res = await fetch("http://localhost:5000/api/order/pay", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ orderId: "temp123", amount: total, esewaRef: "ESEWA123" }),
// //     });
// //     const data = await res.json();
// //     if (data.success) {
// //       alert(data.msg);
// //       clearCart();
// //       navigate("/");
// //     } else alert("Payment error");
// //   };

// //   // Called on successful login from Login.jsx
// //   const handleLogin = (loggedUser) => {
// //     setUser(loggedUser);
// //     localStorage.setItem("token", loggedUser.token || localStorage.getItem("token"));
// //   };

// //   // Called on logout - clear user + token
// //   const handleLogout = () => {
// //     setUser(null);
// //     setShowProfile(false);
// //     localStorage.removeItem("token");
// //     navigate("/");
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col bg-gray-50">
// //       <Header user={user} cart={cart} province={province} setUser={setUser} onLogout={handleLogout} onProfileClick={handleProfileToggle} />

// //       <main className="flex-grow container mx-auto p-6">
// //         {showProfile ? (
// //           <Profile user={user} onLogout={handleLogout} onClose={() => setShowProfile(false)} />
// //         ) : (

// //           <Routes>
// //             <Route
// //               path="/"
// //               element={
// //                 <Home
// //                   addToCart={addToCart}
// //                   province={province}
// //                   setProvince={setProvince}
// //                   provinces={PROVINCES}
// //                   recs={recs}
// //                 />
// //               }
// //             />
// //             <Route path="/about" element={<About />} />
// //             <Route path="/contact" element={<Contact />} />
// //             <Route
// //               path="/cart"
// //               element={
// //                 <Cart
// //                   cart={cart}
// //                   total={total}
// //                   updateQty={updateQty}
// //                   deleteItem={deleteItem}
// //                   clearCart={clearCart}
// //                   submitOrder={submitOrder}
// //                   handlePayment={handlePayment}
// //                 />
// //               }
// //             />
// //             <Route path="/login" element={<Login onLogin={setUser} />} />
// //           </Routes>
// //         )}
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }


// // import React, { useState, useEffect } from "react";
// // import { Routes, Route, useNavigate } from "react-router-dom";

// // import Header from "../components/Header";
// // import Home from "../components/Home";
// // import Login from "../components/Login";
// // import About from "../components/About";
// // import Contact from "../components/Contact";
// // import Cart from "../components/Cart";
// // import Footer from "../components/Footer";
// // import Profile from "../components/Profile"; // ✅ make sure this file exists

// // import axios from "axios";

// // const PROVINCES = [
// //   "Province 1",
// //   "Province 2",
// //   "Bagmati",
// //   "Gandaki",
// //   "Province 5",
// //   "Karnali",
// //   "Sudurpashchim",
// // ];

// // export default function App() {
// //   const [user, setUser] = useState(null);
// //   const [cart, setCart] = useState([]);
// //   const [showProfile, setShowProfile] = useState(false);

// //   const [province, setProvince] = useState("");
// //   const [recs, setRecs] = useState([]);
// //   const navigate = useNavigate();

// //   // Auto fetch profile if token exists
// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       const token = localStorage.getItem("token");
// //       if (token) {
// //         try {
// //           const { data } = await axios.get("http://localhost:5000/api/users/profile", {
// //             headers: { Authorization: token },
// //           });
// //           setUser(data);
// //         } catch (err) {
// //           console.log("Profile fetch failed", err);
// //           setUser(null);
// //           localStorage.removeItem("token");
// //         }
// //       }
// //     };
// //     fetchUser();
// //   }, []);

// //   // Location logic
// //   useEffect(() => {
// //     if (user) {
// //       navigator.geolocation.getCurrentPosition(
// //         ({ coords }) => {
// //           const { latitude: lat, longitude: lng } = coords;
// //           let prov = "";

// //           if (lat >= 26.7 && lat <= 28.3 && lng >= 87.0 && lng <= 88.3) prov = "Province 1";
// //           else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.9) prov = "Province 2";
// //           else if (lat >= 27.3 && lat <= 28.5 && lng >= 85.0 && lng <= 85.8) prov = "Bagmati";
// //           else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
// //           else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
// //           else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
// //           else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";
// //           else prov = "Unknown";

// //           setProvince(prov);
// //           alert(`Location allowed. Detected province: ${prov}`);
// //         },
// //         () => {
// //           setProvince("");
// //           alert("Location access denied. Please select province manually.");
// //         }
// //       );
// //     }
// //   }, [user]);

// //   const handleProfileToggle = () => {
// //     setShowProfile(prev => !prev);
// //   };

// //   // Cart functions
// //   const addToCart = (item) => {
// //     if (!user) return navigate("/login");
// //     if (!province) return alert("📍 Please allow or select province first.");

// //     const exists = cart.find((c) => c.id === item.id);
// //     if (exists) {
// //       setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
// //     } else {
// //       setCart([...cart, { ...item, qty: 1, price: item.price }]);
// //     }
// //   };

// //   const updateQty = (id, delta) => {
// //     setCart(
// //       cart.map((c) =>
// //         c.id === id ? { ...c, qty: c.qty + delta >= 1 ? c.qty + delta : 1 } : c
// //       )
// //     );
// //   };

// //   const deleteItem = (id) => setCart(cart.filter((c) => c.id !== id));
// //   const clearCart = () => setCart([]);

// //   const total = cart.reduce((sum, c) => sum + c.qty * c.price, 0);

// //   const submitOrder = async () => {
// //     if (!user) return alert("Login required");
// //     if (!province) return alert("Province needed");
// //     if (cart.length === 0) return alert("Cart empty");

// //     const res = await fetch("http://localhost:5000/api/order/submit", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ user, items: cart, province }),
// //     });
// //     const data = await res.json();
// //     if (res.ok) {
// //       alert(data.msg);
// //       setRecs(data.recs);
// //       navigate("/cart");
// //     } else alert(data.msg);
// //   };

// //   const handlePayment = async () => {
// //     const res = await fetch("http://localhost:5000/api/order/pay", {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ orderId: "temp123", amount: total, esewaRef: "ESEWA123" }),
// //     });
// //     const data = await res.json();
// //     if (data.success) {
// //       alert(data.msg);
// //       clearCart();
// //       navigate("/");
// //     } else alert("Payment error");
// //   };

// //   const handleLogin = (loggedUser) => {
// //     setUser(loggedUser);
// //     localStorage.setItem("token", loggedUser.token || localStorage.getItem("token"));
// //   };

// //   const handleLogout = () => {
// //     setUser(null);
// //     setShowProfile(false);
// //     localStorage.removeItem("token");
// //     navigate("/");
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col bg-gray-50">
// //       <Header
// //         user={user}
// //         cart={cart}
// //         province={province}
// //         setUser={setUser}
// //         onLogout={handleLogout}
// //         onProfileClick={handleProfileToggle}
// //       />

// //       <main className="flex-grow container mx-auto p-6">
// //           <Routes>
// //             <Route
// //               path="/"
// //               element={
// //                 <Home
// //                   addToCart={addToCart}
// //                   province={province}
// //                   setProvince={setProvince}
// //                   provinces={PROVINCES}
// //                   recs={recs}
// //                 />
// //               }
// //             />
// //             <Route path="/about" element={<About />} />
// //             <Route path="/contact" element={<Contact />} />
// //             <Route
// //               path="/cart"
// //               element={
// //                 <Cart
// //                   cart={cart}
// //                   total={total}
// //                   updateQty={updateQty}
// //                   deleteItem={deleteItem}
// //                   clearCart={clearCart}
// //                   submitOrder={submitOrder}
// //                   handlePayment={handlePayment}
// //                 />
// //               }
// //             />
// //             <Route path="/login" element={<Login onLogin={handleLogin} />} />
// //             <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
// //           </Routes>

// //       </main>

// //       <Footer />
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";

// import Header from "../components/Header";
// import Home from "../components/Home";
// import Login from "../components/Login";
// import About from "../components/About";
// import Contact from "../components/Contact";
// import Cart from "../components/Cart";
// import Footer from "../components/Footer";
// import Profile from "../components/Profile"; // ✅ make sure this file exists

// import axios from "axios";

// const PROVINCES = [
//   "Province 1",
//   "Province 2",
//   "Bagmati",
//   "Gandaki",
//   "Lumbini",
//   "Karnali",
//   "Sudurpashchim",
// ];

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [showProfile, setShowProfile] = useState(false);
//   const [province, setProvince] = useState("");
//   const [recs, setRecs] = useState([]);
//   const navigate = useNavigate();

//   // Auto fetch profile
//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           const { data } = await axios.get("http://localhost:5000/api/users/profile", {
//             headers: { Authorization: token },
//           });
//           setUser(data);
//         } catch (err) {
//           console.log("Profile fetch failed", err);
//           setUser(null);
//           localStorage.removeItem("token");
//         }
//       }
//     };
//     fetchUser();
//   }, []);

//   // Location logic
//   useEffect(() => {
//     if (user) {
//       navigator.geolocation.getCurrentPosition(
//         ({ coords }) => {
//           const { latitude: lat, longitude: lng } = coords;
//           let prov = "";

//           if (lat >= 26.7 && lat <= 28.3 && lng >= 87.0 && lng <= 88.3) prov = "Province 1";
//           else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.9) prov = "Province 2";
//           else if (lat >= 27.3 && lat <= 28.5 && lng >= 85.0 && lng <= 85.8) prov = "Bagmati";
//           else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
//           else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
//           else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
//           else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";
//           else prov = "Unknown";

//           setProvince(prov);
//           alert(`📍 Location allowed. Detected province: ${prov}`);
//         },
//         () => {
//           setProvince("");
//           alert("❌ Location access denied. Please select province manually.");
//         }
//       );
//     }
//   }, [user]);

//   const handleProfileToggle = () => {
//     setShowProfile(prev => !prev);
//   };

//   // Cart functions
//   const addToCart = (item) => {
//     if (!user) return navigate("/login");
//     if (!province) return alert("📍 Please allow or select province first.");

//     const exists = cart.find((c) => c.id === item.id);
//     if (exists) {
//       setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
//     } else {
//       setCart([...cart, { ...item, qty: 1, price: item.price }]);
//     }
//   };

//   const updateQty = (id, delta) => {
//     setCart(
//       cart.map((c) =>
//         c.id === id ? { ...c, qty: c.qty + delta >= 1 ? c.qty + delta : 1 } : c
//       )
//     );
//   };

//   const deleteItem = (id) => setCart(cart.filter((c) => c.id !== id));
//   const clearCart = () => setCart([]);

//   const total = cart.reduce((sum, c) => sum + c.qty * c.price, 0);

//   const submitOrder = async () => {
//     if (!user) return alert("Login required");
//     if (!province) return alert("Province needed");
//     if (cart.length === 0) return alert("Cart empty");

//     const res = await fetch("http://localhost:5000/api/order/submit", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ user, items: cart, province }),
//     });
//     const data = await res.json();
//     if (res.ok) {
//       alert(data.msg);
//       setRecs(data.recs);
//       navigate("/cart");
//     } else alert(data.msg);
//   };

//   const handlePayment = async () => {
//     const res = await fetch("http://localhost:5000/api/order/pay", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ orderId: "temp123", amount: total, esewaRef: "ESEWA123" }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       alert(data.msg);
//       clearCart();
//       navigate("/");
//     } else alert("Payment error");
//   };

//   const handleLogin = (loggedUser) => {
//     setUser(loggedUser);
//     localStorage.setItem("token", loggedUser.token || localStorage.getItem("token"));
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setShowProfile(false);
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Header
//         user={user}
//         cart={cart}
//         province={province}
//         setUser={setUser}
//         onLogout={handleLogout}
//         onProfileClick={handleProfileToggle}
//       />

//       <main className="flex-grow container mx-auto p-6">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 addToCart={addToCart}
//                 province={province}
//                 setProvince={setProvince}
//                 provinces={PROVINCES}
//                 recs={recs}
//               />
//             }
//           />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route
//             path="/cart"
//             element={
//               <Cart
//                 cart={cart}
//                 total={total}
//                 updateQty={updateQty}
//                 deleteItem={deleteItem}
//                 clearCart={clearCart}
//                 submitOrder={submitOrder}
//                 handlePayment={handlePayment}
//               />
//             }
//           />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }


// import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";

// import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Cart from "./components/Cart";
// import Footer from "./components/Footer";
// import Profile from "./components/Profile";

// import axios from "axios";

// const PROVINCES = [
//   "Province 1", "Province 2", "Bagmati", "Gandaki",
//   "Lumbini", "Karnali", "Sudurpashchim",
// ];

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [showProfile, setShowProfile] = useState(false);
//   const [province, setProvince] = useState("");
//   const [recs, setRecs] = useState([]);
//   const navigate = useNavigate();

//   // Auto fetch profile
//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           const { data } = await axios.get("http://localhost:5000/api/users/profile", {
//             headers: { Authorization: token },
//           });
//           setUser(data);
//         } catch (err) {
//           console.log("Profile fetch failed", err);
//           setUser(null);
//           localStorage.removeItem("token");
//         }
//       }
//     };
//     fetchUser();
//   }, []);

//   // Location detection
//   useEffect(() => {
//     if (user) {
//       navigator.geolocation.getCurrentPosition(
//         ({ coords }) => {
//           const { latitude: lat, longitude: lng } = coords;
//           let prov = "";

//           if (lat >= 26.7 && lat <= 28.3 && lng >= 87.0 && lng <= 88.3) prov = "Province 1";
//           else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.9) prov = "Province 2";
//           else if (lat >= 27.3 && lat <= 28.5 && lng >= 85.0 && lng <= 85.8) prov = "Bagmati";
//           else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
//           else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
//           else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
//           else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";
//           else prov = "Unknown";

//           setProvince(prov);
//           alert(`📍 Location allowed. Detected province: ${prov}`);
//         },
//         () => {
//           setProvince("");
//           alert("❌ Location access denied. Please select province manually.");
//         }
//       );
//     }
//   }, [user]);

//   const handleProfileToggle = () => setShowProfile((prev) => !prev);

//   const addToCart = (item) => {
//     if (!user) return navigate("/login");
//     if (!province) return alert("📍 Please allow or select province first.");

//     const exists = cart.find((c) => c.id === item.id);
//     if (exists) {
//       setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
//     } else {
//       setCart([...cart, { ...item, qty: 1, price: item.price }]);
//     }
//   };

//   const updateQty = (id, delta) => {
//     setCart(
//       cart.map((c) =>
//         c.id === id ? { ...c, qty: c.qty + delta >= 1 ? c.qty + delta : 1 } : c
//       )
//     );
//   };

//   const deleteItem = (id) => setCart(cart.filter((c) => c.id !== id));
//   const clearCart = () => setCart([]);

//   const total = cart.reduce((sum, c) => sum + c.qty * c.price, 0);

//   const submitOrder = async () => {
//     if (!user || !province || cart.length === 0) {
//       return alert("❌ Please login, select province, and add items.");
//     }

//     const res = await fetch("http://localhost:5000/api/order/submit", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ user, items: cart, province }),
//     });
//     const data = await res.json();
//     if (res.ok) {
//       alert(data.msg);
//       setRecs(data.recs);
//       navigate("/cart");
//     } else alert(data.msg);
//   };

//   const handlePayment = async () => {
//     const res = await fetch("http://localhost:5000/api/order/pay", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ orderId: "temp123", amount: total, esewaRef: "ESEWA123" }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       alert(data.msg);
//       clearCart();
//       navigate("/");
//     } else alert("Payment error");
//   };

//   const handleLogin = (loggedUser) => {
//     setUser(loggedUser);
//     localStorage.setItem("token", loggedUser.token || localStorage.getItem("token"));
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setShowProfile(false);
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Header
//         user={user}
//         cart={cart}
//         province={province}
//         setUser={setUser}
//         onLogout={handleLogout}
//         onProfileClick={handleProfileToggle}
//       />

//       <main className="flex-grow container mx-auto p-6">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 addToCart={addToCart}
//                 province={province}
//                 setProvince={setProvince}
//                 provinces={PROVINCES}
//                 recs={recs}
//               />
//             }
//           />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route
//             path="/cart"
//             element={
//               <Cart
//                 cart={cart}
//                 total={total}
//                 updateQty={updateQty}
//                 deleteItem={deleteItem}
//                 clearCart={clearCart}
//                 submitOrder={submitOrder}
//                 handlePayment={handlePayment}
//               />
//             }
//           />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";

// import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Cart from "./components/Cart";
// import Footer from "./components/Footer";
// import Profile from "./components/Profile";

// import axios from "axios";

// const PROVINCES = [
//   "Province 1", "Province 2", "Bagmati", "Gandaki",
//   "Lumbini", "Karnali", "Sudurpashchim",
// ];

// // Make sure ids are unique, fixed duplication of id=14 here
// const defaultFoodItems = [
//   { id: 1,  name: 'Dal Bhat', img: 'https://grrrltraveler.com/wp-content/uploads/2018/08/NEPALI-DAL-BHAT.jpg', price: 250 },
//   { id: 2, name: 'Momo', img: 'https://e7.pngegg.com/pngimages/979/343/png-clipart-mandu-momo-buuz-khinkali-pelmeni-meat-food-recipe-thumbnail.png',price:200 },
//   { id: 3, name: 'Sel Roti', img: 'https://i.ytimg.com/vi/tRy6TAKNNes/sddefault.jpg', price: 25 },
//   { id: 4, name: 'Gundruk', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSh3NXAD3EUkm8ls-5c7lIt7_xJalJeSceRCKg8rU2ipHeOohlElWGDFjsjnOYzqoz9qgfVs9_VGA7irfyIAmZ0HLCeXNsrEPdXN2n1hyphenhypheneUfeHwCIIoPMaleW5Xi3NZpZiWjM0fB6Wle4/s1600/DSC04152.JPG', price: 100 },
//   { id: 5, name: 'Chatamari', img: 'https://nepaltraveller.com/laravel-filemanager/photos/64/Chatamari/Untitled%20design%20(4).png', price: 300 },
//   { id: 6, name: 'Thukpa', img: 'https://www.awesomecuisine.com/wp-content/uploads/2020/03/chicken-thukpa.jpg', price: 280 },
//   { id: 7, name: 'Yomari', img: 'https://static1.squarespace.com/static/53ecd1bde4b0a6f9524254f8/t/675bdd6f2fda443f1ac0726e/1734073711928/Yomari-Punhi-Nepal-Festivals-shankerhotel_com_np.png?format=1500w', price: 200 },
//   { id: 8, name: 'Sukuti', img: 'https://uws.com.np/wp-content/uploads/2023/02/mutton-sukuti-fry.webp', price:350 },
//   { id: 9, name: 'Juju Dhau', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhljhoGLu-SeG7_MbewOcsgN1ao786EgCmI2Htqdy6AWVl01jMCVmp4Sbg_o3TnSMQl3qJKwRpWSL1Dg2AYtvA-XL5fjP3q51l2yHWmowJgFxcFLSbTXNHewa2brcMIBS1sFh_S7JrD0-Q/s1600/2008+-+sept-nov+%28Nepal%29+050.jpg', price: 300 },
//   { id: 10, name: 'Kwati', img: 'https://naturallynidhi.com/wp-content/uploads/2019/05/InstantPot_NepaliKwatiDaal_MixedLentilStew-480x270.jpg', price: 180 },
//   { id: 11, name: 'Samay Baji', img: 'https://www.tasteatlas.com/images/dishes/856738bc40274f5694e144c242195a0c.jpg', price: 160 },
//   { id: 12, name: 'Aloo Tama', img: 'https://images.slurrp.com/prod/recipe_images/transcribe/main%20course/Aloo-tama.webp', price: 170 },
//   { id: 13, name: 'Choila', img: 'https://junifoods.com/wp-content/uploads/2023/04/Chicken-Choila-Main-2-500x500.png', price: 120 },
//   { id: 14, name: 'Bara', img: 'https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/52/71/73/5M1NG6h3SIKGKlhhKM9f_Nepali%20Bara.jpg', price: 100 },
//   { id: 15, name: 'Sekuwa', img: 'https://junifoods.com/wp-content/uploads/2022/12/Chicken-Sekuwa-1024x576.png', price: 140 },
//   { id: 16, name: 'Gorkhali Lamb', img: 'https://i.pinimg.com/236x/9a/c4/80/9ac480669bcd49ea1bb3ecc968ce99de.jpg', price:200 },
//   { id: 17, name: 'Pulao', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFPjIluL4H7E7Qznz6kq0DziLeDpnSg0RqM_0J-3nemYyxHbWSK0EaaAZ70NBiy1kLAFy5ZCxgBfCpETdfnL2oSqhS88KOdNTexX9Me5y1xKbFCU0D0DocySLaCPdiP1eXT7dvEWHXstDA/s1600/vegetable+pulao.JPG',price: 190 },
//   { id: 18, name: 'Thakali Set', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfQimYoVlL3uplkHguLSCB4m554dDzTv-Ug&s', price: 350 },
//   { id: 19, name: 'Masu', img: 'https://junifoods.com/wp-content/uploads/2023/12/Easy-Goat-Curry-Sajilo-Khasi-Ko-Masu-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%96%E0%A4%B8%E0%A5%80%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%BE%E0%A4%B8%E0%A5%81-1.jpg', price: 1400 },
//   { id: 20, name: 'Bhutuwa', img: 'https://cdn.tasteatlas.com//images/dishes/cc879765847047629baf56168ed7501c.jpg?width=320&height=205', price: 400 },
// ];

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [showProfile, setShowProfile] = useState(false);
//   const [province, setProvince] = useState("");
//   const [recs, setRecs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   // Auto fetch profile on mount
//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         try {
//           const { data } = await axios.get("http://localhost:5000/api/users/profile", {
//             headers: { Authorization: token },
//           });
//           setUser(data);
//         } catch (err) {
//           console.log("Profile fetch failed", err);
//           setUser(null);
//           localStorage.removeItem("token");
//         }
//       }
//     };
//     fetchUser();
//   }, []);

//   // Location detection
//   useEffect(() => {
//     if (user) {
//       navigator.geolocation.getCurrentPosition(
//         ({ coords }) => {
//           const { latitude: lat, longitude: lng } = coords;
//           let prov = "";

//           if (lat >= 26.7 && lat <= 28.3 && lng >= 87.0 && lng <= 88.3) prov = "Province 1";
//           else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.9) prov = "Province 2";
//           else if (lat >= 27.3 && lat <= 28.5 && lng >= 85.0 && lng <= 85.8) prov = "Bagmati";
//           else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
//           else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
//           else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
//           else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";
//           else prov = "Unknown";

//           setProvince(prov);
//           alert(`📍 Location allowed. Detected province: ${prov}`);
//         },
//         () => {
//           setProvince("");
//           alert("❌ Location access denied. Please select province manually.");
//         }
//       );
//     }
//   }, [user]);

//   // Add to cart
//   const addToCart = (item) => {
//     if (!user) return navigate("/login");
//     if (!province) return alert("📍 Please allow or select province first.");

//     const exists = cart.find((c) => c.id === item.id);
//     if (exists) {
//       setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
//     } else {
//       setCart([...cart, { ...item, qty: 1, price: item.price }]);
//     }
//   };

//   // Update quantity in cart
//   const updateQty = (id, delta) => {
//     setCart(
//       cart.map((c) =>
//         c.id === id ? { ...c, qty: c.qty + delta >= 1 ? c.qty + delta : 1 } : c
//       )
//     );
//   };

//   // Delete item from cart
//   const deleteItem = (id) => setCart(cart.filter((c) => c.id !== id));

//   // Clear cart
//   const clearCart = () => setCart([]);

//   // Total price
//   const total = cart.reduce((sum, c) => sum + c.qty * c.price, 0);

//   // Submit order
//   const submitOrder = async () => {
//     if (!user || !province || cart.length === 0) {
//       return alert("❌ Please login, select province, and add items.");
//     }

//     const res = await fetch("http://localhost:5000/api/order/submit", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ user, items: cart, province }),
//     });
//     const data = await res.json();
//     if (res.ok) {
//       alert(data.msg);
//       setRecs(data.recs);
//       navigate("/cart");
//     } else alert(data.msg);
//   };

//   // Payment handler
//   const handlePayment = async () => {
//     const res = await fetch("http://localhost:5000/api/order/pay", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ orderId: "temp123", amount: total, esewaRef: "ESEWA123" }),
//     });
//     const data = await res.json();
//     if (data.success) {
//       alert(data.msg);
//       clearCart();
//       navigate("/");
//     } else alert("Payment error");
//   };

//   // Login handler
//   const handleLogin = (loggedUser) => {
//     setUser(loggedUser);
//     localStorage.setItem("token", loggedUser.token || localStorage.getItem("token"));
//   };

//   // Logout handler
//   const handleLogout = () => {
//     setUser(null);
//     setShowProfile(false);
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   // Filtered food items based on searchTerm (case-insensitive)
//   const filteredRecs = recs.length > 0
//     ? recs.filter((item) =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : [];

//   const filteredDefaultFoodItems = defaultFoodItems.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Header
//         user={user}
//         cart={cart}
//         province={province}
//         setUser={setUser}
//         onLogout={handleLogout}
//         onProfileClick={() => setShowProfile((p) => !p)}
//         onSearch={setSearchTerm} // <-- Pass search callback here
//       />

//       <main className="flex-grow container mx-auto p-6">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 addToCart={addToCart}
//                 province={province}
//                 setProvince={setProvince}
//                 provinces={PROVINCES}
//                 recs={filteredRecs.length > 0 || searchTerm ? filteredRecs : recs}
//                 defaultFoodItems={
//                   searchTerm ? filteredDefaultFoodItems : defaultFoodItems
//                 }
//               />
//             }
//           />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route
//             path="/cart"
//             element={
//               <Cart
//                 cart={cart}
//                 total={total}
//                 updateQty={updateQty}
//                 deleteItem={deleteItem}
//                 clearCart={clearCart}
//                 submitOrder={submitOrder}
//                 handlePayment={handlePayment}
//               />
//             }
//           />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Cart from "./components/Cart";
// import Footer from "./components/Footer";
// import Profile from "./components/Profile";

// const PROVINCES = [
//   "Province 1", "Province 2", "Bagmati", "Gandaki",
//   "Lumbini", "Karnali", "Sudurpashchim",
// ];

// const defaultFoodItems = [
//   { id: 1, name: 'Dal Bhat', img: 'https://grrrltraveler.com/wp-content/uploads/2018/08/NEPALI-DAL-BHAT.jpg', price: 250 },
//   { id: 2, name: 'Momo', img: 'https://e7.pngegg.com/pngimages/979/343/png-clipart-mandu-momo-buuz-khinkali-pelmeni-meat-food-recipe-thumbnail.png', price: 200 },
//   { id: 3, name: 'Sel Roti', img: 'https://i.ytimg.com/vi/tRy6TAKNNes/sddefault.jpg', price: 25 },
//   { id: 4, name: 'Gundruk', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSh3NXAD3EUkm8ls-5c7lIt7_xJalJeSceRCKg8rU2ipHeOohlElWGDFjsjnOYzqoz9qgfVs9_VGA7irfyIAmZ0HLCeXNsrEPdXN2n1hyphenhypheneUfeHwCIIoPMaleW5Xi3NZpZiWjM0fB6Wle4/s1600/DSC04152.JPG', price: 100 },
//   { id: 5, name: 'Chatamari', img: 'https://nepaltraveller.com/laravel-filemanager/photos/64/Chatamari/Untitled%20design%20(4).png', price: 300 },
//   { id: 6, name: 'Thukpa', img: 'https://www.awesomecuisine.com/wp-content/uploads/2020/03/chicken-thukpa.jpg', price: 280 },
//   { id: 7, name: 'Yomari', img: 'https://static1.squarespace.com/static/53ecd1bde4b0a6f9524254f8/t/675bdd6f2fda443f1ac0726e/1734073711928/Yomari-Punhi-Nepal-Festivals-shankerhotel_com_np.png?format=1500w', price: 200 },
//   { id: 8, name: 'Sukuti', img: 'https://uws.com.np/wp-content/uploads/2023/02/mutton-sukuti-fry.webp', price: 350 },
//   { id: 9, name: 'Juju Dhau', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhljhoGLu-SeG7_MbewOcsgN1ao786EgCmI2Htqdy6AWVl01jMCVmp4Sbg_o3TnSMQl3qJKwRpWSL1Dg2AYtvA-XL5fjP3q51l2yHWmowJgFxcFLSbTXNHewa2brcMIBS1sFh_S7JrD0-Q/s1600/2008+-+sept-nov+%28Nepal%29+050.jpg', price: 300 },
//   { id: 10, name: 'Kwati', img: 'https://naturallynidhi.com/wp-content/uploads/2019/05/InstantPot_NepaliKwatiDaal_MixedLentilStew-480x270.jpg', price: 180 },
//   { id: 11, name: 'Samay Baji', img: 'https://www.tasteatlas.com/images/dishes/856738bc40274f5694e144c242195a0c.jpg', price: 160 },
//   { id: 12, name: 'Aloo Tama', img: 'https://images.slurrp.com/prod/recipe_images/transcribe/main%20course/Aloo-tama.webp', price: 170 },
//   { id: 13, name: 'Choila', img: 'https://junifoods.com/wp-content/uploads/2023/04/Chicken-Choila-Main-2-500x500.png', price: 120 },
//   { id: 14, name: 'Bara', img: 'https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/52/71/73/5M1NG6h3SIKGKlhhKM9f_Nepali%20Bara.jpg', price: 100 },
//   { id: 15, name: 'Sekuwa', img: 'https://junifoods.com/wp-content/uploads/2022/12/Chicken-Sekuwa-1024x576.png', price: 140 },
//   { id: 16, name: 'Gorkhali Lamb', img: 'https://i.pinimg.com/236x/9a/c4/80/9ac480669bcd49ea1bb3ecc968ce99de.jpg', price: 200 },
//   { id: 17, name: 'Pulao', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFPjIluL4H7E7Qznz6kq0DziLeDpnSg0RqM_0J-3nemYyxHbWSK0EaaAZ70NBiy1kLAFy5ZCxgBfCpETdfnL2oSqhS88KOdNTexX9Me5y1xKbFCU0D0DocySLaCPdiP1eXT7dvEWHXstDA/s1600/vegetable+pulao.JPG', price: 190 },
//   { id: 18, name: 'Thakali Set', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfQimYoVlL3uplkHguLSCB4m554dDzTv-Ug&s', price: 350 },
//   { id: 14, name: 'Bara', img: 'https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/52/71/73/5M1NG6h3SIKGKlhhKM9f_Nepali%20Bara.jpg' },
//   { id: 19, name: 'Masu', img: 'https://junifoods.com/wp-content/uploads/2023/12/Easy-Goat-Curry-Sajilo-Khasi-Ko-Masu-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%96%E0%A4%B8%E0%A5%80%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%BE%E0%A4%B8%E0%A5%81-1.jpg', price: 1400 },
//   { id: 20, name: 'Bhutuwa', img: 'https://cdn.tasteatlas.com//images/dishes/cc879765847047629baf56168ed7501c.jpg?width=320&height=205', price: 400 },
// ];


// export default function App() {
//   const [user, setUser] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [province, setProvince] = useState("");
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Clear searchTerm when navigating away from Home
//   useEffect(() => {
//     if (location.pathname !== "/") {
//       setSearchTerm("");
//     }
//   }, [location]);

//   // Add to cart with qty management
//   const addToCart = (item) => {
//     if (!user) return navigate("/login");
//     if (!province) return alert("📍 Please allow or select province first.");

//     const existing = cart.find((c) => c.id === item.id);
//     if (existing) {
//       setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
//     } else {
//       setCart([...cart, { ...item, qty: 1 }]);
//     }
//   };

//   // Update quantity in cart
//   const updateQty = (id, delta) => {
//     setCart(
//       cart.map((c) =>
//         c.id === id
//           ? { ...c, qty: c.qty + delta > 0 ? c.qty + delta : 1 }
//           : c
//       )
//     );
//   };

//   // Delete item from cart
//   const deleteItem = (id) => setCart(cart.filter((c) => c.id !== id));

//   // Clear whole cart
//   const clearCart = () => setCart([]);

//   // Calculate total
//   const total = cart.reduce((sum, c) => sum + c.qty * c.price, 0);

//   // Dummy submit order (replace with your API logic)
//   const submitOrder = async () => {
//     if (!user || !province || cart.length === 0) {
//       return alert("❌ Please login, select province, and add items.");
//     }
//     alert("Order submitted!");
//     clearCart();
//     navigate("/");
//   };

//   // Logout function
//   const handleLogout = () => {
//     setUser(null);
//     setCart([]);
//     setProvince("");
//     navigate("/login");
//   };

//   // Filter food items by search term (on Home page)
//   const filteredFoodItems = defaultFoodItems.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Header
//         user={user}
//         cart={cart}
//         province={province}
//         setUser={setUser}
//         searchTerm={searchTerm}
//         setSearchTerm={setSearchTerm}
//         onLogout={handleLogout}
//       />

//       <main className="flex-grow container mx-auto p-6">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 addToCart={addToCart}
//                 province={province}
//                 setProvince={setProvince}
//                 searchTerm={searchTerm}
//                 provinces={PROVINCES}
//                 defaultFoodItems={filteredFoodItems}
//               />
//             }
//           />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route
//             path="/cart"
//             element={
//               <Cart
//                 cart={cart}
//                 updateQty={updateQty}
//                 deleteItem={deleteItem}
//                 clearCart={clearCart}
//                 total={total}
//                 submitOrder={submitOrder}
//               />
//             }
//           />
//           <Route path="/login" element={<Login onLogin={setUser} />} />
//           <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }







// import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";

// import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Cart from "./components/Cart";
// import Footer from "./components/Footer";
// import Profile from "./components/Profile";

// const PROVINCES = [
//   "Koshi",
//   "Madhesh",
//   "Bagmati",
//   "Gandaki",
//   "Lumbini",
//   "Karnali",
//   "Sudurpashchim",
// ];

// const defaultFoodItems = [
//   { id: 1,  name: 'Dal Bhat', img: 'https://grrrltraveler.com/wp-content/uploads/2018/08/NEPALI-DAL-BHAT.jpg', price: 250 },
//   { id: 2, name: 'Momo', img: 'https://e7.pngegg.com/pngimages/979/343/png-clipart-mandu-momo-buuz-khinkali-pelmeni-meat-food-recipe-thumbnail.png',price:200 },
//   { id: 3, name: 'Sel Roti', img: 'https://i.ytimg.com/vi/tRy6TAKNNes/sddefault.jpg', price: 25 },
//   { id: 4, name: 'Gundruk', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSh3NXAD3EUkm8ls-5c7lIt7_xJalJeSceRCKg8rU2ipHeOohlElWGDFjsjnOYzqoz9qgfVs9_VGA7irfyIAmZ0HLCeXNsrEPdXN2n1hyphenhypheneUfeHwCIIoPMaleW5Xi3NZpZiWjM0fB6Wle4/s1600/DSC04152.JPG', price: 100 },
//   { id: 5, name: 'Chatamari', img: 'https://nepaltraveller.com/laravel-filemanager/photos/64/Chatamari/Untitled%20design%20(4).png', price: 300 },
//   { id: 6, name: 'Thukpa', img: 'https://www.awesomecuisine.com/wp-content/uploads/2020/03/chicken-thukpa.jpg', price: 280 },
//   { id: 7, name: 'Yomari', img: 'https://static1.squarespace.com/static/53ecd1bde4b0a6f9524254f8/t/675bdd6f2fda443f1ac0726e/1734073711928/Yomari-Punhi-Nepal-Festivals-shankerhotel_com_np.png?format=1500w', price: 200 },
//   { id: 8, name: 'Sukuti', img: 'https://uws.com.np/wp-content/uploads/2023/02/mutton-sukuti-fry.webp', price:350 },
//   { id: 9, name: 'Juju Dhau', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhljhoGLu-SeG7_MbewOcsgN1ao786EgCmI2Htqdy6AWVl01jMCVmp4Sbg_o3TnSMQl3qJKwRpWSL1Dg2AYtvA-XL5fjP3q51l2yHWmowJgFxcFLSbTXNHewa2brcMIBS1sFh_S7JrD0-Q/s1600/2008+-+sept-nov+%28Nepal%29+050.jpg', price: 300 },
//   { id: 10, name: 'Kwati', img: 'https://naturallynidhi.com/wp-content/uploads/2019/05/InstantPot_NepaliKwatiDaal_MixedLentilStew-480x270.jpg', price: 180 },
//   { id: 11, name: 'Samay Baji', img: 'https://www.tasteatlas.com/images/dishes/856738bc40274f5694e144c242195a0c.jpg', price: 160 },
//   { id: 12, name: 'Aloo Tama', img: 'https://images.slurrp.com/prod/recipe_images/transcribe/main%20course/Aloo-tama.webp', price: 170 },
//   { id: 13, name: 'Choila', img: 'https://junifoods.com/wp-content/uploads/2023/04/Chicken-Choila-Main-2-500x500.png', price: 120 },
//   { id: 14, name: 'Bara', img: 'https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/52/71/73/5M1NG6h3SIKGKlhhKM9f_Nepali%20Bara.jpg', price: 100 },
//   { id: 15, name: 'Sekuwa', img: 'https://junifoods.com/wp-content/uploads/2022/12/Chicken-Sekuwa-1024x576.png', price: 140 },
//   { id: 16, name: 'Gorkhali Lamb', img: 'https://i.pinimg.com/236x/9a/c4/80/9ac480669bcd49ea1bb3ecc968ce99de.jpg', price:200 },
//   { id: 17, name: 'Pulao', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFPjIluL4H7E7Qznz6kq0DziLeDpnSg0RqM_0J-3nemYyxHbWSK0EaaAZ70NBiy1kLAFy5ZCxgBfCpETdfnL2oSqhS88KOdNTexX9Me5y1xKbFCU0D0DocySLaCPdiP1eXT7dvEWHXstDA/s1600/vegetable+pulao.JPG',price: 190 },
//   { id: 18, name: 'Thakali Set', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfQimYoVlL3uplkHguLSCB4m554dDzTv-Ug&s', price: 350 },
//   { id: 19, name: 'Masu', img: 'https://junifoods.com/wp-content/uploads/2023/12/Easy-Goat-Curry-Sajilo-Khasi-Ko-Masu-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%96%E0%A4%B8%E0%A5%80%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%BE%E0%A4%B8%E0%A5%81-1.jpg', price: 1400 },
//   { id: 20, name: 'Bhutuwa', img: 'https://cdn.tasteatlas.com//images/dishes/cc879765847047629baf56168ed7501c.jpg?width=320&height=205', price: 400 },
// ];

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [province, setProvince] = useState("");
//   const [cart, setCart] = useState([]);
//   const [recs, setRecs] = useState([]);
//   const navigate = useNavigate();

//   // Fetch logged-in user profile on app load
//   useEffect(() => {
//     const fetchUser = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) return setUser(null);
//       try {
//         const { data } = await axios.get("http://localhost:5000/api/users/profile", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(data);
//       } catch {
//         setUser(null);
//         localStorage.removeItem("token");
//       }
//     };
//     fetchUser();
//   }, []);

//   // Location detection and province mapping (called once on user login)
//   useEffect(() => {
//     if (!user) return;

//     if (!province) {
//       navigator.geolocation.getCurrentPosition(
//         ({ coords }) => {
//           const { latitude: lat, longitude: lng } = coords;

//           // Nepal provinces lat/lng approximate bounding boxes:
//           let prov = "Unknown";
//           if (lat >= 26.6 && lat <= 27.4 && lng >= 87.0 && lng <= 88.3) prov = "Koshi";
//           else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.5) prov = "Madhesh";
//           else if (lat >= 27.0 && lat <= 28.5 && lng >= 85.0 && lng <= 85.9) prov = "Bagmati";
//           else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
//           else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
//           else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
//           else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";

//           setProvince(prov);

//           alert(`📍 Location detected: ${prov}`);

//           // After province set, fetch recommendations based on user & province
//           fetchRecommendations(user.email, prov);
//         },
//         (err) => {
//           alert("❌ Location permission denied. Please select province manually.");
//         }
//       );
//     }
//   }, [user]);

//   // Fetch recommendations based on user and province
//   async function fetchRecommendations(email, prov) {
//     if (!email || !prov) return setRecs([]);
//     try {
//       const { data } = await axios.post(
//         "http://localhost:5000/api/orders/recommendations",
//         { email, province: prov }
//       );
//       setRecs(data.recommendations || []);
//     } catch (e) {
//       console.error("Failed to fetch recommendations", e);
//       setRecs([]);
//     }
//   }

//   // Add to cart function with login & province checks
//   const addToCart = (item) => {
//     if (!user) {
//       alert("Please login to add to cart.");
//       navigate("/login");
//       return;
//     }
//     if (!province || province === "Unknown") {
//       alert("Please allow location or select a valid province.");
//       return;
//     }
//     const exists = cart.find((c) => c.id === item.id);
//     if (exists) {
//       setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
//     } else {
//       setCart([...cart, { ...item, qty: 1 }]);
//     }
//   };

//   // Update quantity of an item in cart (+1 or -1)
//   const updateQty = (id, delta) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   // Delete an item from the cart
//   const deleteItem = (id) => {
//     setCart((prev) => prev.filter((item) => item.id !== id));
//   };

//   // Clear entire cart
//   const clearCart = () => setCart([]);

//   // Submit order (send to backend)
//   const submitOrder = async () => {
//     if (!user || !province || cart.length === 0) {
//       alert("Please login, select province, and add items to cart before submitting order.");
//       return;
//     }
//     try {
//       const payload = {
//         user: {
//           name: user.name,
//           email: user.email,
//         },
//         items: cart,
//         province,
//         orderDate: new Date(),
//       };

//       const res = await axios.post("http://localhost:5000/api/orders/submit", payload);

//       alert(res.data.message || "Order submitted successfully.");

//       fetchRecommendations(user.email, province);

//       clearCart();
//       navigate("/cart");
//     } catch (e) {
//       alert("Order submission failed.");
//       console.error(e);
//     }
//   };

//   // Login handler saves user and triggers rec fetch
//   const handleLogin = (loggedUser) => {
//     setUser(loggedUser);
//     localStorage.setItem("token", loggedUser.token);
//     if (loggedUser.email && province) fetchRecommendations(loggedUser.email, province);
//   };

//   // Logout handler clears user and cart
//   const handleLogout = () => {
//     setUser(null);
//     setCart([]);
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       {/* Header with province selection fixed */}
//       <Header
//         user={user}
//         cart={cart}
//         province={province}
//         setProvince={setProvince}
//         onLogout={handleLogout}
//       />

//       <main className="flex-grow container mx-auto p-6">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 addToCart={addToCart}
//                 province={province}
//                 setProvince={setProvince}
//                 provinces={PROVINCES}
//                 recs={recs}
//                 defaultFoodItems={defaultFoodItems}
//               />
//             }
//           />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route
//             path="/cart"
//             element={
//               <Cart
//                 cartItems={cart}
//                 updateQty={updateQty}
//                 deleteItem={deleteItem}
//                 clearCart={clearCart}
//                 user={user}
//                 province={province}
//               />
//             }
//           />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }






// import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import axios from "axios";

// import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Cart from "./components/Cart";
// import Footer from "./components/Footer";
// import Profile from "./components/Profile";

// const PROVINCES = [
//   "Koshi", "Madhesh", "Bagmati", "Gandaki", "Lumbini", "Karnali", "Sudurpashchim",
// ];

// const defaultFoodItems = [
//   { id: 1, name: 'Dal Bhat', img: 'https://grrrltraveler.com/wp-content/uploads/2018/08/NEPALI-DAL-BHAT.jpg', price: 250 },
//   { id: 2, name: 'Momo', img: 'https://e7.pngegg.com/pngimages/979/343/png-clipart-mandu-momo-buuz-khinkali-pelmeni-meat-food-recipe-thumbnail.png', price: 200 },
//   { id: 3, name: 'Sel Roti', img: 'https://i.ytimg.com/vi/tRy6TAKNNes/sddefault.jpg', price: 25 },
//   { id: 4, name: 'Gundruk', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSh3NXAD3EUkm8ls-5c7lIt7_xJalJeSceRCKg8rU2ipHeOohlElWGDFjsjnOYzqoz9qgfVs9_VGA7irfyIAmZ0HLCeXNsrEPdXN2n1hyphenhypheneUfeHwCIIoPMaleW5Xi3NZpZiWjM0fB6Wle4/s1600/DSC04152.JPG', price: 100 },
//   { id: 5, name: 'Chatamari', img: 'https://nepaltraveller.com/laravel-filemanager/photos/64/Chatamari/Untitled%20design%20(4).png', price: 300 },
//   { id: 6, name: 'Thukpa', img: 'https://www.awesomecuisine.com/wp-content/uploads/2020/03/chicken-thukpa.jpg', price: 280 },
//   { id: 7, name: 'Yomari', img: 'https://static1.squarespace.com/static/53ecd1bde4b0a6f9524254f8/t/675bdd6f2fda443f1ac0726e/1734073711928/Yomari-Punhi-Nepal-Festivals-shankerhotel_com_np.png?format=1500w', price: 200 },
//   { id: 8, name: 'Sukuti', img: 'https://uws.com.np/wp-content/uploads/2023/02/mutton-sukuti-fry.webp', price: 350 },
//   { id: 9, name: 'Juju Dhau', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhljhoGLu-SeG7_MbewOcsgN1ao786EgCmI2Htqdy6AWVl01jMCVmp4Sbg_o3TnSMQl3qJKwRpWSL1Dg2AYtvA-XL5fjP3q51l2yHWmowJgFxcFLSbTXNHewa2brcMIBS1sFh_S7JrD0-Q/s1600/2008+-+sept-nov+%28Nepal%29+050.jpg', price: 300 },
//   { id: 10, name: 'Kwati', img: 'https://naturallynidhi.com/wp-content/uploads/2019/05/InstantPot_NepaliKwatiDaal_MixedLentilStew-480x270.jpg', price: 180 },
//   { id: 11, name: 'Samay Baji', img: 'https://www.tasteatlas.com/images/dishes/856738bc40274f5694e144c242195a0c.jpg', price: 160 },
//   { id: 12, name: 'Aloo Tama', img: 'https://images.slurrp.com/prod/recipe_images/transcribe/main%20course/Aloo-tama.webp', price: 170 },
//   { id: 13, name: 'Choila', img: 'https://junifoods.com/wp-content/uploads/2023/04/Chicken-Choila-Main-2-500x500.png', price: 120 },
//   { id: 14, name: 'Bara', img: 'https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/52/71/73/5M1NG6h3SIKGKlhhKM9f_Nepali%20Bara.jpg', price: 100 },
//   { id: 15, name: 'Sekuwa', img: 'https://junifoods.com/wp-content/uploads/2022/12/Chicken-Sekuwa-1024x576.png', price: 140 },
//   { id: 16, name: 'Gorkhali Lamb', img: 'https://i.pinimg.com/236x/9a/c4/80/9ac480669bcd49ea1bb3ecc968ce99de.jpg', price: 200 },
//   { id: 17, name: 'Pulao', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFPjIluL4H7E7Qznz6kq0DziLeDpnSg0RqM_0J-3nemYyxHbWSK0EaaAZ70NBiy1kLAFy5ZCxgBfCpETdfnL2oSqhS88KOdNTexX9Me5y1xKbFCU0D0DocySLaCPdiP1eXT7dvEWHXstDA/s1600/vegetable+pulao.JPG', price: 190 },
//   { id: 18, name: 'Thakali Set', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfQimYoVlL3uplkHguLSCB4m554dDzTv-Ug&s', price: 350 },
//   { id: 19, name: 'Masu', img: 'https://junifoods.com/wp-content/uploads/2023/12/Easy-Goat-Curry-Sajilo-Khasi-Ko-Masu-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%96%E0%A4%B8%E0%A5%80%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%BE%E0%A4%B8%E0%A5%81-1.jpg', price: 1400 },
//   { id: 20, name: 'Bhutuwa', img: 'https://cdn.tasteatlas.com//images/dishes/cc879765847047629baf56168ed7501c.jpg?width=320&height=205', price: 400 },
// ];

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [province, setProvince] = useState("");
//   const [cart, setCart] = useState([]);
//   const [recs, setRecs] = useState([]);
//   const navigate = useNavigate();
//   const [recommendations, setRecommendations] = useState([]);

//   const getRecommendations = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/orders/recommendations");
//       setRecommendations(res.data);
//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//       // Optionally show a toast or alert here
//       alert("Could not fetch recommended items.");
//     }
//   };

//   useEffect(() => {
//     getRecommendations();
//   }, []);

//   // Fetch user on mount
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return;

//         const res = await axios.get("http://localhost:5000/api/users/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setUser(res.data);
//         setProvince(res.data.province || "");
//         setLocation(res.data.location || null);
//       } catch (err) {
//         console.error("Failed to fetch user:", err);
//         toast.error("Failed to load profile");
//       }
//     };

//     fetchUser();
//   }, []);

//   // Location detection and province mapping
//   useEffect(() => {
//     if (!user || province) return;

//     navigator.geolocation.getCurrentPosition(
//       ({ coords }) => {
//         const { latitude: lat, longitude: lng } = coords;
//         let prov = "Unknown";

//         if (lat >= 26.6 && lat <= 27.4 && lng >= 87.0 && lng <= 88.3) prov = "Koshi";
//         else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.5) prov = "Madhesh";
//         else if (lat >= 27.0 && lat <= 28.5 && lng >= 85.0 && lng <= 85.9) prov = "Bagmati";
//         else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
//         else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
//         else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
//         else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";

//         setProvince(prov);
//         alert(`📍 Location detected: ${prov}`);
//         fetchRecommendations(user.email, prov);
//       },
//       () => {
//         alert("❌ Location permission denied. Please select province manually.");
//       }
//     );
//   }, [user]);

//   // Fetch recommendations from backend
//   async function fetchRecommendations(email, prov) {
//     if (!email || !prov) return;
//     try {
//       const res = await axios.post("http://localhost:5000/api/orders/recommendations", {
//         email,
//         province: prov,
//       });
//       setRecs(res.data.recommendations || []);
//     } catch (e) {
//       console.error("Failed to fetch recommendations", e);
//       setRecs([]);
//     }
//   }

//   // Cart Logic
//   const addToCart = (item) => {
//     if (!user) {
//       alert("Please login to add to cart.");
//       navigate("/login");
//       return;
//     }
//     if (!province || province === "Unknown") {
//       alert("Please allow location or select a valid province.");
//       return;
//     }
//     const exists = cart.find((c) => c.id === item.id);
//     if (exists) {
//       setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
//     } else {
//       setCart([...cart, { ...item, qty: 1 }]);
//     }
//   };

//   const updateQty = (id, delta) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const deleteItem = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
//   const clearCart = () => setCart([]);

//   const submitOrder = async () => {
//     if (!user || !province || cart.length === 0) {
//       alert("Please login, select province, and add items to cart.");
//       return;
//     }

//     try {
//       const payload = {
//         user: { name: user.name, email: user.email },
//         items: cart,
//         province,
//         orderDate: new Date(),
//       };
//       const res = await axios.post("http://localhost:5000/api/orders/submit", payload);
//       alert(res.data.message || "Order submitted.");
//       fetchRecommendations(user.email, province);
//       clearCart();
//       navigate("/cart");
//     } catch (e) {
//       alert("Order submission failed.");
//       console.error(e);
//     }
//   };

//   const handleLogin = (loggedUser) => {
//     setUser(loggedUser);
//     localStorage.setItem("token", loggedUser.token);
//     if (loggedUser.email && province) fetchRecommendations(loggedUser.email, province);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setCart([]);
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Header
//         user={user}
//         cart={cart}
//         province={province}
//         setProvince={setProvince}
//         onLogout={handleLogout}
//       />

//       <main className="flex-grow container mx-auto p-6">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 addToCart={addToCart}
//                 province={province}
//                 setProvince={setProvince}
//                 provinces={PROVINCES}
//                 recs={recs}
//                 defaultFoodItems={defaultFoodItems}
//               />
//             }
//           />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route
//             path="/cart"
//             element={
//               <Cart
//                 cartItems={cart}
//                 updateQty={updateQty}
//                 deleteItem={deleteItem}
//                 clearCart={clearCart}
//                 user={user}
//                 province={province}
//                 submitOrder={submitOrder}
//               />
//             }
//           />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }



// // App.jsx
// import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import axios from "axios";

// import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Cart from "./components/Cart";
// import Footer from "./components/Footer";
// import Profile from "./components/Profile";
// import Delivery_Charges from "./components/Delivery_Charges";
// import HowToOrder from "./components/HowToOrder";
// import Faqs from "./components/Faqs";
// import PaymentGateway from "./components/PaymentGateway";
// import SuccessPage from "./components/SuccessPage";
// import FailurePage from "./components/FailurePage";
// const BASE_URL = import.meta.env.VITE_BACKEND_URL;
// const PROVINCES = [
//   "Koshi",
//   "Madhesh",
//   "Bagmati",
//   "Gandaki",
//   "Lumbini",
//   "Karnali",
//   "Sudurpashchim",
// ];

// const defaultFoodItems = [
//   { id: 1, name: "Dal Bhat", img: "https://grrrltraveler.com/wp-content/uploads/2018/08/NEPALI-DAL-BHAT.jpg", price: 250 },
//   { id: 2, name: "Momo", img: "https://e7.pngegg.com/pngimages/979/343/png-clipart-mandu-momo-buuz-khinkali-pelmeni-meat-food-recipe-thumbnail.png", price: 200 },
//   { id: 3, name: "Sel Roti", img: "https://i.ytimg.com/vi/tRy6TAKNNes/sddefault.jpg", price: 25 },
//   { id: 4, name: "Gundruk", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSh3NXAD3EUkm8ls-5c7lIt7_xJalJeSceRCKg8rU2ipHeOohlElWGDFjsjnOYzqoz9qgfVs9_VGA7irfyIAmZ0HLCeXNsrEPdXN2n1hyphenhypheneUfeHwCIIoPMaleW5Xi3NZpZiWjM0fB6Wle4/s1600/DSC04152.JPG", price: 100 },
//   { id: 5, name: "Chatamari", img: "https://nepaltraveller.com/laravel-filemanager/photos/64/Chatamari/Untitled%20design%20(4).png", price: 300 },
//   { id: 6, name: "Thukpa", img: "https://www.awesomecuisine.com/wp-content/uploads/2020/03/chicken-thukpa.jpg", price: 280 },
//   { id: 7, name: "Yomari", img: "https://static1.squarespace.com/static/53ecd1bde4b0a6f9524254f8/t/675bdd6f2fda443f1ac0726e/1734073711928/Yomari-Punhi-Nepal-Festivals-shankerhotel_com_np.png?format=1500w", price: 200 },
//   { id: 8, name: "Sukuti", img: "https://uws.com.np/wp-content/uploads/2023/02/mutton-sukuti-fry.webp", price: 350 },
//   { id: 9, name: "Juju Dhau", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhljhoGLu-SeG7_MbewOcsgN1ao786EgCmI2Htqdy6AWVl01jMCVmp4Sbg_o3TnSMQl3qJKwRpWSL1Dg2AYtvA-XL5fjP3q51l2yHWmowJgFxcFLSbTXNHewa2brcMIBS1sFh_S7JrD0-Q/s1600/2008+-+sept-nov+%28Nepal%29+050.jpg", price: 300 },
//   { id: 10, name: "Kwati", img: "https://naturallynidhi.com/wp-content/uploads/2019/05/InstantPot_NepaliKwatiDaal_MixedLentilStew-480x270.jpg", price: 180 },
//   { id: 11, name: "Samay Baji", img: "https://www.tasteatlas.com/images/dishes/856738bc40274f5694e144c242195a0c.jpg", price: 160 },
//   { id: 12, name: "Aloo Tama", img: "https://images.slurrp.com/prod/recipe_images/transcribe/main%20course/Aloo-tama.webp", price: 170 },
//   { id: 13, name: "Choila", img: "https://junifoods.com/wp-content/uploads/2023/04/Chicken-Choila-Main-2-500x500.png", price: 120 },
//   { id: 14, name: "Bara", img: "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/52/71/73/5M1NG6h3SIKGKlhhKM9f_Nepali%20Bara.jpg", price: 100 },
//   { id: 15, name: "Sekuwa", img: "https://junifoods.com/wp-content/uploads/2022/12/Chicken-Sekuwa-1024x576.png", price: 140 },
//   { id: 16, name: "Gorkhali Lamb", img: "https://i.pinimg.com/236x/9a/c4/80/9ac480669bcd49ea1bb3ecc968ce99de.jpg", price: 200 },
//   { id: 17, name: "Pulao", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFPjIluL4H7E7Qznz6kq0DziLeDpnSg0RqM_0J-3nemYyxHbWSK0EaaAZ70NBiy1kLAFy5ZCxgBfCpETdfnL2oSqhS88KOdNTexX9Me5y1xKbFCU0D0DocySLaCPdiP1eXT7dvEWHXstDA/s1600/vegetable+pulao.JPG", price: 190 },
//   { id: 18, name: "Thakali Set", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfQimYoVlL3uplkHguLSCB4m554dDzTv-Ug&s", price: 350 },
//   { id: 19, name: "Masu", img: "https://junifoods.com/wp-content/uploads/2023/12/Easy-Goat-Curry-Sajilo-Khasi-Ko-Masu-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%96%E0%A4%B8%E0%A5%80%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%BE%E0%A4%B8%E0%A5%81-1.jpg", price: 1400 },
//   { id: 20, name: "Bhutuwa", img: "https://cdn.tasteatlas.com//images/dishes/cc879765847047629baf56168ed7501c.jpg?width=320&height=205", price: 400 },
// ];

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [province, setProvince] = useState("");
//   const [cart, setCart] = useState([]);
//   const [recs, setRecs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const [recommendations, setRecommendations] = useState([]);

//   const getRecommendations = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/orders/recommendations");
//       setRecommendations(res.data);
//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//       alert("Could not fetch recommended items.");
//     }
//   };

//   useEffect(() => {
//     getRecommendations();
//   }, []);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return;

//         const res = await axios.get("http://localhost:3001/api/users/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setUser(res.data);
//         setProvince(res.data.province || "");
//       } catch (err) {
//         console.error("Failed to fetch user:", err);
//         alert("Failed to load profile");
//       }
//     };

//     fetchUser();
//   }, []);

//   useEffect(() => {
//     if (!user || province) return;

//     navigator.geolocation.getCurrentPosition(
//       ({ coords }) => {
//         const { latitude: lat, longitude: lng } = coords;
//         let prov = "Unknown";

//         if (lat >= 26.6 && lat <= 27.4 && lng >= 87.0 && lng <= 88.3) prov = "Koshi";
//         else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.5) prov = "Madhesh";
//         else if (lat >= 27.0 && lat <= 28.5 && lng >= 85.0 && lng <= 85.9) prov = "Bagmati";
//         else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
//         else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
//         else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
//         else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";

//         setProvince(prov);
//         alert(`📍 Location detected: ${prov}`);
//       },
//       () => {
//         alert("❌ Location permission denied. Please select province manually.");
//       }
//     );
//   }, [user]);

//   const addToCart = async (item) => {
//     if (!user) {
//       alert("Please login to add to cart.");
//       navigate("/login");
//       return;
//     }

//     if (!province || province === "Unknown") {
//       alert("Please allow location or select a valid province.");
//       return;
//     }

//     const exists = cart.find((c) => c.id === item.id);
//     let updatedCart;

//     if (exists) {
//       updatedCart = cart.map((c) =>
//         c.id === item.id ? { ...c, qty: c.qty + 1 } : c
//       );
//     } else {
//       updatedCart = [...cart, { ...item, qty: 1 }];
//     }

//     setCart(updatedCart);

//     // Send to backend
//     try {
//       await axios.post(`${BASE_URL}/api/cart/add`, {
//         userId: user._id, // or user.id depending on your user structure
//         itemId: item.id,
//         name: item.name,
//         price: item.price,
//         qty: exists ? exists.qty + 1 : 1,
//         province: province,
//       });
//     } catch (err) {
//       console.error("Error adding to cart:", err);
//     }
//   };

//   const updateQty = (id, delta) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const deleteItem = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
//   const clearCart = () => setCart([]);

//   const submitOrder = async () => {
//     if (!user || !province || cart.length === 0) {
//       alert("Please login, select province, and add items to cart.");
//       return;
//     }

//     try {
//       const payload = {
//         user: { name: user.name, email: user.email },
//         items: cart,
//         province,
//         orderDate: new Date(),
//       };
//       const res = await axios.post("http://localhost:5000/api/orders/submit", payload);
//       alert(res.data.message || "Order submitted.");
//       clearCart();
//       navigate("/cart");
//     } catch (e) {
//       alert("Order submission failed.");
//       console.error(e);
//     }
//   };

//   const handleLogin = (loggedUser) => {
//     setUser(loggedUser);
//     localStorage.setItem("token", loggedUser.token);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setCart([]);
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   const filteredFoodItems = defaultFoodItems.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Header
//         user={user}
//         cart={cart}
//         province={province}
//         setProvince={setProvince}
//         onLogout={handleLogout}
//         onSearch={setSearchTerm}
//       />

//       <main className="flex-grow container mx-auto p-6">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 addToCart={addToCart}
//                 province={province}
//                 setProvince={setProvince}
//                 provinces={PROVINCES}
//                 recs={recs}
//                 defaultFoodItems={filteredFoodItems}
//               />
//             }
//           />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route
//             path="/cart"
//             element={
//               <Cart
//                 cartItems={cart}
//                 updateQty={updateQty}
//                 deleteItem={deleteItem}
//                 clearCart={clearCart}
//                 user={user}
//                 province={province}
//                 submitOrder={submitOrder}
//               />
//             }
//           />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/delivery-charges" element={<Delivery_Charges />} />
//           <Route path="/how-to-order" element={<HowToOrder />} />
//           <Route path="/faqs" element={<Faqs />} />
//           <Route path="/payment-gateway" element={<PaymentGateway />} />
//           <Route path="/payment-success/:orderId" element={<SuccessPage />} />
//           <Route path="/payment-failure" element={<FailurePage />} />
//           <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );  
// }


// import React, { useState, useEffect } from "react";
// import { Routes, Route, useNavigate } from "react-router-dom";
// import axios from "axios";

// import Header from "./components/Header";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Cart from "./components/Cart";
// import Footer from "./components/Footer";
// import Profile from "./components/Profile";
// import Delivery_Charges from "./components/Delivery_Charges";
// import HowToOrder from "./components/HowToOrder";
// import Faqs from "./components/Faqs";
// import PaymentGateway from "./components/PaymentGateway";
// import SuccessPage from "./components/SuccessPage";
// import FailurePage from "./components/FailurePage";

// const BASE_URL = import.meta.env.VITE_BACKEND_URL;
// const PROVINCES = [
//   "Koshi",
//   "Madhesh",
//   "Bagmati",
//   "Gandaki",
//   "Lumbini",
//   "Karnali",
//   "Sudurpashchim",
// ];

// const defaultFoodItems = [
//   { id: 1, name: "Dal Bhat", img: "https://grrrltraveler.com/wp-content/uploads/2018/08/NEPALI-DAL-BHAT.jpg", price: 250 },
//   { id: 2, name: "Momo", img: "https://e7.pngegg.com/pngimages/979/343/png-clipart-mandu-momo-buuz-khinkali-pelmeni-meat-food-recipe-thumbnail.png", price: 200 },
//   { id: 3, name: "Sel Roti", img: "https://i.ytimg.com/vi/tRy6TAKNNes/sddefault.jpg", price: 25 },
//   { id: 4, name: "Gundruk", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSh3NXAD3EUkm8ls-5c7lIt7_xJalJeSceRCKg8rU2ipHeOohlElWGDFjsjnOYzqoz9qgfVs9_VGA7irfyIAmZ0HLCeXNsrEPdXN2n1hyphenhypheneUfeHwCIIoPMaleW5Xi3NZpZiWjM0fB6Wle4/s1600/DSC04152.JPG", price: 100 },
//   { id: 5, name: "Chatamari", img: "https://nepaltraveller.com/laravel-filemanager/photos/64/Chatamari/Untitled%20design%20(4).png", price: 300 },
//   { id: 6, name: "Thukpa", img: "https://www.awesomecuisine.com/wp-content/uploads/2020/03/chicken-thukpa.jpg", price: 280 },
//   { id: 7, name: "Yomari", img: "https://static1.squarespace.com/static/53ecd1bde4b0a6f9524254f8/t/675bdd6f2fda443f1ac0726e/1734073711928/Yomari-Punhi-Nepal-Festivals-shankerhotel_com_np.png?format=1500w", price: 200 },
//   { id: 8, name: "Sukuti", img: "https://uws.com.np/wp-content/uploads/2023/02/mutton-sukuti-fry.webp", price: 350 },
//   { id: 9, name: "Juju Dhau", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhljhoGLu-SeG7_MbewOcsgN1ao786EgCmI2Htqdy6AWVl01jMCVmp4Sbg_o3TnSMQl3qJKwRpWSL1Dg2AYtvA-XL5fjP3q51l2yHWmowJgFxcFLSbTXNHewa2brcMIBS1sFh_S7JrD0-Q/s1600/2008+-+sept-nov+%28Nepal%29+050.jpg", price: 300 },
//   { id: 10, name: "Kwati", img: "https://naturallynidhi.com/wp-content/uploads/2019/05/InstantPot_NepaliKwatiDaal_MixedLentilStew-480x270.jpg", price: 180 },
//   { id: 11, name: "Samay Baji", img: "https://www.tasteatlas.com/images/dishes/856738bc40274f5694e144c242195a0c.jpg", price: 160 },
//   { id: 12, name: "Aloo Tama", img: "https://images.slurrp.com/prod/recipe_images/transcribe/main%20course/Aloo-tama.webp", price: 170 },
//   { id: 13, name: "Choila", img: "https://junifoods.com/wp-content/uploads/2023/04/Chicken-Choila-Main-2-500x500.png", price: 120 },
//   { id: 14, name: "Bara", img: "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/52/71/73/5M1NG6h3SIKGKlhhKM9f_Nepali%20Bara.jpg", price: 100 },
//   { id: 15, name: "Sekuwa", img: "https://junifoods.com/wp-content/uploads/2022/12/Chicken-Sekuwa-1024x576.png", price: 140 },
//   { id: 16, name: "Gorkhali Lamb", img: "https://i.pinimg.com/236x/9a/c4/80/9ac480669bcd49ea1bb3ecc968ce99de.jpg", price: 200 },
//   { id: 17, name: "Pulao", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFPjIluL4H7E7Qznz6kq0DziLeDpnSg0RqM_0J-3nemYyxHbWSK0EaaAZ70NBiy1kLAFy5ZCxgBfCpETdfnL2oSqhS88KOdNTexX9Me5y1xKbFCU0D0DocySLaCPdiP1eXT7dvEWHXstDA/s1600/vegetable+pulao.JPG", price: 190 },
//   { id: 18, name: "Thakali Set", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfQimYoVlL3uplkHguLSCB4m554dDzTv-Ug&s", price: 350 },
//   { id: 19, name: "Masu", img: "https://junifoods.com/wp-content/uploads/2023/12/Easy-Goat-Curry-Sajilo-Khasi-Ko-Masu-%E0%A4%B8%E0%A4%9C%E0%A4%BF%E0%A4%B2%E0%A5%8B-%E0%A4%96%E0%A4%B8%E0%A5%80%E0%A4%95%E0%A5%8B-%E0%A4%AE%E0%A4%BE%E0%A4%B8%E0%A5%81-1.jpg", price: 1400 },
//   { id: 20, name: "Bhutuwa", img: "https://cdn.tasteatlas.com//images/dishes/cc879765847047629baf56168ed7501c.jpg?width=320&height=205", price: 400 },
// ];

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [province, setProvince] = useState("");
//   const [cart, setCart] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();
//   const [recommendations, setRecommendations] = useState([]);

//   const getRecommendations = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/orders/recommendations");
//       setRecommendations(res.data);
//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//       alert("Could not fetch recommended items.");
//     }
//   };

//   useEffect(() => {
//     getRecommendations();
//   }, []);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) return;

//         const res = await axios.get("http://localhost:3001/api/users/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setUser(res.data);
//         setProvince(res.data.province || "");
//       } catch (err) {
//         console.error("Failed to fetch user:", err);
//         alert("Failed to load profile");
//       }
//     };

//     fetchUser();
//   }, []);

//   useEffect(() => {
//     if (!user || province) return;

//     navigator.geolocation.getCurrentPosition(
//       ({ coords }) => {
//         const { latitude: lat, longitude: lng } = coords;
//         let prov = "Unknown";

//         if (lat >= 26.6 && lat <= 27.4 && lng >= 87.0 && lng <= 88.3) prov = "Koshi";
//         else if (lat >= 26.4 && lat <= 27.0 && lng >= 85.0 && lng <= 86.5) prov = "Madhesh";
//         else if (lat >= 27.0 && lat <= 28.5 && lng >= 85.0 && lng <= 85.9) prov = "Bagmati";
//         else if (lat >= 27.5 && lat <= 28.3 && lng >= 83.5 && lng <= 85.5) prov = "Gandaki";
//         else if (lat >= 27.5 && lat <= 28.0 && lng >= 82.5 && lng <= 83.8) prov = "Lumbini";
//         else if (lat >= 28.3 && lat <= 30.0 && lng >= 80.5 && lng <= 82.5) prov = "Karnali";
//         else if (lat >= 28.7 && lat <= 30.0 && lng >= 80.0 && lng <= 81.5) prov = "Sudurpashchim";

//         setProvince(prov);
//         alert(`📍 Location detected: ${prov}`);
//       },
//       () => {
//         alert("❌ Location permission denied. Please select province manually.");
//       }
//     );
//   }, [user]);

//   const addToCart = async (item) => {
//     if (!user) {
//       alert("Please login to add to cart.");
//       navigate("/login");
//       return;
//     }

//     if (!province || province === "Unknown") {
//       alert("Please allow location or select a valid province.");
//       return;
//     }

//     const exists = cart.find((c) => c.id === item.id);
//     let updatedCart;

//     if (exists) {
//       updatedCart = cart.map((c) =>
//         c.id === item.id ? { ...c, qty: c.qty + 1 } : c
//       );
//     } else {
//       updatedCart = [...cart, { ...item, qty: 1 }];
//     }

//     setCart(updatedCart);

//     try {
//       await axios.post(`${BASE_URL}/api/cart/add`, {
//         userId: user._id,
//         itemId: item.id,
//         name: item.name,
//         price: item.price,
//         qty: exists ? exists.qty + 1 : 1,
//         province,
//       });
//     } catch (err) {
//       console.error("Error adding to cart:", err);
//     }
//   };

//   const updateQty = (id, delta) => {
//     setCart((prev) =>
//       prev
//         .map((item) =>
//           item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   const deleteItem = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
//   const clearCart = () => setCart([]);

//   const submitOrder = async () => {
//     if (!user || !province || cart.length === 0) {
//       alert("Please login, select province, and add items to cart.");
//       return;
//     }

//     try {
//       const payload = {
//         user: { name: user.name, email: user.email },
//         items: cart,
//         province,
//         orderDate: new Date(),
//       };
//       const res = await axios.post("http://localhost:5000/api/orders/submit", payload);
//       alert(res.data.message || "Order submitted.");
//       clearCart();
//       navigate("/cart");
//     } catch (e) {
//       alert("Order submission failed.");
//       console.error(e);
//     }
//   };

//   const handleLogin = (loggedUser) => {
//     setUser(loggedUser);
//     localStorage.setItem("token", loggedUser.token);
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setCart([]);
//     localStorage.removeItem("token");
//     navigate("/");
//   };

//   const filteredFoodItems = defaultFoodItems.filter((item) =>
//     item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-50">
//       <Header
//         user={user}
//         cart={cart}
//         province={province}
//         setProvince={setProvince}
//         onLogout={handleLogout}
//         onSearch={setSearchTerm}
//       />

//       <main className="flex-grow container mx-auto p-6">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 addToCart={addToCart}
//                 province={province}
//                 setProvince={setProvince}
//                 provinces={PROVINCES}
//                 recs={recommendations}
//                 defaultFoodItems={filteredFoodItems}
//               />
//             }
//           />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route
//             path="/cart"
//             element={
//               <Cart
//                 cartItems={cart}
//                 updateQty={updateQty}
//                 deleteItem={deleteItem}
//                 clearCart={clearCart}
//                 user={user}
//                 province={province}
//                 submitOrder={submitOrder}
//               />
//             }
//           />
//           <Route path="/login" element={<Login onLogin={handleLogin} />} />
//           <Route path="/delivery-charges" element={<Delivery_Charges />} />
//           <Route path="/how-to-order" element={<HowToOrder />} />
//           <Route path="/faqs" element={<Faqs />} />
//           <Route path="/payment-gateway" element={<PaymentGateway />} />
//           <Route path="/payment-success/:orderId" element={<SuccessPage />} />
//           <Route path="/payment-failure" element={<FailurePage />} />
//           <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
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
