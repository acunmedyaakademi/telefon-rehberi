// İsim ve numara bilgilerini içeren bir rehber yap.
// Kullanıcıya kişi ekleme, kişi bulma ve kişi silme seçenekleri sun.

let rehber = [];

// Kullanıcıdan işlem seçimi al
let islem = prompt("İşlem seçin: 1- Ekle, 2- Bul, 3- Sil");

if (islem === "1") {
    // Kişi ekleme
    let isim = prompt("İsim girin:");
    let numara = prompt("Numara girin:");
    rehber.push({ isim, numara });
    console.log(`${isim} başarıyla rehbere eklendi!`);
} else if (islem === "2") {
    // Kişi bulma
    let arananIsim = prompt("Aramak istediğiniz ismi girin:");
    let bulundu = false;

    for (let i = 0; i < rehber.length; i++) {
        if (rehber[i].isim.toLowerCase() === arananIsim.toLowerCase()) {
            console.log(`Bulundu: ${rehber[i].isim} - ${rehber[i].numara}`);
            bulundu = true;
            break;
        }
    }

    if (!bulundu) {
        console.log("Kişi bulunamadı.");
    }
} else if (islem === "3") {
    // Kişi silme
    let silinecekIsim = prompt("Silmek istediğiniz ismi girin:");
    let bulundu = false;

    for (let i = 0; i < rehber.length; i++) {
        if (rehber[i].isim.toLowerCase() === silinecekIsim.toLowerCase()) {
            console.log(`${rehber[i].isim} rehberden silindi.`);
            rehber.splice(i, 1); // Kişiyi rehberden sil
            bulundu = true;
            break;
        }
    }

    if (!bulundu) {
        console.log("Kişi bulunamadı.");
    }
} else {
    console.log("Geçersiz işlem.");
}
