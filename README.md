# mde-web-embed

Markdown editor across Desktop / Web / App platform.

## How to use

**1. Download build path**

[https://github.com/chenxianming/mde-web-embed-pc/releases/download/Beta/mde.zip](https://github.com/chenxianming/mde-web-embed-pc/releases/download/Beta/mde.zip "https://github.com/chenxianming/mde-web-embed-pc/releases/download/Beta/mde.zip")


**2. Put on any web path**

``` 
<iframe id="test" src="/build/index.html" width="500" height="600" />
``` 

**3. Submit code**

##### Click "save" icon

see

``` 
// export variable
document.getElementById('test').contentWindow.export

// orginal code
document.getElementById('test').contentWindow.Editor.getCode()
``` 

If you want to customize get export method.

Bind event to 

``` 
document.getElementById('test').contentWindow.document.querySelectorAll('.BIconWrap')

``` 

Or edit config.json

``` 
"getResult":"window.getResult = ( code ) => { window.export = code; return code; }"
``` 

rebuild path


## Home page

[mde.coldnoir.com](http://mde.coldnoir.com "mde.coldnoir.com")

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development

### Installation

- make sure Nodejs environment >= V8.0
- support ECMA6

``` 
git clone https://github.com/chenxianming/mde-web-demo.git
    
npm install
``` 

### Run

``` 
npm start
``` 

- Browser editor on 
[http://127.0.0.1:3000](http://127.0.0.1:3000 "http://127.0.0.1:3000")


### Build minify and static page

``` 
npm run build
``` 


Generation asset path to ProjectPath/buld/, you can upload directory to any static server for use HTML5 specify.


## Eject webpack project

``` 
npm run eject
``` 


## Themes redesign

1. Make theme directory in src/themes.
2. Edit src/config.json
3. Rplace theme value to your theme pathname
4. Enjoy development


## Other platform 
building

## Creadit

[www.coldnoir.com](http://www.coldnoir.com "www.coldnoir.com")
