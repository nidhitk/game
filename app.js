let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscorepara=document.querySelector("#userscore");
const compscorepara=document.querySelector("#computerscore");

const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
   const randfig= Math.floor(Math.random()*3);
   return options[randfig];

}
const drawgame=()=>{
    msg.innerText="Draw. PlayAgain"
    msg.style.backgroundColor="#081b31";

}
const showwinner=(userwin,userchoice,compchoice)=>{
if(userwin===true){
    userscore++;
    userscorepara.innerText=userscore
    msg.innerText="You Win! Yours "+userchoice+" beets "+compchoice;
    msg.style.backgroundColor="green";

}
else{
    computerscore++;
    compscorepara.innerText=computerscore;
    msg.innerText="You Lose. "+compchoice+" beets "+userchoice;
    msg.style.backgroundColor="red";
}
}

const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    if(userchoice===compchoice){
      drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissor"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }


}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
