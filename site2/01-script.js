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
function mostrarSection(sectionId){

    const section = document.querySelectorAll(".tela")
    
    section.forEach(section => {
        section.classList.remove("ativa")
    })
    
    const sectionAtiva = document.getElementById(sectionId)
    sectionAtiva.classList.add("ativa")

}

let SubSectionNum = 1
function proximaSubSection(){

    SubSectionNum += 1
    if (SubSectionNum > 2){
        SubSectionNum = 1
    }
    let subSection1 = document.getElementById("subSection1")
    let subSection2 = document.getElementById("subSection2")


    if (SubSectionNum == 1){
        subSection1.style.display = "flex"
    }else{
        subSection1.style.display = "none"
    }

     if (SubSectionNum == 2){
        subSection2.style.display = "flex"
    }else{
        subSection2.style.display = "none"
    }
}
function ultimaSubSection(){

    SubSectionNum -= 1
    if (SubSectionNum < 1){
        SubSectionNum = 2
    }
    let subSection1 = document.getElementById("subSection1")
    let subSection2 = document.getElementById("subSection2")


    if (SubSectionNum == 1){
        subSection1.style.display = "flex"
    }else{
        subSection1.style.display = "none"
    }

     if (SubSectionNum == 2){
        subSection2.style.display = "flex"
    }else{
        subSection2.style.display = "none"
    }
}

const imagens = document.querySelectorAll('.imagemClicavel')

imagens.forEach((img) => {
    img.addEventListener('click', () => {
        alert(`${img.alt}`)
    })
})