// first function that reverses name that user puts into form
function reverseName1(name) {
  let name1 = name.join(",").reverse().split(",");
  $("#message1").html("Your name reversed is " + name + ".");

}

// second function that reverses name that user puts into form
function reverseName2(name) {
    let name2 = "";
    for (let i = name - 1; i >= 0; i-) {
        name2 += name[i];
    }
    $("#message2").append("Your name backwards is still " + name2);
}

// display reversed names
$("button").on('click', function(){
  let name = document.getElementByClass('name-input').value;
  $('.message-header').removeAttr("hidden");
  reverseName1(name)
  reverseName2(name);
  $("#thank-you").html("<br><h5>Thank you for stopping by, " + name ".</h5>");
});
