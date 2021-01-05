var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var moment = require('moment');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const rivers = require("./rivers.js");
const flowDefaults = require("./flowDefaults.js");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

riverTimeStart = "2020-01-01";
nUpdated = 0;
totalDays = 0;

// startDate = "2020-06-04";
startDate = new Date(2020,0,1);
startTime = startDate.getTime();

dataURL = "https://waterservices.usgs.gov/nwis/iv/?format=json";
dataParams = "parameterCd=00060,00065&siteStatus=all"
var dataSites = "sites=";
for (var i=0; i<river.length; i++) {
  if (i > 0) {
    dataSites += ",";
  }
  dataSites += river[i].id;
}
dataURL = dataURL+"&"+dataSites+"&"+dataParams;

// index page 
app.get('/', function(req, res) {
	res.render('pages/index');
});

// Clock page 
app.get('/Clock', function(req, res) {
	res.render('pages/Clock',{ river: river});
});

// Rivers page 
app.get('/Rivers', function(req, res) {
	res.render('pages/Rivers');
});

// River page 
app.get('/River', function(req, res) {
  rNum = req.query.r
  if (rNum < river.length) {
    var selectedRiver = river[rNum] 
    res.render('pages/River',{ selectedRiver: selectedRiver} );
  }
});

// Observations page 
app.get('/Observations', function(req, res) {
	res.render('pages/Observations');
});

// About page 
app.get('/About', function(req, res) {
	res.render('pages/About');
});


// Code page 
app.get('/Code', function(req, res) {
	res.render('pages/Code');
});

// Projection page 
app.get('/Projection', function(req, res) {
	res.render('pages/Projection');
});
// Projection2 page 
app.get('/Projection2', function(req, res) {
	res.render('pages/Projection2');
});

// JSON data
app.get('/data', function(req, res) {
	res.render('pages/Data',{ riverJSON: river});
});


// getData 
app.get('/getData', function(req, res) {
	res.render('pages/getData',{ riverJSON: river});
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

function getRiverData() {
  var xhr = new XMLHttpRequest();
  var sites = "";
  for (var i=0; i<river.length; i++) {
    sites = sites + river[i].id
    if (i < river.length-1) {
      sites = sites + ",";
    }
  }
  dataURL = "https://waterservices.usgs.gov/nwis/iv/";
  dataURL += "?format=json&sites="+sites+"&period=P1D&parameterCd=00060";
	xhr.open("GET",dataURL,true);
	xhr.onreadystatechange = function(e) {
		if(this.readyState ==4 && this.status == 200) {
      if(this.status == 200) {
        var t = xhr.responseText;
        var r =  JSON.parse(t);
        note = r.value.queryInfo.note;
        for (var n=0; n<note.length; n++) {
          if (note[n].title == "requestDT") {
            var requestDate = note[n].value;
            temp = Date.parse(requestDate);
            tempTime = new Date(temp);
            break;
          }
        }
        var t = new Date();
        var monthNum = t.getMonth();
        var dayNum =t.getDate()-1;
        riverInfo = r.value.timeSeries;
        for (var i=0; i<riverInfo.length; i++) {
          siteCode = riverInfo[i].sourceInfo.siteCode[0].value;
          variableCode = riverInfo[i].variable.variableCode[0].value;
          for (var j=0; j<river.length; j++) {
            if (river[j].id == siteCode && river[j].variable == variableCode) {
              var nv = riverInfo[i].values[0].value.length-1;
              if (nv < 0) {
                // no values for this river in the last 24 hours
                //
                // keep using last value...
                river[j].value = riverFlow[j][monthNum][dayNum];
                river[j].currentFlow = riverFlow[j][monthNum][dayNum];
              } else {
                river[j].value = parseFloat(riverInfo[i].values[0].value[nv].value);
                river[j].currentFlow = parseFloat(riverInfo[i].values[0].value[nv].value);
                if (river[j].value < 0) {
                river[j].value = riverFlow[j][monthNum][dayNum];
                river[j].currentFlow = riverFlow[j][monthNum][dayNum];
                }
                river[j].timestamp = riverInfo[i].values[0].value[nv].dateTime;
                break;
              }
            }
          }
        }   
      } else {
        console.log("xmlHttpRequest error: "+this.status);
      }
		}
	}
  xhr.send();
  updateInterval = 15*60*1000;
  setTimeout(getRiverData,updateInterval)
  // Update historical data every 24 hours, after midnight
  var now = moment().format("HHmmss");
  if (now >= "123000" && now <= "124500") {
    updateHistory();
  }
}

function updateHistory() {
  for (var i=0; i<river.length; i++) {
    getHistoricalData(i);
  }
  setTimeout(checkUpdates,1000);
}

function getHistoricalData(i) {
  var xhr = new XMLHttpRequest();
  dataURL = "https://waterdata.usgs.gov/nwis/dv";
      dataURL += "?cb_00060=on&format=rdb&site_no="+river[i].id+"&referred_module=sw&period=&";
      dataURL += "begin_date="+riverTimeStart+"&end_date="+moment().format("YYYY-MM-DD");
	xhr.open("GET",dataURL,true);
	xhr.onreadystatechange = function(e) {
		if(this.readyState ==4 && this.status == 200) {
      if(this.status == 200) {
        calculateHistorical(i,xhr.responseText);
        }  
    }
  }
  xhr.send();
}

function calculateHistorical(i,responseText) {
  sequence = river[i].sequenceNumber;
  sDT = moment(riverTimeStart);
  dt = sDT.format('YYYY-MM-DD');
  now = moment();
  now = now.subtract(1,'d');
  yesterday = now.format('YYYY-MM-DD');
  var t = responseText.split("\n");
  totalFlow = 0;
  totalDays = 0;
  for (var n=0; n<t.length; n++) {
    var tt = t[n].split("\t");
    if (tt[0] == "USGS") {
      while (tt[2] >= dt) {
        var v = parseInt(tt[3]);
        if (Number.isInteger(v)) {
          v = parseInt(tt[3]);
        } else {
          var m = sDT.month();
          var d = sDT.date()-1;
          v = riverFlow[sequence][m][d];
        }
        totalFlow += v;
        totalDays += 1;
        sDT = sDT.add(1,'d');
        dt = sDT.format('YYYY-MM-DD');
      }
     }
    }
    while (dt < yesterday) {
      var m = sDT.month();
      var d = sDT.date()-1;
      v = riverFlow[sequence][m][d];
      totalFlow += v;
      totalDays += 1;
      sDT = sDT.add(1,'d');
      dt = sDT.format('YYYY-MM-DD');
    }
    meanFlow = totalFlow/totalDays;
    mean = river[sequence].meanFlow;
    rate = meanFlow/mean;
    river[i].offset = rate;
    sDT = moment(riverTimeStart);
    newDate = sDT.add(totalDays*rate*24*60*60,'s').format('YYYY-MM-DD hh.mm.ss');
    nUpdated = nUpdated+1;
}

function checkUpdates() {
  if (nUpdated < river.length) {
    setTimeout(checkUpdates,1000);
  } else {
    var total = 0;
    for (var i=0; i<river.length; i++) {
      total = total + river[i].offset;
    }
    meanOffset = total/river.length;
    sDT = moment(riverTimeStart);
    newDate = sDT.add(totalDays*meanOffset*24*60*60,'s').format('YYYY-MM-DD hh.mm.ss');
  }
}

module.exports = app;

updateHistory();
getRiverData();