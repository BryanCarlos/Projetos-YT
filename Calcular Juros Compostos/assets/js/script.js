let calcular = document.getElementById('calculate')
let res = document.getElementById('total')

calcular.addEventListener('click', function calc() {
    let valorInicial = document.getElementById('valor-inicial').value
    let taxaJuros = document.getElementById('taxa-juros').value
    let periodo = document.getElementById('periodo').value
    
    /*  M = C ( 1+i)^t */
    let montante = Number(valorInicial) * (1 + (Number(taxaJuros) / 100)) ** Number(periodo)
    
    res.style.color = '#2bff9c'
    res.textContent = montante.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
})