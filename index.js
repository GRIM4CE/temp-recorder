const weather = require('weather-js');
const cron = require('node-cron');
const fs = require('fs');

cron.schedule('* 1 * * *', function(){
  weather.find({search: 'Chicago, IL', degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);

    fs.appendFile('tempature-record.txt',
    `${result[0].current.temperature} degrees at ${result[0].current.observationtime}
  `, function (err) {
      if (err) {
        // append failed
      } else {
        // done
      }
    })
  });
});
