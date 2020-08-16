<?php



$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$address = $_POST['address'];
$messages = $_POST['messages'];

$name = htmlspecialchars($name,ENT_QUOTES,'UTF-8');
$email = htmlspecialchars($email,ENT_QUOTES,'UTF-8');
$tel = htmlspecialchars($tel,ENT_QUOTES,'UTF-8');
$address = htmlspecialchars($address,ENT_QUOTES,'UTF-8');
$messages = htmlspecialchars($messages,ENT_QUOTES,'UTF-8');

$honbun='';
$honbun.= $name."様この度はお問い合わせいただきまして誠にありがとうございます。\n";
$honbun.= "後日担当者より折り返しのご連絡を差し上げますので今しばらくお待ちくださいませ。\n";
$honbun.= "======================================\n";
$honbun.= "こちらは自動送信です。\n";
$honbun.= "======================================\n";
$honbun.= "\n";
$honbun.= "\n";
$honbun.= "ご入力いただいた情報は以下となります。\n";
$honbun.= "--------------------------------------\n";
$honbun.= "氏名：".$name."\n";
$honbun.= "メールアドレス：".$email."\n";
$honbun.= "電話番号：".$tel."\n";
$honbun.= "住所：".$address."\n";
$honbun.= "お問い合わせ内容：\n";
$honbun.= "\n";
$honbun.= $messages."\n";
$honbun.= "\n";
$honbun.= "\n";
$honbun.= "======================================\n";
$honbun.= "sample\n";
$honbun.= "〒000-0000\n";
$honbun.= "◯◯県▲▲市◇◇町00-000\n";
$honbun.= "TEL：000-0000\n";
$honbun.= "FAX：000-0000\n";
$honbun.= "メール：sample@mail.com\n";
$honbun.= "URL：https://sample.com\n";
$honbun.= "======================================\n";


$title = 'ご注文ありがとうございます。';
    $header = 'From:sample@mail.com';
    $honbun = html_entity_decode($honbun,ENT_QUOTES,'UTF-8');
    mb_language('Japanese');
    mb_internal_encoding('UTF-8');
    mb_send_mail($email,$title,$honbun,$header);
    
$title = 'お客様からご注文がありました。';
    $header = 'From:'.$email;
    $honbun = html_entity_decode($honbun,ENT_QUOTES,'UTF-8');
    mb_language('Japanese');
    mb_internal_encoding('UTF-8');
    mb_send_mail('sample@mail.com',$title,$honbun,$header);
    
header('Location:contact.html');
exit();

?>

