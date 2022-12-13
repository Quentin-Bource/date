
let month = ["Jan", "Fev" , "Mar", "Avr", "Mai" , "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec"]

function ndate() {
    let mdate = document.getElementById("ex1")

    let date = new Date ()

    let jdate = new Date (date.getTime() + (80000*1000*60*60))
    mdate.textContent = (jdate.getHours() +":"+ jdate.getMinutes() +":"+ jdate.getSeconds() + " " + jdate.getDate() 
    + "/" + month[jdate.getMonth()] + "/" + jdate.getFullYear() )


    setTimeout(ndate, 1000)
}

ndate()


document.getElementById("start").onkeyup = function addtime() {

    let elem = document.getElementById("rep")
    let date = new Date ()
    let mdate = document.getElementById("start").value * (1000*60*60)

    let jdate = new Date (date.getTime() + (mdate))

    elem.textContent = (jdate.getHours() +":"+ jdate.getMinutes() +":"+ jdate.getSeconds() + " " + jdate.getDate() 
    + "/" + month[jdate.getMonth()] + "/" + jdate.getFullYear() )


    setTimeout(addtime,1000)
    
}