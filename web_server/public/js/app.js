const weatherform=document.querySelector('form')

let para1=document.querySelector('#msg_1')
let para2=document.querySelector('#msg_2')


weatherform.addEventListener('submit',(e)=>{
const search=document.querySelector('input')
    e.preventDefault()
//console.log(search.value)
    const location=search.value
    para1.textContent='Loading...'
    para2.textContent=''

    fetch('http://localhost:3000/weather?location='+location).then((res)=>{

res.json().then((data)=>{
    if(data.error){
//console.log(data.error)
para1.textContent=data.error

    }
    para1.textContent=data.location
    para2.textContent=data.forcastdata
    console.log(data.location)
    console.log(data.forcastdata)
})
})

})