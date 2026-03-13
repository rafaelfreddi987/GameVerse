// Alternar entre cadastro e login
const cadastroContainer = document.getElementById('cadastro-container');
const loginContainer = document.getElementById('login-container');
const btnLogin = document.getElementById('btn-login');
const btnCadastro = document.getElementById('btn-cadastro');

btnLogin.addEventListener('click', () => {
    cadastroContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

btnCadastro.addEventListener('click', () => {
    loginContainer.style.display = 'none';
    cadastroContainer.style.display = 'block';
});

// Inicializa mostrando o cadastro
cadastroContainer.style.display = 'block';
loginContainer.style.display = 'none';

// Cadastro
const formCadastro = document.getElementById('form-cadastro');
formCadastro.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email-cadastro').value;
    const senha = document.getElementById('senha-cadastro').value;

    // Salva no localStorage
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || "[]");
    usuarios.push({ nome, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso! Faça login.');
    formCadastro.reset();
    cadastroContainer.style.display = 'none';
    loginContainer.style.display = 'block';
});

// Login
const formLogin = document.getElementById('form-login');
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('senha-login').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || "[]");
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        alert(`Bem-vindo, ${usuario.nome}! Redirecionando para o Instagram...`);
        // Redireciona para o Instagram
        window.location.href = 'https://www.instagram.com/';
    } else {
        alert('Email ou senha incorretos!');
    }

    formLogin.reset();
});
