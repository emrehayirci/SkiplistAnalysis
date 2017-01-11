# SkiplistAnalysis
## What is it?
It is a simple web application that written in NodeJS' Express Framework. 
## What does it do?
It repeates these steps when a request hits:
- Creates a list of number that is going to be inserted to skiplist,
- Insert the numbers corresponding to desired way(ordered, randomly, reverse ordered)
- Search the existing numbers in it
- Search the nonexisting numbers in it
- Delete the numbers
- Get the measurement values in high resolution time

## How to edit this?
It is simple...
- /skiplist.js - implementation of skiplist
- /analysis.js - make operations on skiplist, measure it costs, return array of expreiment result
- /test/test.js - There is test. Testing framework is mocha.js
- /public/javascripts/graphit.js - Visualizations and graph makings of arrays that will be displayed to the user

## Travis and WebConfig
Yess! you guessed correctly.
It atached to Travis https://travis-ci.org/emrehayirci/SkiplistAnalysis and it automatically deploys to Azure Web Apps. In order to make it attach to IIS your node app you have to write web.config file. You can use this web config in your other projects if you like

## Does it work properly?
It works but test results was not satisfying. Send "PR" and lets fix this :)

