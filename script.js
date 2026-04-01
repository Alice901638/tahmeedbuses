// ===============================
// TAHMEED BOOKING SCRIPT
// ===============================

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Tahmeed Booking System Ready");
});

// MAIN FUNCTION
function sendToWhatsApp() {

  // GET VALUES
  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const date = document.getElementById("date").value;
  const passengers = document.getElementById("passengers").value;

  // VALIDATION
  if (!from || !to || !date) {
    alert("⚠️ Please fill all booking details");
    return;
  }

  // PREVENT SAME LOCATION
  if (from.toLowerCase() === to.toLowerCase()) {
    alert("⚠️ Departure and destination cannot be the same");
    return;
  }

  // FORMAT DATE
  const travelDate = new Date(date).toDateString();

  // CREATE MESSAGE
  const message = `*TAHMEED BUS BOOKING*%0A
------------------------%0A
🚍 From: ${from}%0A
📍 To: ${to}%0A
📅 Date: ${travelDate}%0A
👥 Passengers: ${passengers}%0A
------------------------%0A
Please confirm availability.`;

  // YOUR WHATSAPP NUMBER (FIXED)
  const phoneNumber = "254733391352";

  // CREATE URL
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  // OPEN WHATSAPP
  window.open(whatsappURL, "_blank");
}

// OPTIONAL: AUTO TODAY DATE
document.getElementById("date").min = new Date().toISOString().split("T")[0];

// OPTIONAL: ENTER KEY SUBMIT
document.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendToWhatsApp();
  }
});
