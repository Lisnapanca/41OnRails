$('.back-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
$(document).ready(function () {
    $( "#jumbotron-logo" ).click(function() {
      $( ".sosmed-logo-wrapper" ).slideToggle( "slow" );
    });
});
$(document).ready(function () {
    $( "#support-logo" ).click(function() {
      $( ".admin-chat-contact" ).slideToggle( "slow" );
    });
});
$(document).ready(function () {
    $( ".close-button" ).click(function() {
      $( ".admin-chat-contact" ).slideToggle( "slow" );
    });
});