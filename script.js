const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.modal-close');

const products = {
  plain: {
    name: "Plain Savory",
    price: "Rp 10.000",
    img: "assets/plain.jpg",
    desc: "Netral, bening, elastis — cocok untuk snack gurih."
  },
  spice: {
    name: "Spice Boost",
    price: "Rp 10.000",
    img: "assets/spice.jpg",
    desc: "Sentuhan rempah halus untuk produk pedas."
  },
  sweet: {
    name: "Sweet Glow",
    price: "Rp 10.000",
    img: "assets/sweet.jpg",
    desc: "Glossy, manis ringan — cocok untuk dessert."
  }
};

document.querySelectorAll('.detail-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.parentElement.dataset.id;
    const p = products[id];
    modalBody.innerHTML = `
      <img src="${p.img}" alt="${p.name}" style="width:100%;border-radius:6px;">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <strong>${p.price}</strong>
    `;
    modal.classList.remove('hidden');
    // Tombol Pesan → buka modal dengan pilihan medsos
document.querySelectorAll(".order-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("orderOptions").classList.remove("hidden");
    document.getElementById("orderSuccess").classList.add("hidden");
  });
});

// Klik medsos → buka link + tampilkan pesan sukses
document.querySelectorAll(".social-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const platform = btn.getAttribute("data-platform");
    if (platform === "WhatsApp") {
      window.open("https://wa.me/6281234567890?text=Halo%20saya%20mau%20pesan%20Edible%20Film", "_blank");
    } else if (platform === "Instagram") {
      window.open("https://instagram.com/kemasinaja", "_blank");
    } else if (platform === "TikTok") {
      window.open("https://tiktok.com/@kemasinaja", "_blank");
    }
    document.getElementById("orderOptions").classList.add("hidden");
    document.getElementById("orderSuccess").classList.remove("hidden");
  });
});
  });
});

closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.add('hidden'); });
