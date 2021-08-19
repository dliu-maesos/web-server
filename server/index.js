#!./node_modules/.bin/ts-node


const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express()
const port = 3005

let books = [];



app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api', (req, res) => {
    const book = req.body;

    // output the book to the console for debugging
    console.log(book);
    books.push(book);
    books.sort(function (a, b) {
        return a.priority - b.priority || a.id - b.id;
    });
    res.send('Book is added to the database');
});

app.get('/api', (req, res) => {
    res.json(books);
});

app.listen(port, () => console.log(`listening on port ${port}!`));


// fs = require('fs');

// const express = require('express')
// const http = require('http')
// const os = require('os')

// const app = express()
// const Influx = require('influx')
// const port = 3005

// // Connect to a single host with a full set of config details and
// // a custom schema
// const influx = new Influx.InfluxDB({
//   database: '896542134830066',
//   host: 'localhost',
//   port: 8086,
//   username: 'admin',
//   password: 'admin'
// })

// results = []

// const writeStream = fs.createWriteStream('file.txt');
// const pathName = writeStream.path;
  
// var sensors = {
//     "8965421348300660000": null,
//     "8965421348300660001": null,
//     "8965421348300660002": null,
//     "8965421348300660003": null,
//     "8965421348300660004": null,
//     "8965421348300660005": null,
//     "8965421348300660006": null,
//     "8965421348300660007": null,
//     "8965421348300660008": null,
//     "8965421348300660009": null,
//   }
  
// let countArr = {};
// let newArr = {};

// for (let item of Object.keys(sensors)) {
//     countArr[item + " count"] = 0;
// }

// // JS MONTHS ARE OFF BY 1! 
// var start = new Date('2021-05-07T00:00:09.000Z');  
// var end = new Date('2021-05-07T00:05:09.000Z')
// var add_minutes =  function (dt, minutes) {
//     return new Date(dt.getTime() + minutes*60000);
// }
// var counter = 5
// console.log(start.toISOString())
// // console.log(start)
// // console.log(add_minutes(start, counter));

// // sensors = {
// //     "8965421348300660000":8.44,"8965421348300660001":null,"8965421348300660002":8.01,"8965421348300660003":7.72,"8965421348300660004":7.93,"8965421348300660005":7.69,"8965421348300660006":7.89,"8965421348300660007":8.13,"8965421348300660008":null,"8965421348300660009":7.16


// // } 

// // countArr = {
// //     "8965421348300660000 count":0,"8965421348300660001 count":1,"8965421348300660002 count":0,"8965421348300660003 count":0,"8965421348300660004 count":0,"8965421348300660005 count":0,"8965421348300660006 count":0,"8965421348300660007 count":0,"8965421348300660008 count":1,"8965421348300660009 count":0
// // }

// console.log('hi')
// setInterval(function(){ 
//     var today = new Date();  
//     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     console.log("starting at: " + time)
//     query = 'select temperature from leaf where time>=\'' + (add_minutes(start, counter)).toISOString() + '\' AND time<\'' + (add_minutes(end, counter)).toISOString() + '\''
//     query2 = 'select * from leaf where time>\'2021-05-07\''


//     influx.query(query).then(res => {
//         res.forEach(value => writeStream.write(`${JSON.stringify(value)}\n`));

//         writeStream.on('finish', () => {
//         console.log(`wrote all the array data to file ${pathName}`);
//         });

//         // handle the errors on the write process
//         writeStream.on('error', (err) => {
//             console.error(`There is an error writing the file ${pathName} => ${err}`)
//         });

//         writeStream.end();

//         for (let item of res) {
//             newArr[item.sensor_id] = item.temperature;
//             sensors[item.sensor_id] = item.temperature
//         }

//         for (let item in countArr) {
//             if (countArr[item] > 0) {
//                 if (Object.keys(newArr).includes(item.slice(0, -6))){
//                     countArr[item] = 0
//                 }
//             }
//         }

//         var difference = Object.keys(sensors).filter(x => Object.keys(newArr).indexOf(x) === -1);
//         // console.log(difference)

//         for (let item of difference) {
//             if (countArr[item + " count"] >= 2) {
//                 console.log(item + " missed more than 3 packets!\n\n\n\n")
//             }
//             countArr[item + " count"] += 1;
//         }
//         console.log("new\n" + JSON.stringify(newArr))
//         console.log("sensors\n" + JSON.stringify(sensors))    
//         console.log("count\n" + JSON.stringify(countArr))    
//         counter += 5
//     })
// }, 3000);



