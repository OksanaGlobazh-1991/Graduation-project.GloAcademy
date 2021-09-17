
const newSlider = () => {

  const itemSlide = document.querySelectorAll('.item'),
          table = document.querySelectorAll('.table');
      
        let slideIndex = 0;

        const prevSlide = (elem, elem2, index, strClass) => {
            elem[index].style.display = 'none';
            elem2[index].classList.remove(strClass);
        };

        const nextSlide = (elem, elem2, index, strClass) => {
          elem[index].style.display = 'block';
          elem2[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {
          prevSlide(itemSlide, table, slideIndex, 'active');
          slideIndex++;
          if (slideIndex >= itemSlide.length) {
            slideIndex = 0;
          }
          nextSlide(itemSlide, table, slideIndex, 'active');
        };

        const startSlide = (time) => {
            setInterval(autoPlaySlide, time);
        };

        startSlide(3000);

};

export default newSlider;
