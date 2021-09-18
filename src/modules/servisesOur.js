const servisesOur = () => {
  let position = 0;
   const slidesToShow = 1;
   const slidesToScroll = 1;
   const sliderTrack = document.querySelector('.slider-track');
   const sliderItem = document.querySelector('.slide');
   const sliderItems = document.querySelectorAll('.slide');
   const itemsCount = sliderItems.length;
   const prevBtn = document.querySelector('.prev');
   const nextBtn = document.querySelector('.next');
   const itemWidth = sliderItem.clientWidth / slidesToShow;
   const movePosition = slidesToScroll * itemWidth;


   sliderItems.forEach((item) => {
      item.style.minWidth = `${itemWidth}px`;
   });

   prevBtn.addEventListener('click', () => {
      position += movePosition;
      setPosition();
      checkBtn();
   });
   nextBtn.addEventListener('click', () => {
      position -= movePosition;
      setPosition();
      checkBtn();
   });

   const setPosition = () =>{
      sliderTrack.style.transform = `translateX(${position}px)`;
   };

   const checkBtn = () =>{
      if(position===0){
         prevBtn.classList.add('btn-disabled');
      } else {
         prevBtn.classList.remove('btn-disabled');
      }

      if (position <= -(itemsCount - slidesToShow) * itemWidth) {
         nextBtn.classList.add('btn-disabled');
      } else {
         nextBtn.classList.remove('btn-disabled');
      }
   };



};

export default servisesOur;