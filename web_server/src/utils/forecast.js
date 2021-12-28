const request=require('postman-request')

const forecast=(lat,long,callback)=>{

const forecasturl='http://api.weatherstack.com/current?access_key=f5fa5c641db50a4250ba251eb164f872&query='+(lat) +','+(long) +'%27&units=f'

request({url:forecasturl,json:true},(error,res)=>{

    if(error){
        callback('unable to connect with the network',undefined)
    }else if(res.body.error){
        callback('unable to find the location',undefined)
    }else{
      callback(undefined,'the current temp is ' +res.body.current.temperature +' and it feels like '+res.body.current.feelslike)

    }


})

}
module.exports=forecast