<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Регистрация</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
<div class="zayavka main_flex_column flex__align-items_center">
            <div>
    <?php
$uchastok = $_POST['Uchastok'];
$fio = $_POST['FIO'];
$phone = $_POST['Phone'];
$uchastok = htmlspecialchars($uchastok);
$fio = htmlspecialchars($fio);
$phone = htmlspecialchars($phone);
$uchastok = urldecode($uchastok);
$fio = urldecode($fio);
$phone = urldecode($phone);
$uchastok = trim($uchastok);
$fio = trim($fio);
$phone = trim($phone);
//echo $fio;
//echo "<br>";
//echo $email;

        
        if (mail("VasilchenkoOV@outlook.com", "Заявка на ТРИАТЛОН", "Участок:".$uchastok."    ФИО:".$fio.".    Телефон: ".$phone ,"From: triatlon@dom.com \r\n"))
        {     echo "Спасибо за регистрацию! <br> Мы ждём Вас 04.09.2020г. в 09:00 на ш. Западно-Донбасская в актовом зале";
        } else {
            echo "Во время регистрации произошла ошибка. Попробуйте ещё раз";
        }?>
    </div>

    <button class="btn_back"><a href="index.html">Вернуться на Главную</a></button>
    </div>

    <style>
        body {
            background-color: #f0c33d;
            color: black;
            font-size: 1.7vw;
            padding: 7vh 10vw 0 10vw;
            
        }

        .zayavka {
            height: 100%;
            width: 100%;
        }

        .btn_back {
            margin-top: 5vh;
            font-weight: 700;
            font-size: 1.5vw;
            height: 5vh;
            border-radius: 15px;

        }

        .btn_back a {
            color: rgb(36, 36, 36);
        }
        @media (min-width: 768px) and (max-width: 1020px) {
            body {

            }
            .btn_back {

            }
        }
        @media (min-width: 375px) and (max-width: 767px) {
            body {
                font-size: 4.5vw;
                padding-top: 25vh;
            }
            .btn_back {
                font-size: 3.5vw;
            }
        }
        @media (min-width: 320px) and (max-width: 374px) {
            body {
                font-size: 5.5vw;
                padding-top: 25vh;
            }
            .btn_back {
                font-size: 3.5vw;
            }
        }

    </style>




</body>

</html>