const mainContainer = document.querySelector('.main__container');
const mainText = document.querySelector('.main-text');

const initAnimation = () => {

  mainContainer.addEventListener('click', () => {
    // проверяем наличие класса
    if (mainText.classList.contains('slide-left')) {
      mainText.classList.remove('slide-left');
    } else {
      mainText.classList.add('slide-left');
    }
  });
};

export {initAnimation};
