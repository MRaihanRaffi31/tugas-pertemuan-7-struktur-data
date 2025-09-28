const mainText = document.getElementById("main-text");

class Film {
  constructor(judul, harga, kursi) {
    this.judul = judul; // judul film
    this.harga = harga; // harga tiket
    this.kursi = kursi; // jumlah kursi tersedia
  }

  pesanTiket(jumlah) {
    if (jumlah > this.kursi) {
      alert("Kursi tidak cukup!");
    } else {
      this.kursi -= jumlah;
    }
  }

  cekFilm() {
    return `Judul: ${this.judul} <br> Harga: Rp${this.harga} <br> Kursi Tersedia: ${this.kursi}`;
  }
}

class Bioskop {
  constructor(nama) {
    this.nama = nama;
    this.daftarFilm = [];
  }

  tambahFilm(film) {
    this.daftarFilm.push(film);
  }

  tampilkanFilm() {
    let info = `<h2>${this.nama}</h2>`;
    this.daftarFilm.forEach(film => {
      info += `<p>${film.cekFilm()}</p>`;
    });
    return info;
  }
}

// contoh penggunaan kelas Bioskop dan Film
let bioskop = new Bioskop("XXI Samarinda");
let film1 = new Film("Avengers", 50000, 50);
let film2 = new Film("Spiderman", 45000, 50);

bioskop.tambahFilm(film1);
bioskop.tambahFilm(film2);

// pemesanan tiket bioskop (per 1 orang)
film1.pesanTiket(30);
film2.pesanTiket(29);

// tampilkan daftar film
mainText.innerHTML = bioskop.tampilkanFilm();

