<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail1 = new PHPMailer;
$mail1->CharSet = 'utf-8';

$width = $_POST['width'];
$height = $_POST['height'];
$choice = $_POST['choice'];
$phone = $_POST['calculator-phone'];
$select = $_POST['select'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'industria.okon@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Floorball123'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('industria.okon@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('valerakurak344@gmail.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта test_html great consult group';
$mail->Body    =  'Клиент оставил(а) заявку.<br><br> Телефон клиента ' .$phone . '<br><br>Ширина: ' .$width . '<br><br>Высота: ' .$height . '<br><br>Критерий: ' .$choice . '<br><br>Открывание створки: ' .$select;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}

?>