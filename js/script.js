// first function that reverses name that user puts into form
function reverseName1(name) {
  // let nameForward = name;
  let name1 = name.split("").reverse().join("");
  $("#message1").html("Your name reversed is " + name1 + ".");

}

// second function that reverses name that user puts into form
function reverseName2(name) {
    var name2 = "";
    for (var i = name.length - 1; i >= 0; i--) {
        name2 += name[i];
    }
    $("#message2").html("Your name backwards is still " + name2);
}

// display reversed names
$("button").on('click', function(){
  let name = document.getElementById('name-input').value;
  $('.message-header').removeAttr("hidden");
  reverseName1(name);
  reverseName2(name);
  $("#thank-you").html("<br><h5>Thank you for stopping by, " + name + ".</h5>");
});
