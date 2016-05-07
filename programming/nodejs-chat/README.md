# Övning - Skapa en webbchatt med Node.js och Socket.io

## Delmoment - Skapa en enkel node.js webbserver

1. Skapa en ny textfil, skriv in följande kod:
  ```
  var express = require('express');
  var app = express();

  app.get("/", function(req, res){
    res.send('Hello world');
  });

  app.listen(8080);
  ```
2. Spara filen som "app.js"
3. Starta en terminal, cd:a in i katalogen.
4. Installera beroendet express med "npm install express"
5. Starta servern med kommandot "node app.js"
6. Surfa till http://localhost:8080
7. Resultatet skall bli att texten visas
8. Stäng av servern med ctrl + c

## Todo:

## Utöka med att serva en html indexfil
## Lägg till socket io, utöka koden ett steg i taget
