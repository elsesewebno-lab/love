function check(){

let pass=document.getElementById("pass").value;


if(pass=="بابي"){

window.location.href="page2.html";

}

else{

document.getElementById("msg").innerHTML=
"❌ كلمة السر غلط";

}

}



setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=
(20+Math.random()*30)+"px";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},6000);


},300);