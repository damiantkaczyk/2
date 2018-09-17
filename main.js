function myMenu() {
    var x = document.getElementById("myNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
} 

function scroll_to_Top() {
	$("html, body").animate({ scrollTop: 0 }, "slow");
}


 var int=self.setInterval("migaj()",500);
 function migaj(){
   $('.migotanie').fadeOut('normal', function() {
     $('.migotanie').fadeIn('normal');
   });
 }
 
 $(document).ready(function(){
	$('#hello').slideToggle(1000);
 })