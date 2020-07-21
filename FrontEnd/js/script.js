$(document).scroll(function() {
   var scroll = $(document).scrollTop();

   if (scroll >= 100) {
     //alert();
     $("header").addClass("sticky");
   } else {
     $("header").removeClass('sticky');
   }
});

function scrollNav() {
  $('header li a, .navbar-brand, footer li a').click(function(){  
    $("header li a, .navbar-brand, footer li a").removeClass("active"); 
    $(this).addClass("active");
    
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 80
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();
