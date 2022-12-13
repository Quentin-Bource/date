let week = ['Dim','Lun',"Mar","Mer","Jeu","Ven","Sam"]
let month = ["Jan", "Fev" , "Mar", "Avr", "Mai" , "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"]

function horloge(){
let today = new Date ()

document.getElementById('semaine').innerText = week[today.getDay()];
document.getElementById("année").innerText = today.getFullYear();
document.getElementById("date").innerHTML = today.getDate() + "<br>" + month[today.getMonth()]

document.getElementById("heure_minute").innerText = today.getHours() + ":" + today.getMinutes() + ":";
document.getElementById("seconde").innerText = today.getSeconds();

setTimeout(horloge, 1000)

}
horloge()
