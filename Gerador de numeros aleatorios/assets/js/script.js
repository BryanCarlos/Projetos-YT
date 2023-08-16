const button = document.getElementById('generate')

button.addEventListener('click', function() {
  let min = parseInt(document.getElementById('minValue').value)
  let max = parseInt(document.getElementById('maxValue').value)

  let result = Math.floor(Math.random() * (max - min + 1)) + min

  if (isNaN(result)) {
    result = 'Valor inválido!'
  }

  document.querySelector('#res').textContent = result
})