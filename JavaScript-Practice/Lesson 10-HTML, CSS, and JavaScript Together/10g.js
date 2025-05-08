function toggle (selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {
    // 10g
    tunOffPreviosButton(); 
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  } 
}
// 10g
function tunOffPreviosButton () {
  const previosButton = document.querySelector('.is-toggled');
  if (previosButton) {
    previosButton.classList.remove('is-toggled');
  }
}
