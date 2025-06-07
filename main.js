const data = [
  { t: "أفضل لغة للمبتدئ؟", c: "برمجة", a: 4, time: "قبل 3 ساعات" },
  { t: "وش أفضل كرت شاشة؟", c: "أجهزة", a: 2, time: "قبل ساعتين" },
  { t: "تقييمك لـ FIFA الجديدة؟", c: "ألعاب", a: 3, time: "قبل 4 ساعات" },
  { t: "هل أقدم على وظيفة عن بعد؟", c: "وظائف", a: 1, time: "قبل ساعة" },
  { t: "React ولا Vue؟", c: "برمجة", a: 5, time: "قبل 5 ساعات" },
];

function renderQs(cat = null) {
  const box = document.getElementById("ql");
  box.innerHTML = "";
  const list = cat ? data.filter(q => q.c === cat) : data;
  list.forEach(q => {
    box.innerHTML += `
      <div class="q" onclick="openQ('${q.t}')">
        <strong>${q.t}</strong>
        <div class="m">${q.c} • ${q.a} إجابة • ${q.time}</div>
      </div>
    `;
  });
}

function openQ(title) {
  localStorage.setItem("selQ", title);
  location.href = "question.html";
}

function filterQs(cat) {
  renderQs(cat);
}

function openForm() {
  document.getElementById("formBox").style.display = "flex";
}

function closeForm() {
  document.getElementById("formBox").style.display = "none";
}

function submitQ() {
  const title = document.getElementById("qText").value;
  const cat = document.getElementById("qCat").value;
  if (title.trim()) {
    const newQ = { t: title, c: cat, a: 0, time: "الآن" };
    data.unshift(newQ);
    renderQs();
    closeForm();
  }
}

function scrollToQs() {
  document.getElementById("qs").scrollIntoView({ behavior: "smooth" });
}

renderQs();
