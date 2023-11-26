export const formatDate = (inputDate) => {
    const [year, month, day] = inputDate.split('-');

    // Konversi bulan menjadi nama bulan (format: 11 November 2023)
    const monthNames = [
        'Januari', 'Februari', 'Maret',
        'April', 'Mei', 'Juni', 'Juli',
        'Agustus', 'September', 'Oktober',
        'November', 'Desember'
    ];

    return `${day} ${monthNames[parseInt(month, 10) - 1]} ${year}`;
};

export const formatDateToLetterNumber = (inputDate) => {
    const dateObj = new Date(inputDate);
    const day = ("0" + dateObj?.getDate()).slice(-2);
    const month = ("0" + (dateObj?.getMonth() + 1)).slice(-2);
    return day + month;
};

export const getYear = (inputDate) => {
    // Membagi tanggal menjadi tiga bagian: day, month, dan year
    const [day, month, yearString] = inputDate.split(' ');

    // Mengonversi bulan menjadi angka menggunakan objek Date
    const monthIndex = new Date(`${month} 1, 2000`).getMonth() + 1;

    // Mendapatkan tahun dari string tahun
    const year = parseInt(yearString);

    // Membuat objek Date dari tanggal yang diurai
    const dateObj = new Date(year, monthIndex - 1, parseInt(day));

    // Mendapatkan tahun dari objek Date
    return dateObj.getFullYear();
};

