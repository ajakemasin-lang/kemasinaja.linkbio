document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });

  const popup = document.getElementById("popup");
  const openPopup = document.querySelector(".buy-btn");
  const closePopup = document.querySelector(".close");

  const qty = document.getElementById("qty");
  const total = document.getElementById("total-harga");
  const varian = document.getElementById("varian");
  const nama = document.getElementById("nama");
  const alamat = document.getElementById("alamat");
  const pembayaran = document.getElementById("pembayaran");
  const orderWA = document.getElementById("pesanWA");

  const hargaProduk = 10000;

  openPopup.onclick = () => popup.style.display = "flex";
  closePopup.onclick = () => popup.style.display = "none";
  window.onclick = e => { if (e.target === popup) popup.style.display = "none"; };

  qty.addEventListener("input", () => {
    total.textContent = "Rp " + (qty.value * hargaProduk).toLocaleString("id-ID");
  });

  orderWA.addEventListener("click", () => {
    if (!nama.value || !alamat.value) {
      alert("Isi semua data terlebih dahulu.");
      return;
    }

    const hargaTotal = qty.value * hargaProduk;
    const text =
      `Halo, saya ingin memesan:\n\n` +
      `Produk: Edible Film\n` +
      `Varian: ${varian.value}\n` +
      `Jumlah: ${qty.value} pcs\n` +
      `Total Harga: Rp ${hargaTotal.toLocaleString("id-ID")}\n\n` +
      `Nama: ${nama.value}\n` +
      `Alamat: ${alamat.value}\n` +
      `Metode Pembayaran: ${pembayaran.value}`;

    window.open(`https://wa.me/628xxxxxxx?text=${encodeURIComponent(text)}`);
  });
});
