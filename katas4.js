const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

const showResults = (element) => {
    const box_result = document.getElementById('box-result');
    box_result.innerText = '';
    box_result.innerText = element;
}

const kata1 = () => {
    let arrbestThing = bestThing.split(" ");
    showResults(arrbestThing.indexOf('only'));
    return arrbestThing.indexOf('only');
}


const kata2 = () => {
    let arrbestThing = bestThing.split(" ");
    showResults(arrbestThing.indexOf(arrbestThing[arrbestThing.length - 1]));
    return arrbestThing.indexOf(arrbestThing[arrbestThing.length - 1]);
}

const kata3 = () => {
    let arrbestThing = bestThing.split(" ");
    let arrFilter = arrbestThing.filter(element => 'aa'.search(element) === -1 ? 1 : element);
    console.log(arrFilter);
    showResults(arrFilter);
    return arrFilter;
}

// FUNCAO QUE DETERMINARA QUAL KATA SELECIONAR SEGUNDO O ID DO BOTAO CLICADO
// UTILIZANDO O CONCEITO DE BUBBLING EM QUE O EVENTO EH ADICIONADO AO PAI
const kataSelect = (event) => {
    const kata = event.target;
    console.log(kata.id)
    switch (kata.id) {
        case '1':
            kata1();
            break;
        case '2':
            kata2();
            break;
        case '3':
            kata3();
            break;
    }
}

const ulParent = document.getElementById('list-katas');
ulParent.addEventListener('click', kataSelect);
