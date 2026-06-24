let total = 0;

let pedidos = [];

function adicionarPedido(nome, preco) {

    pedidos.push({ nome, preco });

    total += preco;

    atualizarCarrinho();

}
 
function atualizarCarrinho() {

    const lista = document.getElementById("lista-pedidos");

    const totalElemento = document.getElementById("total");

    lista.innerHTML = "";

    pedidos.forEach((item) => {

        const li = document.createElement("li");

        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

        lista.appendChild(li);

    });

    totalElemento.textContent = total.toFixed(2).replace(".", ",");

}
 
function finalizarPedido() {

    if (pedidos.length === 0) {

        alert("Adicione algum item ao pedido primeiro!");

        return;

    }

    let mensagem = "Olá! Gostaria de fazer o seguinte pedido:%0A";

    pedidos.forEach((item) => {

        mensagem += `- ${item.nome} - R$ ${item.preco.toFixed(2)}%0A`;

    });

    mensagem += `%0ATotal: R$ ${total.toFixed(2)}`;

    window.open(`https://wa.me/5511999999999?text=${mensagem}`, "_blank");

}
