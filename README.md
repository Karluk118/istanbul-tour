# Istanbul oilaviy sayohati

Istanbulga 4 kunlik oilaviy sayohat uchun toza, zamonaviy va moslashuvchan GitHub Pages sayti.

## Fayllar

- `index.html` - sahifa tuzilmasi
- `style.css` - dizayn va mobil moslashuv
- `script.js` - yo'nalish ma'lumotlari, kartalar, Google Maps havolalari va animatsiyalar

## GitHub Pages'ga joylash

1. Fayllarni GitHub repozitoriyga yuklang.
2. Repozitoriy `Settings` bo'limini oching.
3. `Pages` bo'limiga kiring.
4. `Deploy from a branch` ni tanlang.
5. `main` branch va `/root` papkasini belgilang.
6. GitHub Pages bergan havolani oching.

## Sayohat rejasini tahrirlash

Barcha joylar `script.js` faylidagi `tripDays` massivida saqlangan.

Quyidagilarni o'zgartirish mumkin:

- joy nomlari
- tavsiflar
- manzillar
- tashrif vaqti
- tavsiya qilingan halal restoranlar
- chipta ma'lumotlari
- rasm havolalari yoki qidiruv so'rovlari

Google Maps va marshrut tugmalari har bir joy nomi va manzilidan avtomatik yaratiladi.

## Chipta ma'lumotlari

Pullik joylarda `ticket` obyekti bor:

```js
ticket: {
  required: "Yes",
  price: "Chet ellik tashrifchi uchun chipta: 800 TL",
  officialSite: "https://www.millisaraylar.gov.tr/Bilet/BiletAl",
  officialSiteLabel: "Milli Saraylar rasmiy chipta sayti",
  buyUrl: "https://www.millisaraylar.gov.tr/Bilet/BiletAl",
  skipLine: "Rasmiy navbatsiz kirish chiptasi ko'rsatilmagan.",
  advance: "Dam olish kunlari oldindan band qilish tavsiya etiladi."
}
```

`ticket` obyekti bo'lmagan joylarda avtomatik ravishda quyidagisi chiqadi:

```text
Kirish bepul
```

Rasmiy chipta manbalari:

- Topkapi saroyi, Dolmabahche saroyi, Beylerbeyi saroyi: `https://www.millisaraylar.gov.tr/`
- Milli Saraylar rasmiy chipta sahifasi: `https://www.millisaraylar.gov.tr/Bilet/BiletAl`
- Galata minorasi tashrif sahifasi: `https://galatakulesi.gov.tr/ziyaret`
- Madaniyat va turizm vazirligi e-chipta sahifasi: `https://muze.gov.tr/ETicket`

Saytni e'lon qilishdan oldin narxlarni rasmiy saytlardan qayta tekshiring, chunki chipta narxlari o'zgarishi mumkin.

## Rasmlar

Sayt endi `source.unsplash.com` qidiruv havolalaridan foydalanmaydi. Dizayn yengilroq bo'lishi uchun har bir joyda alohida rasm emas, har bir kun uchun bitta katta rasm ishlatiladi. `script.js` faylining boshida aniq va to'g'ridan-to'g'ri rasm havolalari berilgan:

```js
const images = {
  ayasofya: "https://upload.wikimedia.org/...",
};
```

Agar rasmlarni o'zingiz GitHub'ga yuklamoqchi bo'lsangiz, `images` papkasiga rasm fayllarini joylang va `script.js` ichida kunning `image` qiymatini mahalliy fayl yo'liga almashtiring.

Misol:

```js
image: "images/ayasofya.jpg"
```

Mahalliy rasmlardan foydalansangiz, GitHub'ga `index.html`, `style.css`, `script.js`, `README.md` bilan birga butun `images` papkasini ham yuklang.

## Eslatma

- Restoran tavsiyalari oilaviy sayohat va halal ovqatlanish ehtiyojlariga moslab berilgan.
- Tashrifdan oldin ish vaqti va chipta narxlarini rasmiy saytlardan tekshiring.
- Sayt faqat HTML, CSS va JavaScript bilan yozilgan. Framework ishlatilmagan.
