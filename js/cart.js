var valorTotal = [0,0];
var valorProduto = [50.00, 10.00];
var qtd = [0, 0];

function adicionarItem(Item){
   var quantidade = document.getElementById("quantidade" + Item);
   var total = document.getElementById("total" + Item);
   qtd[Item] = qtd[Item] + 1;
   valorTotal[Item] = Number.parseFloat(valorProduto[Item] * qtd[Item]);
   quantidade.innerHTML = qtd[Item];
   total.innerHTML = valorTotal[Item].toFixed(2);
    valorCompra();
};

function removerItem(Item){
    if(qtd[Item] > 0){
        qtd[Item] = qtd[Item] - 1;
        var quantidade = document.getElementById("quantidade" + Item);
        var total = document.getElementById("total" + Item);
        valorTotal[Item] = Number.parseFloat(valorProduto[Item] * qtd[Item]);
        quantidade.innerHTML = qtd[Item];
        total.innerHTML = valorTotal[Item].toFixed(2);
    }
    valorCompra();

 };

 function valorCompra(){
    var valorTotalCompra = document.getElementById("valorTotalCompra");
    var valor = 0;

    for (let i = 0; i < valorTotal.length; i++) {
        valor = valor + valorTotal[i];
    }
    valorTotalCompra.innerText = valor.toFixed(2);
 }

/* fazia a mesma coisa, função valorCompra()
var valorTotalCompra = valorTotal.reduce((acc, curr) => acc + curr, 0);
 document.getElementById("valorTotalCompra").innerText = valorTotalCompra.toFixed(2);*/