let date = new Date ();
let bxdate = document.getElementById('bx')
let usadate = document.getElementById('usa')
let ridate = document.getElementById('ri')
let sprdate = document.getElementById('spr')


function bx () {
    let date = new Date ();
let bxb = date.toLocaleString("fr-BE")
bxdate.innerText = "Bruxelles " + bxb ; 

let usa = date.toLocaleString("fr-BE", {timeZone: "America/Anchorage" })
usadate.innerText = 'Anchorage ' + usa; 

let ri = date.toLocaleString( "fr-BE", {timeZone: "UTC"} )
ridate.innerText = "Reykjavik " + ri ;

let spr = date.toLocaleString("fr-BE", {timeZone: "Europe/Kirov"})
sprdate.innerText = "Saint-Pétersbourg " + spr;
}

setInterval(bx, 1000)



/*
23:47
lundi 12 décembre 2022 (UTC−9)
Heure (Anchorage, Alaska, États-Unis)
08:47
mardi 13 décembre 2022 (UTC)
Heure (Reykjavik, Islande)
09:48
mardi 13 décembre 2022 (UTC+1)
Heure (Bruxelles)
11:48
mardi 13 décembre 2022 (UTC+3)
Heure (Saint-Pétersbourg, Russie) */
