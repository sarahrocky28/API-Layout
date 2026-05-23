async function buscarProduto(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const produto = await response.json();

        document.querySelector('img').src = produto.thumbnail;

        const textos = document.querySelectorAll('.texto4');
        textos[0].textContent = produto.title;
        textos[1].textContent = `R$ ${(produto.price * 5.03).toFixed(2)}`;
        textos[2].textContent = produto.rating;
        textos[3].textContent = produto.stock;

    } catch (erro) {
        console.error(erro);
    }
}

buscarProduto(1);

//Criando um jeito de fazer a pesquisa pelo id na barra de pesquisa

const btnPesquisa = document.querySelector("#btnPesquisa")
let inputPesquisa = document.querySelector("#inputPequisa")

btnPesquisa.addEventListener("click", () => {
    let id = inputPesquisa.value.trim().replace(/\s+/g, " ");
    if (id) {
        idAtual = id;
        buscarProduto(id);
    }
});

//Agora estou tentando fazer com que os botoes de anterior e próximo funcionem

//Esse botao é pra passar pra o próximo produto
const botaoPróximo = document.querySelector("#botaoPróximo")

let idAtual = 1;

botaoPróximo.addEventListener("click", () => {
    idAtual = idAtual + 1;
    buscarProduto(idAtual);
});

//Esse botao é pra passar pra o produto anterior
const botaoAnterior = document.querySelector("#botaoAnterior")

botaoAnterior.addEventListener("click", () => {
    if (idAtual > 1) {
        idAtual = idAtual - 1;
        buscarProduto(idAtual);
    }
});

//Agora quero buscar no input pelo nome


async function buscarPorNome(nome) {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${nome}`);
        const produto = await response.json();

        document.querySelector('img').src = produto.thumbnail;

        const textos = document.querySelectorAll('.texto4');
        textos[0].textContent = produto.title;
        textos[1].textContent = `R$ ${(produto.price * 5.03).toFixed(2)}`;
        textos[2].textContent = produto.rating;
        textos[3].textContent = produto.stock;

    } catch (erro) {
        console.error(erro);
    }
}

buscarPorNome(1);


btnPesquisa.addEventListener("click", () => {
    let id = inputPesquisa.value.trim().replace(/\s+/g, " ");
    if (nome) {
        nomeAtual = nome;
        buscarProduto(nome);
    }
});

let nomeAtual = 1;