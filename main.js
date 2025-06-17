  document.querySelectorAll('.players p').forEach(paragraph => {
    paragraph.addEventListener('click', () => {
      const span = paragraph.querySelector('span');
      span.classList.toggle('clip');
    });
  });

const players = [
  { name: "Lionel Messi", wiki: "https://ar.wikipedia.org/wiki/ليونيل_ميسي" },
  { name: "Cristiano Ronaldo", wiki: "https://ar.wikipedia.org/wiki/كريستيانو_رونالدو" },
  { name: "Pelé", wiki: "https://ar.wikipedia.org/wiki/بليه" },
  { name: "Diego Maradona", wiki: "https://ar.wikipedia.org/wiki/دييغو_مارادونا" },
  { name: "Zinedine Zidane", wiki: "https://ar.wikipedia.org/wiki/زين_الدين_زيدان" },
  { name: "Franz Beckenbauer", wiki: "https://ar.wikipedia.org/wiki/فرانز_بيكنباور" },
  { name: "Roberto Baggio", wiki: "https://ar.wikipedia.org/wiki/روبرتو_باجيو" },
  { name: "David Beckham", wiki: "https://ar.wikipedia.org/wiki/ديفيد_بيكهام" },
  { name: "Gordon Banks", wiki: "https://ar.wikipedia.org/wiki/غوردون_بانكس" },
  { name: "Michael Ballack", wiki: "https://ar.wikipedia.org/wiki/مايكل_بالاك" },
  { name: "Neymar", wiki: "https://ar.wikipedia.org/wiki/نيمار" },
  { name: "Ronaldinho", wiki: "https://ar.wikipedia.org/wiki/رونالدينيو" },
  { name: "Ronaldo Nazário", wiki: "https://ar.wikipedia.org/wiki/رونالدو" },
  { name: "Mohamed Salah", wiki: "https://ar.wikipedia.org/wiki/محمد_صلاح" },
  { name: "Kylian Mbappé", wiki: "https://ar.wikipedia.org/wiki/كيليان_مبابي" },
  { name: "Erling Haaland", wiki: "https://ar.wikipedia.org/wiki/إيرلينغ_هالاند" },
  { name: "Luka Modrić", wiki: "https://ar.wikipedia.org/wiki/لوكا_مودريتش" },
  { name: "Kevin De Bruyne", wiki: "https://ar.wikipedia.org/wiki/كيفن_دي_بروين" },
  { name: "Robert Lewandowski", wiki: "https://ar.wikipedia.org/wiki/روبرت_ليفاندوفسكي" },
  { name: "Andrés Iniesta", wiki: "https://ar.wikipedia.org/wiki/أندريس_إنييستا" },
  { name: "Xavi", wiki: "https://ar.wikipedia.org/wiki/تشافي" },
  { name: "Paolo Maldini", wiki: "https://ar.wikipedia.org/wiki/باولو_مالديني" },
  { name: "Fabio Cannavaro", wiki: "https://ar.wikipedia.org/wiki/فابيو_كانافارو" },
  { name: "Iker Casillas", wiki: "https://ar.wikipedia.org/wiki/إيكر_كاسياس" },
  { name: "Gianluigi Buffon", wiki: "https://ar.wikipedia.org/wiki/جيانلويجي_بوفون" },
  { name: "Thierry Henry", wiki: "https://ar.wikipedia.org/wiki/تييري_أونري" },
  { name: "Didier Drogba", wiki: "https://ar.wikipedia.org/wiki/ديدييه_دروغبا" },
  { name: "Wayne Rooney", wiki: "https://ar.wikipedia.org/wiki/واين_روني" },
  { name: "Steven Gerrard", wiki: "https://ar.wikipedia.org/wiki/ستيفن_جيرارد" },
  { name: "Frank Lampard", wiki: "https://ar.wikipedia.org/wiki/فرانك_لامبارد" },
  { name: "Andrea Pirlo", wiki: "https://ar.wikipedia.org/wiki/أندريا_بيرلو" },
  { name: "Clarence Seedorf", wiki: "https://ar.wikipedia.org/wiki/كلارنس_سيدورف" },
  { name: "Carlos Tevez", wiki: "https://ar.wikipedia.org/wiki/كارلوس_تيفيز" },
  { name: "Edinson Cavani", wiki: "https://ar.wikipedia.org/wiki/إدينسون_كافاني" },
  { name: "Zlatan Ibrahimović", wiki: "https://ar.wikipedia.org/wiki/زلاتان_إبراهيموفيتش" },
  { name: "Sergio Agüero", wiki: "https://ar.wikipedia.org/wiki/سيرخيو_أغويرو" },
  { name: "Angel Di Maria", wiki: "https://ar.wikipedia.org/wiki/أنخل_دي_ماريا" },
  { name: "Karim Benzema", wiki: "https://ar.wikipedia.org/wiki/كريم_بنزيما" },
  { name: "Riyad Mahrez", wiki: "https://ar.wikipedia.org/wiki/رياض_محرز" },
  { name: "Hakim Ziyech", wiki: "https://ar.wikipedia.org/wiki/حكيم_زياش" },
  { name: "Sadio Mané", wiki: "https://ar.wikipedia.org/wiki/ساديو_ماني" },
  { name: "Vinícius Júnior", wiki: "https://ar.wikipedia.org/wiki/فينيسيوس_جونيور" },
  { name: "Antoine Griezmann", wiki: "https://ar.wikipedia.org/wiki/أنطوان_غريزمان" },
  { name: "Mesut Özil", wiki: "https://ar.wikipedia.org/wiki/مسعود_أوزيل" },
  { name: "Mario Götze", wiki: "https://ar.wikipedia.org/wiki/ماريو_غوتزه" },
  { name: "Marco Reus", wiki: "https://ar.wikipedia.org/wiki/ماركو_رويس" },
  { name: "Toni Kroos", wiki: "https://ar.wikipedia.org/wiki/توني_كروس" },
  { name: "Thomas Müller", wiki: "https://ar.wikipedia.org/wiki/توماس_مولر" },
  { name: "Miroslav Klose", wiki: "https://ar.wikipedia.org/wiki/ميروسلاف_كلوزه" },
  { name: "Philipp Lahm", wiki: "https://ar.wikipedia.org/wiki/فيليب_لام" },
  { name: "Manuel Neuer", wiki: "https://ar.wikipedia.org/wiki/مانويل_نوير" },
  { name: "Marc-André ter Stegen", wiki: "https://ar.wikipedia.org/wiki/مارك_أندريه_تير_شتيغن" },
  { name: "Gerard Piqué", wiki: "https://ar.wikipedia.org/wiki/جيرارد_بيكيه" },
  { name: "Sergio Ramos", wiki: "https://ar.wikipedia.org/wiki/سيرخيو_راموس" },
  { name: "Jordi Alba", wiki: "https://ar.wikipedia.org/wiki/جوردي_ألبا" },
  { name: "Marcelo", wiki: "https://ar.wikipedia.org/wiki/مارسيلو_فييرا" },
  { name: "Casemiro", wiki: "https://ar.wikipedia.org/wiki/كاسيميرو" },
  { name: "Ivan Rakitić", wiki: "https://ar.wikipedia.org/wiki/إيفان_راكيتتش" },
  { name: "Arturo Vidal", wiki: "https://ar.wikipedia.org/wiki/أرتورو_فيدال" },
  { name: "Edgar Davids", wiki: "https://ar.wikipedia.org/wiki/إدغار_ديفيدز" },
  { name: "Xabi Alonso", wiki: "https://ar.wikipedia.org/wiki/تشابي_ألونسو" },
  { name: "Fernando Torres", wiki: "https://ar.wikipedia.org/wiki/فرناندو_توريس" },
  { name: "Cesc Fàbregas", wiki: "https://ar.wikipedia.org/wiki/سيسك_فابريغاس" },
  { name: "Raúl", wiki: "https://ar.wikipedia.org/wiki/راؤول" },
  { name: "Samuel Eto'o", wiki: "https://ar.wikipedia.org/wiki/صامويل_إيتو" },
  { name: "Petr Čech", wiki: "https://ar.wikipedia.org/wiki/بيتر_تشيك" },
  { name: "Ashley Cole", wiki: "https://ar.wikipedia.org/wiki/أشلي_كول" },
  { name: "John Terry", wiki: "https://ar.wikipedia.org/wiki/جون_تيري" },
  { name: "Nemanja Vidić", wiki: "https://ar.wikipedia.org/wiki/نيمانيا_فييتش" },
  { name: "Patrice Evra", wiki: "https://ar.wikipedia.org/wiki/باتريس_إيفرا" },
  { name: "Bastian Schweinsteiger", wiki: "https://ar.wikipedia.org/wiki/باستيان_شوينشتايغر" },
  { name: "Arjen Robben", wiki: "https://ar.wikipedia.org/wiki/آرين_روبن" },
  { name: "Robin van Persie", wiki: "https://ar.wikipedia.org/wiki/روبن_فان_بيرسي" },
  { name: "Dimitar Berbatov", wiki: "https://ar.wikipedia.org/wiki/ديميتار_بيرباتوف" },
  { name: "Hernán Crespo", wiki: "https://ar.wikipedia.org/wiki/هرنان_كريسبو" },
  { name: "Juan Román Riquelme", wiki: "https://ar.wikipedia.org/wiki/خوان_رومان_ريكيلمي" },
  { name: "Carlos Valderrama", wiki: "https://ar.wikipedia.org/wiki/كارلوس_فالديراما" },
  { name: "Jay-Jay Okocha", wiki: "https://ar.wikipedia.org/wiki/جي-جي_أوكوتشا" },
  { name: "George Weah", wiki: "https://ar.wikipedia.org/wiki/جورج_وياه" },
  { name: "Abedi Pele", wiki: "https://ar.wikipedia.org/wiki/عبيدي_بيليه" },
  { name: "Roger Milla", wiki: "https://ar.wikipedia.org/wiki/روجيه_ميلا" },
  { name: "Emmanuel Adebayor", wiki: "https://ar.wikipedia.org/wiki/إيمانويل_أديبايور" },
  { name: "Didier Deschamps", wiki: "https://ar.wikipedia.org/wiki/ديدييه_ديشان" },
  { name: "Patrick Vieira", wiki: "https://ar.wikipedia.org/wiki/باتريك_فييرا" },
  { name: "Claude Makélélé", wiki: "https://ar.wikipedia.org/wiki/كلود_ماكيليلي" },
  { name: "Javier Mascherano", wiki: "https://ar.wikipedia.org/wiki/خافيير_ماسكيرانو" },
  { name: "Ángel Correa", wiki: "https://ar.wikipedia.org/wiki/أنخيل_كوريا" },
  { name: "Giovani Lo Celso", wiki: "https://ar.wikipedia.org/wiki/جيوفاني_لو_سيلسو" },
  { name: "Leandro Paredes", wiki: "https://ar.wikipedia.org/wiki/لياندرو_باريديس" },
  { name: "Lucas Moura", wiki: "https://ar.wikipedia.org/wiki/لوكاس_مورا" },
  { name: "Fred", wiki: "https://ar.wikipedia.org/wiki/فريد_(لاعب_كرة_قدم_برازيلي)" }
];




