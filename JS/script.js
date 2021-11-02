// Consegna L’utente indica un livello di difficoltà in base al quale viene generata 
// una griglia di gioco quadrata,
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 



// 1 chiedere all'utente a che difficoltà vuole giocare
// 2 utilizzare una griglia in base alla difficoltà scelta
// 3 dare la possibilità all'utente di evidenziare i quadrati toccati

const mineField = document.getElementById("campominato");

const chooseDif = prompt("A quale difficoltà vuoi giocare? scrivi facile, medio o difficile")
console.log(chooseDif);


if(chooseDif == "facile"){
    for(i = 0; i < 100; i++){

        let newElement = generaGrid("div", "grid1");

    }
}
























    function generaGrid(_element, _classEl){

    let ok = document.createElement(_element);
    ok.classList.add(_classEl);
    return ok
}