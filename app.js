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

//Criando um jeito de fazer a pesquisa pelo id na barra de pesquisa (Agora tenho outro desse que faz tudo que deveria fazer e mais)

const btnPesquisa = document.querySelector("#btnPesquisa")
let inputPesquisa = document.querySelector("#inputPequisa")

//btnPesquisa.addEventListener("click", () => {
//  let id = inputPesquisa.value.trim().replace(/\s+/g, " ");
//if (id) {
//  idAtual = id;
//buscarProduto(id);
//}
//});

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

//Agora quero buscar no input pelo nome do produto

async function buscarPorNome(nome) {
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${nome}`);
        const resultado = await response.json();

        if (resultado.products.length === 0) {
            document.querySelector('img').src = "./img/nao encontrado.webp";
        } else {
            const produto = resultado.products[0];

            document.querySelector('img').src = produto.thumbnail;

            const textos = document.querySelectorAll('.texto4');
            textos[0].textContent = produto.title;
            textos[1].textContent = `R$ ${(produto.price * 5.03).toFixed(2)}`;
            textos[2].textContent = produto.rating;
            textos[3].textContent = produto.stock;
        }

    } catch (erro) {
        console.error(erro);
    }
}


btnPesquisa.addEventListener("click", () => {
    let busca = inputPesquisa.value.trim();
    if (busca) {
        if (isNaN(busca)) {
            buscarPorNome(busca);
        } else {
            idAtual = Number(busca);
            buscarProduto(idAtual);
        }
    }
});