// Ambil elemen toggle checkbox
const toggle = document.getElementById("billing-toggle");

// Ambil semua elemen harga
const prices = document.querySelectorAll(".price");

// Saat toggle diubah
toggle.addEventListener("change", function () {
  // Cek apakah toggle ON (bulanan) atau OFF (tahunan)
  const isMonthly = toggle.checked;

  prices.forEach(priceEl => {
    const monthlyPrice = priceEl.dataset.monthly;
    const annualPrice = priceEl.dataset.annual;

    // Ganti isi teks harga sesuai toggle
    priceEl.textContent = isMonthly ? `$${monthlyPrice}` : `$${annualPrice}`;
  });
});