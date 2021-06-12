
let input = document.querySelector('input[name=produto]');

let botao = document.querySelector('#botao');

let lista = document.querySelector('#lista');

let card = document.querySelector('.card');

let produtos = JSON.parse(localStorage.getItem('produtos')) || [];


function adicionarItens() {
    
    lista.innerHTML = '';
    for(produto of produtos) {
        let itemLista = document.createElement('li');

        itemLista.setAttribute('class', 'list-group-item list-group-item-action');

        itemLista.onclick = function() {
            deletarItens(this);
        }

        let itemTexto = document.createTextNode(produto);

        itemLista.appendChild(itemTexto);
      
        lista.appendChild(itemLista).style.background = 'pink';
        
        
    }

}

adicionarItens();

botao.onclick = () => {
    let novoItem = input.value;

    if(novoItem != ""){
        produtos.push(novoItem);
    
    
    adicionarItens();

    removerSpans();
    
    salvarDadosStorage();

    input.value = '';

    }else {
        removerSpans();
            let outro_span = document.createElement('span');
            outro_span.setAttribute('class', 'alert-dark');
    
            let mensagem = document.createTextNode('Você precisar informar um item');
    
            outro_span.appendChild(mensagem);
    
            card.appendChild(outro_span);
     

    }
}

function removerSpans(){
    let spans = document.querySelectorAll('span');
        
    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i]);
    }
}

function deletarItens(item){
    produtos.splice(produtos.indexOf(item.textContent), 1);

    adicionarItens();

    salvarDadosStorage();
}


function salvarDadosStorage() {
    localStorage.setItem('tarefas', JSON.stringify(produtos));
}


let botao2 = document.querySelector('#botao2');

let itens = document.querySelectorAll('li');

function adicionar() {
    
    if(itens == null){
        alert('Adicione um produto');
    }else {
        for(let i = 0; i < itens.length; i++){
            deletarItens(itens[i]);
            removerSpans();
            let novo_span = document.createElement('span');
            novo_span.setAttribute('class', 'alert-dark');
            let msg = document.createTextNode('Seus itens foram adicionados com sucesso');
            novo_span.appendChild(msg);
            card.appendChild(novo_span);

        }

    }
    
}

botao2.onclick = adicionar;
      






