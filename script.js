var start = document.querySelector("#start")
var stop = document.querySelector("#stop")
var time = document.querySelector("#time")
var pause =document.querySelector("#pause")
var elapsedTime = 0
var interval

start.addEventListener("click", function () {
    elapsedTime=0
    if (!interval) {
        setchrono()
    }

})

pause.addEventListener("click", function(){
    if(interval){
        clearInterval (interval)
        interval=null
        pause.innerText="reprendre"
    }
    else{
        setchrono()
        pause.innerText="pause"
    }
    
})

stop.addEventListener("click", function () {
    clearInterval(interval)
    time.innerHTML = "00:00:00"
    elapsedTime = 0
    interval = null
})
function setchrono(){
    interval = setInterval(function () {
        elapsedTime++
        var heures=Math.floor(elapsedTime /3600).toString().padStart(2,0)
        var seconde= (elapsedTime %60).toString().padStart(2,0)
        var minutes= Math.floor((elapsedTime /60)%60).toString().padStart(2,0)
        // var seconde = elapsedTime % 3600
        // var minutes = elapsedTime / 60 %60
        // var heures = minutes / 60 %60
        time.innerHTML = heures + ":" + minutes + ":" + seconde
        console.log(elapsedTime)
    }, 1000)
}