# Övning - Sten, sax, påse med HTML och javascript

1. Skapa ett tomt textdokument.
2. Skriv in följande HTML-kod:

  ```
  <!DOCTYPE html>
  <html>
  <head>
    <title>Sten, sax och påse</title>
    <meta charset="utf-8">
  </head>
  <body>

  </body>
  </html>
  ```

3. Spara dokumentet i en katalog med namnet "index.htm".
4. Lägg till tre knappar innanför body taggen

  ```
  <button onclick="play('sten')">Sten</button>
  <button onclick="play('sax')">Sax</button>
  <button onclick="play('påse')">Påse</button>
  ```

5. Lägg till ett javascript-block med en funktion som nedan innanför head taggen

  ```
  <script>
  function play(choice){
    console.log(choice);
  }
  </script>
  ```

6. Öppna filen i Chrome. Öppna javascript-consolen. Tryck på knapparna och se att det man klickar på skrivs ut.

7. Lägg till en p-tagg efter knapparna.

  ```
  <p id="displayResult"></p>
  ```

8. Lägg till denna rad i funktionen:

  ```
  document.getElementById("displayResult").innerText = choice;
  ```

9. Ladda om sidan, klicka på knapparna igen. Nu skall värdet skrivas ut både i consolen och i sidan.

10. Lägg till detta i funktionen:

  ```
  var choices = ["sten","sax","påse"];
  var randomInt = Math.round(Math.random()*2);
  console.log(randomInt);
  var computerChoice = choices[randomInt];
  console.log(computerChoice);
  ```

11. Ladda om sidan och tryck på knapparna. Nu skall ett slumpvalt värde som är datorns val skrivas ut.

12. Ändra om i funktionen play så att den har denna struktur:

    ```
    function play(choice){
      var choices = ["sten","sax","påse"];
      var randomInt = Math.round(Math.random()*2);
      var computerChoice = choices[randomInt];

      var result = "Du valde " + choice + ". ";
      result += "Datorn valde " + computerChoice + ". ";

      document.getElementById("displayResult").innerText = result;
    }
    ```

13. Ladda om och prova knapparna, nu skall spelarens och datorns val visas på sidan.

14. Skapa if-satser för att avgöra vem som vinner innan sista raden där resultatet skrivs ut i funtionen.

    ```
    if (choice == "sten"){
      if (computerChoice == "sten"){
        result += "Oavgjort!";
      }
      else if (computerChoice == "sax"){
        result += "Du vann!";
      }
      else if (computerChoice == "påse"){
        result += "Datorn vann!";
      }
    }
    else if (choice == "sax"){
      if (computerChoice == "sten"){
        result += "Datorn vann!";
      }
      else if (computerChoice == "sax"){
        result += "Oavgjort!";
      }
      else if (computerChoice == "påse"){
        result += "Du vann!";
      }
    }
    else if (choice == "påse"){
      if (computerChoice == "sten"){
        result += "Du vann!";
      }
      else if (computerChoice == "sax"){
        result += "Datorn vann!";
      }
      else if (computerChoice == "påse"){
        result += "Oavgjort!";
      }
    }
    ```

15. Nu skall spelet vara klart.

Bygg vidare, lägg till bilder som man klickar på, tidsstyrning, dropdowns, multiplayer med tangentbordstryckningar, websocket, bygg in i en phonegap app osv...
