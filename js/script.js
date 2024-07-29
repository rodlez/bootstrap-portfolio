  
  
  /**  Effect to type each character of the text parameter and show in the selected element with the defined speed
 * @param {string} text Text to type
 * @param {string} element Id of the Element to replace with the text
 * @param {int} speed Number in ms to delay between typing characters 
 * */  
  
  function typeWriter(text, element, speed) {
    
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        document.getElementById(element).innerHTML += text.charAt(i);
      }, speed * i);      
    } 

  }
  
  document.addEventListener('DOMContentLoaded', typeWriter('Xavier Rodlez','typing-text',150));
