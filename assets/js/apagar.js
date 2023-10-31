const bototes = document.querySelectorAll(".btn-apagar");

function apagar(id){
    console.log("apagar produto" + id)

    //buscar os produtos
    const produtos = JSON.parse(localStorage.getItem('produtos'));
    // remove o produto
    const produtosFiltrados = produtos.filter((produto)=> produto.id !== id);
    // salvar os produtos restantes
    localStorage.setItem("produtos", JSON.stringify(produtosFiltrados));
    atualizar();
    calcularEstatisticas();
}