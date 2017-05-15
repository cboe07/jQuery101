




// 1. Wait until the document is fully loaded...i.e., READY
// 2.Once the DOM is loaded, run the anon function
$(document).ready(function(){
	// var thing = document.getElementById('thing');
	// var thing = $('thing'); //Same as above!
	// console.log(thing);
	// // console.log(document.getElementById('image'));
	// // console.log($('#image'));
	// // console.log(document.querySelector('#image'));

	// var classThing = document.getElementByClassName('thing');
	// console.dir(classThing);
	// var classThing = $(".thing");

	// var body = document.getElementsByTagName('body')


	// addEventListener(document.getElementsByTagName('button'),'click', function(){
	// });

	//Below is same as above

	$('button').click(function(){
		// console.log(this);
		// console.log($(this).attr('toDo'));
		var whatToDo = $(this).attr('toDo');
		if(whatToDo == 'hide'){
			$('#thing').hide();
		}else if(whatToDo == 'show'){
			$('#thing').show();
			document.get
		}else if(whatToDo == 'toggle'){
			$('#thing').toggle();
		}else if (whatToDo == 'html'){
			// if yu dpn'y pass html() an arg, it will simply return 
			console.log($('#thing').html());
			//
			$('#thing').html('<strong>I am new innerHTML</strong>');
		}else if(whatToDo == 'text'){
			$('#thing').text('<strong>I am new innerHTML</strong>');
		}else if(whatToDo == 'prepend'){
			$('#thing').prepend('<strong>I am new innerHTML</strong>');
		}else if(whatToDo == 'append'){
			$('#thing').append('<strong>I am new innerHTML</strong>');
		}else if(whatToDo == 'css'){
			$('#thing').css({
				'color': 'orange',
				'font-size': '40px',
				'background-color': 'blue',
				'border-radius': '50%',

			});
		}else if(whatToDo == 'addClass'){
			$('#thing').addClass('crazy-css');
		}else if(whatToDo == 'removeClass'){
			$('#thing').removeClass('crazy-css');
		}else if(whatToDo == 'fadeIn'){
			$('#thing').fadeIn();
		}else if(whatToDo == 'fadeOut'){
			$('#thing').fadeOut();
		}else if(whatToDo == 'fadeToggle'){
			$('#thing').fadeToggle();
		}
	});



});


// 1. Wait unitl absolutley everything has loaded (pictures, videos, etc.)
// $(window).on("load",function(){

// });
