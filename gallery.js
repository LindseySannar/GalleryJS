var chico=[
  { description:"Upper Park",picture:"http://www.becnet.org/sites/default/files/event-photos/557977_10151427591623089_799073585_n.jpg",
from:"http://www.becnet.org/events/earth-day-celebration-upper-bidwell-park"},
{
  description:"North Rim", picture:"http://rimtorimtrailrun.com/wp-content/uploads/2015/01/IMG_20150130_085142-1000x450.jpg",
  from:"http://rimtorimtrailrun.com/"
},
{
  description:"Bear Hole", picture:"https://s-media-cache-ak0.pinimg.com/736x/f0/7b/f7/f07bf7995ef28215de99a68bf846e662.jpg", from:"https://www.pinterest.com/pin/512425263821297768/"

},
{
  description:" Monkey Face", picture:"https://static1.squarespace.com/static/562826fde4b081f403bef1db/t/570d5cb9f699bb1e466a2589/1460513888313/Monkey_Face_Night",
  from:"http://www.bluelabmedia.com/blog/2016/4/12/a-day-in-upper-park"
},
{
  description: "The Bidwell Mansion", picture:"http://pcad.lib.washington.edu/media/pcad-images/2485.png",
  from:"http://pcad.lib.washington.edu/building/18405/"
}
];
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
