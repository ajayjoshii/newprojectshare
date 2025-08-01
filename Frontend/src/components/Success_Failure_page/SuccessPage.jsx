// // import React, { useEffect, useState } from "react";
// // import { useNavigate, useLocation } from "react-router-dom";

// // export default function SuccessPage() {
// //   const navigate = useNavigate();
// //   const location = useLocation();
// //   const [transactionUUID, setTransactionUUID] = useState(null);

// //   useEffect(() => {
// //     const searchParams = new URLSearchParams(location.search);
// //     const transaction_uuid = searchParams.get("transaction_uuid");
// //     if (!transaction_uuid) {
// //       alert("Payment data missing. Redirecting to home.");
// //       navigate("/");
// //       return;
// //     }
// //     setTransactionUUID(transaction_uuid);
// //   }, [location, navigate]);

// //   const downloadReceipt = () => {
// //     if (!transactionUUID) return;
// //     const content = `
// // Payment Receipt
// // Transaction ID: ${transactionUUID}
// // Date: ${new Date().toLocaleString()}
// // Thank you for your purchase!
// //     `;
// //     const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
// //     const url = URL.createObjectURL(blob);
// //     const a = document.createElement("a");
// //     a.href = url;
// //     a.download = `receipt_${transactionUUID}.txt`;
// //     a.click();
// //     URL.revokeObjectURL(url);
// //   };

// //   return (
// //     <div className="max-w-3xl mx-auto mt-[90px] p-6 bg-white rounded shadow text-center">
// //       <h2 className="text-3xl text-green-600 font-semibold mb-6">✅ Payment Successful!</h2>
// //       <p className="mb-4">Transaction ID: <strong className="break-all">{transactionUUID}</strong></p>
// //       <p className="mb-6">Thank you for your order. Your payment was processed successfully.</p>
// //       <button
// //         onClick={downloadReceipt}
// //         className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
// //       >
// //         Download Receipt
// //       </button>
// //     </div>
// //   );
// // }


// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FaRegCopy } from "react-icons/fa";

// export default function SuccessPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [transactionUUID, setTransactionUUID] = useState(null);
//   const [copied, setCopied] = useState(false);

//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const transaction_uuid = searchParams.get("transaction_uuid");

//     if (!transaction_uuid) {
//       alert("Payment data missing. Redirecting to home.");
//       navigate("/");
//       return;
//     }

//     setTransactionUUID(transaction_uuid);
//   }, [location, navigate]);

//   const handleCopy = () => {
//     if (!transactionUUID) return;
//     navigator.clipboard.writeText(transactionUUID);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1500);
//   };

//   const downloadReceipt = () => {
//     if (!transactionUUID) return;
//     const content = `
// Payment Receipt
// Transaction ID: ${transactionUUID}
// Date: ${new Date().toLocaleString()}
// Thank you for your purchase!
//     `;
//     const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `receipt_${transactionUUID}.txt`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-[90px] p-6 bg-white rounded shadow text-center">
//       <h2 className="text-3xl text-green-600 font-semibold mb-6">
//         ✅ Payment Successful!
//       </h2>

//       <div className="mb-4 flex flex-wrap gap-2 justify-center items-center text-sm sm:text-base">
//         <span>Transaction ID:</span>
//         <strong className="break-all">{transactionUUID}</strong>
//         <button
//           onClick={handleCopy}
//           className="text-blue-500 hover:text-blue-700 focus:outline-none"
//           title="Copy Transaction ID"
//         >
//           <FaRegCopy />
//         </button>
//         {copied && <span className="text-green-500 text-sm">Copied!</span>}
//       </div>

//       <p className="mb-6">
//         Thank you for your order. Your payment was processed successfully.
//       </p>

//       <button
//         onClick={downloadReceipt}
//         className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//       >
//         Download Receipt
//       </button>
//     </div>
//   );
// }



// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";
// import { FaRegCopy } from "react-icons/fa";

// export default function SuccessPage() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [transactionUUID, setTransactionUUID] = useState(null);
//   const [copied, setCopied] = useState(false);
//   const [user, setUser] = useState(null);

