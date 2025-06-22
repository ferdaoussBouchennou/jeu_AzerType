let score=0
function afficherResultat(score,nbMotsProposes){
let spanScore=document.querySelector(".zoneScore span")
let affichageResultat=`${score} / ${nbMotsProposes}`
spanScore.innerText=affichageResultat
}
function afficherPropositions(proposition){
    let motsProposes=document.querySelector(".mot-a-taper")
    motsProposes.innerText=proposition
}
function afficherEmail(nom, email, score) {
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto
    console.log(mailto)
}
function validerNom(nom){
    let regex=new RegExp("^[a-zA-ZÀ-ÿ '-]+$")
    if(!regex.test(nom) || nom.length<2){
      throw new Error("Le nom doit contenir au moins 2 caractères et uniquement des lettres valides")
    }
}   
function validerEmail(email){
    let regex =new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")
    if(!regex.test(email)){
        throw new Error("L'email n'est pas valide")
        }
     
}
function afficherMessageErreur(message){
    let spanErreur=document.getElementById("erreurMessage")
    if(!spanErreur){
        let popup=document.querySelector(".popup")
        spanErreur=document.createElement("span")
        spanErreur.id="erreurMessage"
        popup.append(spanErreur)
    }

    spanErreur.innerText=message
    
}
function gererFormulaire(scoreEmail){
    try{
        let baliseNom=document.getElementById("nom")
        let nom=baliseNom.value
        validerNom(nom)
        let baliseEmail=document.getElementById("email")
        let email=baliseEmail.value
        validerEmail(email)
        afficherMessageErreur("")
        afficherEmail(nom, email, scoreEmail)
    }catch(error){
        afficherMessageErreur(error.message)
        
    }  
}
function lancerJeu(){
    initAddEventListenerPopup()
    let i=0
    let listePropositions=listeMots
    let buttonValidation = document.getElementById("valider")
    let input=document.getElementById("inputText")
    afficherPropositions(listePropositions[i])
    buttonValidation.addEventListener("click",()=>{
    console.log(input.value)
    if(input.value===listePropositions[i]){
        score++
    }
    i++
    afficherResultat(score,i)
    input.value=''
    if(listePropositions[i]===undefined){
       afficherPropositions("Fin du jeu !")
       buttonValidation.disabled = true
    }else{
    afficherPropositions(listePropositions[i])
    }

    })
    let radio=document.querySelectorAll(".option input")
    for(let index=0;index<radio.length;index++){
    radio[index].addEventListener("change",(event)=>{
        if(event.target.value==="mot"){
            listePropositions=listeMots
        }else if(event.target.value==="phrase"){
            listePropositions=listePhrases
        }
        afficherPropositions(listePropositions[i])
    })
}
let form=document.querySelector("form")
form.addEventListener("submit",(event)=>{
        event.preventDefault()
        let scoreEmail=`${score} / ${i}`
        gererFormulaire(scoreEmail)
})
        afficherResultat(score,i)
}
lancerJeu()

