<?php
require_once(dirname(__FILE__).'/../config/verif.php');


if(!empty($_GET)){
    $requestValue = trim(filter_input(INPUT_GET, 'value', FILTER_SANITIZE_FULL_SPECIAL_CHARS));

    if(!empty($requestValue)){
        $isRequestValueValid = in_array($requestValue, VERIF_GET);

        if ($isRequestValueValid === false){
            echo 'la requete ne correspond pas.';
        }else {

            //Création d'une nouvelle instance de classe PDO permettant de se connecter à la BDD
            // Try catch pour attraper l'erreur et afficher un message.
            try {
                $sql = new PDO(
                    DSN,
                    USERDB,
                    PWD,
                [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);
            } catch(PDOException $e) {
                echo 'la connexion a la base de donnée n\'a pas pu aboutir. le message d\'erreur est le suivant : <br>';
                var_dump($e);
            }


            switch ($requestValue) {
                case '1':
                    if ($_GET['order'] == 'id-DESC') {
                        $firstRequest = $sql->prepare('SELECT * FROM clients ORDER BY id DESC');
                    } else {
                        $firstRequest = $sql->prepare('SELECT * FROM clients');
                    }
                    $firstRequest->execute();
                    $result = $firstRequest->fetchAll();
                break;

                case '2':
                    if ($_GET['order'] == 'id-DESC') {
                        $firstRequest = $sql->prepare('SELECT * FROM showtypes ORDER BY id DESC');
                    } else {
                        $firstRequest = $sql->prepare('SELECT * FROM showtypes');
                    }
                    $firstRequest->execute();
                    $result = $firstRequest->fetchAll();
                break;

                case '3':
                    if ($_GET['order'] == 'id-DESC') {
                        $firstRequest = $sql->prepare('SELECT * FROM clients ORDER BY id DESC  LIMIT 20');
                    } else {
                        $firstRequest = $sql->prepare('SELECT * FROM clients LIMIT 20');
                    }
                    $firstRequest->execute();
                    $result = $firstRequest->fetchAll();
                break;

                case '4':
                    if ($_GET['order'] == 'id-DESC') {
                        $firstRequest = $sql->prepare('SELECT clients.id, clients.lastname, clients.firstname, clients.birthdate, clients.cardNumber FROM clients JOIN cards ON clients.cardNumber = cards.cardNumber WHERE cards.cardTypesId = 1 ORDER BY clients.id DESC');
                    } else {
                        $firstRequest = $sql->prepare('SELECT clients.id, clients.lastname, clients.firstname, clients.birthdate, clients.cardNumber FROM clients JOIN cards ON clients.cardNumber = cards.cardNumber WHERE cards.cardTypesId = 1');
                    }

                    $firstRequest->execute();
                    $result = $firstRequest->fetchAll();
                break;

                case '5':
                    if ($_GET['order'] == 'id-DESC') {
                        $firstRequest = $sql->prepare("SELECT * FROM `clients` WHERE `lastname` LIKE 'M%' ORDER BY lastName DESC ");
                    } else {
                        $firstRequest = $sql->prepare("SELECT * FROM `clients` WHERE `lastname` LIKE 'M%' ORDER BY lastName ASC");
                    }
                    $firstRequest->execute();
                    $result = $firstRequest->fetchAll();
                break;

                case '6':
                    if ($_GET['order'] == 'id-DESC') {
                        $firstRequest = $sql->prepare("SELECT id, title, performer, date, startTime FROM `shows` ORDER BY title DESC");
                    } else {
                        $firstRequest = $sql->prepare("SELECT id, title, performer, date, startTime FROM `shows` ORDER BY title");
                    }
                    
                    $firstRequest->execute();
                    $result = $firstRequest->fetchAll();
                break;

                case '7':
                    if ($_GET['order'] == 'id-DESC') {
                        $firstRequest = $sql->prepare("SELECT clients.id,
                        firstname,
                        lastname,
                        birthdate,
                        CASE
                            WHEN clients.cardNumber = cards.cardNumber AND cards.cardTypesId = 1 THEN 'oui'
                            ELSE 'non'
                        END AS fidelityCard,
                        IF (cards.cardTypesId = 1, cards.cardNumber, '--') AS 'cardNumber' 
                        FROM clients LEFT JOIN cards ON clients.cardNumber = cards.cardNumber ORDER BY id DESC");
                    } else {
                        $firstRequest = $sql->prepare("SELECT clients.id,
                        firstname,
                        lastname,
                        birthdate,
                        CASE
                            WHEN clients.cardNumber = cards.cardNumber AND cards.cardTypesId = 1 THEN 'oui'
                            ELSE 'non'
                        END AS fidelityCard,
                        IF (cards.cardTypesId = 1, cards.cardNumber, '--') AS 'cardNumber' 
                        FROM clients LEFT JOIN cards ON clients.cardNumber = cards.cardNumber ORDER BY id ASC");
                    }
                    $firstRequest->execute();
                    $result = $firstRequest->fetchAll();
                break;

                case 'id':
                        $test = $_GET['order'];
                        $firstRequest = $sql->prepare("SELECT clients.id,
                        clients.lastname,
                        clients.firstname,
                        clients.birthdate,
						cardtypes.type,
                        clients.cardNumber
                        FROM clients LEFT JOIN cards ON clients.cardnumber = cards.cardnumber 
                        LEFT JOIN cardtypes ON cardtypes.id = cards.cardTypesId WHERE clients.id = :id");
                    $firstRequest->bindValue(':id', $test);
                    
                    $firstRequest->execute();
                    $result = $firstRequest->fetchAll();
                break;
                
                default:
                    break;
            }


        }
    } else {
        echo 'la requete ne correspond pas.';
    }
}
$result = json_encode($result);
echo $result;
?>
