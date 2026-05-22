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
    const id = inputPesquisa.value.trim().replace(/\s+/g, " ");
    if (id) {
        buscarProduto(id);
    }
});
