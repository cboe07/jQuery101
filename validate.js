// Set up a doc ready so nothing happens too early...
$(document).ready(function(){
	// New jQuery method...submit
	// getElementsByClassName('sign-up-form')[0].on('submit', function(){

	// })
	$('.sign-up-form').submit(function(event){
		event.preventDefault();
		console.log("User submitted the form!");
		$('input').each(function(){
			var currentInputTagClass = $(this).attr('class'); 
			console.log(currentInputTagClass);
			// target the correspondong errot div for this input tag
			var errorDivClassName = '.' + currentInputTagClass + '-error';
			console.log(errorDivClassName);
			// Input tags have .val()
			// Everything else has .html() - innerHTML
			if($(this).val() == ''){
				// console.log("User did not enter enough information.");
				$(errorDivClassName).html('Field cannot be empty.');
			}
		});

		var password = $('.password').val();
		var password2 = $('.password2').val();

		if(password !== password2){
			$('.password-error').html("Your passwords do not match.")
		};
		//Force user to have a number in password
		var numberFound = false;
		for(let i = 0; i < password.length; i++){
			if(isNAN(Number(password[i]))){
				// this is not a number
			}else{
				//this is a number
				numberFound = true;
			}
		}
		if(numberFound == false){
			$('.password-error').html("Your password must contain one number.")
		}


	});
});