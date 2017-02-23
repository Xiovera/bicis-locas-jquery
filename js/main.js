function validateForm(){
	var username = document.getElementById("name").value;
	var userlastname = document.getElementById("lastname").value;
	var useremail = document.getElementById("input-email").value;
	var userpassword = document.getElementById("input-password").value;
	var options = document.getElementById("opciones").selectedIndex;

	if(username ==""){
		alert("Por favor digite su nombre");
		return false;
		evt.preventDefault();
	}	

	else if(userlastname ==""){
		alert("Por favor digite su apellido");
		return false;
		evt.preventDefault();
	}	

	else if(useremail ==""){
		alert("Por favor digite su correo electrónico");
		return false;
		evt.preventDefault();
	}	

	else if(userpassword ==""){
		alert("Por favor digite su contraseña");
		return false;
		evt.preventDefault();
	}

	else if(userlastname.charAt(0) != userlastname.charAt(0).toUpperCase() || username.charAt(0) != username.charAt(0).toUpperCase()){
		alert ("La primera letra de su nombre y apellido debe ser mayúscula");
		return false;
		evt.preventDefault();
	}

	else if (options == null || options == 0){
		alert ("escoga una opción");
			return false;
	}		

}


 

