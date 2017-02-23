function validateForm(){
	//elementos rescatados del index
	var userName = $('#name').val();
	var userLastName = $('#lastname').val();
	var userEmail = $('#input-email').val();
	var userPassword = $('#input-password').val();
	var options = $('select').val();
}

	//VALIDAR NOMBRE
	function validateName(){
		if (userName==null || userName.length==0) {
			$('.name-container:first').append('<span>Por favor, digite su nombre</span>');
			return false;
		}
		if (/[0-9]/.test(userName)) {
			$('.name-container:first').append('<span>Disculpe, los números no son válidos</span>');
			return false;
		}
		if (!(/[A-Z]/.test(userName.charAt(0)))){
			$('.name-container:first').append('<span>Por favor, verifique que la primera letra sea mayúscula</span>');
			return false;
		}
	}

	//VALIDAR APELLIDO
	function validateLastName(){
		if (userLastName==null || userLastName.length==0) {
			$('.lastname-container:first').append('<span>Por favor, digite su apellido</span>');
			return false;
		}
		if (/[0-9]/.test(userLastName)) {
			$('.lastname-container:first').append('<span>Disculpe, los números no son válidos</span>');
			return false;
		}
		if (!(/[A-Z]/.test(userLastName.charAt(0)))){
			$('.lastname-container:first').append('<span>Por favor, verifique que la primera letra sea mayúscula</span>');
			return false;
		}
	}

	//VALIDAR EMAIL
	function validateEmail(){
		if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(userEmail))) {
			$('.email-container:first').append('<span>Por favor, verifique su email (formato válido: Ej: name@domain.com)</span>');
			return false;
		}
	}

	//VALIDAR CONTRASEÑA
	function validatePassword(){
		if (userPassword.length<6 || userPassword=="password" || userPassword=='123456' || userPassword=='098754') {
			$('.form-group:first').append('<span>la contraseña debe tener al menos 6 caracteres</span>');
			return false;
		}
	}

	//VALIDAR SELECCIÓN
	function validateOptions(){
		if (options==0) {
			$('.form-group:eq(1)').append('<span>Debe seleccionar al menos un tipo de bici</span>');
			return false;
		}
	}

