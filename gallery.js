var chico=["Upper Park","North Rim","Bear Hole","Monkey Face","Bidwell Mansion"];
var current;
function shuffleGallery()
{
  var randomIndex;
  do {
    randomIndex= Math.floor(Math.random() * chico.length);
  }
  while (randomIndex==current );
current=randomIndex;

  console.log(chico[current]);
}
