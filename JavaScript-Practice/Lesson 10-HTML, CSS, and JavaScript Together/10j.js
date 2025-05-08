
      
      /*
      let calculation = JSON.parse(localStorage.getItem(calculation)) || '';     */
      //
      let calculation = localStorage.getItem('calculation') || '';
      // 9j
      displayCalculation()

      function updateCalculation(value) {
        calculation += value;
        console.log(calculation);
      /*
      localStorage.setItem('value',JSON.stringify(calculation));     */
      //
       localStorage.setItem('calculation',calculation);
       // 9j
       displayCalculation()
      }
      // You can also create this code to a function
      function saveCalculation() {
        localStorage.setItem('calculation',calculation);
      }
      // 9j
      function displayCalculation() {
        document.querySelector('.js-display')
        .innerHTML = `${calculation}`
      }
