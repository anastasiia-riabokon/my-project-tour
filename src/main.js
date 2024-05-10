// #region Scroll tour cards

const tourCards = document.querySelectorAll('.tour-card');
const leftArrowBtn = document.querySelector('.arrow-left');
const rightArrowBtn = document.querySelector('.arrow-right');

let currentIndex = 0;

function showCurrentCard() {
  tourCards.forEach(card => card.classList.remove('active'));
  tourCards[currentIndex].classList.add('active');
  // Показуємо перші дві картки при завантаженні сторінки на екранах ширше за 768px і менше за 1440px
  if (window.matchMedia('(min-width: 768px) and (max-width: 1439px)').matches) {
    if (tourCards[currentIndex + 1]) {
      tourCards[currentIndex + 1].classList.add('active');
    } else {
      currentIndex = 0; // Повертаємося до першої карти, якщо ми досягли останньої
      showCurrentCard(); // Викликаємо showCurrentCard() ще раз, щоб показати перші дві картки
    }
  }
}

function goToNextCard() {
  currentIndex++;
  if (currentIndex >= tourCards.length) {
    currentIndex = 0; // Повертаємося до першої карти, якщо ми досягли останньої
  }
  showCurrentCard();
}

function goToPreviousCard() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = tourCards.length - 1; // Повертаємося до останньої карти, якщо ми на першій
  }
  showCurrentCard();
}

leftArrowBtn.addEventListener('click', goToPreviousCard);
rightArrowBtn.addEventListener('click', goToNextCard);

// Показуємо першу карту при завантаженні сторінки
showCurrentCard();

// #endregion

// #region Open Modal Windows
const ref = {
  backdropWin: document.querySelector('.backdrop'),
  backdropTour: document.querySelector('.backdrop-tour'),
  btnOpenModal: document.querySelectorAll('.open-modal-window'),
  btnOpenDetailTour: document.querySelectorAll('.tour-btn-open'),
  btnCloseModal: document.querySelectorAll('.btn-close'),
};

const {
  backdropWin,
  backdropTour,
  btnOpenModal,
  btnOpenDetailTour,
  btnCloseModal,
} = ref;

btnOpenModal.forEach(btn => {
  btn.addEventListener('click', event => {
    if (event.target.nodeName !== 'BUTTON') return;

    if (!backdropWin.classList.contains('is-open')) {
      backdropWin.classList.add('is-open');
      isOpen(backdropWin);
    }
  });
});

btnOpenDetailTour.forEach(btn => {
  btn.addEventListener('click', event => {
    if (event.target.nodeName !== 'BUTTON') return;

    if (!backdropTour.classList.contains('is-open')) {
      backdropTour.classList.add('is-open');
      isOpen(backdropTour);
    }
  });
});

function isOpen(backdrop) {
  window.addEventListener('keydown', event => onClose(backdrop, event));
  btnCloseModal.forEach(btn => {
    btn.addEventListener('click', event => onClose(backdrop, event));
  });
}

function hideModal(backdrop) {
  backdrop.classList.remove('is-open');
  window.removeEventListener('keydown', onClose);
  btnCloseModal.forEach(btn => {
    btn.removeEventListener('click', onClose);
  });
}

function onClose(backdrop, evt) {
  hideModal(backdrop);
  if (evt.code === 'Escape') {
    hideModal(backdrop);
  }
}
// #endregion
