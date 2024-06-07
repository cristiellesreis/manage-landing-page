
function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile');
    let overlay = document.querySelector('.overlay');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        overlay.classList.remove('show');

        document.querySelector('.icon').classList.add('fa-bars');
        document.querySelector('.icon').classList.remove('fa-x');
        

    } else {
        menuMobile.classList.add('open');
        overlay.classList.add('show');


        document.querySelector('.icon').classList.add('fa-x');
        document.querySelector('.icon').classList.remove('fa-bars');
    }
}


const slides = document.querySelector('.slides');
const indicatorsContainer = document.querySelector('.indicators');

// Cria um indicador para cada slide
document.querySelectorAll('.slide').forEach((slide, index) => {
  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  indicator.addEventListener('click', () => {
    goToSlide(index);
  });
  indicatorsContainer.appendChild(indicator);
});

let currentIndex = 0;

function goToSlide(index) {
  currentIndex = index;
  const translateValue = -index * 100 + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';

  // Atualiza o estado dos indicadores
  document.querySelectorAll('.indicator').forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Inicia o carrossel no primeiro slide
goToSlide(0);

