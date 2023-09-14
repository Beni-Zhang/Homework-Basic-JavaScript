// Objek untuk menyimpan data pendaftar
let pendaftarData = [];

// Fungsi untuk menghitung rata-rata umur dan uang sangu
function hitungRataRata() {
    let totalUmur = 0;
    let totalUangSangu = 0;

    for (let pendaftar of pendaftarData) {
        totalUmur += pendaftar.umur;
        totalUangSangu += pendaftar.uangSangu;
    }

    const rataRataUmur = totalUmur / pendaftarData.length;
    const rataRataUangSangu = totalUangSangu / pendaftarData.length;

    return { rataRataUmur, rataRataUangSangu };
}

// Fungsi untuk menampilkan data pendaftar dan resume
function tampilkanDataPendaftar() {
    const tableBody = document.getElementById('pendaftar-data');
    tableBody.innerHTML = '';

    for (let pendaftar of pendaftarData) {
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${pendaftar.nama}</td>
            <td>${pendaftar.umur}</td>
            <td>${pendaftar.uangSangu}</td>
            <td>Resume: ${pendaftar.resume}</td>
        `;
    }

    const rataRata = hitungRataRata();
    const resumeInfo = document.getElementById('resume-info');
    resumeInfo.textContent = `Rata-rata pendaftar memiliki uang sangu sebesar ${rataRata.rataRataUangSangu} dengan rata-rata umur ${rataRata.rataRataUmur}`;
}

// Fungsi untuk menampilkan tab aktif
function openTab(event, tabName) {
    const tabcontent = document.getElementsByClassName('tabcontent');
    for (let content of tabcontent) {
        content.style.display = 'none';
    }

    const tablinks = document.getElementsByClassName('tablink');
    for (let link of tablinks) {
        link.className = link.className.replace(' active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.className += ' active';
}

// Fungsi untuk mengirim data registrasi
function submitForm() {
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const uangSangu = parseInt(document.getElementById('uang-sangu').value);

    // Validasi data
    if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
        alert('Data tidak valid. Pastikan Nama minimal 10 karakter, Umur minimal 25 tahun, Uang sangu Rp. 100,000 - Rp. 1,000,000.');
        return;
    }

    // Buat resume
    const resume = `Rata-rata pendaftar memiliki uang sangu sebesar ${uangSangu} dengan rata-rata umur ${umur}`;

    // Tambahkan data ke pendaftarData
    pendaftarData.push({ nama, umur, uangSangu, resume });

    // Bersihkan form
    document.getElementById('nama').value = '';
    document.getElementById('umur').value = '';
    document.getElementById('uang-sangu').value = '';

    // Tampilkan data pendaftar
    tampilkanDataPendaftar();
}

// Inisialisasi halaman
openTab(event, 'registrasi');