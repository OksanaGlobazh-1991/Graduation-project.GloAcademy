const servicePrices = () => {
  const menu = document.querySelectorAll('a[href*="#"]');

        menu.forEach((elem) => {
          elem.addEventListener('click', function (event) {
            event.preventDefault();
            const blockID = elem.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          })
        })
};

export default servicePrices;