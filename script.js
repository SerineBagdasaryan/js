    var user = {};
    function setUserData() {
    user.firstname = document.getElementById('fn').value;
	 user.lastname= document.getElementById('ln').value;
	 user.phone = document.getElementById('ph').value;
	  user.email= document.getElementById('em').value;
	   user.login  = document.getElementById('lg').value;
	    user.pasword = document.getElementById('psw').value;
		
   var fn = document.getElementById("fn").value;
    var ln = document.getElementById("ln").value;
    var ph = document.getElementById("ph").value;
    var em = document.getElementById("em").value;
    var lg = document.getElementById("lg").value;
    var psw = document.getElementById("psw").value;

        if (fn != "" || ln != "" || ph != "" || em != "" || lg != "" || psw != "") {

          
            var regFname = /[^A-Za-z]/;
            if ((fn.length < 5 || fn.match(regFname)) || (ln.length < 5 || ln.match(regFname))) {
                
                alert("Firstname-lastname is not a valid");
            }


           
            var regPhone = /[^A-Za-z]/;
            if (ph.length < 5 || !(ph.match(regPhone))) {
                
                alert("Phone is not a valid");
            }


           
            var regEmail = /([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            if (em.length < 5 || !(em.match(regEmail))) {
              
                alert("Email is not a valid");
            }


            var regLogin = /\s/g;

            if (((lg.length < 5 && lg.length > 12) || lg.match(regLogin)) ||
                ((psw.length < 5 && psw.length > 12) || psw.match(regLogin))) {
               
                alert("Login-password is not a valid");
            }

            document.getElementById("form1").style.display="none";
            document.getElementById("form2").style.display="flex";
            document.getElementById("form2").style.flexDirection="column";

     
        }

    }
    
    function loginData() {
        var log = document.getElementById("log").value;
        var pswd = document.getElementById("pswd").value;
		

        if (log != "" || pswd != ""){
            var regLogin = /\s/g;
            if (((log.length < 5 && log.length > 12) || log.match(regLogin)) ||
                ((pswd.length < 5 && pswd.length > 12) || pswd.match(regLogin))) {

                alert("Login-password is not a valid");
            }


            if ((document.getElementById("lg").value != log) && (document.getElementById("psw").value != pswd)){
                alert("Login-password is not equal");
            } else {
                document.getElementById("form2").style.display="none";
                document.getElementById("info").style.display="block";
				document.getElementById('demo').innerHTML=user.firstname + '<br>' + user.lastname + '<br>' + user.phone + '<br>'  + user.email + '<br>'  + user.login +  '<br>' +user.pasword;
                // document.getElementById('demo1').innerHTML=user.lastname;
                // document.getElementById('demo2').innerHTML=user.phone;
                // document.getElementById('demo3').innerHTML=user.email;
                // document.getElementById('demo4').innerHTML=user.login;
                // document.getElementById('demo5').innerHTML=user.pasword;


				
            }
        }
    }

