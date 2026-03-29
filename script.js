// Şifre Kontrolü
function checkPassword() {
    const password = document.getElementById('password-input').value;
    const errorMsg = document.getElementById('error-msg');
    
    // Belirlediğiniz şifre: Servet-i Fünun
    if (password === 'Servet-i Fünun') {
        document.getElementById('login-screen').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        errorMsg.innerText = "Hatalı şifre! Lütfen tekrar deneyiniz.";
    }
}

// Enter tuşu ile giriş yapma
document.getElementById('password-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

// Dönem Verileri
const periodData = {
    'islamiyet-oncesi': {
        title: 'İslamiyet Öncesi Türk Edebiyatı',
        content: `
            <p>Türklerin İslamiyet'i kabul etmelerinden önceki dönemdir. Sözlü ve Yazılı olmak üzere ikiye ayrılır.</p>
            <div class="author-section">
                <h4>Sözlü Dönem</h4>
                <p>Sav, Sagu, Koşuk ve Destanlar bu dönemin en önemli ürünleridir.</p>
            </div>
            <div class="author-section">
                <h4>Yazılı Dönem (Orhun Abideleri)</h4>
                <p>Türk tarihinin ve edebiyatının ilk yazılı belgeleridir.</p>
                <p class="works">Eserler: Bilge Kağan Yazıtı, Kültigin Yazıtı, Tonyukuk Yazıtı.</p>
            </div>
        `
    },
    'halk-edebiyati': {
        title: 'Halk Edebiyatı',
        content: `
            <p>Halkın içinden çıkan sanatçıların, halkın diliyle oluşturduğu edebiyattır. Hece ölçüsü ve sade Türkçe hakimdir.</p>
            <div class="author-section">
                <h4>Yunus Emre</h4>
                <p>İlahi türünün en büyük ustasıdır. İnsan sevgisi ve hoşgörüyü işlemiştir.</p>
                <p class="works">Eserler: Risaletü'n-Nushiyye, Divan.</p>
            </div>
            <div class="author-section">
                <h4>Karacaoğlan</h4>
                <p>Aşk ve doğa şairidir. Güzellemeleriyle tanınır.</p>
            </div>
        `
    },
    'divan-edebiyati': {
        title: 'Divan Edebiyatı',
        content: `
            <p>Saray çevresinde gelişen, Arap ve Fars edebiyatı etkisinde kalan, ağır bir dile sahip edebiyattır.</p>
            <div class="author-section">
                <h4>Fuzuli</h4>
                <p>Izdırap şairidir. Lirik şiirleriyle tanınır.</p>
                <p class="works">Eserler: Leyla ile Mecnun, Şikayetname, Beng ü Bade.</p>
            </div>
            <div class="author-section">
                <h4>Baki</h4>
                <p>İstanbul Türkçesini başarıyla kullanmıştır. "Sultanü'ş-Şuara" (Şairler Sultanı) olarak bilinir.</p>
                <p class="works">Eserler: Kanuni Mersiyesi, Divan.</p>
            </div>
        `
    },
    'tanzimat': {
        title: 'Tanzimat Dönemi',
        content: `
            <p>Batılılaşma hareketlerinin edebiyata yansıdığı dönemdir. Roman, tiyatro, gazete gibi türler ilk kez bu dönemde girmiştir.</p>
            <div class="author-section">
                <h4>Namık Kemal</h4>
                <p>"Vatan Şairi" olarak bilinir. Hürriyet ve vatan kavramlarını işlemiştir.</p>
                <p class="works">Eserler: Vatan Yahut Silistre, İntibah, Cezmi.</p>
            </div>
            <div class="author-section">
                <h4>Şinasi</h4>
                <p>Batılı anlamda ilk tiyatro eserini yazmış ve ilk özel gazeteyi çıkarmıştır.</p>
                <p class="works">Eserler: Şair Evlenmesi, Tercüman-ı Ahval.</p>
            </div>
        `
    },
    'serveti-funun': {
        title: 'Servet-i Fünun (Edebiyat-ı Cedide)',
        content: `
            <p>Sanat sanat içindir anlayışıyla hareket eden, ağır ve süslü bir dil kullanan topluluktur.</p>
            <div class="author-section">
                <h4>Tevfik Fikret</h4>
                <p>Modern Türk şiirinin kurucularındandır. Servet-i Fünun'un en önemli şairidir.</p>
                <p class="works">Eserler: Rübab-ı Şikeste, Haluk'un Defteri, Şermin.</p>
            </div>
            <div class="author-section">
                <h4>Cenap Şahabettin</h4>
                <p>Sembolizm ve Parnasizm akımlarını Türk şiirine getirmiştir. Şiirlerinde müzikaliteye önem verir.</p>
                <p class="works">Eserler: Tamat, Hac Yolunda, Evrak-ı Eyyam.</p>
            </div>
            <div class="author-section">
                <h4>Süleyman Nazif</h4>
                <p>Vatansever ve gür sesli bir şairdir. "Kara Bir Gün" makalesiyle işgale karşı çıkmıştır.</p>
                <p class="works">Eserler: Gizli Figanlar, Batarya ile Ateş, Malta Geceleri.</p>
            </div>
        `
    },
    'milli-edebiyat': {
        title: 'Milli Edebiyat',
        content: `
            <p>Dilde sadeleşme ve Türkçülük akımının hakim olduğu, Anadolu'nun ve halkın hayatının işlendiği dönemdir.</p>
            <div class="author-section">
                <h4>Ziya Gökalp</h4>
                <p>Türkçülük akımının teorisyenidir.</p>
                <p class="works">Eserler: Kızıl Elma, Yeni Hayat, Türkçülüğün Esasları.</p>
            </div>
            <div class="author-section">
                <h4>Ömer Seyfettin</h4>
                <p>Modern Türk hikayeciliğinin kurucusudur. Sade bir dil kullanmıştır.</p>
                <p class="works">Eserler: Kaşağı, Pembe İncili Kaftan, Falaka.</p>
            </div>
        `
    },
    'cumhuriyet': {
        title: 'Cumhuriyet Dönemi',
        content: `
            <p>1923'ten günümüze kadar gelen, çok sesli ve farklı edebi akımların bir arada bulunduğu dönemdir.</p>
            <div class="author-section">
                <h4>Nazım Hikmet</h4>
                <p>Serbest nazımın öncüsüdür. Toplumcu gerçekçi bir anlayışla yazmıştır.</p>
                <p class="works">Eserler: Memleketimden İnsan Manzaraları, 835 Satır.</p>
            </div>
            <div class="author-section">
                <h4>Necip Fazıl Kısakürek</h4>
                <p>Mistik ve metafizik şiirleriyle tanınır.</p>
                <p class="works">Eserler: Çile, Kaldırımlar, Örümcek Ağı.</p>
            </div>
        `
    }
};

// Modal Açma
function openModal(period) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const data = periodData[period];

    if (data) {
        modalBody.innerHTML = `<h2>${data.title}</h2>${data.content}`;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Sayfa kaydırmayı durdur
    }
}

// Modal Kapatma
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto'; // Sayfa kaydırmayı aç
}

// Modal dışına tıklayınca kapatma
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
