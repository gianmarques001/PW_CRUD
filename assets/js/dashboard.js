function calcularEstatisticas (){

const produtos = JSON.parse(localStorage.getItem('produtos'));
console.log(produtos);
const ativos = produtos.filter(p => p.ativo == true);
const qtdAtivos = ativos.length;
const qtdInativos = produtos.filter(p => p.ativo == false).length;

const x = produtos.reduce((total, p)=> total += Number.parseInt(p.preco), 0);
console.log(x);
document.querySelector("#qtAtivos").innerHTML = qtdAtivos;
document.querySelector("#qtdInativos").innerHTML = qtdInativos;
    


}

calcularEstatisticas();