//   // ✅ Restore user session on mount using token
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
//       } catch {
//         // Token might be invalid, clear it
//         localStorage.removeItem("token");
//       }
//     };

//     fetchUser();
//   }, []);

//   // ✅ Get transaction_uuid from URL
//   useEffect(() => {
//     const searchParams = new URLSearchParams(location.search);
//     const transaction_uuid = searchParams.get("transaction_uuid");

//     if (!transaction_uuid) {
//       alert("Payment data missing. Redirecting to home.");
//       navigate("/");
//       return;
//     }

//     setTransactionUUID(transaction_uuid);
//   }, [location, navigate]);

//   const handleCopy = () => {
//     if (!transactionUUID) return;
//     navigator.clipboard.writeText(transactionUUID);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 1500);
//   };

//   const downloadReceipt = () => {
//     if (!transactionUUID) return;
//     const content = `
// Payment Receipt
// Transaction ID: ${transactionUUID}
// Date: ${new Date().toLocaleString()}
// Thank you for your purchase!
//     `;
//     const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = `receipt_${transactionUUID}.txt`;
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="max-w-3xl mx-auto mt-[90px] p-6 bg-white rounded shadow text-center">
//       <h2 className="text-3xl text-green-600 font-semibold mb-6">
//         ✅ Payment Successful!
//       </h2>

//       <div className="mb-4 flex flex-wrap gap-2 justify-center items-center text-sm sm:text-base">
//         <span>Transaction ID:</span>
//         <strong className="break-all">{transactionUUID}</strong>
//         <button
//           onClick={handleCopy}
//           className="text-blue-500 hover:text-blue-700 focus:outline-none"
//           title="Copy Transaction ID"
//         >
//           <FaRegCopy />
//         </button>
//         {copied && <span className="text-green-500 text-sm">Copied!</span>}
//       </div>

//       <p className="mb-6">
//         Thank you for your order. Your payment was processed successfully.
//       </p>

//       <button
//         onClick={downloadReceipt}
//         className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//       >
//         Download Receipt
//       </button>
//     </div>
//   );
// }
// SuccessPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { FaRegCopy } from "react-icons/fa";

export default function SuccessPage({ onLogin }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [transactionUUID, setTransactionUUID] = useState(null);
  const [copied, setCopied] = useState(false);

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
        if (onLogin) onLogin(res.data); // ✅ update App user state
      } catch {
        localStorage.removeItem("token");
      }
    };

    fetchUser();
  }, [onLogin]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const transaction_uuid = searchParams.get("transaction_uuid");

    if (!transaction_uuid) {
      alert("Payment data missing. Redirecting to home.");
      navigate("/");
      return;
    }

    setTransactionUUID(transaction_uuid);
  }, [location, navigate]);

  const handleCopy = () => {
    if (!transactionUUID) return;
    navigator.clipboard.writeText(transactionUUID);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const downloadReceipt = () => {
    if (!transactionUUID) return;
    const content = `
Payment Receipt
Transaction ID: ${transactionUUID}
Date: ${new Date().toLocaleString()}
Thank you for your purchase!
    `;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `receipt_${transactionUUID}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-3xl mx-auto mt-[90px] p-6 bg-white rounded shadow text-center">
      <h2 className="text-3xl text-green-600 font-semibold mb-6">
        ✅ Payment Successful!
      </h2>

      <div className="mb-4 flex flex-wrap gap-2 justify-center items-center text-sm sm:text-base">
        <span>Transaction ID:</span>
        <strong className="break-all">{transactionUUID}</strong>
        <button
          onClick={handleCopy}
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
          title="Copy Transaction ID"
        >
          <FaRegCopy />
        </button>
        {copied && <span className="text-green-500 text-sm">Copied!</span>}
      </div>

      <p className="mb-6">
        Thank you for your order. Your payment was processed successfully.
      </p>

      <button
        onClick={downloadReceipt}
        className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Download Receipt
      </button>
    </div>
  );
}
