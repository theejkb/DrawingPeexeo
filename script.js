// const canvas = document.querySelector('canvas');
// const context = canvas.getContext('2d');

// canvas.width = innerWidth;
// canvas.height = innerHeight;



// class Player {
//     constructor(x, y, radius, color) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.color = color;
//     }

//     draw() {
//         context.beginPath();
//         context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         context.fillStyle = this.color;
//         context.fill();
//     }
// }

// class Projectile {
//     constructor(x, y, radius, color, velocity) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.color = color;
//         this.velocity = velocity;
//     }
//     draw() {
//         context.beginPath();
//         context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         context.fillStyle = this.color;
//         context.fill();
//     }
//     update() {
//         this.draw()
//         this.x = this.x + this.velocity.x;
//         this.y = this.y + this.velocity.y;
//     }
// }

// class Enemy {
//     constructor(x, y, radius, color, velocity) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//         this.color = color;
//         this.velocity = velocity;
//     }
//     draw() {
//         context.beginPath();
//         context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         context.fillStyle = this.color;
//         context.fill();
//     }
//     update() {
//         this.draw()
//         this.x = this.x + this.velocity.x;
//         this.y = this.y + this.velocity.y;
//     }
// }

// // Center
// const x = canvas.width / 2;
// const y = canvas.height / 2;



// const player = new Player(x, y, 15, 'white');
// const projectiles = [];
// const enemies = [];

// let animationId;

// function animate() {

//     animationId = requestAnimationFrame(animate);
//     context.fillStyle = 'rgba(0,0,0,0.1)';
//     context.fillRect(0, 0, canvas.width, canvas.height);
//     player.draw();

//     projectiles.forEach((projectile, index) => {
//         projectile.update();

//         if (projectile.x + projectile.radius < 0 || projectile.x - projectile.radius > canvas.width || projectile.y + projectile.radius < 0 || projectile.y - projectile.radius > canvas.height) {
//             setTimeout(() => {
//                 projectiles.splice(index, 1);
//             }, 0)
//         }
//     });

//     enemies.forEach((enemy, index) => {
//         enemy.update();

//         const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
//         //End game
//         if (dist - enemy.radius - player.radius < 1) {
//             cancelAnimationFrame(animationId);
//         }


//         projectiles.forEach((projectile, index2) => {
//             const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
//             //projectiles touch ennemy
//             if (dist - enemy.radius - projectile.radius < 1) {
//                 if (enemy.radius - 10 > 10) {
//                     gsap.to(enemy, {
//                         radius: enemy.radius - 10
//                     })
//                     setTimeout(() => {
//                         projectiles.splice(index2, 1);
//                     }, 0)
//                 } else {
//                     setTimeout(() => {
//                         enemies.splice(index, 1);
//                         projectiles.splice(index2, 1);
//                     }, 0)
//                 }
//             }
//         });
//     })
// }

// function spawnEnemies() {
//     setInterval(() => {
//         const radius = Math.random() * (50 - 10) + 10;

//         let x;
//         let y;

//         if (Math.random() < 0.5) {
//             x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
//             y = Math.random() * canvas.height;
//         } else {
//             x = Math.random() * canvas.width;
//             y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;

//         }
//         const color = `hsl(${Math.random() * 360}, 50%, 50%)`;
//         const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
//         const velocity = {
//             x: Math.cos(angle),
//             y: Math.sin(angle)
//         }
//         enemies.push(new Enemy(x, y, radius, color, velocity));
//     }, 1000)
// }

// addEventListener('click', (e) => {
//     console.log(projectiles);
//     const angle = Math.atan2(e.clientY - y, e.clientX - x);
//     const velocity = {
//         x: Math.cos(angle) * 4,
//         y: Math.sin(angle) * 4
//     }
//     console.log(angle);
//     projectiles.push(new Projectile(x, y, 5, 'white', velocity));
// });


// animate();
// spawnEnemies();


// DRAWING 

var canvas = document.getElementById('art');
var ctx = canvas.getContext('2d');
var width = innerWidth;
var height = innerHeight;
var lineWidth = ('#stroke-width').html;
ctx.lineWidth = lineWidth;

canvas.height = height;
canvas.width = width;
canvas.addEventListener('mousedown', function (e) {
    this.down = true;
    this.X = e.pageX;
    this.Y = e.pageY;
}, 0);
canvas.addEventListener('mouseup', function () {
    this.down = false;
}, 0);
canvas.addEventListener('mousemove', function (e) {
    this.style.cursor = 'pointer';
    if (this.down) {
        ctx.beginPath();
        ctx.moveTo(this.X, this.Y);
        ctx.lineCap = 'round';
        ctx.lineTo(e.pageX, e.pageY);
        ctx.stroke();
        this.X = e.pageX;
        this.Y = e.pageY;
    }
}, 0);




// var canvas = document.getElementById('art');
// var ctx = canvas.getContext('2d');

// function getMousePos(canvas, evt) {
//     var rect = canvas.getBoundingClientRect();
//     return {
//         x: evt.clientX - rect.left,
//         y: evt.clientY - rect.top
//     };
// }

// function mouseMove(evt) {
//     var mousePos = getMousePos(canvas, evt);
//     ctx.lineTo(mousePos.x, mousePos.y);
//     ctx.lineCap = 'round';
//     ctx.stroke();
// }

// canvas.addEventListener('mousedown', function (evt) {
//     var mousePos = getMousePos(canvas, evt);
//     ctx.beginPath();
//     ctx.moveTo(mousePos.x, mousePos.y);
//     ctx.lineCap = 'round';
//     evt.preventDefault();
//     canvas.addEventListener('mousemove', mouseMove, false);
// });

// canvas.addEventListener('mouseup', function () {
//     canvas.removeEventListener('mousemove', mouseMove, false);
// }, false);

// document.getElementById('reset').addEventListener('click', function () {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }, false);


// Change Color
$('#color').change(function () {
    console.log($(this).val());
    ctx.strokeStyle = $(this).val();
})

// Change Size
$('#plus').click(function () {
    $('#stroke-width').html((function (i, val) {
        if (val < 19) {
            val = val * 1 + 1;
            ctx.lineWidth = val;
        } else {
            $('#plus').prop('disabled', true);
        }

        if (val <= 2) {
            $('#minus').prop("disabled", false);
        }
        return val;
    }));

})

$('#minus').click(function () {
    $('#stroke-width').html((function (i, val) {
        if (val > 1) {
            val = val * 1 - 1;
            ctx.lineWidth = val;
        } else {
            console.log('00000');
            $('#minus').prop("disabled", true);
        }
        if (val >= 19) {
            $('#plus').prop("disabled", false);
        }
        return val;
    }));
})

$('#reset').click(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})




