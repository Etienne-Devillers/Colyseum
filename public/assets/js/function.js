function exercice1(datas, exerciceResume, exerciceResumeSentence, indexResume){
    exerciceResume.innerHTML=exerciceResumeSentence[indexResume];
                document.querySelector('.requestResult').innerHTML = '<table><thead><tr><th class="idTh">ID<div class="idArrow"></div></th><th>Nom</th><th>Prénom</th><th>Date de naissance</th><th>N° de carte</th></tr></thead><tbody></tbody></table>'
                for (let key in datas) {
                    test = datas[key]
                    document.querySelector('tbody').innerHTML += `<tr class="row${key}"></tr>`
                    for (let key2=0 ; key2 <6; key2++) {

                        if (test[key2] == null) {test[key2] ='--'}

                        if (key2 !==4) {
                            if (key2==0){
                                document.querySelector(`.row${key}`).innerHTML += `<td><img class="eye-${test[key2]}" src="./public/assets/img/eye-solid.svg">${test[key2]}</td>`
                            } else {
                        document.querySelector(`.row${key}`).innerHTML += `<td>${test[key2]}</td>`
                            }
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
        for (let key2=0 ; key2 <5; key2++) {

            document.querySelector(`.row${key}`).innerHTML += `<td>${test[key2]}</td>`

        }
    }
}

function exercice5(datas, exerciceResume, exerciceResumeSentence, indexResume){
    exerciceResume.innerHTML=exerciceResumeSentence[indexResume];
    document.querySelector('.requestResult').innerHTML = '<table><thead><tr><th>ID</th><th class="lastnameOrder">Nom</th><th>Prénom</th><th>Date de naissance</th><th>N° de carte</th></tr></thead><tbody></tbody></table>'
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
    document.querySelector('.requestResult').innerHTML = '<table><thead><tr><th>ID</th><th class="titleOrder">Titre</th><th>Artiste</th><th>Date</th><th>Heure</th></tr></thead><tbody></tbody></table>'
    for (let key in datas) {
        test = datas[key]
        document.querySelector('tbody').innerHTML += `<tr class="row${key}"></tr>`
        for (let key2=0 ; key2 <5; key2++) {

            if (key2==3){
                const date = new Date(test[key2]);
                document.querySelector(`.row${key}`).innerHTML += `<td>${date.toLocaleDateString("fr")}</td>`
            } else {
                document.querySelector(`.row${key}`).innerHTML += `<td>${test[key2]}</td>`
            }
            

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
            document.querySelector(`.row${key}`).innerHTML += `<td>${test[key2]}</td>`

        }
    }

    let tdList = document.querySelectorAll('td');
    tdList.forEach(element => {
        if (element.innerHTML == 'oui'){
            element.style.color = 'rgb(54, 230, 75)';
        }
    });
}

function idSolo(datas, exerciceResume, exerciceResumeSentence, indexResume){
    exerciceResume.innerHTML=exerciceResumeSentence[indexResume];
                document.querySelector('.requestResult').innerHTML = '<table><thead><tr><th>ID</th><th>Nom</th><th>Prénom</th><th>Date de naissance</th><th>type de carte</th><th>N° de carte</th></tr></thead><tbody></tbody></table>'
                for (let key in datas) {
                    test = datas[key]
                    document.querySelector('tbody').innerHTML += `<tr class="row${key}"></tr>`
                    for (let key2=0 ; key2 <6; key2++) {

                        if (test[key2] == null) {test[key2] ='--'}


                            if (key2==0){
                                document.querySelector(`.row${key}`).innerHTML += `<td>${test[key2]}</td>`
                            } else {
                        document.querySelector(`.row${key}`).innerHTML += `<td>${test[key2]}</td>`
                            
                        } 
                    }
                }
}

function orderById(order, value){
    document.querySelector('.idTh').addEventListener('click', () => {


        order = (order == 'id-DESC')? 'id-ASC':'id-DESC';

        let rotationArrow = 'translateX(10px) rotate(180deg)';
        rotationArrow = (order == 'id-DESC')?'translateX(10px) rotate(180deg)':'translateX(10px) rotate(0deg)';

        document.documentElement.style.setProperty('--rotation', rotationArrow);
        fetchFunction(order, value);
    })
}

function orderByName(order, value){
    document.querySelector('.lastnameOrder').addEventListener('click', () => {


        order = (order == 'id-DESC')? 'id-ASC':'id-DESC';

        let rotationArrow = 'translateX(10px) rotate(180deg)';
        rotationArrow = (order == 'id-DESC')?'translateX(10px) rotate(180deg)':'translateX(10px) rotate(0deg)';

        document.documentElement.style.setProperty('--rotation', rotationArrow);
        fetchFunction(order, value);
    })
}

function orderByTitle(order, value){
    document.querySelector('.titleOrder').addEventListener('click', () => {


        order = (order == 'id-DESC')? 'id-ASC':'id-DESC';

        let rotationArrow = 'translateX(10px) rotate(180deg)';
        rotationArrow = (order == 'id-DESC')?'translateX(10px) rotate(180deg)':'translateX(10px) rotate(0deg)';

        document.documentElement.style.setProperty('--rotation', rotationArrow);
        fetchFunction(order, value);
    })
}

function addProfilCard(){

    let customerDetails = document.querySelectorAll('td img');

    for (let i = 0; i < customerDetails.length; i++) {
        let element = customerDetails[i];
        element.addEventListener('click', (e) => {
            // console.log(e.target.classList[0].split('-')[1]);
            value = 'id';
            order= e.target.classList[0].split('-')[1];
            fetchFunction(order, value);

        })
    }
}
    
