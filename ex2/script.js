//Ex2.1

let bd = new Date ("1997-03-06")
let today = new Date()
console.log( Math.floor((today.getTime() - bd.getTime()) / (1000 * 60 * 60 *24)))


// Ex 2.2 


document.getElementById('check').onclick = function ()
{
    let vieux = new Date ("1970-01-01")
    let date = document.getElementById('start').value
    let ndate = new Date (date)

    console.log(vieux)
    console.log(date)

    alert("Il y a " + Math.floor((ndate.getTime() - vieux.getTime()) / (1000 * 60 * 60 *24)) + " jour de différence entre le 1/01/1970 et ta date. ")

}