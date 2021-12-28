const request=require('postman-request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')


const place=process.argv[2]

if(!place){
    console.log('please provide the address')
}else{
    geocode(place,(error,{latitude,longitute,location})=>{
        if(error){
           return console.log(error)
        }
       
        forecast(latitude,longitute,(error,forcastdata)=>{
          
           if(error){
               return console.log(error)
           }
              console.log(location)
              console.log(forcastdata)
           
           
           })
        })


}


 