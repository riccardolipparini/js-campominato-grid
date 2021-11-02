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
        let div = generaDiv("div", "grid1");
        // div click per cambiare colore
        div.addEventListener("click",
        function(){
            div.classList.add("click");
        }
        );
        mineField.append(div);
    }
}else if(chooseDif == "medio"){
    for(i = 0; i < 81; i++){
        let div = generaDiv("div", "grid2");
        // div click per cambiare colore
        div.addEventListener("click",
        function(){
            div.classList.add("click");
        }
        );
        mineField.append(div);
    }
}else if(chooseDif == "difficile"){
    for(i = 0; i < 49; i++){
        let div = generaDiv("div", "grid3");
        // div click per cambiare colore
        div.addEventListener("click",
        function(){
            div.classList.add("click");
        }
        );
        mineField.append(div);
    }
}

function generaDiv(_tag, _classEl) {
    let element = document.createElement(_tag);
    element.classList.add(_classEl);
    return element
}