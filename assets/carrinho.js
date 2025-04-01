document.addEventListener("DOMContentLoaded", () => {
    atualizarCarrinho();
});

function atualizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const container = document.getElementById("cart-items");
    const subtotalElemento = document.getElementById("subtotal");
    const totalElemento = document.getElementById("total");

    container.innerHTML = "";
    let subtotal = 0;

    if (carrinho.length === 0) {
        container.innerHTML = "<p>Seu carrinho está vazio!</p>";
    } else {
        carrinho.forEach((produto, index) => {
            subtotal += produto.preco * produto.quantidade;

            let itemCarrinho = document.createElement("div");
            itemCarrinho.classList.add("produto");

            itemCarrinho.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
                <div class="produto-info">
                    <h3>${produto.nome}</h3>
                    <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                    <p>Quantidade: <button onclick="alterarQuantidade(${index}, -1)">-</button>
                    ${produto.quantidade}
                    <button onclick="alterarQuantidade(${index}, 1)">+</button></p>
                    <button onclick="removerDoCarrinho(${index})">Remover</button>
                </div>
            `;

            container.appendChild(itemCarrinho);
        });
    }

    subtotalElemento.innerText = `R$ ${subtotal.toFixed(2)}`;
    totalElemento.innerText = `R$ ${(subtotal + 10).toFixed(2)}`;
}

function alterarQuantidade(index, delta) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    if (carrinho[index]) {
        carrinho[index].quantidade += delta;
        if (carrinho[index].quantidade <= 0) {
            carrinho.splice(index, 1);
        }
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        atualizarCarrinho();
    }
}

function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.splice(index, 1);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    atualizarCarrinho();
}

// Finalizar pedido (com verificação do carrinho)
document.getElementById("checkout-btn").addEventListener("click", () => {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {
        alert("Erro: Seu carrinho está vazio! Adicione produtos antes de finalizar o pedido. ❌");
    } else {
        alert("Pedido finalizado com sucesso! Obrigado por comprar conosco 😁!");
        localStorage.removeItem("carrinho");
        atualizarCarrinho();
    }
});
