// window.onload = setup;
// function setup() ;



function myName() {
  document.getElementById("firstButton").innerHTML = "Amira :)";
}
function insert1() {
  var r = document.getElementById("myth");
  r.insertAdjacentHTML("afterend", "<div> <h4> I am interested in the mythology of cultures all around the world, including Greek, Roman, Norse, Egyptian, Hindu, Korean, and more!</h4> </div>");
}

function insert2() {
  var x = document.getElementById("history");
  x.insertAdjacentHTML("afterend", "	<div> <h4> I love history in general, but my favorite eras are the jazz age and the Cold War. </h4> </div>");
}

function insert3() {
  var y = document.getElementById("music");
  y.insertAdjacentHTML("afterend", "<div> <h4> I like listening to music from different cultures and in different languages, including K-pop (Korean music) and J-pop (Japanese music).</div> </h4>");
}

function insert4() {
  var z =document.getElementById("books");
  z.insertAdjacentHTML("afterend", "<div> <h4> I also enjoy reading, and my favorite genre is science fiction, specifically space opera. </h4> </div>");
}
