const request=require('postman-request')


const geocode=(address,callback)=>{

    const geourl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoib21rYXJsYXBzaGV0d2FyIiwiYSI6ImNreGcxZHYzMjQ1aWwyb3BtdWllZjBmMnUifQ.yn5BH27yN6N_GTAbX5ihDA&limit=1'

    request({url:geourl,json:true},(error,res)=>{

        if(error){
            callback('unable to connect with the network',undefined)
        }else if(res.body.message === 'Not Found' || res.body.features.length===0){
            callback('unable to find the location',undefined)
        }else{
            callback(undefined,{
                latitude:res.body.features[0].center[1],
                longitude:res.body.features[0].center[0],
                location:res.body.features[0].place_name
            })
        }

    })

 }

 module.exports=geocode;