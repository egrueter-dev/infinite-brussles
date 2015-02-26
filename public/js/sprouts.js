// YOUR CODE GOES HERE
$('.more-sprouts').on("click", function(data) {
  event.preventDefault();
  var value = 1;
  value += 1;
  $.post("/tweets", {page: value}, function(value) {
    $(".tweets").append("<div class=\"body\">" + value + "</div>");
  });
  // $.get("/tweets.json", function(tweets) {
  //     $(".tweets").append("<div class=\"body\">" + tweets["text"] + "</div>");
  // });
});
