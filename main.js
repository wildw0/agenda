const form  = document.getElementById('form-contato');
const nomes = [];
const numeros = [];
const imgs = document.getElementById("favoritado");
const botao = document.getElementById("favoritar");

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha ();
    atualizaTabela ();
});

function adicionaLinha () {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(nomes.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi adicionado`)
    } else {
        nomes.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));        
        
        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value}</td>`;
        linha += `<td> ${inputNumeroContato.value} </td>`;
        linha += `<td>${'<img src="./Images/favorito.png"></img>'}</td>`; //<-tentei fazer com que o botão "favoritar" se repetisse a cada linha, mas não consegui, ai deixei a imagem para a posterioridade 
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
    
}

function atualizaTabela() {    
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

botao.addEventListener("click", function() {
    if (imgs.src.endsWith("favorito.png")) {
    imgs.src = "./Images/favorito_preenchido.png";
    } else {
    imgs.src = "./Images/favorito.png";
    }
});