require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const pathMatch = require('path-match')
const app = next({ dev });
const handle = app.getRequestHandler();
const http = require('http');
const MongoClient = require('mongodb').MongoClient;
const { parse } = require('url');

// Used for Kyle's power strip
const Switch = require('./server/components/Switch.js');
const Event = require('./server/components/Event.js');

const events = [];
const messages = [];
var switches;

var uri = process.env.DB_URI

var switchCollection;

function refreshSwitches(switchCollection){
    switchCollection.find().toArray(function(err, switchArray) {
        if(err) reject(err)
        else {
        switches = switchArray.map(each =>{
            return new Switch(each);
        });
        return switches;
        }
    })
}

function listen (db){
    var cursor = db.collection('messages').find({}, { tailable: true, awaitdata: true }),
      cursorStream = cursor.stream();


    cursorStream.on('data', function (data) {
      refreshSwitches(switchCollection);
    })
}

var fetchSwitches = new Promise((resolve,reject) =>{
    if (switches) resolve (switches);
  
    MongoClient.connect(uri, function(err, db) {
      switchCollection = db.collection('Switches');
      listen(db);
      resolve(refreshSwitches(switchCollection));
  
    });
})

async function getSwitch(string) {
    let switchArray = await fetchSwitches;
    return switches.filter((item)=>{
      return item['switch_num'] === string;
    })[0]
}
function passRequest(command, password, targetSwitches, req){
    for (let i=0; i<targetSwitches.length; i++){
      var currSwitch = targetSwitches[i];
      var id = currSwitch["switch_num"];
      var reducedId = "sw" + (Number(id.replace(/\D/g, '')) - 5)
  
      var options1 = {
        host: '10.0.1.5',
        port: 80,
        path: '/api/switches/' + id + "?password=" + process.env.PASS + "&&command=" + command,
        method: 'POST'
      };
      var options2 = {
        host: '10.0.1.4',
        port: 80,
        path: '/api/switches/' + reducedId + "?password=" + process.env.PASS + "&&command=" + command,
        method: 'POST'
      };
  
      if (Number(id[2]) <= 5) {
        var req = http.request(options1, function (res) {
          // console.log('STATUS: ' + res.statusCode); console.log('HEADERS: ' +
          // JSON.stringify(res.headers));
          res.setEncoding('utf8');
          // res.on('data', function (chunk) {   console.log('BODY: ' + chunk); });
        });
      } else if (Number(id[2]) > 5) {
        var req = http.request(options2, function (res) {
          // console.log('STATUS: ' + res.statusCode); console.log('HEADERS: ' +
          // JSON.stringify(res.headers));
          res.setEncoding('utf8');
          // res.on('data', function (chunk) {   console.log('BODY: ' + chunk); });
        });
      }
  
      req
        .on('error', function (e) {
          console.log('problem with request: ' + e.message);
        });
      req.end();
  
      if (command === "on") {
        currSwitch.setState(command);
      } else if (command === "off") {
        currSwitch.setState(command);
      } else {
        currSwitch.toggle();
      }
      console.log("postSwitch " + JSON.stringify(currSwitch));
    }
}

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.urlencoded({extended: true}))
    server.use(express.static(__dirname + '/public'));

    const route = pathMatch();

    // Routes for Kyle's Power Strip
    server.get('/strip', function (req, res) {
        res.sendFile('index');
    })
    
    // Switch Routes for API
    server.get('/api/switches', function (req, res) {
        fetchSwitches.then(switches=>{
            res.send(switches);
        })
    })

    server.get('/api/switches/:id', function (req, res) {
        getSwitch(req.params.id).then(foundSwitch=>{
          res.send(foundSwitch);
        })
    })

    server.post('/api/switches/all', function (req, res) {
        var command = req.query.command;
        var password = req.query.password;
        passRequest(command, password, switches, req);
        res.json(switches);
    })
    server.post('/api/switches/lights', function (req, res) {
        var lightIds = ["sw1", "sw7"];
        var lightSwitches = switches.filter((light)=>{
          return lightIds.indexOf(light.id) > -1;
        })
        var command = req.query.command;
        var password = req.query.password;
        passRequest(command, password, lightSwitches, req);
        res.json(switches);
    })

    server.post('/api/switches/:id', async function (req, res) {
        var command = req.query.command;
        var id = req.params.id;
        var password = req.query.password;
        var foundSwitch;
        await getSwitch(req.params.id).then(response=>{
          if (!command) {
            command = response.state === "off" ? "on" : "off";
          }
          foundSwitch = response;
        })
        await foundSwitch.setState(command).then(state=>{
          res.json(state);
        })
    })

    server.get('*', (req, res) => {
        return handle(req, res);
    })

    const handler = server.listen(process.env.PORT, (err) => {
        if (err) throw err;
        const host = handler.address().address;
        const port = handler.address().port;

        console.log(`Example app listening at http://${host}:${port}`);
    })
})