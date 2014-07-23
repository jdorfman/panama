Panama (Beta)
==========

![Panama Logo](https://raw.githubusercontent.com/MaxCDN/panama/jdorfman2/public/img/panama-logo-small.png)

A WIP Demo Project for the [jQuery &amp; MaxCDN Hackathon](http://events.jquery.org/2014/chicago/#program) in Chicago. 

### Requirements 

* [node.js](http://nodejs.org/download)
* [MaxCDN Account](https://cp.maxcdn.com) & [API Key](https://cp.maxcdn.com/account/api/create)
* [maxcurl](https://github.com/MaxCDN/maxcli#prebuilt-binaries) 
* [Arduino Uno](http://arduino.cc/en/Main/arduinoBoardUno)
 * [IDE](http://arduino.cc/en/main/software#toc1)
 * [Breadboard](http://en.wikipedia.org/wiki/Breadboard)
 * [LED Lights](http://duino4projects.com/wp-content/uploads/2013/04/Arduino-LED-light-bar.jpg)

### Getting Started

* Plugin your Arduino
* Open the Arduino IDE
 * Choose > `File` > `Examples` > `Firmata` > `StandardFirmata`
 * ![Arduino IDE](https://raw.githubusercontent.com/MaxCDN/panama/master/public/img/arduino-setup.jpg)
 * Click `Upload`
 * ![Upload](https://raw.githubusercontent.com/MaxCDN/panama/master/public/img/arduino-upload.png)
  * **Etc.:**
   * [Prefernces](https://raw.githubusercontent.com/MaxCDN/panama/master/public/img/arduino-preferences.png)
   * [Success Message](https://raw.githubusercontent.com/MaxCDN/panama/master/public/img/arduino-preferences.png)
* Move the `maxcurl` binary and put it in your PATH e.g. `/usr/local/bin/`
* Copy `maxcdn.yml.EXAMPLE` to `~/.maxcdn.yml` and update the file with your API Credentials.
* `$ git clone git@github.com:MaxCDN/panama.git`
* `cd && panama && npm install`
* `npm start`

### Demo

* [v.001](http://instagram.com/p/qs0csFl143/)
* [v.003](https://twitter.com/jdorfman/status/491748960646602752)