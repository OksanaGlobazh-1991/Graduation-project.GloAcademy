const modalWindow = () => {
  
  const modalCallback = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay'),
        services = document.querySelectorAll('.slide div.element');

        
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

        services.forEach((item) => {
          item.addEventListener('click', () => {
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
