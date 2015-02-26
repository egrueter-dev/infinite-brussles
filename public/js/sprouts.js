$(function() {
    page = 2
    $('.more-sprouts').on("click", function(data) {
      event.preventDefault();

      $.ajax({
        type:'get',
        url:'/tweets.json?page=' + page,
        success: function(tweet_obj) {
          page +=1
          tweet_obj.forEach(function(tweet) {
            $(".tweets").append("<li class=\"tweet\"><div class=\"body\">" + tweet["text"] + "</div>" + "<div class=\"user\">" + tweet["username"] + "</div></li>");
          });
        }
    });
  });
});
