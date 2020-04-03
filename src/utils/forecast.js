const request = require('request')

const forecast = (latitude,longitude,callback) => {
    const url = 'https://api.darksky.net/forecast/cc6b292ff02f906700a3e05404c69f5f/'+latitude+','+longitude


    request({ url, json: true }, (error, {body}) => {
         if(error){
           callback('Unable to connect to wether Service',undefined)
         }
         else if(body.error){
            callback('Unable to find location',undefined)
         }
         else{
            callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a '+ body.currently.precipProbability + '% chance of rain.' )
          
         } 
            })
}
module.exports = forecast