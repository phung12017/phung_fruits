$(document).ready(function(){
                    
    var user = $('#user').val();
    var email = $('#email').val();
    var pass = $('#pass').val();
    var confirm = $('#confirm').val();

    var chkpass = false;
    var chkemail = false;
    var chkconfirm = false;
    var chkname =  false;
    

    $("#user").blur(function(){
        user = $('#user').val();
        if(user == ""){
            $("#checkname").text("** Please fill full name")
            $("#checkname").css("color","red")
            chkname = fale;
        }else{
            $("#checkname").text("")
            chkname = true;
        }
    })
    $("#email").blur(function(){
        email = $('#email').val();
        if(email == ""){
            $("#checkemail").text("** Please fill email")
            $("#checkemail").css("color","red")
            chkemail = fale;
        }
        else{
            $("#checkemail").text("")
            chkemail = true;
        }
    })
    $("#pass").blur(function(){
        pass = $('#pass').val();
        if(pass == ""){
            $("#checkpass").text("** Please fill password")
            $("#checkpass").css("color","red")
            chkpass = fale;
        }
        else{
            $("#checkpass").text("")
            chkpass = true;
        }
    })
    $("#confirm").blur(function(){
        pass = $('#pass').val();
        confirm = $('#confirm').val();
        if(confirm == ""){
            $("#checkconfirm").text("** Please fill password")
            $("#checkconfirm").css("color","red")
            chkconfirm = fale;
        }else{
            $("#checkconfirm").text("")
            chkconfirm = true
        }
    })

  
    $('#btnSubmit').click(function(){
        if(user == ""){
            $("#checkname").text("** Please fill full name")
            $("#checkname").css("color","red")
            chkname = fale;
        }else{
            $("#checkname").text("")
            chkname = true;
        }

        if(email == ""){
            $("#checkemail").text("** Please fill email")
            $("#checkemail").css("color","red")
            chkemail = fale;
        }
        else{
            $("#checkemail").text("")
            chkemail = true;
        }
        if(pass == ""){
            $("#checkpass").text("** Please fill password")
            $("#checkpass").css("color","red")
            chkpass = fale;
        }
        else{
            $("#checkpass").text("")
            chkpass = true;
        }



        if(pass != confirm){
            $("#checkconfirm").text("** Password don't match")
            $("#checkconfirm").css("color","red")
            chkconfirm = fale;
        }else{
            $("#checkconfirm").text("")
            chkconfirm = true
        }
        if(chkname == false || chkemail == false || chkpass == false || confirm == false){
            return false
        }else{
              
                $('#showName').text("Welcome "+user+" to website !");
                $('#showEmail').val(email);
                $('#contactForm').slideDown();
                $('#registerForm').slideUp();
                
               

        }
     
        $('#btnGoBack').click(function(){
            $('#contactForm').slideUp();
            $('#registerForm').slideDown();
    
        })
    })     

    
     });
    