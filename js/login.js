// retrieve data
btnLogin = document.querySelector('#btn-login');
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');
let card = document.querySelector('.card');

// adding function without onclick button
btnLogin.onclick = function() {
let emailLogin = email.value;
let senhaLogin = senha.value;

// calling the function verification
verification();

// making the function verification
function verification() {
    if(emailLogin == '' && senhaLogin == ''){
        spanEmailSenha();
        
    }else if(emailLogin != '' && senhaLogin == ''){
        spanSenha();
    
       
    }else if(emailLogin == '' && senhaLogin != ''){
        spanEmail();
       
    }else {
        spanSuccess();
       
    }
        
    }

// making the function spanEmail
    function spanEmail() {
        removerSpans();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-danger');

        let mensagem = document.createTextNode('Digite seu email');

        span.appendChild(mensagem);

        card.appendChild(span);
    };
// making the function spanSenha
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

    // show message with success
    function spanSuccess() {
        removerSpans();
        let span = document.createElement('span');
        span.setAttribute('class', 'alert alert-success');

        let mensagem = document.createTextNode('OK');

        span.appendChild(mensagem);

        card.appendChild(span);
        paginaInicial();

    }

// this function remove the span from the screen 
function removerSpans() {
    let spans = document.querySelectorAll('span');
        
        for(let i = 0; i < spans.length; i++){
            card.removeChild(spans[i]);
        }

    }

}
