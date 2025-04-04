const produtos = [
    { id: 1, nome: "Esmalte Açaí", imagem: "./assets/img/esmalte-acai.png", preco: 25.00 },
    { id: 2, nome: "Esmalte Acalanto", imagem: "./assets/img/esmalte-acalanto.png", preco: 27.00 },
    { id: 3, nome: "Esmalte Cintilante", imagem: "./assets/img/esmalte-cintilante.png", preco: 30.00 },
    { id: 4, nome: "Esmalte Clara Glitter", imagem: "./assets/img/esmalte-clara-glitter.png", preco: 28.00 },
    { id: 5, nome: "Esmalte Cremoso Cappuccino", imagem: "./assets/img/esmalte-cremoso-cappuccino.png", preco: 32.00 },
    { id: 6, nome: "Esmalte Cremoso Obsessão", imagem: "./assets/img/esmalte-cremoso-obsessao.png", preco: 20.00 },
    { id: 7, nome: "Esmalte Donata", imagem: "./assets/img/esmalte-donata.png", preco: 35.00 },
    { id: 8, nome: "Esmalte Seda Lilás", imagem: "./assets/img/esmalte-seda-lilas.png", preco: 22.00 }, // ⬅️ Corrigido aqui
    { id: 9, nome: "Kit Hidratante Nivea", imagem: "./assets/img/esmalte-nati-cremosos-ameixa.png", preco: 25.00 },
    { id: 10, nome: "Esmalte Pérola", imagem: "./assets/img/esmalte-perola.png", preco: 29.00 },
    { id: 11, nome: "Esmalte Xodó Cremoso", imagem: "./assets/img/esmalte-xodo-cremoso.png", preco: 28.00},
    { id: 12, nome: "Esmalte Se Solta no Blues", imagem: "./assets/img/esmalte-se-solta-no-blues.png", preco: 30.00 },
    { id: 13, nome: "Hidratante Corporal Pele Negra", imagem: "./assets/img/hidratante-corporal-pele-negra.png", preco: 35.00 },
    { id: 14, nome: "Hidratante Monange", imagem: "./assets/img/hidratante-monange.png", preco: 30.00 },
    { id: 15, nome: "Hidratante Nivea", imagem: "./assets/img/hidratante-nivea.png", preco: 25.00 },
    { id: 16, nome: "Hidratante Skala", imagem: "./assets/img/hidratante-skala.png", preco: 28.00 },
    { id: 17, nome: "Perfume Dior Sauvage", imagem: "./assets/img/perfume-dior-sauvage.png", preco: 55.00}
];

const carrinho = [];
const favoritos = [];

function exibirProdutos(lista = produtos) {
    const container = document.getElementById("product-list"); // ⬅️ Corrigido aqui
    container.innerHTML = "";
    lista.forEach(produto => {
        container.innerHTML += `
        <div class="produto">
            <img src="${produto.imagem}" alt="${produto.nome}" onerror="this.src='img/placeholder.png'">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao carrinho</button>
            <button onclick="favoritarProduto(${produto.id})">❤️</button>
        </div>
        `;
    });
}

function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    document.getElementById("cartCount").innerText = carrinho.length;
    alert(`${produto.nome} adicionado ao carrinho!`);
}

function favoritarProduto(id) {
    if (!favoritos.includes(id)) {
        favoritos.push(id);
        alert("Produto favoritado!");
    } else {
        alert("O produto já está na lista de favoritos.");
    }
}

function filtrarProdutos() {
    const termo = document.getElementById("searchInput").value.toLowerCase(); // ⬅️ Corrigido aqui
    const filtrados = produtos.filter(p => p.nome.toLowerCase().includes(termo));
    exibirProdutos(filtrados);
}

document.addEventListener("DOMContentLoaded", () => exibirProdutos());