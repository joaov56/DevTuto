const form_ok = document.querySelector('.form1')

const element_nome = form_ok.nome;

const botao = document.querySelector('button');









function minhaFuncao(event) {

    const nome = form_ok.nome.value;
    const l_nome = form_ok.last_name.value;
    const email = form_ok.email.value;
    const senha = form_ok.password.value;

    const checks = [nome, l_nome, email, senha]
    const erros = document.querySelectorAll('.erro')















}

botao.addEventListener('click', minhaFuncao)



