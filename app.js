let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".choice");

const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
   const randfig= Math.floor(Math.random()*3);
   return options[randfig];

}
const drawgame=()=>{
    console.log("game draw");

}
const showwinner=(userwin)=>{
if(userwin===true){
    console.log("u win");
}
else{
    console.log("you lose");
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
        showwinner(userwin);
    }


}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
