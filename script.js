function unsplash(query) {
  return `https://source.unsplash.com/1200x800/?${encodeURIComponent(query)}`;
}

function mapsSearch(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function routeLink(query) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

const nationalPalacesTicketUrl = "https://www.millisaraylar.gov.tr/Bilet/BiletAl";
const muzeTicketUrl = "https://muze.gov.tr/ETicket";
const freeEntryTicket = {
  required: "No",
  price: "Kirish bepul",
  note: "Kirish bepul. Pullik chipta talab qilinmaydi.",
};

const tripDays = [
  {
    id: "day1",
    title: "Sultonahmet klassiklari",
    summary: "Istanbulning eng mashhur tarixiy markazi: Ayasofya, Moviy masjid va Topkapi saroyi.",
    places: [
      {
        name: "Hagia Sophia",
        uzName: "Ayasofya",
        image: unsplash("Hagia Sophia Istanbul"),
        description: "Vizantiya va Usmoniy tarixini birlashtirgan Istanbul ramzi. Oila bilan ertalab borish qulay, chunki maydon keyinroq gavjumlashadi.",
        address: "Sultan Ahmet, Ayasofya Meydani No:1, 34122 Fatih/Istanbul, Turkiye",
        time: "1.5-2 soat",
        restaurant: "Tarihi Sultanahmet Koftecisi Selim Usta",
        ticket: {
          required: "Yes",
          price: "Rasmiy onlayn narx e'lon qilinmagan",
          officialSiteLabel: "Rasmiy onlayn chipta sayti mavjud emas",
          skipLine: "Rasmiy navbatsiz kirish chiptasi ko'rsatilmagan.",
          advance: "Rasmiy saytda onlayn oldindan band qilish mavjud emas; uzun navbatlardan qochish uchun ertaroq boring.",
          note: "Chiptalarni faqat rasmiy kassadan sotib olish mumkin.",
        },
      },
      {
        name: "Blue Mosque",
        uzName: "Moviy masjid",
        image: unsplash("Blue Mosque Istanbul"),
        description: "Sultanahmet masjidi oltita minorasi, keng hovlisi va ko'k Iznik koshinlari bilan mashhur. Namoz vaqtlarida tashrif tartibi o'zgarishi mumkin.",
        address: "Sultan Ahmet, Atmeydani Cd. No:7, 34122 Fatih/Istanbul, Turkiye",
        time: "45 daqiqa-1 soat",
        restaurant: "Doy Doy Restaurant",
      },
      {
        name: "Topkapi Palace",
        uzName: "Topkapi saroyi",
        image: unsplash("Topkapi Palace Istanbul"),
        description: "Usmoniy sultonlarining ko'p asrlik qarorgohi. Hovlilar, xazina bo'limi va Bosfor manzaralari bilan bolalar uchun ham qiziqarli.",
        address: "Cankurtaran, 34122 Fatih/Istanbul, Turkiye",
        time: "2.5-3.5 soat",
        restaurant: "Matbah Restaurant",
        ticket: {
          required: "Yes",
          price: "Chet ellik tashrifchi uchun kombinatsiyalangan chipta: 2,750 TL",
          officialSite: nationalPalacesTicketUrl,
          officialSiteLabel: "Milli Saraylar rasmiy chipta sayti",
          buyUrl: nationalPalacesTicketUrl,
          skipLine: "Rasmiy navbatsiz kirish chiptasi ko'rsatilmagan.",
          advance: "Ayniqsa yuqori mavsum va dam olish kunlarida oldindan band qilish tavsiya etiladi.",
        },
      },
    ],
  },
  {
    id: "day2",
    title: "Bosfor bo'yi va Galata",
    summary: "Saroydan qirg'oq manzaralarigacha: Dolmabahce, Ortakoy, Galata Tower va Galataport.",
    places: [
      {
        name: "Dolmabahce Palace",
        uzName: "Dolmabahche saroyi",
        image: unsplash("Dolmabahce Palace Istanbul"),
        description: "Yevropa uslubi va Usmoniy dabdabasi uyg'unlashgan saroy. Ichki zallar juda katta, shuning uchun bolalar bilan sekin tempda yuring.",
        address: "Visnezade, Dolmabahce Cd., 34357 Besiktas/Istanbul, Turkiye",
        time: "2-3 soat",
        restaurant: "Balkan Lokantasi Besiktas",
        ticket: {
          required: "Yes",
          price: "Chet ellik tashrifchi uchun saroy chiptasi: 2,000 TL",
          officialSite: nationalPalacesTicketUrl,
          officialSiteLabel: "Milli Saraylar rasmiy chipta sayti",
          buyUrl: nationalPalacesTicketUrl,
          skipLine: "Rasmiy navbatsiz kirish chiptasi ko'rsatilmagan.",
          advance: "Oldindan band qilish tavsiya etiladi; kassa navbatlari uzun bo'lishi mumkin.",
          note: "Rasmiy onlayn to'lov sahifasida tanlangan chipta turiga qarab umumiy summa farq qilishi mumkin.",
        },
      },
      {
        name: "Ortakoy Mosque",
        uzName: "Ortakoy masjidi",
        image: unsplash("Ortakoy Mosque Istanbul"),
        description: "Bosfor ko'prigi fonida joylashgan nafis masjid. Qirg'oqda suratga tushish va qisqa sayr qilish uchun juda chiroyli nuqta.",
        address: "Mecidiye, Mecidiye Koprusu Sk. No:1, 34347 Besiktas/Istanbul, Turkiye",
        time: "45 daqiqa-1 soat",
        restaurant: "Harbi Adana Ocakbasi",
      },
      {
        name: "Galata Tower",
        uzName: "Galata minorasi",
        image: unsplash("Galata Tower Istanbul"),
        description: "Istanbul panoramasini ko'rish uchun eng yaxshi joylardan biri. Lift va kuzatuv maydoni sababli oilaviy tashrif uchun qulay.",
        address: "Bereketzade, Galata Kulesi Sk., 34421 Beyoglu/Istanbul, Turkiye",
        time: "1-1.5 soat",
        restaurant: "Galata Kitchen",
        ticket: {
          required: "Yes",
          price: "Kirish chiptasi: 30 EUR",
          officialSite: muzeTicketUrl,
          officialSiteLabel: "muze.gov.tr E-Bilet",
          buyUrl: muzeTicketUrl,
          skipLine: "Rasmiy navbatsiz kirish chiptasi ko'rsatilmagan.",
          advance: "Quyosh botishi va dam olish kunlari uchun oldindan band qilish tavsiya etiladi.",
        },
      },
      {
        name: "Galataport",
        uzName: "Galataport",
        image: unsplash("Galataport Istanbul"),
        description: "Bosfor qirg'og'idagi zamonaviy sayr zonasi, do'konlar va kafe-restoranlar bilan. Kechki payt manzara ayniqsa yoqimli.",
        address: "Kilicali Pasa Mah., Meclis-i Mebusan Cd. No:8, Ic Kapi No:102, 34433 Beyoglu/Istanbul, Turkiye",
        time: "1.5-2 soat",
        restaurant: "Namli Gurme Karakoy",
      },
    ],
  },
  {
    id: "day3",
    title: "Osiyo tomoni manzaralari",
    summary: "Beylerbeyi saroyi, Camlica masjidi, Camlica Hill va jonli Kadikoy mahallasi.",
    places: [
      {
        name: "Beylerbeyi Palace",
        uzName: "Beylerbeyi saroyi",
        image: unsplash("Beylerbeyi Palace Istanbul"),
        description: "Bosforning Osiyo qirg'og'idagi yozgi saroy. Bog'lari, dengizga yaqinligi va sokin atmosferasi bilan oilalar uchun yaxshi tanlov.",
        address: "Beylerbeyi, Abdullahaga Cd., 34676 Uskudar/Istanbul, Turkiye",
        time: "1.5-2 soat",
        restaurant: "Kanaat Lokantasi",
        ticket: {
          required: "Yes",
          price: "Chet ellik tashrifchi uchun chipta: 800 TL",
          officialSite: nationalPalacesTicketUrl,
          officialSiteLabel: "Milli Saraylar rasmiy chipta sayti",
          buyUrl: nationalPalacesTicketUrl,
          skipLine: "Rasmiy navbatsiz kirish chiptasi ko'rsatilmagan.",
          advance: "Dam olish kunlari oldindan band qilish tavsiya etiladi.",
        },
      },
      {
        name: "Camlica Mosque",
        uzName: "Camlica masjidi",
        image: unsplash("Camlica Mosque Istanbul"),
        description: "Zamonaviy Istanbulning eng yirik masjidlaridan biri. Keng hovli va shahar manzarasi tufayli tashrifni shoshmasdan rejalang.",
        address: "Ferah, Ferah Yolu Sk. No:87, 34692 Uskudar/Istanbul, Turkiye",
        time: "1-1.5 soat",
        restaurant: "Camlica Sosyal Tesisleri",
      },
      {
        name: "Camlica Hill",
        uzName: "Camlica tepaligi",
        image: unsplash("Camlica Hill Istanbul"),
        description: "Istanbulni yuqoridan tomosha qilish uchun osoyishta park hududi. Fotosurat, choy va qisqa dam olish uchun mos.",
        address: "Kisikli, Turistik Camlica Cd., 34692 Uskudar/Istanbul, Turkiye",
        time: "1-1.5 soat",
        restaurant: "Camlica Sosyal Tesisleri",
      },
      {
        name: "Kadikoy",
        uzName: "Kadikoy",
        image: unsplash("Kadikoy Istanbul"),
        description: "Osiyo tomonining jonli markazi: piyoda ko'chalar, bozor, kafe va dengiz bo'yi. Kechki sayr uchun juda qulay.",
        address: "Caferaga, Kadikoy/Istanbul, Turkiye",
        time: "2-3 soat",
        restaurant: "Ciya Sofrasi",
      },
    ],
  },
  {
    id: "day4",
    title: "Oltin Shox va bozorlar",
    summary: "Eyup Sultan, Pierre Loti, rangli Balat ko'chalari va Grand Bazaar bilan yakuniy kun.",
    places: [
      {
        name: "Eyup Sultan Mosque",
        uzName: "Eyup Sultan masjidi",
        image: unsplash("Eyup Sultan Mosque Istanbul"),
        description: "Istanbuldagi eng muhim ziyorat maskanlaridan biri. Ertalab borilsa, maydon va atrof sokinroq bo'ladi.",
        address: "Merkez, Cami Kebir Sk. No:1, 34050 Eyupsultan/Istanbul, Turkiye",
        time: "1-1.5 soat",
        restaurant: "Mihri Sah Cafe & Restaurant",
      },
      {
        name: "Pierre Loti",
        uzName: "Pierre Loti tepaligi",
        image: unsplash("Pierre Loti Istanbul"),
        description: "Oltin Shox manzarasini tomosha qilish uchun mashhur tepalik. Teleferik bilan chiqish bolalar uchun ham qiziqarli bo'ladi.",
        address: "Eyup Merkez, Idris Kosku Cd., 34050 Eyupsultan/Istanbul, Turkiye",
        time: "1-1.5 soat",
        restaurant: "Pierre Loti Tepesi Tesisleri",
      },
      {
        name: "Balat",
        uzName: "Balat",
        image: unsplash("Balat Istanbul colorful houses"),
        description: "Rangli uylar, tarixiy ko'chalar va kichik kafelar bilan mashhur mahalla. Piyoda sayr va suratga tushish uchun ajoyib.",
        address: "Balat, 34087 Fatih/Istanbul, Turkiye",
        time: "1.5-2 soat",
        restaurant: "Forno Balat",
      },
      {
        name: "Grand Bazaar",
        uzName: "Kapali Carsi",
        image: unsplash("Grand Bazaar Istanbul"),
        description: "Dunyoning eng qadimiy yopiq bozorlaridan biri. Suvenir, chinni, gilam va shirinlik xaridi uchun sayohatning chiroyli yakuni.",
        address: "Beyazit, Kalpakcilar Cd. No:22, 34126 Fatih/Istanbul, Turkiye",
        time: "2-3 soat",
        restaurant: "Havuzlu Restaurant",
      },
    ],
  },
];

const overviewGrid = document.getElementById("overviewGrid");
const daysRoot = document.getElementById("daysRoot");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("navLinks");

function placeQuery(place) {
  return `${place.name}, ${place.address}`;
}

function renderOverview() {
  overviewGrid.innerHTML = tripDays
    .map((day, index) => `
      <a class="overview-card" href="#${day.id}">
        <span>${index + 1}</span>
        <h3>${index + 1}-kun</h3>
        <p>${day.summary}</p>
      </a>
    `)
    .join("");
}

function renderTicketInfo(place) {
  const ticket = place.ticket ?? freeEntryTicket;
  const isPaid = ticket.required === "Yes";
  const officialSite = ticket.officialSite
    ? `<a href="${ticket.officialSite}" target="_blank" rel="noopener noreferrer">${ticket.officialSiteLabel}</a>`
    : ticket.officialSiteLabel ?? "Rasmiy chipta sayti mavjud emas";
  const buyButton = ticket.buyUrl
    ? `<a class="button primary ticket-buy" href="${ticket.buyUrl}" target="_blank" rel="noopener noreferrer">Chipta olish</a>`
    : "";
  const skipLine = ticket.skipLine ?? (isPaid ? "Rasmiy navbatsiz kirish chiptasi ko'rsatilmagan." : "Talab qilinmaydi.");
  const advance = ticket.advance ?? (isPaid ? "Mavjud bo'lsa, oldindan band qilish tavsiya etiladi." : "Oldindan band qilish talab qilinmaydi.");
  const requiredLabel = isPaid ? "Ha" : "Yo'q";

  return `
    <div class="ticket-box ${isPaid ? "is-paid" : "is-free"}">
      <div class="ticket-heading">
        <span>${ticket.price === "Kirish bepul" ? "Kirish bepul" : "Chipta ma'lumoti"}</span>
        <strong>Chipta kerak: ${requiredLabel}</strong>
      </div>

      <div class="ticket-grid">
        <div>
          <strong>Hozirgi chipta narxi</strong>
          <span>${ticket.price === "Kirish bepul" ? "Kirish bepul" : ticket.price}</span>
        </div>
        <div>
          <strong>Rasmiy chipta sayti</strong>
          <span>${officialSite}</span>
        </div>
        <div>
          <strong>Navbatsiz kirish chiptasi</strong>
          <span>${skipLine}</span>
        </div>
        <div>
          <strong>Oldindan band qilish</strong>
          <span>${advance}</span>
        </div>
      </div>

      ${ticket.note ? `<p class="ticket-note">${ticket.note}</p>` : ""}
      ${buyButton}
    </div>
  `;
}

function renderPlaceCard(place) {
  const query = placeQuery(place);

  return `
    <article class="place-card fade-in">
      <div class="photo-frame">
        <img src="${place.image}" alt="${place.uzName}" loading="lazy" onerror="this.hidden=true; this.nextElementSibling.hidden=false;">
        <div class="image-placeholder" hidden>
          Rasm yuklanmadi. Unsplash, Pexels, Wikimedia Commons yoki Pixabay'dan shu joy rasmi bilan almashtiring.
        </div>
      </div>

      <div class="card-body">
        <div class="card-topline">
          <span class="visit-time">Tashrif vaqti: ${place.time}</span>
        </div>

        <h3>${place.uzName}</h3>
        <p class="description">${place.description}</p>

        <div class="details">
          <div class="detail">
            <strong>Rasmiy manzil</strong>
            <span>${place.address}</span>
          </div>
          <div class="detail">
            <strong>Yaqin halal restoran</strong>
            <span>${place.restaurant}</span>
          </div>
        </div>

        ${renderTicketInfo(place)}

        <div class="card-actions">
          <a class="button primary" href="${mapsSearch(query)}" target="_blank" rel="noopener noreferrer">Google Maps</a>
          <a class="button light" href="${routeLink(query)}" target="_blank" rel="noopener noreferrer">Marshrutni ochish</a>
        </div>
      </div>
    </article>
  `;
}

function renderDays() {
  daysRoot.innerHTML = tripDays
    .map((day, index) => `
      <section class="day-section" id="${day.id}">
        <div class="section">
          <div class="day-header fade-in">
            <div>
              <span class="day-label">${index + 1}-kun</span>
              <h2>${day.title}</h2>
            </div>
            <p>${day.summary}</p>
          </div>

          <div class="cards">
            ${day.places.map(renderPlaceCard).join("")}
          </div>
        </div>
      </section>
    `)
    .join("");
}

function initFadeAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".fade-in").forEach((element) => observer.observe(element));
}

function initNavigation() {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  const sections = ["top", ...tripDays.map((day) => day.id)];
  const links = [...document.querySelectorAll(".nav-links a")];

  window.addEventListener("scroll", () => {
    const current = sections
      .map((id) => ({ id, top: document.getElementById(id)?.getBoundingClientRect().top ?? 0 }))
      .filter((section) => section.top <= 110)
      .pop();

    links.forEach((link) => {
      const href = link.getAttribute("href").replace("#", "");
      link.classList.toggle("is-active", current?.id === href);
    });
  }, { passive: true });
}

renderOverview();
renderDays();
initFadeAnimations();
initNavigation();
