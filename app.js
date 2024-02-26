let userScore =0;
let compScore =0;
let msg =  document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const userScorepara = document.querySelector("#user-score")
const compScorepara = document.querySelector("#comp-score")
const getCompChoice =() =>{
let option = ["rock","paper","scissors"];
const randidx = Math.floor(Math.random() * 3);
return option[randidx]
}


const drawGame = () =>{
    msg.innerText ="Game is Draw Select Again"
    msg.style.backgroundColor="black"

}
const showWinner =(userWin)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
       msg.innerText ="You Win!";
       msg.style.backgroundColor="green";

       
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText ="Computer Win!";
        msg.style.backgroundColor="red"
    }
}
const playGame = (userChoice)=>{
    console.log("user Choice",userChoice);
    const compChoice =getCompChoice();
    console.log("comp Choice",compChoice);
if(userChoice === compChoice){
    drawGame();
}
else{
    let userWin =true;
    if(userChoice==="rock"){
        userWin = compChoice==="paper" ? false :true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="rock"? false :true;
        
    }
    else{
        userWin=compChoice==="scissors"? false :true;
        
    }
    showWinner(userWin);
}
};


choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
        
    })
})