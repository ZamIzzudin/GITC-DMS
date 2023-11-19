function terbilang(angka) {
    if (typeof angka !== 'number') {
        return 'Input bukan angka';
    }

    const huruf = [
        '', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'
    ];

    const ribuan = ['', 'ribu', 'juta', 'miliar', 'triliun'];

    const satuan = (angka) => {
        if (angka < 10) {
            return huruf[angka];
        } else if (angka < 20) {
            return huruf[angka - 10] + ' belas';
        } else {
            return huruf[Math.floor(angka / 10)] + ' puluh ' + huruf[angka % 10];
        }
    };

    const ratusan = (angka) => {
        if (angka < 100) {
            return satuan(angka);
        } else {
            return huruf[Math.floor(angka / 100)] + ' ratus ' + satuan(angka % 100);
        }
    };

    const hasil = [];

    if (angka === 0) {
        hasil.push('nol');
    } else {
        let angkaTerbilang = '';
        let posisiRibuan = 0;

        while (angka > 0) {
            const r = angka % 1000;
            if (r !== 0) {
                angkaTerbilang = ratusan(r) + ' ' + ribuan[posisiRibuan] + ' ' + angkaTerbilang;
            }

            angka = Math.floor(angka / 1000);
            posisiRibuan++;
        }

        hasil.push(angkaTerbilang);
    }

    return hasil.join(' ').trim();
}

export default terbilang;