const paragraphs = document.querySelectorAll('.players p');
const refreshBtn = document.querySelector('.refresh'); // أول زرار (refresh)

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function updatePlayers() {
  const shuffledPlayers = shuffle([...players]); // نعمل نسخة عشان منبوظش الأصل
  const selectedPlayers = shuffledPlayers.slice(0, paragraphs.length); // نختار قد عدد الفقرات

  selectedPlayers.forEach((player, i) => {
    const p = paragraphs[i];

    // الاسم
    if (!p.firstChild || !p.firstChild.textContent.trim()) {
      p.insertBefore(document.createTextNode(player.name + " "), p.firstChild);
    } else {
      p.childNodes[0].textContent = player.name + " ";
    }

    // الرابط
    const link = p.querySelector('a');
    if (link) {
      link.href = player.wiki;
      link.target = "_blank";
    }
  });
}

// أول مرة تحمل الصفحة نعرض لاعيبة
updatePlayers();

// عند الضغط على زرار refresh players
refreshBtn.addEventListener('click', updatePlayers);


const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', () => {
  const counters = document.querySelectorAll('.counter .value');
  counters.forEach(counter => {
    counter.textContent = "0";
  });
});









 document.querySelectorAll(".team").forEach(team => {
    const decrementBtn = team.querySelector(".decrement");
    const incrementBtn = team.querySelector(".increment");
    const valueDisplay = team.querySelector(".value");
    let count = 0;

    incrementBtn.addEventListener("click", () => {
      count++;
      valueDisplay.textContent = count;
    });

    decrementBtn.addEventListener("click", () => {
      if (count > 0) {
        count--;
        valueDisplay.textContent = count;
      }
    });
  });















const timeSpan = document.querySelector('.time');
const controlBtn = document.querySelector('.control');
const resetTimeBtn = document.querySelector('.control2');

let interval = null;
let count = 30;

controlBtn.addEventListener('click', () => {
  if (controlBtn.textContent === 'start') {
    controlBtn.textContent = 'stop';

    timeSpan.textContent = count;

    interval = setInterval(() => {
      count--;
      if (count >= 0) {
        timeSpan.textContent = count;
      } else {
        clearInterval(interval);
        timeSpan.textContent = "30"; 
        controlBtn.textContent = "start";
        count = 30;
      }
    }, 1000);
  } else {
    clearInterval(interval);
    controlBtn.textContent = 'start';
  }
});

resetTimeBtn.addEventListener('click', () => {
  clearInterval(interval);            
  count = 30;                        
  timeSpan.textContent = count;   
  controlBtn.textContent = 'start';   
});

