// Login
const formLogin = document.getElementById('form-login');
formLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email-login').value;
    const senha = document.getElementById('senha-login').value;

    const usuarios = JSON.parse(localStorage.getItem('usuarios') || "[]");
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);

    if (usuario) {
        // Usamos setTimeout para aguardar o alerta fechar antes do redirecionamento
        alert(`Bem-vindo, ${usuario.nome}! Redirecionando para o Instagram...`);
        setTimeout(() => {
            window.location.href = 'https://www.instagram.com/';
        }, 100); // 100ms é suficiente
    } else {
        alert('Email ou senha incorretos!');
    }

    formLogin.reset();
});
