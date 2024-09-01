
let num = Math.floor(Math.random() * 101);
let box = document.getElementById("box")
let body = document.querySelector("body")
let pre1 = document.getElementById("pre1")
let pre = document.getElementById("pre")
let inp = document.getElementById("input");
let prearr = [];
let heading = document.getElementById("headg")
let btn = document.getElementById("btn")
let crcVal = document.createElement("div")
let crcVal0 = document.createElement("div")
let boxi = document.getElementById("boxi")
let boxii = document.getElementById("boxii")
let rem = document.getElementById("rem")
let rem1 = document.getElementById("rem1")
let remaining = 10
let nearclose = document.getElementById("nearclose")
let modbtn = document.getElementById("mode")
let mode ="dark"
let playAgainBtn = document.createElement("button")
let plagainbox = document.getElementById("plagainbox")

playAgainBtn.classList.add("buttons")
playAgainBtn.innerText="Play Again!"
modbtn.addEventListener("click",()=>{
    if(mode=="light"){
        body.style.backgroundColor="white";
        body.style.color="black";
        inp.style.borderColor="black";
        btn.style.borderColor="black";
        modbtn.style.borderColor="black";
        modbtn.style.backgroundColor="white";
        modbtn.style.color="black";
        modbtn.innerHTML="light mode"
        mode = "dark";
    } else if(mode=="dark") {
        body.style.backgroundColor="black";
        body.style.color="white";
        inp.style.borderColor="orange";
        btn.style.borderColor="orange";
        modbtn.style.borderColor="orange";
        modbtn.style.backgroundColor="black";
        modbtn.style.color="white";
        modbtn.innerHTML="dark mode"
        mode = "light";
    }
})

let gameloop = function(){
    let inpval = parseInt(inp.value);
    
    boxii.innerHTML="";

    playAgainBtn.addEventListener("click",()=>{
        location.reload();
    })

    if(remaining===1){
        let remarr = [inp,btn,pre1,pre,rem1,rem,nearclose,heading];
       remarr.forEach((value)=>{
            value.remove();
        })
        crcVal.className="crc";
        crcVal0.className="crc";
        crcVal0.innerText="Unluckily"
        crcVal.innerText="YOU Lose"
        boxi.style.flexDirection="column"
        boxi.appendChild(crcVal0);
        boxi.appendChild(crcVal);
        
        plagainbox.appendChild(playAgainBtn);

        if(mode=="light"){
            box.classList.add("imagelosedr")
        } else if(mode=="dark"){
            box.classList.add("imageloselt")
        }  
    }

    if (isNaN(inpval)){
        nearclose.innerHTML="//Kindly enter a number";
    }
    else if(num===inpval){
        let remarr = [inp,btn,pre1,pre,rem1,rem,nearclose,heading];
       remarr.forEach((value)=>{
            value.remove();
        })
        crcVal.className="crc";
        crcVal0.className="crc";
        crcVal0.innerText="Congratulations!"
        crcVal.innerText="YOU Won"
        boxi.style.flexDirection="column"
        boxi.appendChild(crcVal0);
        boxi.appendChild(crcVal);
        plagainbox.appendChild(playAgainBtn);

        
        if(mode=="light"){
            box.classList.add("imagewindr")
        } else if(mode=="dark"){
            box.classList.add("imagewinlt")
        }       
    }
    else if (num!==inpval){

        if(num-10<inpval && inpval<num+10){
            nearclose.innerText="//You are near that no."
    
        }else{
            nearclose.innerText="//Too are too far away"
        }
        remaining = remaining-1;
        rem1.innerHTML = remaining;    
        prearr.push(inpval);
        let preArrJn = prearr.join(" , ")
        pre1.innerText = preArrJn;
          
    }
    
}
btn.addEventListener("click",gameloop)  
inp.addEventListener("keydown",(e)=>{
    if (e.key=="Enter"){
        gameloop();
    }
})


