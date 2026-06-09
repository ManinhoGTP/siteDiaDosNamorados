function fazerLogin(){

    let usuario = document.getElementById("usuario")
    let senha = document.getElementById("senha")
    let output = document.getElementById("saida")

    if(usuario.value != "amorDaMinhaVida"){
        output.innerHTML = "Erro! usuário inválido. Tente 'amorDaMinhaVida'"
    }else if(senha.value != "03042010"){
        output.innerHTML = "Erro! senha inválida. Tente '03042010'"
    }else{
        window.location = "index.html"
    }
    
}