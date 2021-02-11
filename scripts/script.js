$(document).ready(function() {

  $("#menu").on("click", "a", function(event) {
    //event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top - 60
    }, 700);
  });
});

/* Toggle Video Modal
-----------------------------------------*/
function toggle_video_modal() {

  // Click on video thumbnail or link
  $(".js-trigger-video-modal").on("click", function(e) {

    // prevent default behavior for a-tags, button tags, etc.
    e.preventDefault();

    // Grab the video ID from the element clicked
    var id = $(this).attr('data-youtube-id');

    // Autoplay when the modal appears
    // Note: this is intetnionally disabled on most mobile devices
    // If critical on mobile, then some alternate method is needed
    var autoplay = '?autoplay=1';

    // Don't show the 'Related Videos' view when the video ends
    var related_no = '&rel=0';

    // String the ID and param variables together
    var src = '//www.youtube.com/embed/' + id + autoplay + related_no;

    // Pass the YouTube video ID into the iframe template...
    // Set the source on the iframe to match the video ID
    $("#youtube").attr('src', src);

    // Add class to the body to visually reveal the modal
    $("body").addClass("show-video-modal noscroll");

  });

  // Close and Reset the Video Modal
  function close_video_modal() {

    event.preventDefault();

    // re-hide the video modal
    $("body").removeClass("show-video-modal noscroll");

    // reset the source attribute for the iframe template, kills the video
    $("#youtube").attr('src', '');

  }
  // if the 'close' button/element, or the overlay are clicked
  $('body').on('click', '.close-video-modal, .video-modal .overlay', function(event) {

    // call the close and reset function
    close_video_modal();

  });
  // if the ESC key is tapped
  $('body').keyup(function(e) {
    // ESC key maps to keycode `27`
    if (e.keyCode == 27) {

      // call the close and reset function
      close_video_modal();

    }
  });
}
toggle_video_modal();





$(function() {
  // init the validator
  // validator files are included in the download package
  // otherwise download from http://1000hz.github.io/bootstrap-validator

  $("#contact-form").validator();

  // when the form is submitted
  $("#contact-form").on("submit", function(e) {
    // if the validator does not prevent form submit
    if (!e.isDefaultPrevented()) {
      var url = "contact.php";

      // FOR CODEPEN DEMO I WILL PROVIDE THE DEMO OUTPUT HERE, download the PHP files from
      // https://bootstrapious.com/p/how-to-build-a-working-bootstrap-contact-form

      var messageAlert = "alert-success";
      var messageText =
        "Your message was sent, thank you. I will get back to you soon.";

      // let's compose Bootstrap alert box HTML
      var alertBox =
        '<div class="alert ' +
        messageAlert +
        ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
        messageText +
        "</div>";

      // If we have messageAlert and messageText
      if (messageAlert && messageText) {
        // inject the alert to .messages div in our form
        $("#contact-form").find(".messages").html(alertBox);
        // empty the form
        $("#contact-form")[0].reset();
      }

      return false;
    }
  });

});
