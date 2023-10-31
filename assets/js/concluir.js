function concluir(id){

    //buscar os produtos do localstorage
    const produtos = JSON.parse(localStorage.getItem('produtos'));
    // buscar o produto com o id
    const produto = produtos.find(p => (p.id === id))

    if (produto.ativo){
        produto.ativo = false;
    } else {
        produto.ativo = true;
    }
    // desativa o produto
   
    // salvar os produtos restantes
    localStorage.setItem("produtos", JSON.stringify(produtos));
    atualizar();
    calcularEstatisticas();

}