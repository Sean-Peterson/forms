$(document).ready(function(){
  $("form#order").submit(function(event) {
    event.preventDefault();
    var namef = ($("#fname").val());
    var namel = ($("#lname").val());
    var address = ($("#address").val());

    $("#rfname").text(namef);
    $("#rlname").text(namel);
    $("#radd").text(address);
  });
});
