document.querySelector("#btnCadastrar").addEventListener("click", (e) => {
  e.preventDefault();
  let idProduto = document.getElementById("categoriasProdutos");
  let value = idProduto.value;
  let categoriaProduto = idProduto.options[idProduto.selectedIndex].text;

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  const produto = {
    id: Date.now(),
    nome: document.querySelector("#nomeProduto").value,
    descricao: document.querySelector("#descProduto").value,
    preco: document.querySelector("#precoProduto").value,
    qtd: document.querySelector("#qtdProduto").value,
    categoria: categoriaProduto,
    ativo: true
  };


  produtos.push(produto);
  localStorage.setItem("produtos", JSON.stringify(produtos));
  window.location.href= '/';
  calcularEstatisticas();
});
