function fazerLogin(){

    let usuario = document.getElementById("usuario")
    let senha = document.getElementById("senha")
    let output = document.getElementById("saida")

    if(usuario.value != "amorDaMinhaVida"){
        output.innerHTML = "usuário inválido tente 'amorDaMinhaVida'"
    }else if(senha.value != "03042010"){
        output.innerHTML = "senha inválida. Tente '03042010'"
    }else{
        window.location = "01-index.html"
    }
    
}