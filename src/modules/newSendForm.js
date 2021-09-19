const newSendForm = () => {

  const errorMessage = 'Ошибка',
        loadMessage = 'Идет отправка',
        successMessage = 'Отправлено';
  const form = document.querySelector('form');
  const statusMessage = document.createElement('div');
  const formName = document.querySelectorAll('input[name="fio"]'),
        formPhone = document.querySelectorAll('input[name="tel"]');
  
        statusMessage.style.cssText = 'font-size: 2rem; color: black';

  let body;
  let postData = 0;
  
      form.addEventListener('submit', event => {
          event.preventDefault();
          form.appendChild(statusMessage);
          statusMessage.textContent = loadMessage;
          const formData = new FormData(form);
          body = {};
          formData.forEach((val, key) => {
              body[key] = val;
          });
          [...form].forEach(input => {
              input.value = '';
          });
        // formName.value = '';

          postData(body)
              .then(response => {
                  if (response.status !== 200) {
                      throw new Error('status network not 200');
                  }
                  console.log(response);
                  statusMessage.textContent = successMessage;
              })
              .catch(error => {
                  statusMessage.textContent = errorMessage;
                  console.error(error);
              });
      });
  
  postData = body => fetch('./server.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
      credentials: 'include'
  });

  formName.forEach(item => {
    item.addEventListener('input', () => {
        item.value = item.value.replace(/[^а-яё ]+/g, '');
    });
    item.addEventListener('blur', () => {
        item.value = item.value.replace(/[^а-яё\ ]+/gi, '');
        item.value = item.value.trim();
        item.value = item.value.replace(/\s+/g, ' ');
        item.value = item.value.charAt(0).toUpperCase() + item.value.slice(1);

    });
  });

  formPhone.forEach(item => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^0-9+]+/g, '');
    });
    item.addEventListener('blur', () => {
      item.value = item.value.replace(/[^0-9\+]+/gi, '');
      item.value = item.value.trim();
      item.value = item.value.replace(/\s+/g, ' ');
  });

  });
  
};
export default newSendForm;