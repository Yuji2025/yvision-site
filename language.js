
document.addEventListener("DOMContentLoaded", function() {
  const enBtn = document.getElementById("switch-en");
  const jaBtn = document.getElementById("switch-ja");
  const enElements = document.querySelectorAll(".lang-en");
  const jaElements = document.querySelectorAll(".lang-ja");

  function switchLanguage(lang) {
    if (lang === "en") {
      enElements.forEach(el => el.classList.add("active"));
      jaElements.forEach(el => el.classList.remove("active"));
      enBtn.classList.add("active");
      jaBtn.classList.remove("active");
    } else {
      jaElements.forEach(el => el.classList.add("active"));
      enElements.forEach(el => el.classList.remove("active"));
      jaBtn.classList.add("active");
      enBtn.classList.remove("active");
    }
  }

  enBtn.addEventListener("click", () => switchLanguage("en"));
  jaBtn.addEventListener("click", () => switchLanguage("ja"));

  // 初期表示は英語
  switchLanguage("en");
});
