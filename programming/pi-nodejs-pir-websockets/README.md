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
10. Skapa katalogen /opt/deploy/
11. Kör ```sudo chown -R pi /opt/deploy/```
12. Skapa katalogen /opt/deploy/pir-websockets
13. Koppla in rörelsesensorn med tre kablar, en till 5V, en till GND och en till PIN7
14. Hämta koden från github eller skriv in den steg för steg.
15. Starta appen med ```node app.js```
16. Surfa till X.X.X.X:8080 på raspberryn
17. Nu skall en webbsida visa status på rörelse från sensorn
