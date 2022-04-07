function exercice1(datas, exerciceResume, exerciceResumeSentence, indexResume){
    exerciceResume.innerHTML=exerciceResumeSentence[indexResume];
                document.querySelector('.requestResult').innerHTML = '<table><thead><tr><th class="idTh">ID</th><th>Nom</th><th>Prénom</th><th>Date de naissance</th><th>N° de carte</th></tr></thead><tbody></tbody></table>'
                for (let key in datas) {
                    test = datas[key]
                    document.querySelector('tbody').innerHTML += `<tr class="row${key}"></tr>`
                    for (let key2=0 ; key2 <6; key2++) {

                        if (test[key2] == null) {test[key2] ='--'}

                        if (key2 !==4) {
                        document.querySelector(`.row${key}`).innerHTML += `<td>${test[key2]}</td>`
                        } 
                    }
                }
}
function exercice2(datas, exerciceResume, exerciceResumeSentence, indexResume){
    exerciceResume.innerHTML=exerciceResumeSentence[indexResume];
                document.querySelector('.requestResult').innerHTML = '<table><thead><tr><th class="idTh">ID</th><th>Type de spectacle</th></tr></thead><tbody></tbody></table>'
                for (let key in datas) {
                    test = datas[key]
                    document.querySelector('tbody').innerHTML += `<tr class="row${key}"></tr>`
                    for (let key2=0 ; key2 <2; key2++) {

                        document.querySelector(`.row${key}`).innerHTML += `<td>${test[key2]}</td>`
                    }
                }
}
function exercice3(datas, exerciceResume, exerciceResumeSentence, indexResume){
    exerciceResume.innerHTML=exerciceResumeSentence[indexResume];
    document.querySelector('.requestResult').innerHTML = '<table><thead><tr><th class="idTh">ID</th><th>Nom</th><th>Prénom</th><th>Date de naissance</th><th>N° de carte</th></tr></thead><tbody></tbody></table>'
    for (let key in datas) {
        test = datas[key]
        document.querySelector('tbody').innerHTML += `<tr class="row${key}"></tr>`
        for (let key2=0 ; key2 <6; key2++) {

            if (test[key2] == null) {test[key2] ='--'}

            if (key2 !==4) {
            document.querySelector(`.row${key}`).innerHTML += `<td>${test[key2]}</td>`
            } 
        }
    }
}
function exercice4(datas, exerciceResume, exerciceResumeSentence, indexResume){
    exerciceResume.innerHTML=exerciceResumeSentence[indexResume];
    document.querySelector('.requestResult').innerHTML = '<table><thead><tr><th class="idTh">ID</th><th>Nom</th><th>Prénom</th><th>Date de naissance</th><th>N° de carte</th></tr></thead><tbody></tbody></table>'
    for (let key in datas) {
        test = datas[key]
        document.querySelector('tbody').innerHTML += `<tr class="row${key}"></tr>`
        for (let key2=0 ; key2 <6; key2++) {

            if (key2 !==4) {
            document.querySelector(`.row${key}`).innerHTML += `<td>${test[key2]}</td>`
            } 
        }
    }
}
function exercice5(datas, exerciceResume, exerciceResumeSentence, indexResume){
    exerciceResume.innerHTML=exerciceResumeSentence[indexResume];
    document.querySelector('.requestResult').innerHTML = '<table><thead><tr><th class="idTh">ID</th><th>Nom</th><th>Prénom</th><th>Date de naissance</th><th>N° de carte</th></tr></thead><tbody></tbody></table>'
    for (let key in datas) {
        test = datas[key]
        document.querySelector('tbody').innerHTML += `<tr class="row${key}"></tr>`
        for (let key2=0 ; key2 <6; key2++) {

            if (test[key2] == null) {test[key2] ='--'}

            if (key2 !==4) {
            document.querySelector(`.row${key}`).innerHTML += `<td>${test[key2]}</td>`
            } 
        }
    }
}
function exercice6(datas, exerciceResume, exerciceResumeSentence, indexResume){
    exerciceResume.innerHTML=exerciceResumeSentence[indexResume];
    document.querySelector('.requestResult').innerHTML = '<table><thead><tr><th>ID</th><th>Titre</th><th>Artiste</th><th>Date</th><th>Heure</th></tr></thead><tbody></tbody></table>'
    for (let key in datas) {
        test = datas[key]
        document.querySelector('tbody').innerHTML += `<tr class="row${key}"></tr>`
        for (let key2=0 ; key2 <5; key2++) {

            document.querySelector(`.row${key}`).innerHTML += `<td>${test[key2]}</td>`

        }
    }
}
function exercice7(datas, exerciceResume, exerciceResumeSentence, indexResume){
    exerciceResume.innerHTML=exerciceResumeSentence[indexResume];
    document.querySelector('.requestResult').innerHTML = '<table><thead><tr><th class="idTh">ID</th><th>Nom</th><th>Prénom</th><th>Date de naissance</th><th>Carte de fidélité</th><th>N° de carte</th></tr></thead><tbody></tbody></table>'
    for (let key in datas) {
        test = datas[key]
        document.querySelector('tbody').innerHTML += `<tr class="row${key}"></tr>`
        for (let key2=0 ; key2 <6; key2++) {

            if (test[5] == null) {test[5] ='--'};

            test[4] = (test['card'] == 0)?  'NON' : 'OUI' ;

            document.querySelector(`.row${key}`).innerHTML += `<td>${test[key2]}</td>`

        }
    }
}

function orderById(order, value){
    document.querySelector('.idTh').addEventListener('click', () => {


        order = (order == 'id-DESC')? 'id-ASC':'id-DESC';
        fetchFunction(order, value)
    })
}