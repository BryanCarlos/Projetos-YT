var button = window.document.getElementById('read-button')

button.addEventListener('click', function() {
  var card = window.document.querySelector('.card')
  card.classList.toggle('active')

  if (card.classList.contains('active')) {
    return button.textContent = 'Read Less'
  }
  

  button.textContent = 'Read More'
})