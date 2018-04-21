var socket;
var global = require('./global.js');

//Get screen dimensions
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

function connect() {

    //Production
    // socket = io.connect(global.SERVER_IP);

    //Debugging and Local serving
    if(!socket) {
        console.log('Failed to connect, falling back to localhost');
        socket = io.connect(global.LOCAL_HOST);
    }
    
    if(socket !== null)
        SetupSocket(socket);

};

window.onload = function() {
    'use strict';
    
    var btn1 = document.getElementById('1');
    btn1.onclick = buttonClick(btn1.id);
    connect();
};

function buttonClick(id) {
    console.log('click');
    if(id === 1) {
        console.log(1);
        this.socket.emit('command', {cmd: 'LED0ON'});
    }
}

function SetupSocket(socket) {
    //Debug
    console.log('Socket:',socket);

}