const whatsappMessages = {
  geral: "Olá, encontrei o site do Babá Elvis e gostaria de receber informações sobre o atendimento espiritual.",
  avaliacao: "Olá, encontrei o site do Babá Elvis e gostaria de entender se uma consulta espiritual é indicada para minha situação amorosa.",
  amarracao: "Olá, encontrei o site do Babá Elvis e gostaria de saber como funciona a avaliação para amarração amorosa.",
  agendar: "Olá, encontrei o site do Babá Elvis e quero consultar a disponibilidade para agendar o jogo de búzios no valor de R$ 210,00."
};

document.querySelectorAll("[data-wa]").forEach((link) => {
  const message = whatsappMessages[link.dataset.wa] || whatsappMessages.geral;
  link.href = `https://wa.me/5511953340776?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  document.body.classList.toggle("menu-open", isOpen);
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

const header = document.querySelector(".site-header");
const setHeaderState = () => header?.classList.toggle("is-scrolled", window.scrollY > 30);
setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -45px" }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-accordion] details").forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (!detail.open) return;
    document.querySelectorAll("[data-accordion] details").forEach((item) => {
      if (item !== detail) item.open = false;
    });
  });
});
