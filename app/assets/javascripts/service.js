$(document).ready(function(){
  $("#extended-team-button").click(function(){
    $("#project-based-content").hide();
    $("#extended-team-content").show();
  });
  $("#project-based-button").click(function(){
    $("#project-based-content").show();
    $("#extended-team-content").hide();
  });
});
$(document).ready(function () {
    $( ".learn-more-button" ).click(function() {
      $( ".modal-fullwidth" ).show();
    });
    $( ".exit-button" ).click(function() {
      $( ".modal-fullwidth" ).hide();
    });
});
  $("#extended-team-button").click(function(){
    $("#triangle-right").show();
    $("#triangle-left").hide();
    $("#project-based-button").css('margin-top', '-10px');
    $("#extended-team-button").css('margin-top', '8px');
});
  $("#project-based-button").click(function(){
    $("#triangle-right").hide();
    $("#triangle-left").show();
    $("#project-based-button").css('margin-top', '8px');
    $("#extended-team-button").css('margin-top', '-10px');
});
  $(document).ready(function () {
    $( "#jumbotron-logo-service" ).click(function() {
      $( ".sosmed-logo-wrapper-service" ).slideToggle( "slow" );
    });
});
$(document).ready(function () {
    $( "#support-logo" ).click(function() {
      $( ".admin-chat-service" ).slideToggle( "slow" );
    });
});
$(document).ready(function () {
    $( ".close-button" ).click(function() {
      $( ".admin-chat-service" ).slideToggle( "slow" );
    });
});
$('.back-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
