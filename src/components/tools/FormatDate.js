export const formatDate = (inputDate) => {

    if (!inputDate) {
        return "";
    }

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
    if (!inputDate) {
        return null;
    }

    const tahun = inputDate.split('-')[0];
    return tahun;
};

export const formatBulanTahun = (inputDate) => {
    // Membuat objek Date dari tanggal input
    const dateObject = new Date(inputDate);

    // Mendapatkan nama bulan dari objek Date
    const monthNames = [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    const month = monthNames[dateObject.getMonth()];

    // Mendapatkan tahun dari objek Date
    const year = dateObject.getFullYear();

    // Mengembalikan hasil yang diformat
    return `${month} ${year}`;
};

