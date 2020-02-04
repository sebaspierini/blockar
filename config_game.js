var config = {
    type: Phaser.AUTO,
    parent: document.getElementById("gameRight"),
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            //gravity: { y: -300 },
            debug: false
        }
    },  
    scene: {
        preload: preload,
        create: create,
        update: update        
    }
};

// declaro la creacion del juego
var game = new Phaser.Game(config);

// ubicacion sprite al comienzo
var sprite;
const initPosX = 68;
const initPosY = 544;
// ubicacion sobre el eje Y de los botones que ejecutan las acciones
var posYExecutables = 174;
var posYInstructions = 430;
//inicia tablero
var horizontal = 400;
var vertical = 300;
var width = 800;
var hight = 600;
var cellWidth = 134;
var cellhight = 120;
// movimiento en tablero
const moveX = 134;
const moveY = 120;
// sector botones
var playButton;
var resetButton;

// posicion variale del sprite
var posX;
var posY;
// linea de movimientos animados y avance
var timeline;

// tiempo del sprite para moverse de "a" a "b"
var tiempoSprite = 1000;
//titulo de juego terminado
var title;

var star;

var element;

var myInterpreter = null;
var runner;

var latestCode = '';

var goToTheRight;
var goToTheLeft;

var yo;