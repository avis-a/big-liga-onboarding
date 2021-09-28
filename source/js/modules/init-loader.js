const loadContainer = document.querySelector('.load');

const initLoader = () => {

  // обработчик нажатия на область в контейнере на лоадере
  const containerClickListener = () => {
    closeLoader();
  };

  // обработчик нажатия на Enter на лоадере
  const keydownListener = (evt) => {
    if (evt.key === 'Enter') {
      closeLoader();
    }
  };

  // действия после окончания анимации скрытия лоадера
  const transitionEndListener = () => {
    loadContainer.style.display = 'none';
  };

  // функция скрытия лоадера
  const closeLoader = () => {
    loadContainer.classList.add('fade-out');

    // удаляем обработчики
    loadContainer.removeEventListener('click', containerClickListener, false);
    loadContainer.removeEventListener('transitionend', transitionEndListener, false);
    document.removeEventListener('keydown', keydownListener, false);
  };

  // добавляем обработчики
  loadContainer.addEventListener('click', containerClickListener);
  loadContainer.addEventListener('transitionend', transitionEndListener);
  document.addEventListener('keydown', keydownListener);
};

export {initLoader};
