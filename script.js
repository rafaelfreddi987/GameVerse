// Inicializa EmailJS (você precisa criar uma conta em https://www.emailjs.com/)
emailjs.init('SEU_USER_ID'); // Substitua 'SEU_USER_ID' pelo ID da sua conta EmailJS

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

    // Envia email de boas-vindas (sem mostrar senha)
    emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', {
        to_email: email,
        to_name: nome,
        message: `Olá ${nome}, seu cadastro foi realizado com sucesso!`
    }).then(() => {
        alert('Cadastro realizado e email enviado com sucesso!');
    }).catch((err) => {
        console.error('Erro ao enviar email:', err);
        alert('Cadastro realizado, mas não foi possível enviar o email.');
    });

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
        alert(`Bem-vindo, ${usuario.nome}!`);
    } else {
        alert('Email ou senha incorretos!');
    }

    formLogin.reset();
});
