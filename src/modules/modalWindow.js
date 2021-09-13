const modalWindow = () => {
  const callbackBtn = document.querySelector('.callback-btn'),
        modalCallback = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay');

        callbackBtn.addEventListener('click', () => {
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';
          })

};

export default modalWindow;
