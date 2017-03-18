// function checkNumber () {
//   let age = document.getElementById('age-input').value;
//   console.log(age);
// }


// $("button").on('click', function(){
//   let age = document.getElementById('age-input').value;
//   if (isNaN(age)){
//     $("#age-in-days").html("Please enter a number");
//   } else {
//     let age-to-days = age
//   }
// })

// reverses name that user puts into form
$("button").on('click', function(){
  let name = document.getElementById('name-input').value;
  let nameReversed = name.split("").reverse().join("");
  $("#message").html("Your name reversed is " + nameReversed + ". Thank you for stopping by, " + name + ".");

});
