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
class Registrant {
    constructor(nama, umur, uangSangu) {
        this.nama = nama;
        this.umur = umur;
        this.uangSangu = uangSangu;
        this.resume = `Rata-rata pendaftar memiliki uang sangu sebesar ${uangSangu} dengan rata-rata umur ${umur}`;
    }
}

class DataPendaftar {
    constructor() {
        this.pendaftarData = [];
    }

    tambahPendaftar(pendaftar) {
        this.pendaftarData.push(pendaftar);
    }

    hitungRataRata() {
        let totalUmur = 0;
        let totalUangSangu = 0;

        for (let pendaftar of this.pendaftarData) {
            totalUmur += pendaftar.umur;
            totalUangSangu += pendaftar.uangSangu;
        }

        const rataRataUmur = totalUmur / this.pendaftarData.length;
        const rataRataUangSangu = totalUangSangu / this.pendaftarData.length;

        return { rataRataUmur, rataRataUangSangu };
    }
}

const dataPendaftar = new DataPendaftar();

function submitForm() {
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const uangSangu = parseInt(document.getElementById('uang-sangu').value);

    if (nama.length < 10 || umur < 25 || uangSangu < 100000 || uangSangu > 1000000) {
        alert('Data tidak valid. Pastikan Nama minimal 10 karakter, Umur minimal 25 tahun, Uang sangu Rp. 100,000 - Rp. 1,000,000.');
        return;
    }

    const pendaftar = new Registrant(nama, umur, uangSangu);
    dataPendaftar.tambahPendaftar(pendaftar);

    document.getElementById('nama').value = '';
    document.getElementById('umur').value = '';
    document.getElementById('uang-sangu').value = '';

    tampilkanDataPendaftar();
}

function tampilkanDataPendaftar() {
    const tableBody = document.getElementById('pendaftar-data');
    tableBody.innerHTML = '';

    for (let pendaftar of dataPendaftar.pendaftarData) {
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${pendaftar.nama}</td>
            <td>${pendaftar.umur}</td>
            <td>${pendaftar.uangSangu}</td>
            <td>Resume: ${pendaftar.resume}</td>
        `;
    }

    const rataRata = dataPendaftar.hitungRataRata();
    const resumeInfo = document.getElementById('resume-info');
    resumeInfo.textContent = `Rata-rata pendaftar memiliki uang sangu sebesar ${rataRata.rataRataUangSangu} dengan rata-rata umur ${rataRata.rataRataUmur}`;
}

openTab(event, 'registrasi');