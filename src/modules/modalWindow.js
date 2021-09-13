const modalWindow = () => {
  const callbackBtn = document.querySelectorAll('.callback-btn'),
        modalCallback = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay'),
        modalClose = document.querySelector('.modal-close');

        callbackBtn.forEach((elem) => {
          elem.addEventListener('click', () => {
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';
          })
        });

        document.addEventListener('click', (event) => {
          let target = event.target;
          if (target.closest('.modal-close')) {
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';
          }
          if (target.closest('.modal-overlay')) {
            modalCallback.style.display = 'none';
            modalOverlay.style.display = 'none';
          }
        })
}
export default modalWindow;
