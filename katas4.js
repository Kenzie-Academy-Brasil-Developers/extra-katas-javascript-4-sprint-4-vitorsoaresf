const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

const showResults = (element) => {
    const box_result = document.getElementById('box-result');
    box_result.innerText = '';
    box_result.innerText = element;
}

const kata1 = () => {
    showResults(gotCitiesCSV.split(','));
    return gotCitiesCSV.split(',');
}

const kata2 = () => {
    showResults(bestThing.split(' '));
    return bestThing.split(' ');
}

const kata3 = () => {
    showResults(gotCitiesCSV.replace(/[,]/g, ";"));
    return gotCitiesCSV.replace(/[,]/g, ";");
}

const kata4 = () => {
    showResults(lotrCitiesArray.join(','));
    return lotrCitiesArray.join(',');
}

const kata5 = () => {
    let arrResult = [];
    for (let i = 0; i < 5; i++) {
        arrResult.push(lotrCitiesArray[i]);
    }
    showResults(arrResult);
    return arrResult;
}

const kata6 = () => {
    let arrCopy = lotrCitiesArray;
    let arrResult = [];
    for (let i = 0; i < 5; i++) {
        arrResult.push(arrCopy.pop());
    }
    showResults(arrResult);
    return arrResult;
}

const kata7 = () => {
    let arrResult = [];
    for (let i = 2; i <= 4; i++) {
        arrResult.push(lotrCitiesArray[i]);
    }
    showResults(arrResult);
    return arrResult;
}

const kata8 = () => {
    let element = lotrCitiesArray.splice(lotrCitiesArray.indexOf('Rohan'),1);
    showResults(lotrCitiesArray);
    return lotrCitiesArray;
}

const kata9 = () => {
    lotrCitiesArray.splice(lotrCitiesArray.indexOf('Dead Marshes')  + 1);
    showResults(lotrCitiesArray);
    return lotrCitiesArray;
}

const kata10 = () => {
    lotrCitiesArray.splice(lotrCitiesArray.indexOf('Gondor') + 1,0,'Rohan');
    showResults(lotrCitiesArray)
    return lotrCitiesArray;
}

const kata11 = () => {
    lotrCitiesArray.splice(lotrCitiesArray.indexOf('Dead Marshes'),1,'Deadest Marshes');
    showResults(lotrCitiesArray)
    return lotrCitiesArray;
}

const kata12 = () => {
    let element = bestThing.slice(0,14)
    showResults(element);
    return element;
}

const kata13 = () => {
    let element = bestThing.slice(bestThing.length - 12)
    showResults(element);
    return element;
}

const kata14 = () => {
    let element = bestThing.slice(23,28)
    showResults(element);
    return element;
}

const kata15 = () => {
    let element = bestThing.substring(bestThing.length - 12)
    showResults(element);
    return element;
}

const kata16 = () => {
    let element = bestThing.substring(23,28)
    showResults(element);
    return element;
}

const kata17 = () => {
    lotrCitiesArray.pop();
    showResults(lotrCitiesArray);
    return lotrCitiesArray;
}

const kata18 = () => {
    lotrCitiesArray.push('Harad');
    showResults(lotrCitiesArray);
    return lotrCitiesArray;
}

const kata19 = () => {
    lotrCitiesArray.shift();
    showResults(lotrCitiesArray);
    return lotrCitiesArray;
}

const kata20 = () => {
    lotrCitiesArray.unshift('Mordor');
    showResults(lotrCitiesArray);
    return lotrCitiesArray;
}

const kata21 = () => {
    let arrbestThing = bestThing.split(" ");
    showResults(arrbestThing.indexOf('only'));
    return arrbestThing.indexOf('only');
}

const kata22 = () => {
    let arrbestThing = bestThing.split(" ");
    showResults(arrbestThing.indexOf(arrbestThing[arrbestThing.length - 1]));
    return arrbestThing.indexOf(arrbestThing[arrbestThing.length - 1]);
}

const kata23 = () => {
    let arrgotCitiesCSV = gotCitiesCSV.split(",");
    let arrFilter = arrgotCitiesCSV.filter(element => {
        let selectElement = '';
        if (element.includes('aa') || element.includes('ee') ||
            element.includes('ii') || element.includes('oo') || element.includes('uu')) {
            selectElement = element;
        }

        return selectElement;
    });

    showResults(arrFilter);
    return arrFilter;
}

const kata24 = () => {
    let arrFilter = lotrCitiesArray.filter(element => {
        let selectElement = '';
        if (element[element.length - 1] === 'r' && element[element.length - 2] === 'o') {
            selectElement = element;
        }

        return selectElement;
    });

    showResults(arrFilter);
    return arrFilter;
}

const kata25 = () => {
    let arrBestThing = bestThing.split(" ");
    let arrFilter = arrBestThing.filter(element => {
        let selectElement = '';
        if (element[0] === 'b') {
            selectElement = element;
        }

        return selectElement;
    });

    showResults(arrFilter);
    return arrFilter;
}

const kata26 = () => {
    showResults(lotrCitiesArray.includes('Mirkwood'));
    return lotrCitiesArray.includes('Mirkwood');
}

const kata27 = () => {
    showResults(lotrCitiesArray.includes('Hollywood'));
    return lotrCitiesArray.includes('Hollywood');
}

const kata28 = () => {
    showResults(lotrCitiesArray.indexOf('Mirkwood'));
    return lotrCitiesArray.indexOf('Mirkwood');
}

const kata29 = () => {
    let element = lotrCitiesArray.filter(element => element.includes(' '));
    showResults(element);
    return element;
}

const kata30 = () => {
    showResults(lotrCitiesArray.reverse());
    return lotrCitiesArray.reverse();
}

const kata31 = () => {
    showResults(lotrCitiesArray.sort());
    return lotrCitiesArray.sort();
}

const kata32 = () => {
    let result = lotrCitiesArray.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        }
        if (a.length < b.length) {
            return -1;
        }
        return 0;
    });

    showResults(result);
    return result;
}

// FUNCAO QUE DETERMINARA QUAL KATA SELECIONAR SEGUNDO O ID DO BOTAO CLICADO
// UTILIZANDO O CONCEITO DE BUBBLING EM QUE O EVENTO EH ADICIONADO AO PAI
const kataSelect = (event) => {
    const kata = event.target;
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
        case '4':
            kata4();
            break;
        case '5':
            kata5();
            break;
        case '6':
            kata6();
            break;
        case '7':
            kata7();
            break;
        case '8':
            kata8();
            break;
        case '9':
            kata9();
            break;
        case '10':
            kata10();
            break;
        case '11':
            kata11();
            break;
        case '12':
            kata12();
            break;
        case '13':
            kata13();
            break;
        case '14':
            kata14();
            break;
        case '15':
            kata15();
            break;
        case '16':
            kata16();
            break;
        case '17':
            kata17();
            break;
        case '18':
            kata18();
            break;
        case '19':
            kata19();
            break;
        case '20':
            kata20();
            break;
        case '21':
            kata21();
            break;
        case '22':
            kata22();
            break;
        case '23':
            kata23();
            break;
        case '24':
            kata24();
            break;
        case '25':
            kata25();
            break;
        case '26':
            kata26();
            break;
        case '27':
            kata27();
            break;
        case '28':
            kata28();
            break;
        case '29':
            kata29();
            break;
        case '30':
            kata30();
            break;
        case '31':
            kata31();
            break;
        case '32':
            kata32();
            break;
    }
}

const ulParent = document.getElementById('list-katas');
ulParent.addEventListener('click', kataSelect);
