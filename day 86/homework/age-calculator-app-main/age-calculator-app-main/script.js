const newContainer = document.querySelector(".ymd-container")

document.querySelector('svg').addEventListener('click', () => {
    newContainer.style.height = "250px"
    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');
  
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value) - 1; 
    const year = parseInt(yearInput.value);
  
    const today = new Date();
    const errorMessages = {
      empty: "This field is required.",
      invalidDate: "Must be a valid date.",
      futureDate: "Must be in the past."
    };
  
    resetStyles(dayInput, monthInput, yearInput);
  
    let hasError = false;
    if (!dayInput.value) {
      showError(dayInput, errorMessages.empty);
      hasError = true;
    }
    if (!monthInput.value) {
      showError(monthInput, errorMessages.empty);
      hasError = true;
    }
    if (!yearInput.value) {
      showError(yearInput, errorMessages.empty);
      hasError = true;
    }
  
    if (hasError) return;
  
    const inputDate = new Date(year, month, day);
    if (
      inputDate.getDate() !== day ||
      inputDate.getMonth() !== month ||
      inputDate.getFullYear() !== year
    ) {
      showError(dayInput, errorMessages.invalidDate);
      showError(monthInput, errorMessages.invalidDate);
      showError(yearInput, errorMessages.invalidDate);
      return;
    }
  
    if (inputDate > today) {
      showError(yearInput, errorMessages.futureDate);
      return;
    }
  
    let years = today.getFullYear() - year;
    let months = today.getMonth() - month;
    let days = today.getDate() - day;
  
    if (days < 0) {
      months--;
      days += new Date(year, month + 1, 0).getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.querySelector('#year-num').textContent = years;
    document.querySelector('#month-num').textContent = months;
    document.querySelector('#day-num').textContent = days;
  });
  
  function resetStyles(...inputs) {
    inputs.forEach((input) => {
      input.style.borderColor = '';
      input.nextElementSibling?.remove(); 
      const label = input.previousElementSibling; 
      if (label) label.style.color = '';
    });
  }
  
  function showError(input, message) {
    input.style.borderColor = 'hsl(0, 100%, 67%)';
    const label = input.previousElementSibling; 
    if (label) label.style.color = 'hsl(0, 100%, 67%)';
  
    const error = document.createElement('div');
    error.textContent = message;
    error.style.color = 'hsl(0, 100%, 67%)';
    error.style.fontSize = '0.6rem';
    error.style.marginTop = '8px'
    error.style.fontFamily = 'Poppins'
    input.insertAdjacentElement('afterend', error);
  }



  