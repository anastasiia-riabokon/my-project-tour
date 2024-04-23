'use strict';

// #region Scroll tour cards

const tourCards = document.querySelectorAll('.tour-card');
const leftArrowBtn = document.querySelector('.arrow-left');
const rightArrowBtn = document.querySelector('.arrow-right');

let currentIndex = 0;

function showCurrentCard() {
  tourCards.forEach(card => card.classList.remove('active'));
  tourCards[currentIndex].classList.add('active');
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

// Показуємо перші дві картки при завантаженні сторінки на екранах ширше за 768px і менше за 1440px
if (window.matchMedia('(min-width: 768px) and (max-width: 1439px)').matches) {
  tourCards[0].classList.add('active');
  tourCards[1].classList.add('active');
}

// Показуємо першу карту при завантаженні сторінки
showCurrentCard();

// #endregion
