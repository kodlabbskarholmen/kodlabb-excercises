# Raspberry PI med rörelsesensor och websockets

## Material

* Raspberry PI, valfri modell + minneskort
* PIR rörelsesensor, t ex http://www.kjell.com/se/sortiment/el-verktyg/elektronik/arduino/moduler/rorelsedetektor-for-arduino-p87892

## Installation

1. Ladda ner image för Raspbian Jessie Lite https://www.raspberrypi.org/downloads/
2. Skriv imagen till minneskortet
3. Boota upp Raspberry:n med skärm, tangentbord etc
4. Kör "sudo raspi-config"
5. Byt lösenord
6. Enablea SSH
7. SSH:a in till raspberryn från en annan dator som pi ```ssh pi@XXX.XXX.X.X```
8. Kör ```sudo apt-get update``` och ```sudo apt-get upgrade```
9. Installera node:
```
wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb
```
10. Kontrollera att node är installerat genom att skriva ```node -v```
11. Skapa katalogen /opt/deploy/
12. Sätt rätt ägare på deploy-katalogen med kommandot ```sudo chown -R pi /opt/deploy/```
13. Skapa katalogen pir-websockets i /opt/deploy/

## Delmoment - kolla hur rörelsesensorn fungerar

1. Koppla in rörelsesensorn med tre kablar, en till 5V, en till GND och en till PIN7
  ```
  Raspberry 1 pins
  __________
         o X | <- 5V
         o o |
         o X | <- GND
         o o |
         o o |
         o o |
         o o |
         o o |
         o o |
         o o |       
         o o |
         o o |
         o X | <- PIN 7
             |

  ```
2. På raspberryn, i katalogen pir-websockets, skriv ```nano app.js```. Detta startar redigeringsprogrammet nano och en fil som heter app.js.
3. Skriv in denna kod:
  ```
  var gpio = require("gpio");

  var gpio7 = gpio.export(7, { direction: "in" });

  gpio7.on("change", function(val) {
    console.log(val)
  });
  ```
4. Avsluta nano och spara filen genom att trycka CTRL+X och väja Y för att Spara
5. Installera node biblioteket gpio genom att skriva ```npm install gpio```
6. Kör node applikationen med ```sudo node app.js```
7. Nu skall 1 skrivas ut i consolen när en människa rör sig framför sensorn, och 0 när någon inte längre rör sig.
8. Avsluta applikationen med CTRL + C.

## Delmoment - lägg till express, socket.io och skapa en html-sida

1. Installera npm paketen express, http och socket.io med npm install.
2. Lägg till dem och konfigurera upp dem i node.js appfilen
  ```
  var express = require('express');
  var http = require('http');
  var socketio = require('socket.io');
  var gpio = require("gpio");

  var app = express();
  var server = http.Server(app);
  var io = socketio(server);
  ```
3. Lägg till en route för index-filen:
  ```
  app.get("/", function(req, res){
    res.sendFile(__dirname + '/index.html');
  });
  ```
4. Lägg till socket io emits i gpio change callbacken:
  ```
  gpio7.on("change", function(val) {
    console.log(val)
    if (val == 0) {
      io.emit('movement', false);
    }
    else{
      io.emit('movement', true);
    }
  });
  ```
5. Skapa en html-sida där detta script finns med
  ```
    <script src="/socket.io/socket.io.js"></script>
    <script>
      var socket = io();
      socket.on('movement', function(val){
        console.log(val);
      });
    </script>
  ```
6. Starta node applikationen, surfa till port 8080 på raspberryn. Öppna inspectorn. Nu skall true och false skrivas ut i consolen när någon rör sig.

## TODO:

## Delmoment - visa status på webbsidan
