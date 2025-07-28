import React from "react";
import KhaltiCheckout from "khalti-checkout-web";

const KhaltiPayment = () => {
  const config = {
    publicKey: "test_public_key_dc74e7b8b18c4b7aa447ebcf551103b5", // Replace with your own test public key
    productIdentity: "1234567890",
    productName: "Sample Product",
    productUrl: "http://localhost:3000",
    eventHandler: {
      onSuccess(payload) {
        console.log("Payment Successful:", payload);

        fetch("http://localhost:5000/api/khalti/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: payload.token,
            amount: payload.amount,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              alert("✅ Payment Verified Successfully!");
              console.log(data.data);
            } else {
              alert("❌ Payment Verification Failed");
              console.error(data.error);
            }
          })
          .catch((err) => {
            console.error("Verification Error:", err);
            alert("❌ Verification API Error");
          });
      },
      onError(error) {
        console.error("Khalti Widget Error:", error);
        alert("❌ Payment Widget Error");
      },
      onClose() {
        console.log("Khalti widget closed.");
      },
    },
    paymentPreference: [
      "KHALTI",
      "EBANKING",
      "MOBILE_BANKING",
      "CONNECT_IPS",
      "SCT",
    ],
  };

  const checkout = new KhaltiCheckout(config);

  const handleKhaltiPay = () => {
    checkout.show({ amount: 50000 }); // 500.00 NPR (amount in paisa)
  };

  return (
    <div className="text-center mt-10">
      <button
        onClick={handleKhaltiPay}
        className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition"
      >
        Pay with Khalti
      </button>
    </div>
  );
};

export default KhaltiPayment;
