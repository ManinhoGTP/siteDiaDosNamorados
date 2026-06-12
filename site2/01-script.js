//Funçao da página de login
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

//Função de mostrar / sumir section
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
    if (SubSectionNum > 3){
        SubSectionNum = 1
    }
    let subSection1 = document.getElementById("subSection1")
    let subSection2 = document.getElementById("subSection2")
    let subSection3 = document.getElementById("subSection3")


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

    if (SubSectionNum == 3){
        subSection3.style.display = "flex"
    }else{
        subSection3.style.display = "none"
    }
}
function ultimaSubSection(){

    SubSectionNum -= 1
    if (SubSectionNum < 1){
        SubSectionNum = 3
    }
    let subSection1 = document.getElementById("subSection1")
    let subSection2 = document.getElementById("subSection2")
    let subSection3 = document.getElementById("subSection3")


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

    if (SubSectionNum == 3){
        subSection3.style.display = "flex"
    }else{
        subSection3.style.display = "none"
    }
}

//Imagens clicaveis
const imagens = document.querySelectorAll('.imagemClicavel')
imagens.forEach((img) => {
    img.addEventListener('click', () => {
        alert(`${img.alt}`)
    })
})

//Contador
const relogio = document.getElementById("relogio")
const tempo = setInterval(function() {
    const agora = new Date()
    const inicioDoNm = new Date("Apr 03 2026 17:41:00")
    const diferença = agora - inicioDoNm
    


    const d = Math.floor(diferença / (1000 * 60 * 60 * 24))
    const h = Math.floor((diferença % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const m = Math.floor((diferença % (1000 * 60 * 60)) / (1000 * 60))
    const s = Math.floor((diferença % (1000 * 60)) / 1000)

    relogio.innerHTML = `${d}d | ${h}h | ${m}m | ${s}s `
}, 1000)