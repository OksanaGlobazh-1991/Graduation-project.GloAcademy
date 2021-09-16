
const scroll = () => {
  const scrollBtn = document.querySelector('.up'),
        servicesSection = document.querySelector('.services-section'); 

        const servicesSectionTop = servicesSection.getBoundingClientRect().top; //расстояние от верхнего края до блока
        scrollBtn.style.cssText = 'display: none';

        window.addEventListener('scroll', () => {
          if (window.scrollY > servicesSectionTop) {
            scrollBtn.style.display = 'block';   
          } else {
            scrollBtn.style.display = 'none';
          }
        })

        scrollBtn.addEventListener('click', () => {
          window.scrollBy({
            top: -window.scrollY,
            behavior: 'smooth'
          });
        })
        
};


export default scroll;
