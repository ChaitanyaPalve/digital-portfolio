<script type="module">
  // 🔥 Import Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import {
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
  } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

  // 🔑 Your Firebase Config (PASTE YOUR VALUES HERE)
  const firebaseConfig = {
    apiKey: "AIzaSyA95u1OJmMJ_95WacugfXAevhO5lkQj39U",
    authDomain: "portfolio-cmp-bbf33.firebaseapp.com",
    projectId: "portfolio-cmp-bbf33",
    storageBucket: "portfolio-cmp-bbf33.firebasestorage.app",
    messagingSenderId: "455621344389",
    appId: "1:455621344389:web:d9938ebba701648a2bbdec"
  };

  // 🚀 Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // 📩 Handle Form Submit
  const form = document.getElementById("askForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const question = document.getElementById("questionInput").value.trim();
    const contact = document.getElementById("contactInput").value.trim();

    // 🛑 Validation
    if (!question || !contact) {
      alert("Please fill both fields!");
      return;
    }

    try {
      // 📦 Save to Firestore
      await addDoc(collection(db, "questions"), {
        question: question,
        contact: contact,
        createdAt: serverTimestamp()
      });

      // ✅ Success UI
      alert("🔥 Question sent successfully!");
      form.reset();

    } catch (error) {
      console.error("Error:", error);
      alert("❌ Failed to send. Try again.");
    }
  });
</script>