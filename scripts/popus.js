function afficherPopup(){
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.add("active")
}

function cacherPopup(){
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.remove("active")
}
function initAddEventListenerPopup(){
    let btnPartager = document.getElementById("partager")
    let popupBackground = document.querySelector(".popupBackground")
    btnPartager.addEventListener("click",()=>{
        afficherPopup()
    })
    popupBackground.addEventListener("click",(event)=>{
        if(event.target===popupBackground){
            cacherPopup()
        }
    })
}


