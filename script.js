 // Dark/light mode com localStorage
    const html = document.documentElement;
    function toggleTheme() {
      html.classList.toggle("light");
      localStorage.setItem("theme", html.classList.contains("light") ? "light" : "dark");
    }

    if (localStorage.getItem("theme") === "light") {
      html.classList.add("light");
    }

  function typeWriter(element, text, speed = 80) {
  let i = 0;
  element.innerHTML = "";
  const typing = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
}

const welcome = document.getElementById("welcome");
const hour = new Date().getHours();
let message = "";

if (hour < 12) message = "Bom dia! Explore meus projetos feitos no Figma.";
else if (hour < 18) message = "Boa tarde! Explore meus projetos feitos no Figma.";
else message = "Boa noite! Explore meus projetos feitos no Figma.";

typeWriter(welcome, message);


    // Modal
    function openModal() {
      document.getElementById("modal").style.display = "flex";
    }

    function closeModal() {
      document.getElementById("modal").style.display = "none";
    }

    // Copiar link do WhatsApp
    function copyWhatsApp() {
      const number = "+55 11975072008";
      navigator.clipboard.writeText(number).then(() => {
      const notification = document.getElementById('notificationWttp');
        notification.style.display = 'block';
        setTimeout(() => {
          notification.style.display = 'none';
        }, 2000);      });
    }

    // Fade-in ao rolar
    const links = document.querySelectorAll("#linkList li a");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    links.forEach(link => observer.observe(link));

   function copyUsername() {
      navigator.clipboard.writeText('@MatheusAbib').then(() => {
        const notification = document.getElementById('notification');
        notification.style.display = 'block';
        setTimeout(() => {
          notification.style.display = 'none';
        }, 2000);
      });
    }

    function openModal() {
      document.getElementById('modal').style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('modal').style.display = 'none';
    }