document.getElementById("subSection").style.display = "flex"
const relogio = document.getElementById("relogio")

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