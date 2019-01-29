$(function(){

    /*$('.fa-facebook').click(function(){
		open("https://www.facebook.com/Hunters-Hub-Incorporated-208732030013230/","","height=150");
	});*/

	$('#feature').waypoint(function(direction) {
		if (direction == "down") {
				//$('nav').addClass('sticky');
				 
					$('.navbar').css('min-height','60px');
				//	$('.img-brand').css('width','230px');
				//	$('.img-brand').attr("src","img/HHI Logo edit2.png");
					

		} else {
			 // $('nav').removeClass('sticky');
		
			// $('.img-brand').css('width','250px');
			// $('.img-brand').attr("src","img/HHI Logo edit2.png");
			 $('.navbar').css('min-height','80px');

		}
}, {
	offset: '100px;'
});	


$('#about').waypoint(function(direction) {
	if (direction == "down") {
			//$('nav').addClass('sticky');
			 
				$('.navbar').css('min-height','60px');
			//	$('.img-brand').css('width','230px');
				//$('.img-brand').attr("src","img/HHI Logo edit2.png");
				

	} else {
		 // $('nav').removeClass('sticky');
	
		// $('.img-brand').css('width','250px');
		 //$('.img-brand').attr("src","img/HHI Logo edit2.png");
		 $('.navbar').css('min-height','80px');

	}
}, {
offset: '100px;'
});

$('#contact').waypoint(function(direction) {
	if (direction == "down") {
			//$('nav').addClass('sticky');
			 
				$('.navbar').css('min-height','60px');
			//	$('.img-brand').css('width','230px');
				//$('.img-brand').attr("src","img/HHI Logo edit2.png");
				

	} else {
		 // $('nav').removeClass('sticky');
	
		// $('.img-brand').css('width','250px');
		 //$('.img-brand').attr("src","img/HHI Logo edit2.png");
		 $('.navbar').css('min-height','80px');

	}
}, {
offset: '100px;'
});

$('.services-section').waypoint(function(direction) {
	if (direction == "down") {
			//$('nav').addClass('sticky');
			 
				$('.navbar').css('min-height','60px');
			//	$('.img-brand').css('width','230px');
				//$('.img-brand').attr("src","img/HHI Logo edit2.png");
				

	} else {
		 // $('nav').removeClass('sticky');
	
		// $('.img-brand').css('width','250px');
		 //$('.img-brand').attr("src","img/HHI Logo edit2.png");
		 $('.navbar').css('min-height','80px');

	}
}, {
offset: '100px;'
});


$('#client-form').waypoint(function(direction) {
	if (direction == "down") {
			//$('nav').addClass('sticky');
			 
				$('.navbar').css('min-height','60px');
			//	$('.img-brand').css('width','230px');
				//$('.img-brand').attr("src","img/HHI Logo edit2.png");
				

	} else {
		 // $('nav').removeClass('sticky');
	
		// $('.img-brand').css('width','250px');
		 //$('.img-brand').attr("src","img/HHI Logo edit2.png");
		 $('.navbar').css('min-height','80px');

	}
}, {
offset: '100px;'
});

$('#jobseeker-form').waypoint(function(direction) {
	if (direction == "down") {
			//$('nav').addClass('sticky');
			 
				$('.navbar').css('min-height','60px');
			//	$('.img-brand').css('width','230px');
				//$('.img-brand').attr("src","img/HHI Logo edit2.png");
				

	} else {
		 // $('nav').removeClass('sticky');
	
		// $('.img-brand').css('width','250px');
		 //$('.img-brand').attr("src","img/HHI Logo edit2.png");
		 $('.navbar').css('min-height','80px');

	}
}, {
offset: '100px;'
});







});