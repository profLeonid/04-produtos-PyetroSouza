'use strict'

function adicionarProduto() {
    const produto = document.getElementById("produto")
    const codigo = document.getElementById('codigo')
    const quantidade = document.getElementById(`quantidade`)
    const lista = document.getElementById("lista")
    const spanCodigo = document.createElement('span')
    const spanProduto = document.createElement('span')
    const spanQuantidade = document.createElement("span")

    if (produto.value == `` || codigo.value == "" || quantidade.value == "") {
        alert("[ERRO] Campos não preenchidos")
    } else if (isNaN(codigo.value)) {
        alert("[ERRO] O código deve ser apenas números ")
    } else if (!isNaN(produto.value)) {
        alert("[ERRO] O nome do produto não pode conter somente números")
    } else if (isNaN(quantidade.value)) {
        alert("[ERRO] O código deve ser apenas números ")
    }
    else {

        spanCodigo.textContent = codigo.value
        spanProduto.textContent = produto.value
        spanQuantidade.textContent = quantidade.value

        spanCodigo.className = 'bg-blue-200 px-8 py-2 '
        spanProduto.className = 'bg-green-200 px-8 py-2 '
        spanQuantidade.className = 'bg-yellow-200 px-8 py-2 '

        lista.appendChild(spanCodigo)
        lista.appendChild(spanProduto)
        lista.appendChild(spanQuantidade)

        produto.value = ""
        codigo.value = ""
        quantidade.value = ""
    }
}