function logar() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    

    if (username == "admin" && password == "admin") {
        alert('Login bem-sucedido!');
        //window.location.href = "admin.html" ;
        window.open("admin.html", "_blank");
        
    } else {
        alert('Login ou senha incorretos. Tente novamente.');
    }


    if (username == "usuario" && password == "1234") {
        alert('Login bem-sucedido!');
        //window.location.href = "pedidos.html" ;
        window.open("pedidos.html", "_blank");
    } else {
        alert('Login ou senha incorretos. Tente novamente.');
    }

}

/*function cadastrar() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        alert('Cadastro bem-sucedido! Agora você pode fazer login.');
        // Aqui você pode adicionar código para salvar os dados do usuário, se necessário
    } else {
        alert('Por favor, preencha ambos os campos para se cadastrar.');
    }   
} */

    
    