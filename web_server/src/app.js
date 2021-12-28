const path = require('path')
const express = require('express')
const hbs=require('hbs')
const request=require('postman-request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

const viewspath=path.join(__dirname,'../templetes/views')
const partialpath=path.join(__dirname,'../templetes/partials')

app.set("views", viewspath)
app.set('view engine', 'hbs');
hbs.registerPartials(partialpath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'omkar'
    })
})

app.get('/about', (req, res) => {
     res.render('about', {
        title: 'About Me',
        name: 'omkar'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        name:'omkar lapshetwar'
    })
})

app.get('/weather', (req, res) => {

if(!req.query.location){
   return res.send("error! to have to type the addres")
}


geocode(req.query.location,(error,{latitude,longitute,location}={})=>{
    if(error){
       return res.send(error)
    }
   
    forecast(latitude,longitute,(error,forcastdata)=>{
      
       if(error){
           return res.send(error)
       }
          console.log(location)
          console.log(forcastdata)
      res.send({
           forcastdata,
           location:location,
           
           address:req.query.location

       })
       
       })
    })





if(req.query.address)
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('*',(req,res)=>{

    res.render('404page',{
        title:'404 page',
        errormessage:'this help page is not available'
    })

})






app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})