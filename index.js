let geturl = document.getElementById("geturl")
let display = document.getElementById("display")
let qrimage = document.getElementById("qrimage")

function clicking(){
if(geturl.value.length > 0){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+geturl.value
}else{
    geturl.classList.add("error")
    setTimeout(()=>{
        geturl.classList.remove("error")
    },1000)
}
}
