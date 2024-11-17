let geturl = document.getElementById("geturl")
let display = document.getElementById("display")
let qrimage = document.getElementById("qrimage")



function clicking(){
if(geturl.value.length > 0){
        qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=4a3e343&bgcolor=a5a091&data="+geturl.value
}else{
    geturl.classList.add("error")
    setTimeout(()=>{
        geturl.classList.remove("error")
    },1000)
}
}
let d = document.querySelector("bt")
function down(){
    if(geturl.value.length > 0){
        d.href = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=4a3e343&bgcolor=a5a091&data="+geturl.value
        console.log(d.href)
}else{
    geturl.classList.add("error")
    setTimeout(()=>{
        geturl.classList.remove("error")
    },1000)
}
}
