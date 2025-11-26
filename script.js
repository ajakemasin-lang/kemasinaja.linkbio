// Tombol Detail
document.querySelectorAll(".detail-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.closest(".card").getAttribute("data-id");
    let detail = "";

    if (id === "plain") {
      detail = "<h3>Plain Savory</h3><p>Film netral, bening, elastis. Cocok untuk snack gurih seperti keripik, nugget, atau bakso.</p>";
    } else if (id === "spice") {
      detail = "<h3>Spice Boost</h3><p>Sentuhan rempah halus. Cocok untuk produk pedas seperti sambal, keripik balado, atau ayam geprek.</p>";
    } else if (id === "sweet") {
      detail = "<h3>Sweet Glow</h3><p>Glossy dan manis ringan. Cocok untuk dessert seperti puding, mochi, atau brownies.</p>";
    }

    document.getElementById("modalBody").innerHTML = detail;
    document.getElementById("orderOptions").classList.add("hidden");
    document.getElementById("orderSuccess").classList.add("hidden");
    document.getElementById("modal").classList.remove("hidden");
  });
});

// Tombol Pesan
document.querySelectorAll(".order-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("modalBody").innerHTML = "";
    document.getElementById("orderOptions").classList.remove("hidden");
    document.getElementById("orderSuccess").classList.add("hidden");
    document.getElementById("modal").classList.remove("hidden");
  });
});

// Pilih harga
document.querySelectorAll(".price-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const selected = btn.getAttribute("data-price");
    document.getElementById("orderOptions").innerHTML = `
      <p>Paket dipilih: <strong>${selected}</strong></p>
      <button id="confirmOrder">Pesan Sekarang</button>
    `;
    document.getElementById("orderSuccess").classList.add("hidden");

    setTimeout(() => {
      document.getElementById("confirmOrder").addEventListener("click", () => {
        document.getElementById("orderOptions").classList.add("hidden");
        document.getElementById("orderSuccess").classList.remove("hidden");
      });
    }, 100);
  });
});

// Tutup modal
document.querySelector(".modal-close").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});
