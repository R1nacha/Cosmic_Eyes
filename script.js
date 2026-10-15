const spectrumData = {
  radio: {title:"Радіохвилі",desc:"Довгі хвилі допомагають досліджувати холодний газ, пульсари та структуру галактик. Радіотелескопи збирають сигнали, яких ми не чуємо й не бачимо очима."},
  micro: {title:"Мікрохвилі",desc:"Мікрохвильове випромінювання допомагає досліджувати космічний мікрохвильовий фон — давнє світло, що залишилося від раннього Всесвіту."},
  infrared: {title:"Інфрачервоне випромінювання",desc:"Його випромінюють теплі об'єкти. Інфрачервоні телескопи, зокрема James Webb, можуть досліджувати холодніші об'єкти та бачити крізь частину космічного пилу."},
  visible: {title:"Видиме світло",desc:"Саме цю частину спектра сприймають наші очі. Телескоп Hubble робить детальні знімки зір і галактик у видимому світлі."},
  uv: {title:"Ультрафіолет",desc:"Ультрафіолет допомагає вивчати гарячі зорі та активні процеси. Значну частину цього випромінювання поглинає атмосфера Землі, тому важливі космічні обсерваторії."},
  xray: {title:"Рентгенівське випромінювання",desc:"Рентгенівські промені надходять від надзвичайно гарячого газу, залишків наднових та областей навколо чорних дір. Їх досліджує космічна обсерваторія Chandra."},
  gamma: {title:"Гамма-промені",desc:"Це найенергійніша частина електромагнітного спектра. Її спостереження допомагає вивчати потужні космічні вибухи та інші екстремальні явища."}
};
document.querySelectorAll(".spectrum-item").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".spectrum-item").forEach(item => item.classList.remove("active"));
  btn.classList.add("active");
  const data = spectrumData[btn.dataset.spectrum];
  document.getElementById("spectrum-title").textContent = data.title;
  document.getElementById("spectrum-desc").textContent = data.desc;
  document.querySelector(".card-topline .mono").textContent = `0${Object.keys(spectrumData).indexOf(btn.dataset.spectrum)+1} / 07`;
}));
const viewNames = {visible:"Видиме світло",infrared:"Інфрачервоне випромінювання",xray:"Рентгенівське випромінювання",combined:"Комбіноване зображення"};
document.querySelectorAll(".compare-btn").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".compare-btn").forEach(item => item.classList.remove("active"));
  btn.classList.add("active");
  const view = btn.dataset.view;
  const visual = document.getElementById("comparison-visual");
  visual.dataset.view = view;
  document.getElementById("view-name").textContent = viewNames[view];
}));
const modalContent = {
  hubble:{kicker:"VISIBLE / ULTRAVIOLET",title:"Hubble Space Telescope",text:"Космічний телескоп Hubble працює з 1990 року. Він спостерігає Всесвіт у видимому, ультрафіолетовому та частині інфрачервоного діапазону й допоміг зробити одні з найвідоміших астрономічних зображень.",url:"https://science.nasa.gov/mission/hubble/"},
  webb:{kicker:"INFRARED",title:"James Webb Space Telescope",text:"James Webb — космічна обсерваторія, створена передусім для інфрачервоних спостережень. Вона вивчає ранні галактики, формування зір і планетні системи.",url:"https://science.nasa.gov/mission/webb/"},
  chandra:{kicker:"X-RAY",title:"Chandra X-ray Observatory",text:"Chandra досліджує Всесвіт у рентгенівському діапазоні. Її спостереження розкривають надзвичайно гарячі області, вибухи зір та активність навколо чорних дір.",url:"https://science.nasa.gov/mission/chandra/"}
};
const modal = document.getElementById("info-modal");
document.querySelectorAll("[data-modal]").forEach(btn => btn.addEventListener("click", () => {
  const data = modalContent[btn.dataset.modal];
  document.getElementById("modal-kicker").textContent = data.kicker;
  document.getElementById("modal-title").textContent = data.title;
  document.getElementById("modal-text").textContent = data.text;
  document.getElementById("modal-link").href = data.url;
  modal.showModal();
}));
document.querySelector(".modal-close").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  navLinks.classList.remove("open"); menuToggle.setAttribute("aria-expanded","false"); menuToggle.textContent="☰";
}));
document.querySelector(".theme-toggle").addEventListener("click", e => {
  document.body.classList.toggle("light");
  
  e.currentTarget.textContent = document.body.classList.contains("light") ? "☀" : "☾";
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);} });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
