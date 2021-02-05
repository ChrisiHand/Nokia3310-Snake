var canvas = document.getElementById('canvas');
var canvas2d = canvas.getContext('2d');

var canvasHeight = canvas.height;
var canvasWidth = canvas.width;

var snakeW = 50;
var snakeH = 50;

var Food = {
    x:Math.floor(Math.random() * 30) * 10 + 50,
    y:Math.floor(Math.random() * 30) * 10 + 50
};

var Snake = [];
var Snakelengh = 4;
var direction = "right";


// read useres direction


document.addEventListener("keydown", getDirection);

function getDirection(e){
    if(e.keyCode == 37 && direction != "right"){
        direction = "left";
    }else if(e.keyCode == 38 && direction != "down"){
        direction = "up"
    }else if(e.keyCode == 39 && direction != "left"){
        direction = "right";
    }else if(e.keyCode == 40 && direction != "up"){
        direction = "down";
    }
}
for(var i = Snakelengh-1; i>=0; i--){
    Snake.push(
        {x:i,
        y:0
        }
    );
}
//console.log(Snake);
function DrawFood(x,y){
    canvas2d.fillStyle = "Red";
    canvas2d.fillRect(x, y, 10, 10);
}

function DrawSnake(x, y){
    x = x * 10;
    y = y * 10;
    canvas2d.fillStyle = "white";
    canvas2d.fillRect(x,y,10,10);
}

function checkColl(x, y, array){
    for(var i = 0; i<array.length; i++){
        if(x == array[i].x && y == array[i].y){

        }
    }
}


function Draw(){
    canvas2d.clearRect(0,0,400,400);
    DrawFood(Food.x, Food.y);
    for(var i = 0;i<Snake.length;i++){
        let x = Snake[i].x;
        let y = Snake[i].y;
        DrawSnake(x,y);
    }
        //Snake head
        var SnakeX = Snake[0].x;
        var SnakeY = Snake[0].y;

        if(direction == "left"){
            SnakeX--;
        }
        else if(direction == "up"){
            SnakeY--;
        }
        else if(direction == "right"){
            SnakeX++;
        }
        else if(direction == "down"){
            SnakeY++;
        }

        if(SnakeX < 0 || SnakeY < 0|| SnakeX >= canvasWidth/10 || SnakeY >= canvasWidth/10 || 
            checkColl(SnakeX, SnakeY, Snake)){
                showScore();
            }
        if(Snake[0].x * 10 == Food.x && Snake[0].y * 10 == Food.y){
            Food = {
                x:Math.floor(Math.random() * 30) * 10 + 50,
                y:Math.floor(Math.random() * 30) * 10 + 50
            };
            DrawFood();
        }else{
            Snake.pop();
        };

        //create new Head
        var newHead = {
            x : SnakeX,
            y : SnakeY
        };
        Snake.unshift(newHead);
}

    var Intervall = setInterval(Draw,60);

        canvas2d.font = "30px Arial";
        canvas2d.fillText("Game over", 120, 200);