# Övning - Skapa ett flöde/"feed" med HTML5, CSS3 och Javascript

## Verktyg som behövs

* Textredigerare, t ex Notepad, Atom, Sublime eller Notepad++
* Webbläsare: Google Chrome

### Om HTML, CSS och Javascript

**HTML** (Hyper Text Markup Language) är ett kodspråk för att beskriva webbsidor. Med hjälp av taggar kan man förklara för en webbläsare vad den skall visa upp och hur sidan skall fungera.

**CSS** (Cascading Style Sheets) är ett kodspråk för att beskriva hur innehållet i webbsidan skall se ut. Som typsnitt, färger, avstånd och layout.

**Javascript** är ett scriptspråk som man kan använda för att addera funktionalitet och interaktivitet till webbsidor.

Alla dessa språk kan man skriva som text i ett enkelt textredigeringsprogram, t ex notepad på Windows. När man sedan öppnar dessa med en webbläsare läser den koden och visar upp resultatet.

Detta är i princip vad som alltid sker när man besöker alla webbsidor på nätet. Då skickas innehållet som text över internet till webbläsaren.

## Övingsmoment - Skapa upp en HTML-sida

1. Skapa ett nytt textdokument med följande innehåll:

```
<!DOCTYPE html>
<html>
<body>
    <h1>Min hemsida</h1>
</body>
</html>
```

2. Spara dokumentet i en katalog, t ex med namnet "index.html".
3. Öppna dokumentet i webbläsaren Google Chrome.
4. Resultatet skall vara en tom vit sida med en rubrik.

## Om taggar

Exemplet ovan är en minimal grund för ett HTML-dokument. Taggarna är de kommandon som står inom ``<`` och ``>`` tecknen; ``<html>``, ``<body>`` och ``<h1>``.

``<!DOCTYPE html>`` berättar att dokumentet är skrivet enligt standarden HTML5. HTML5 är den senaste officiella webbstandarden från World Wide Web Consortium (W3C).

Tecknet ``/`` används för att avsluta eller *stänga* en tagg. Alla taggar skall stängas, antingen genom en starttagg och en sluttagg, eller genom en självstängande tagg.

**Starttagg och sluttagg:**

```
<p>Här är taggen p för paragraf.</p>
```

**Självstängande tagg:**

```
<img src="bild.jpg" />
```

Lägg märke till skillnaden, var ``/`` tecknet är placerat.

## Om attribut

Taggen i exemplet ovan har ett *attribut*. I det fallet attributet **src**. Alla taggar kan ha flera attribut. Attributen används för att sätta olika värden för taggen.

I exemplet ovan är det taggen för att visa en bild, **img** och attributet **src** är det man använder för att säga *vilken* bild man vill visa.

Vika taggar man kan använda, och vilka attribut de kan ha finns bestämt i *HTML-standarden*. En standard som alla webbläsare skall följa.

På http://www.w3schools.com hittar man en bra förteckning över taggar, attribut och hur pass bra de stöds i de olika webbläsarna.

## Övningsmoment - Lägg till fler taggar

Lägg till fler taggar i sidan.

```
<html>
<head>
    <title>Min hemsida</title>
    <meta charset="utf-8" />
</head>
<body>
    <h1>Hello world!</h1>
    <p><time>Torsdag 19 maj</time></p>
    <p>Detta är ett stycke.</p>
    <p><a href="http://www.google.com">Detta är en länk</a></p>
</body>
</html>
```

En webbsida är uppdelad i ``<body>`` och ``<head>``. **Body** är där det synliga innehållet placeras, **head** innehåller information som inte är synlig i sidan, som t ex sidans titel som visas i fliken i webbläsaren.

I head ligger också **meta** taggen med attributet **charset** säger vilken teckenuppsättning som skall användas för att visa dokumentet, vilket är viktigt för svenska tecken som åäö.

I exemplet ovan har även taggen ``<p>`` lagts till, den är till för att visa ett stycke med text, och lägger till avstånd till element som ligger före och efter.

Taggen ``<a>`` är till för att skapa länkar, om kan leda till andra webbsidor.

Lägg till ytterligare taggar. Ladda om sidan i webbläsaren och se resultatet hela tiden.

## Övingsmoment - Välj ett tema
