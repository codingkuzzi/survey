
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var beverage = $("#beverage").val();
    var favoriteColor = $("#color").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var result = "Your name is " + name + ", your favorite drink is " + beverage + ", your favorite song is " + flavor + ", and your favorite color is " + favoriteColor;
    $("#output").text(result);
  });
});
