import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [payments, setPayments] = useState([]);
  const [newItem, setNewItem] = useState({ name: "", price: "", category: "", inStock: true });
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("users");

  const navigate = useNavigate();

  const fetchAll = async () => {
    try {
      const [usersRes, itemsRes, ordersRes, paymentsRes] = await Promise.all([
        api.get("/admin/users"),
        api.get("/admin/items"),
        api.get("/admin/orders"),
        api.get("/admin/payments"),
      ]);
      setUsers(usersRes.data);
      setItems(itemsRes.data);
      setOrders(ordersRes.data);
      setPayments(paymentsRes.data);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401) setError("Unauthorized. Please login as admin.");
      else setError("Failed to fetch admin data.");
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const deleteUser = async (id) => {
    if (!confirm("Delete this user?")) return;
    await api.delete(`/admin/users/${id}`);
    fetchAll();
  };

  const deleteItem = async (id) => {
    if (!confirm("Delete this item?")) return;
    await api.delete(`/admin/items/${id}`);
    fetchAll();
  };

  const updateItem = async (id, updated) => {
    await api.put(`/admin/items/${id}`, updated);
    fetchAll();
  };

  const addItem = async () => {
    if (!newItem.name || !newItem.price) return alert("Name and price required");
    await api.post("/admin/items", newItem);
    setNewItem({ name: "", price: "", category: "", inStock: true });
    fetchAll();
  };

  const deleteOrder = async (id) => {
    if (!confirm("Delete this order?")) return;
    await api.delete(`/admin/orders/${id}`);
    fetchAll();
  };

  const updateOrderStatus = async (id, status) => {
    await api.put(`/admin/orders/${id}`, { status });
    fetchAll();
  };

  // --- Logout Handler ---
  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // remove admin auth token if stored
    navigate("/admin-login"); // redirect to admin login page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="fixed top-0 left-0 right-0 bg-green-700 shadow-md flex items-center justify-between px-6 h-16 z-50">
        <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => setActiveTab("users")}
            className={`px-3 py-1 rounded ${activeTab === "users" ? "bg-green-600 text-white" : "text-white hover:bg-blue-400 duration-750 font-bold"}`}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab("items")}
            className={`px-3 py-1 rounded ${activeTab === "items" ? "bg-green-600 text-white" : "text-white hover:bg-blue-400 duration-750"}`}
          >
            Items
          </button>
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-3 py-1 rounded ${activeTab === "orders" ? "bg-green-600 text-white" : "text-white hover:bg-blue-400 duration-750"}`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab("payments")}
            className={`px-3 py-1 rounded ${activeTab === "payments" ? "bg-green-600 text-white" : "text-white hover:bg-blue-400 duration-750"}`}
          >
            Payments
          </button>

          {/* --- Logout Button --- */}
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 font-bold"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="p-6 mt-[70px] rounded-2xl w-[1500px] bg-blue-300">
        {error && <p className="mb-4 p-2 bg-red-100 text-red-700 rounded">{error}</p>}

        {/* --- Users Tab --- */}
        {activeTab === "users" && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Users</h2>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              {users.length ? users.map(u => (
                <div key={u._id} className="flex justify-between items-center p-3 border-b hover:bg-gray-50">
                  <div>
                    <p className="font-medium">{u.name}</p>
                    <p className="text-sm text-gray-500">{u.email}</p>
                  </div>
                  <button onClick={() => deleteUser(u._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                </div>
              )) : <p className="p-3 text-gray-500">No users found</p>}
            </div>
          </section>
        )}

        {/* --- Items Tab --- */}
        {activeTab === "items" && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Items</h2>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              <div className="flex items-center gap-2 p-3 border-b">
                <input type="text" placeholder="Name" value={newItem.name} onChange={e => setNewItem({ ...newItem, name: e.target.value })} className="p-2 border rounded flex-1" />
                <input type="number" placeholder="Price" value={newItem.price} onChange={e => setNewItem({ ...newItem, price: e.target.value })} className="p-2 border rounded w-24" />
                <input type="text" placeholder="Category" value={newItem.category} onChange={e => setNewItem({ ...newItem, category: e.target.value })} className="p-2 border rounded w-32" />
                <button onClick={addItem} className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Add</button>
              </div>

              {items.length ? items.map(i => (
                <div key={i._id} className="flex justify-between items-center p-3 border-b hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    <input type="text" value={i.name} onChange={e => updateItem(i._id, { ...i, name: e.target.value })} className="p-1 border rounded w-32" />
                    <input type="number" value={i.price} onChange={e => updateItem(i._id, { ...i, price: e.target.value })} className="p-1 border rounded w-20" />
                    <input type="text" value={i.category || ""} onChange={e => updateItem(i._id, { ...i, category: e.target.value })} className="p-1 border rounded w-28" />
                    <label className="flex items-center gap-1 text-sm">
                      <input type="checkbox" checked={i.inStock} onChange={e => updateItem(i._id, { ...i, inStock: e.target.checked })} /> In Stock
                    </label>
                  </div>
                  <button onClick={() => deleteItem(i._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                </div>
              )) : <p className="p-3 text-gray-500">No items found</p>}
            </div>
          </section>
        )}

        {/* --- Orders Tab --- */}
        {activeTab === "orders" && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Orders</h2>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              {orders.length ? orders.map(o => (
                <div key={o._id} className="flex justify-between items-center p-3 border-b hover:bg-gray-50">
                  <div>
                    <p className="font-medium">User: {o.userId?.name || o.userId}</p>
                    <p className="text-sm text-gray-500">Status: {o.status} | Province: {o.province}</p>
                  </div>
                  <div className="flex gap-2">
                    {o.status !== "completed" && <button onClick={() => updateOrderStatus(o._id, "completed")} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Complete</button>}
                    <button onClick={() => deleteOrder(o._id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                  </div>
                </div>
              )) : <p className="p-3 text-gray-500">No orders found</p>}
            </div>
          </section>
        )}

        {/* --- Payments Tab --- */}
        {activeTab === "payments" && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Payments</h2>
            <div className="bg-white shadow-md rounded-md overflow-hidden">
              {payments.length ? payments.map(p => (
                <div key={p._id} className="flex justify-between items-center p-3 border-b hover:bg-gray-50">
                  <div>
                    <p className="font-medium">User: {p.userId?.name || p.userId}</p>
                    <p className="text-sm text-gray-500">Rs {p.amount} - Status: {p.status} - Method: {p.paymentMethod}</p>
                  </div>
                </div>
              )) : <p className="p-3 text-gray-500">No payments found</p>}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
