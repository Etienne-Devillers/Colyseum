
let select = document.querySelector('#choiceSelect');
const exerciceResumeSentence = [
'Afficher tous les clients.',
'Afficher tous les types de spectacles possibles.',
'Afficher les 20 premiers clients.',
'N\'afficher que les clients possédant une carte de fidélité.',
'Afficher uniquement le nom et le prénom de tous les clients dont le nom commence par la lettre "M".',
'Afficher le titre de tous les spectacles ainsi que l\'artiste, la date et l\'heure. Trier les titres par ordre alphabétique. Afficher les résultat comme ceci : Spectacle par artiste, le date à heure.',
'Afficher tous les clients, remplacez le 0 et 1 de la carte de fidélité par NON ou OUI.'
]
const exerciceResume=document.querySelector('.exerciceResume');
let order='id-ASC';

function fetchFunction(order, value){
    fetch(`/controllers/request-controller.php?value=${value}&order=${order}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(datas) {
        console.log(datas)
        const indexResume = value-1
        switch (value) {
            case '1':
                exercice1(datas, exerciceResume, exerciceResumeSentence, indexResume);
                orderById(order, value);
            break;

            case '2':
                exercice2(datas, exerciceResume, exerciceResumeSentence, indexResume)
                orderById(order, value);
            break;

            case '3':
                exercice3(datas, exerciceResume, exerciceResumeSentence, indexResume)
                orderById(order, value);
            break;

            case '4':
                exercice4(datas, exerciceResume, exerciceResumeSentence, indexResume)
                orderById(order, value);
            break;

            case '5':
                exercice5(datas, exerciceResume, exerciceResumeSentence, indexResume)
                orderById(order, value);
            break;

            case '6':
                exercice6(datas, exerciceResume, exerciceResumeSentence, indexResume)
            break;

            case '7':
                exercice7(datas, exerciceResume, exerciceResumeSentence, indexResume)
                orderById(order, value);
            break;
        
            default:
                break;                
        }
    
    });
}

select.addEventListener('input', () => {
    let value = select.options[select.selectedIndex].value; // on récupere la value de l'option choisi.

    try {
        fetchFunction(order, value)  
    } catch(e){
        console.log(e.message);
    }
})
