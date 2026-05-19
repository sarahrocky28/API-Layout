// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(console.log);

let idAtual = 1;

async function buscarProdutos(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const produto = await response.json();

        document.querySelector("img").src = produto.thumbnail;
        document.querySelector("img").alt = produto.title;
    }
} 