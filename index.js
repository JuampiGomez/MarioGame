const canvas = document.querySelector("canvas");
const cxt = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.width = 50;
    this.height = 50;
  }

  draw() {
    cxt.fillStyle = "red";
    cxt.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new Player();
player.draw();
