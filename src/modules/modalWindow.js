const modalWindow = () => {
  const callbackBtn = document.querySelectorAll('.callback-btn'),
        modalCallback = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay'),
        modalClose = document.querySelector('.modal-close'),
        buttonServices = document.querySelector('.button-services');

        document.addEventListener('click', (event) => {
          let target = event.target;
          if (target.closest('.button-services')) {
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';
          }
          if (target.closest('.callback-btn')) {
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';
          }
        })

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
