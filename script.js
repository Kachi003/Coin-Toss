let Head=0;
let Tails=0;
let Coin=document.querySelector(".coins");
let Flipbutton=document.querySelector(".flip");
let Resetbutton=document.querySelector(".reset");

function disableBtn(){
    Flipbutton.disabled=true;

    setTimeout(() => {
        Flipbutton.disabled=false;
    },2000);
}



Flipbutton.addEventListener("click",()=>{
    let decide=Math.floor(Math.random()*2);
    
    Coin.style.animation="none";
    //for head
    if(decide==1){
        
        setTimeout(()=>{
            Coin.style.animation="spinhead 2s";
        },100);

        Head++;
        setTimeout(()=>{
            document.querySelector(".headcount").innerHTML=`Heads:${Head}`
        },2000)
        
}
   
//for tail
     else{
    setTimeout(()=>{
        Coin.style.animation="spintail 2s";
    },100)
       
     Tails++; 
     setTimeout(()=>{
        document.querySelector(".tailcount").innerHTML=`Tails:${Tails}`
    },2000)
     
    }
    
    
    disableBtn();
    
});



Resetbutton.addEventListener("click",()=>{

    Head=0;
    Tails=0;
    document.querySelector(".tailcount").innerHTML=`Tails:${Tails}`
    document.querySelector(".headcount").innerHTML=`Heads:${Head}`

    
})
