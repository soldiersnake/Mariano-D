const WIDTH = 400;
const HEIGHT = 400;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGHT),
};

let $map = document.getElementById("map");
let $distance = document.getElementById("distance");
let clicks = 0;

$map.addEventListener("click", function (e) {
  clicks++;
  let distance = getDistance(e, target);
  let distanceHint = getDistanceHint(distance);

  $distance.innerHTML = `<h2>${distanceHint}</h2>`;

  if (distance < 20) {
    alert(`Has encontrado el tesoro en ${clicks} clicks!`);
    location.reload();
  }
});
