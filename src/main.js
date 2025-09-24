let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            navigation: false,
            slidesPerGroup: 1,
        },
        800: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3
        }
    }
});

// Seleciona todos os botões de abas
const tabButtons = document.querySelectorAll('#nav-tab button.nav-link');
let currentIndex = 0;
let autoPlayInterval = null;

function activateTab(index) {
  // Usa o método do Bootstrap para ativar a aba
  const tabTrigger = new bootstrap.Tab(tabButtons[index]);
  tabTrigger.show();
}

function nextTab() {
  currentIndex = (currentIndex + 1) % tabButtons.length;
  activateTab(currentIndex);
}

// Inicia o auto-play
function startAutoPlay() {
  autoPlayInterval = setInterval(nextTab, 4000); // troca a cada 3 segundos
}

// Para o auto-play
function stopAutoPlay() {
  clearInterval(autoPlayInterval);
  autoPlayInterval = null;
}

// Inicia auto-play ao carregar
startAutoPlay();

// Atualiza currentIndex quando o usuário clica em uma aba e para o auto-play
tabButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    stopAutoPlay();
    currentIndex = index; // atualiza o índice para a aba clicada
  });
});


const header = document.getElementById('cabecalho');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll <= 0) {
    // No topo da página, mostra o header
    header.classList.remove('hide');
  } else if (currentScroll > lastScroll) {
    // Scroll para baixo, esconde o header
    header.classList.add('hide');
  } else {
    // Scroll para cima, mostra o header
    header.classList.remove('hide');
  }

  lastScroll = currentScroll;
});
