
const accordeon = () => {
    const accordeonParent = document.querySelector('.accordeon'),
          element = accordeonParent.querySelectorAll('.element'),
          elementContent = accordeonParent.querySelectorAll('.element-content'), 
          title = accordeonParent.querySelectorAll('.title'); 

          const toggleAccordeon = (index) => {
            element.forEach((item, i, arr) => {
              if (index === i) {
                arr[i].classList.add('active');
              } else {
                arr[i].classList.remove('active');
              }
            })
            elementContent.forEach((item, i, arr) => {
              if (index === i) {
                arr[i].style.display = 'block';
              } else {
                arr[i].style.display = 'none';
              }
            })   
          };

          accordeonParent.addEventListener('click', (event) => {
            let target = event.target;
              if (target.classList.contains('title')) {
                title.forEach((elem, i) => {
                  if (elem === target) {
                    toggleAccordeon(i);
                  }
                });
              }
          })
};
export default accordeon;
