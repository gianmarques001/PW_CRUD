window.addEventListener("load", atualizar);

function atualizar(){
  document.querySelector("#lista-produtos").innerHTML = "";
  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];
  produtos.forEach((produto) => criarCard(produto));
}

function criarCard(produto) {
  const card = document.createElement("div");
  card.classList.add("col", "s12", "l4", "m6"); 
  card.innerHTML = `
    <div class= "card ${produto.ativo ? "indigo darken-4": "grey lighten-3" }">
    <div class="card-content ${produto.ativo ? "white-text": "black-text" }">
    <span class="badge  ${produto.ativo ? "white-text": "black-text" }"> R$ ${Number.parseFloat(produto.preco).toFixed(2)}</span>
      <span class="card-title">${produto.nome}</span>
     
      <p>${produto.descricao}</p>
      <span  class="badge">Qtd: ${produto.qtd}</span>
    </div>
    <div class="card-action">
      <a class="red accent-3 btn red" onClick="apagar(${produto.id})">Excluir</a>
      <a class="green accent-3 btn red" onClick="concluir(${produto.id})">${produto.ativo? "Desativar produto": "Ativar Produto"}</a>
    </div>
    
  </div>`

  document.querySelector("#lista-produtos").appendChild(card);
}
