let slideIndex = 0;
const images = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg"
];

function changeSlide() {
    let header = document.querySelector("header");
    header.style.backgroundImage = `url('${images[slideIndex]}')`;

    slideIndex = (slideIndex + 1) % images.length; // Loop kembali ke gambar pertama setelah terakhir
}

document.addEventListener("DOMContentLoaded", () => {
    changeSlide(); // Tampilkan gambar pertama langsung
    setInterval(changeSlide, 5000); // Ganti gambar setiap 5 detik
});

function orderWhatsApp(namaProduk, harga) {
    let nomorWhatsApp = "6285803751109"; // Ganti dengan nomor WhatsApp Anda
    let pesan = `Halo, saya ingin membeli ${namaProduk} dengan harga Rp ${harga}.`;
    let url = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

    window.open(url, "_blank"); // Membuka WhatsApp di tab baru
}
