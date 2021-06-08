

function myValidation(){
				var name = document.forms['contactForm']['name'].value;
				var email = document.forms['contactForm']['email'].value;
				var phone = document.forms['contactForm']['phone'].value;
				var massage = document.forms['contactForm']['massage'].value;
				
				var error =[];
				if(name ==''|| name.length <3){
					error[0]="Name must be at lest 3 letter";
					document.getElementById('name-error').innerHTML = error[0];
				}else{
					document.getElementById('name-error').innerHTML = '';
				}
				
				if(email ==''|| email.length <10){
					error[1]="Please insert valide Email..";
					document.getElementById('email-error').innerHTML = error[1];
				}else{
					document.getElementById('email-error').innerHTML = '';
				}
				
				if(phone ==''|| phone.length <11){
					error[2]="Please insert valide number";
					document.getElementById('phone-error').innerHTML = error[2];
				}else{
					document.getElementById('phone-error').innerHTML = '';
				}
				
				if(massage ==''|| massage.length <50){
					error[3]="Massage must be at lest 50 letter";
					document.getElementById('massage-error').innerHTML = error[3];
				}else{
					document.getElementById('massage-error').innerHTML = '';
				}


				if(error.length > 0){
					return false;
				}
				
}
function myFocuse(x){
	/*	x.style.background='rgb(24 255 255 / 33%)';	*/
	x.style.background='#00d9ff80';
	
}





/* ===== JQUrey start ===== */ 

$(document).ready(function(){
	
	/* ===== Menubar active  start ===== */ 
	$('#main-menu').on('click', 'li',function(){
		$('#main-menu li.active').removeClass('active');
		$(this).addClass('active');
	});

	
	/* ===== Menubar  start ===== */ 
	$('#mobile-icon').click(function(){
		$('#main-menu ul').slideToggle(1000);
	});
	$(window).resize(function(){
		if($(window).width() > 576){
			$('#main-menu ul').show();
		}else{
			$('#main-menu ul').hide();
		}
		
	});
	
	
	/* ===== Upper Button Scroll start ===== */ 
	$(window).scroll(function(){
		var x = $(window).scrollTop();
		if(x >1000){
			$('#upper').fadeIn(1000);
		}else{
			$('#upper').fadeOut(1000);	
		}
		
	});
	$('#upper').click(function(){
		$('html').animate({scrollTop: 0},2000);
		
		
	});
	
	
});