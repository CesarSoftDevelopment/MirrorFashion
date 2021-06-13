
btnLogon = document.querySelector('#btn-logon');
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let card = document.querySelector('.card');

btnLogon.onclick = function() {
let nomeLogon = nome.value;
let emailLogon = email.value;
let senhaLogon = senha.value;

verificacao();

function verificacao() {
    if(nomeLogon == '' && emailLogon == '' && senhaLogon == ''){
        spanNome();
        
    }else if(nomeLogon != '' && emailLogon == '' && senhaLogon == ''){
        spanEmail();
       
    }else if(nome != '' && emailLogon != '' && senhaLogon == ''){
        spanSenha();
       
    }else if(nomeLogon == '' && emailLogon == '' && senhaLogon != '' ){
        spanEmailSenha();
        
    }else {
        spanSuccess();
       
    }
        
    }

    function spanNome() {
        removerSpans();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-danger');

        let mensagem = document.createTextNode('Digite seu nome');

        span.appendChild(mensagem);

        card.appendChild(span);
    }

    function spanEmail() {
        removerSpans();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-danger');

        let mensagem = document.createTextNode('Digite seu email');

        span.appendChild(mensagem);

        card.appendChild(span);
    }

    function spanSenha() {
        removerSpans();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-danger');

        let mensagem = document.createTextNode('Digite sua senha');

        span.appendChild(mensagem);

        card.appendChild(span);
    }

    function spanEmailSenha() {
        removerSpans();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-danger');

        let mensagem = document.createTextNode('Digite seu email e senha');

        span.appendChild(mensagem);

        card.appendChild(span);
    }

    function spanSuccess() {
        removerSpans();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-success');

        let mensagem = document.createTextNode('OK');

        span.appendChild(mensagem);

        card.appendChild(span);  

    }


function removerSpans() {
    let spans = document.querySelectorAll('span');
        
        for(let i = 0; i < spans.length; i++){
            card.removeChild(spans[i]);
        }

    }

  

}
