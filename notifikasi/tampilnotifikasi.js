var myVar = setInterval(myTimer, 2000); // timer notifikasi, atur timer dengan milisecond

function myTimer() {
    $.notifikasi({
        judulnotifikasi: 'Notifikasi Sukses', // judul notifikasi
        text: "ini adalah contoh notifikasi sukses", // isi notifikasi
        ikon: 'sukses', // Tipe ikon sukses, error, peringatan, kustom
        transisi: 'slide', // tipe transisi slide, fade, plain
        AutoTutup: true, // ijinkan notifikasi menutup dengan otomatis. true untuk iya, false untuk tidak
        hideAfter: 5000, // ijinkan notifikasi menutup dengan otomatis berdasarkan pengaturan waktu milisecond
        posisi: {
            left: 'auto',
            right: 70,
            top: 'auto',
            bottom: 60
        }, // atur posisi notifikasi
        textAlign: 'left', // perataan isi teks. left, center, right
        loader: true, // tampilkan loading notifikasi. true untuk iya, false untuk tidak
        loaderBg: '#99b898', // kode warna untuk loading notifikasi, temukan lebih banyak warna di https://colorhunt.co
    });
    clearInterval(myVar);
}

var myVar2 = setInterval(myTimer2, 7000); // timer notifikasi, atur timer dengan milisecond

function myTimer2() {
    $.notifikasi({
        judulnotifikasi: 'Notifikasi Error', // judul notifikasi
        text: "Ini adalah contoh notifikasi error", // isi notifikasi
        ikon: 'eror', // Tipe ikon sukses, error, peringatan, kustom
        transisi: 'slide', // tipe transisi slide, fade, plain
        AutoTutup: true, // ijinkan notifikasi menutup dengan otomatis. true untuk iya, false untuk tidak
        hideAfter: 5000, // ijinkan notifikasi menutup dengan otomatis berdasarkan pengaturan waktu milisecond
        posisi: {
            left: 'auto',
            right: 70,
            top: 'auto',
            bottom: 60
        }, // atur posisi notifikasi
        textAlign: 'left', // perataan isi teks. left, center, right
        loader: true, // tampilkan loading notifikasi. true untuk iya, false untuk tidak
        loaderBg: '#99b898', // kode warna untuk loading notifikasi, temukan lebih banyak warna di https://colorhunt.co
    });
    clearInterval(myVar2);
}

var myVar3 = setInterval(myTimer3, 12000); // timer notifikasi, atur timer dengan milisecond

function myTimer3() {
    $.notifikasi({
        judulnotifikasi: 'Notifikasi Peringatan', // judul notifikasi
        text: "Ini adalah contoh notifikasi Peringatan", // isi notifikasi
        ikon: 'peringatan', // Tipe ikon sukses, error, peringatan, kustom
        transisi: 'slide', // tipe transisi slide, fade, plain
        AutoTutup: true, // ijinkan notifikasi menutup dengan otomatis. true untuk iya, false untuk tidak
        hideAfter: 5000, // ijinkan notifikasi menutup dengan otomatis berdasarkan pengaturan waktu milisecond
        posisi: {
            left: 'auto',
            right: 70,
            top: 'auto',
            bottom: 60
        }, // atur posisi notifikasi
        textAlign: 'left', // perataan isi teks. left, center, right
        loader: true, // tampilkan loading notifikasi. true untuk iya, false untuk tidak
        loaderBg: '#99b898', // kode warna untuk loading notifikasi, temukan lebih banyak warna di https://colorhunt.co
    });
    clearInterval(myVar3);
}

var myVar4 = setInterval(myTimer4, 18000); // timer notifikasi, atur timer dengan milisecond

function myTimer4() {
    $.notifikasi({
        judulnotifikasi: 'Notifikasi Kustom', // judul notifikasi
        text: "Ini adalah contoh notifikasi Kustom", // isi notifikasi
        ikon: 'kustom', // Tipe ikon sukses, error, peringatan, kustom
        transisi: 'slide', // tipe transisi slide, fade, plain
        AutoTutup: true, // ijinkan notifikasi menutup dengan otomatis. true untuk iya, false untuk tidak
        hideAfter: 5000, // ijinkan notifikasi menutup dengan otomatis berdasarkan pengaturan waktu milisecond
        posisi: {
            left: 'auto',
            right: 70,
            top: 'auto',
            bottom: 60
        }, // atur posisi notifikasi
        textAlign: 'left', // perataan isi teks. left, center, right
        loader: true, // tampilkan loading notifikasi. true untuk iya, false untuk tidak
        loaderBg: '#99b898', // kode warna untuk loading notifikasi, temukan lebih banyak warna di https://colorhunt.co
    });
    clearInterval(myVar4);
}