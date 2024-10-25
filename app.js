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
    console.log("game draw");
    msg.innerText="Draw. PlayAgain"
    msg.style.backgroundColor="#081b31";

}
const showwinner=(userwin,userchoice,compchoice)=>{
if(userwin===true){
    userscore++;
    userscorepara.innerText=userscore
    console.log("u win");
    msg.innerText="You Win! Yours "+userchoice+" beets "+compchoice;
    msg.style.backgroundColor="green";

}
else{
    computerscore++;
    compscorepara.innerText=computerscore;
    console.log("you lose");
    msg.innerText="You Lose. "+compchoice+" beets "+userchoice;
    msg.style.backgroundColor="red";
}
}

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
    console.log("computer choice",compchoice);
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
