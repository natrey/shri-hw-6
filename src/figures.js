var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
context.fillStyle = "#222";
context.fillRect(0, 0, 400, 400);

var randomShape = Math.floor((Math.random() * 3) + 1);

if (randomShape == 1) {
  context.beginPath();
  context.rect(100, 150, 200, 100);
  context.fillStyle = '#ffcd01';
  context.fill();
  context.lineWidth = 7;
  context.strokeStyle = '#ffcd01';
  context.stroke();
} else if (randomShape == 2) {
  context.beginPath();
  context.arc(200, 200, 69, 0, 2 * Math.PI, false);
  context.fillStyle = '#FF0000';
  context.fill();
  context.lineWidth = 5;
  context.strokeStyle = '#FF0000';
  context.stroke();
} else if (randomShape == 3) {
  context.beginPath();
  context.arc(200, 200, 70, 0, Math.PI, false);
  context.closePath();
  context.lineWidth = 5;
  context.fillStyle = '#FFFFFF';
  context.fill();
  context.strokeStyle = '#FFFFFF';
  context.stroke();
}