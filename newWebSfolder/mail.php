<?php  
    $error='';
    if(!empty($_POST['name']) && !empty ($_POST['email']) && !empty($_POST['message'])){
        $name=$_POST['name'];
        $from=$_POST['email'];
        $to="mylevitz@gmail.com";
        if(!empty($_POST['subject'])){
            $senderSubject=$_POST['subject'];
        }else{
            $senderSubject='';
        }
        $subject="From Website: ".$senderSubject;
        $subject2="Copy of: ".$senderSubject;
        $message=$name." wrote ".$_POST['message'];
        $message2="Here is a copy of your message: ".$_POST['message'];

        $headers = "From:" . $from;
        $headers2 = "From:" . $to;

        $success=mail($to,$subject,$message,$headers);
        mail($from,$subject2,$message2,$headers2); 

        if(!$success){
            $error="something went wrong ".error_get_last()['message'];
        }
    }else{
        $error="Unable to send please fill out all fields.";
    }
    if(!empty($error)){
        http_response_code(500);
        exit($error);
    }
    ?>