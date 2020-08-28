// Scroll down button
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  })
})
// Jumbotron parralax 
var jumboHeight = $('.jumbotron').outerHeight();
function parallax(){
    var scrolled = $(window).scrollTop();
    console.log("Scrolled: " + scrolled + "CSS value: " + $('.bg').css('height'));
    $('.bg').css('height', (jumboHeight-scrolled) + 'px');
};
$(window).scroll(function(e){
    parallax();
});
