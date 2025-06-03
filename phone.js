document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".hero-form form");
  const inputs = form.querySelectorAll("input, textarea");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = inputs[0].value;
    const phone = inputs[1].value;
    const message = inputs[2].value;

    const text = `Заявка на расчет стоимости:\nИмя: ${name}\nТелефон: ${phone}\nБалкон: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappNumber = "77011067624"; // ← нөміріңіз (без +)

    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
  });
});