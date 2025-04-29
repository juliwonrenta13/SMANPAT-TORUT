
// lightbox untuk galeri dan fasilitas
document.querySelectorAll('.-galeri-container img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `<img src="${img.src}" class="lightbox-img">`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', () => overlay.remove());
  });
});

// JS ESKUL
function showInfo(nama) {
  alert("Kamu memilih ekstrakurikuler: " + nama);
}

// Fungsi interaktif untuk bagian prestasi
function showPrestasi(pesan) {
  alert("Informasi Prestasi: " + pesan);
}

// hubungi kami 
function kirimPesan(event) {
  event.preventDefault();
  const nama = document.getElementById('nama').value;
  if (nama.trim() !== "") {
    alert(`Terima kasih telah menghubungi kami, ${nama}!`);
    document.getElementById('formHubungi').reset();
  } else {
    alert('Mohon isi nama Anda.');
  }
}

