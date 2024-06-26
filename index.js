const canvas = document.querySelector("canvas");
const cxt = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 0.5;

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 50;
    this.height = 50;
  }

  draw() {
    cxt.fillStyle = "red";
    cxt.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y < canvas.height) {
      this.velocity.y += gravity;
    } else this.velocity.y = 0;
  }
}

const player = new Player();

function animate() {
  cxt.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  window.requestAnimationFrame(animate);
}

animate();
