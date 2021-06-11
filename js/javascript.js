
busca = document.querySelector('#busca');

btn = document.querySelector('#btn');

btn.onclick = function(){

    removerSpans();

    let span = document.createElement('span');
    span.setAttribute('class', 'alert-warning');

    let msg = document.createTextNode('Não há nada ainda para procurar');
    
    span.appendChild(msg);

    busca.appendChild(span);
}

function removerSpans() {
    let spans = document.querySelectorAll('span');
        
    for(let i = 0; i < spans.length; i++){
        busca.removeChild(spans[i]);
    }

}
