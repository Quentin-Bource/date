let week = ['Dim','Lun',"Mar","Mer","Jeu","Ven","Sam"]
let month = ["Jan", "Fev" , "Mar", "Avr", "Mai" , "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"]

function horloge(){
let today = new Date ()

document.getElementById('semaine').innerText = week[today.getDay()];
document.getElementById("année").innerText = today.getFullYear();
document.getElementById("date").innerText = today.getDate() + " " + month[today.getMonth()]


}
horloge()
