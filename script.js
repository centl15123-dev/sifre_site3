function sifreleMetin() {
    let metin = document.getElementById('metin').value;
    let sonuc = '';

    for (let i = 0; i < metin.length; i++) {
        let karakter = metin[i];

        if (!isNaN(karakter) && karakter !== ' ') { // Rakam ise
            switch (karakter) {
                case '0':
                    sonuc += '@';
                    break;
                case '1':
                    sonuc += '##';
                    break;
                case '2':
                    sonuc += '$';
                    break;
                case '3':
                    sonuc += '%';
                    break;
                case '4':
                    sonuc += '&';
                    break;
                case '5':
                    sonuc += '*';
                    break;
                case '6':
                    sonuc += '!';
                    break;
                case '7':
                    sonuc += '?';
                    break;
                case '8':
                    sonuc += '+';
                    break;
                case '9':
                    sonuc += '=';
                    break;
            }
            sonuc += '*'; // Her karakterden sonra * ekle
        } else {
            sonuc += karakter; // Rakam değilse olduğu gibi ekle
        }
    }

    document.getElementById('sonuc').value = sonuc.slice(0, -1); // Sonundaki *'yi kaldır
}

function cozMetin() {
    let metin = document.getElementById('sonuc').value;
    let sonuc = '';
    let parcalar = metin.split('*');

    for (let i = 0; i < parcalar.length; i++) {
        let karakter = parcalar[i];

        switch (karakter) {
            case '@':
                sonuc += '0';
                break;
            case '##':
                sonuc += '1';
                break;
            case '$':
                sonuc += '2';
                break;
            case '%':
                sonuc += '3';
                break;
            case '&':
                sonuc += '4';
                break;
            case '*':
                sonuc += '5';
                break;
            case '!':
                sonuc += '6';
                break;
            case '?':
                sonuc += '7';
                break;
            case '+':
                sonuc += '8';
                break;
            case '=':
                sonuc += '9';
                break;
            default:
                sonuc += karakter; // Diğer karakterler olduğu gibi
                break;
        }
    }

    document.getElementById('metin').value = sonuc; // Çözülmüş metni orijinal alana yaz
}
