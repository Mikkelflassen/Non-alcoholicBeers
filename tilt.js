$(document).ready(function () {
  // Set maximum tilt angle for the beer containers
  var maxTiltAngle = 30; // Adjust as needed

  // Initialize Tilt.js on beer containers
  $(".beer-container").tilt({
    maxTilt: maxTiltAngle,
    perspective: 1000,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: 1.05,
  });

  // Handle scroll event to tilt the beer containers towards each other
  $(window).scroll(function () {
    // Get the scroll position
    var scrollTop = $(this).scrollTop();

    // Calculate the tilt angle for each beer container
    var tiltAngle = scrollTop * 0.2; // Adjust the multiplier as needed

    // Ensure the tilt angle doesn't exceed the maximum tilt angle
    tiltAngle = Math.min(tiltAngle, maxTiltAngle);

    // Apply the tilt angles to the beer containers
    $(".beer-container:nth-child(1)").css(
      "transform",
      "rotate(" + tiltAngle + "deg)"
    );
    $(".beer-container:nth-child(2)").css(
      "transform",
      "rotate(-" + tiltAngle + "deg)"
    );
  });

  // Handle image swapping on hover
  $(".beer-container").hover(
    function () {
      // Store the original image source
      $(this).data("original-src", $(this).find(".beer-image").attr("src"));
      // Change the image source to the hover image
      $(this).find(".beer-image").attr("src", "beer2.jpg"); // Replace 'hover_beer.jpg' with your hover image source
    },
    function () {
      // Restore the original image source when mouse leaves
      $(this).find(".beer-image").attr("src", $(this).data("original-src"));
    }
  );
});
